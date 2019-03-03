import React from 'react';
import './index.styl';
import Nav from '@components/nav';
import Upload from '../upload';
import { Button } from 'antd';
import { connect } from 'react-redux';
import API from '@common/api.js';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avatarUrl: ''
    }
  }
  updateUserInfo () {
    console.log(this.state.avatarUrl)
    API.updateUserInfo({newAvatarUrl: this.state.avatarUrl}).then(response => {
      console.log(response, '我是返回的数据');
      this.props.addUserInfo(response.data);
    })
  }

  updateImgUrl(avatarUrl) {
    this.setState({
      avatarUrl
    })
  } 

  render() {
    return (
      <div>
        <Nav />
        <div className="userProfile">
          <span>修改头像</span>
          <Upload limit='1' updateImgUrl={this.updateImgUrl.bind(this)} />
          <Button type="primary" onClick={this.updateUserInfo.bind(this)} >确认</Button>
        </div>
      </div>
    )
  }
}

export default connect(null,
  dispatch => {
    return {
      addUserInfo: info => {
        dispatch({
          type: 'ADD_USERINFO',
          info
        })
      }
    }
  }
)(UserProfile);