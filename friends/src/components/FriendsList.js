import React from 'react'
import { axiosWithAuth } from './../utils/axiosWithAuth'
import FriendCard from './FriendCard'

class FriendsList extends React.Component {
  state = {
    friendsListArray: []
  }

  componentDidMount() {
    this.getData()
    
  }

  getData =() => {
    axiosWithAuth()
      .get('http://localhost:5000/api/friends')
      .then(result => {
        console.log(result.data)
        this.setState({
          friendsListArray: result.data
        })
      })
  }

  render() {
    console.log('Render - state: ', this.state)
    return (
      <>
      {this.state.friendsListArray.map(friend => <FriendCard key={friend.email} name={friend.name} age={friend.age} email={friend.email} />)}
      </>
    )
  }
}

export default FriendsList