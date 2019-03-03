import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Detail from './detail';
import Login from './login';
import UserProfile from '@components/userProfile'

class NewbeeForum extends React.Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Detail} />
          <Route path='/login' component={Login}/>
          <Route path='/user/profile' component={UserProfile}/>
        </Switch>
      </Router>
    )
  }
}

export default NewbeeForum;