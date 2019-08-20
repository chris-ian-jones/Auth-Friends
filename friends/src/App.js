import React from 'react';
import './App.css';
import Login from './components/Login'
import FriendsList from './components/FriendsList'
import PrivateRoute from './components/PrivateRoute'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/friendslist'>Friends List</Link>
          </li>
        </ul>
        <Route path='/login' component={Login} />
        <PrivateRoute exact path='/friendslist' component={FriendsList} />
      </div>
    </Router>
  )
}

export default App;
