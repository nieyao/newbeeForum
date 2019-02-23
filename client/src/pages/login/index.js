import React from 'react';
import './index.styl';
import { Carousel } from 'antd';
import SignUp from './signup/index.js';
import SignIn from './signIn/index.js';
import hanbing from '@images/hanbing.jpg';
import zhaoxin from '@images/zhaoxin.jpg';
import jianji from '@images/jianji.jpg';
import qinnv from '@images/qinnv.jpg';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignUp: true
    }
  }
  toggleSign () {
    this.setState({
      isSignUp: !this.state.isSignUp
    })
  }
  render() {
    return (
      <div>
        {
          this.state.isSignUp
          ?<Carousel autoplay className="slide" >
            <div><img src={hanbing} style={{width:"100%",height:"100%"}} /></div>
            <div><img src={zhaoxin} style={{width:"100%",height:"100%"}} /></div>
            <div><img src={jianji} style={{width:"100%",height:"100%"}} /></div>
            <div><img src={qinnv} style={{width:"100%",height:"100%"}} /></div>
          </Carousel>
          : null
        }
        {
          this.state.isSignUp
            ? <SignIn />
            : <SignUp toggleSign={this.toggleSign.bind(this)} />
        }
        <div className="notice">
          {
            this.state.isSignUp
              ? <div >没有账号？<a onClick={this.toggleSign.bind(this)} >注册</a></div>
              : <div>有账号了？<a onClick={this.toggleSign.bind(this)}>请登录</a></div>
          }
        </div>
      </div>
    )
  }
}

export default Login;