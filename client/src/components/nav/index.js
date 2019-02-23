import React from 'react';
import { Menu, Dropdown, notification } from 'antd';
import { Link } from 'react-router-dom';
import './index.styl';
import logo from '@images/NBF.png'
import { Input, Button, Avatar, Row, Col } from 'antd';
import { connect } from 'react-redux';
import API from '@common/api';
import { withRouter } from 'react-router';

class Nav extends React.Component {
  render() {
    const Search = Input.Search;
    const menu = (
      <Menu>
        <Menu.Item key="0">
          <a href="http://www.newbeelity.cn/">关于我</a>
        </Menu.Item>
        <Menu.Item key="1">
          <a href="http://www.newbeelity.cn/">退出登录</a>
        </Menu.Item>
      </Menu>
    );
    return (
      <nav className="page-header">
        <Row type="flex" justify="center">
          <Col span={5} className="logo"><img src={logo} /></Col>
          <Col span={5} className="category">
            <a href="#" className="home">首页</a>
            <a href="#" className="dynamic">动态</a>
            <a href="#" className="topic">话题</a>
          </Col>
          <Col span={5} push={1} className="search">
            <Search
              placeholder="input search text"
              onSearch={value => console.log(value)}
              enterButton
              style={{ width: 200 }}
            />
          </Col>
          <Col span={2} className="post">
            <Button type="primary" style={{}}>发帖</Button>
          </Col>
          <Col span={2} className="avatar">
            <Dropdown overlay={menu} trigger={['click']}>
              <a className="ant-dropdown-link" href="#">
                <Avatar size="large" icon="user" />
              </a>
            </Dropdown> 
          </Col>
        </Row>
      </nav>
    )
  }
  componentDidMount () {
    if (!this.props.userInfo.userId) {
      API.getUserInfo().then(response => {
        // console.log(response);
        this.props.addUserInfo(response.data);
      })
    }
  }
}

export default withRouter(
  connect(
    store => {
      return {
        userInfo: store.userInfo
      }
    },
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
  )(Nav)
);