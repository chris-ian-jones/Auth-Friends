import React from 'react'
import { axiosWithAuth } from './../utils/axiosWithAuth'
import FriendCard from './FriendCard'

class FriendsList extends React.Component {
  state = {
    friendsListArray: []
  }

  getData = () => {
    axiosWithAuth()
      .get('http://localhost:5000/api/friends')
      .then(result => {
        this.setState({
          friendsListArray: result.data
        })
      })
  }

  componentDidMount() {
    this.getData()
  }

  render() {
    return (
      <>
        {this.state.friendsListArray.map(friend => 
          <FriendCard 
            key={friend.id} 
            name={friend.name} 
            age={friend.age} 
            email={friend.email} 
            id={friend.id} 
          />)
        }
      </>
    )
  }
}

export default FriendsList