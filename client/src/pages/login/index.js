import React from 'react';
import './index.styl';
import { Carousel } from 'antd';
import SignUp from './signup/index.js';
import SignIn from './signIn/index.js';

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
            <div><img src='http://pnb7xhu8b.bkt.clouddn.com/hanbing.jpg' style={{width:"100%",height:"100%"}} /></div>
            <div><img src='http://pnb7xhu8b.bkt.clouddn.com/zhaoxin.jpg' style={{width:"100%",height:"100%"}} /></div>
            <div><img src='http://pnb7xhu8b.bkt.clouddn.com/jianji.jpg' style={{width:"100%",height:"100%"}} /></div>
            <div><img src='http://pnb7xhu8b.bkt.clouddn.com/qinnv.jpg' style={{width:"100%",height:"100%"}} /></div>
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