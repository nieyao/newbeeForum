import React from 'react';
import { notification } from 'antd';
import API from '@common/api.js';
import * as qiniu from 'qiniu-js';

class Upload extends React.Component {
  async uploadFn () {
    let response = await API.getToken();
    let { baseUrl, token } = response.data;
    let files = this.refs.upload.files;
    console.log(files)
    // 是否是一张照片？
    if (!this.imageVerify()) return;
    let putExtra = {
      fname: '',
      params: {},
      mimeType: ['image/png', 'image/jpeg', 'image/gif']
    };
    let config = {
      region: qiniu.region.z0
    };

    let key = new Date().getTime() + files[0].name;
    let observable = qiniu.upload(files[0], key, token, putExtra, config);
    let observer = {
      complete: res => {
        let imgUrl = baseUrl + '/' + res.key;
        console.log(imgUrl);
        this.props.updateImgUrl(imgUrl)
      },
      error: (err) => {
        notification.error({
          message: err
        })
      }
    }
    let subscrition = observable.subscribe(observer)
  }

  // 校验是否图片类型
  imageVerify () {
    let files = this.refs.upload.files;
    let fileType = files[0].type;
    if (/^image/.test(fileType)) {
      return true;
    } else {
      notification.error({
        message:"请选择图片类型"
      })
    }
  }
  render () {
    return (
      <div>
        <input 
          className="uploadImg"
          ref="upload"
          type="file"
          accept="image/*"
          onChange={this.uploadFn.bind(this)}
        />
      </div>
    )
  }
} 

export default Upload;