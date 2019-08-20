import React from 'react';
import './App.css';
import Login from './components/Login'
import AddFriend from './components/AddFriend'
import FriendsList from './components/FriendsList'
import PrivateRoute from './components/PrivateRoute'


import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        {/* {localStorage.getItem('token') ? '' : <Link to='/login'>Login</Link>} */}
        <Link to='/login'>Login</Link>
        <br/>
        <Link to='/friendslist'>Friends List</Link>
        <br/>
        <Link to='/addfriend'>Add Friend</Link>
        {/* {localStorage.getItem('token') ? <Link to='/friendslist'>Friends List</Link> : ''} */}

        <Route path='/login' component={Login} />
        <PrivateRoute exact path='/friendslist' component={FriendsList} />
        <PrivateRoute exact path='/addfriend' component={AddFriend} />
      </div>
    </Router>
  )
}

export default App;
