import React from 'react';
import './index.styl';
import Upload from '@components/upload';
import { Button, notification } from 'antd';
import API from '@common/api';

class postTopic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topicDescript: '',
      imgUrl: null
    }
  }

  // 双向绑定textarea
  handelChangeTextArea() {
    this.setState({ topicDescript: event.target.value })
  }

  // 发帖
  async doPostTopic() {
    if ( !this.state.imgUrl && !this.state.topicDescript ) {
      notification['error']({
        message: '发空帖是没有意义的哦！'
      })
      return;
    }
    if ( !this.state.imgUrl ) {
      notification['error']({
        message: '请至少插入一张图片！'
      })
      return;
    }
    if ( !this.state.topicDescript ) {
      notification['error']({
        message: '请说点什么吧！'
      })
      return;
    }
    let response = await API.addTopic({
      topicImg: this.state.imgUrl,
      topicTitle: this.state.topicDescript
    });
    notification['success']({
      message: response.message
    })
    this.props.postTopic(true);
  }

  updateImgUrl(imgUrl) {
    this.setState({
      imgUrl
    })
  }
  render() {
    const avatarStyle = {
      width: '40px',
      height: '40px'
    }
    return (
      <div className="modal">
        <div className="postContainer">
          <div className="postContent">
            <div><img src="http://img1.imgtn.bdimg.com/it/u=2735633715,2749454924&fm=26&gp=0.jpg" style={avatarStyle} /></div>
            <Upload updateImgUrl={this.updateImgUrl.bind(this)} />
            <div className="description">
              <textarea value={this.state.topicDescript} onChange={this.handelChangeTextArea.bind(this)} rows="4" cols="50" placeholder="愿意的话可以添加说明"></textarea>
            </div>
            <div className="footer">
              <Button type="danger" className="close" onClick={this.props.postTopic}>关闭</Button>
              <Button type="primary" className="post" onClick={this.doPostTopic.bind(this)}>发帖</Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default postTopic;