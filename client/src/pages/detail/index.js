import React from 'react';
import './index.styl';
import Nav from '@components/nav';
import TopicDetail from './topicDetail';
import PostTopic from './postTopic';

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPostTopic: false
    }
  }
  postTopic (refresh) {
    this.setState({
      showPostTopic: !this.state.showPostTopic
    })
    if (refresh) {
      this.refs.doInitTopicList.initTopicList();
    }
  }

  render () {
    return (
      <div>
        <Nav postTopic={this.postTopic.bind(this)} />
        {
          this.state.showPostTopic
          ?<PostTopic postTopic={this.postTopic.bind(this)} />
          : null
        }
        <TopicDetail ref="doInitTopicList" />
      </div>
    )
  }
}

export default Detail;