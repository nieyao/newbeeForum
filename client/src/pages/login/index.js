import React from 'react';
import './index.styl';
import { Carousel } from 'antd';
import SignUp from './signup/index.js'
import SignIn from './signIn/index.js'

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
        <Carousel autoplay className="slide">
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
        </Carousel>
        {
          this.state.isSignUp
            ? <SignIn />
            : <SignUp />
        }
        {
          this.state.isSignUp
            ? <span>没有账号？<a className="notice" onClick={this.toggleSign.bind(this)} >注册</a></span>
            : <span>有账号了？<a className="notice" onClick={this.toggleSign.bind(this)}>请登录</a></span>
        }
      </div>
    )
  }
}

export default Login;