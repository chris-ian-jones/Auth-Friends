import React from 'react';
import './App.css';
import Login from './components/Login'
import AddFriend from './components/AddFriend'
import FriendsList from './components/FriendsList'
import PrivateRoute from './components/PrivateRoute'
import FriendCardEdit from './components/FriendCardEdit'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

// setup routes, but have to manually type in url with friends id to edit, eg /friends/2
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
          render={props => <FriendCardEdit {...props} />}
        />
      </div>
    </Router>
  )
}

export default App;