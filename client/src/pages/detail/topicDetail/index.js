import React from 'react';
import './index.styl';
import { List, Avatar, Icon } from 'antd';
import API from '@common/api';

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

class VirtualizedTopic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: []
    }
    this.initTopicList()
  }

  async initTopicList () {
    let response = await API.queryAllTopics();
    console.log(response,"woshi")
    let res = response.data
    this.setState({
      listData: res
    })
  }
  render () {
    return (
      <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 3,
      }}
      dataSource={this.state.listData}
      renderItem={item => (
        <List.Item
          key={item.title}
          actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
          extra={<img width={272} height={172} alt="logo" src={item.topicImg.replace(/\"/g,"")}/>}
        >
          <List.Item.Meta
            avatar={<Avatar src={item.user.avatarUrl} />}
            title={<a href={item.href}>{item.user.username}</a>}
            description={item.description}
          />
          {item.topicTitle}
        </List.Item>
      )}
    />
    )
}
}
export default VirtualizedTopic;