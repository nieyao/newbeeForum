import React from 'react';
import { Form, Icon, Input, Button, notification } from 'antd';
import './index.styl';
import { withRouter } from 'react-router';
import API from '@common/api.js';

class LoginForm extends React.Component {
  handleSubmit (e) {
    e.preventDefault();
    this.props.form.validateFields(async(err, values) => {
      if (!err) {
        console.log(values);
        let response = await API.login(values)
        console.log(response);
        notification['success']({
          message: '登录成功'
        })
      }
      const { history } = this.props;
      setTimeout(() => {
        history.push('/')
      }, 500);
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit.bind(this)} className="login-form" className="container">
        <Form.Item>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your email!' }],
          })(
            <Input className="emailInput" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="email" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input className="passwordInput" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })}
          <Button type="primary" htmlType="submit" className="login-form-button">
            登录
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(LoginForm);
export default withRouter(WrappedNormalLoginForm);