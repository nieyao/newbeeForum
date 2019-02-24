import React from 'react';
import './index.styl';
import Nav from '@components/nav/index.js';
import TopicDetail from './topicDetail/index.js';

class Detail extends React.Component {
  render () {
    return (
      <div>
        <Nav />
        <TopicDetail />
      </div>
    )
  }
}

export default Detail;