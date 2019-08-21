import React from 'react';
import './App.css';
import Login from './components/Login'
import AddFriend from './components/AddFriend'
import FriendsList from './components/FriendsList'
import PrivateRoute from './components/PrivateRoute'
import FriendCardEditDelete from './components/FriendCardEditDelete'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function App(props) {
  return (
    <Router>
      <div className="App">
        <Link to='/login'>Login</Link>
        <br/>
        <Link to='/friendslist'>Friends List</Link>
        <br/>
        <Link to='/addfriend'>Add Friend</Link>

        <Route path='/login' component={Login} />
        <PrivateRoute exact path='/friendslist' component={FriendsList} />
        <PrivateRoute exact path='/addfriend' component={AddFriend} />
        <Route path='/friends/:id' 
          render={props => <FriendCardEditDelete {...props} />}
        />
      </div>
    </Router>
  )
}

export default App;