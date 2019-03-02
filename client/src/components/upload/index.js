import React from 'react';
import { notification, Upload, Icon } from 'antd';
import API from '@common/api.js';
import * as qiniu from 'qiniu-js';
import './index.styl';

class DiyUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      previewVisible: false,
      previewImage: '',
      fileList: [],
    };
  }

  handleCancel() {
    this.setState({ previewVisible: false })
  }

  handlePreview(file) {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }

  async handleChange({ fileList }) {
    this.setState({ fileList: [...fileList] })
  }

  render() {
    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <div className="clearfix">
        <Upload
          action={async (file) => {
            let response = await API.getToken();
            let { baseUrl, token } = response.data;
            // console.log(file, '我是file')
            let putExtra = {
              fname: '',
              params: {},
              mimeType: ['image/png', 'image/jpeg', 'image/gif']
            };
            let config = {
              region: qiniu.region.z0
            };

            let key = new Date().getTime() + file.name;
            let observable = qiniu.upload(file, key, token, putExtra, config);
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
            let subscrition = observable.subscribe(observer);
          }}
          listType="picture-card"
          fileList={fileList}
          ref="upload"
          accept="image/*"
          onPreview={this.handlePreview.bind(this)}
          onChange={this.handleChange.bind(this)}
        >
          {fileList.length >= 2 ? null : uploadButton}
        </Upload>
          { this.state.previewVisible
            ? <div className={this.state.previewVisible ? 'previewVisible' : ''}>
                <img alt="example" src={previewImage} />
                <Icon type="close-circle" onClick={this.handleCancel.bind(this)} style={{color: 'white', fontSize: '30px'}} />
              </div>
            : ''
          }
      </div>
    );
  }
}

export default DiyUpload;