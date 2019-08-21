import React from 'react'
import { axiosWithAuth } from './../utils/axiosWithAuth'
import FriendCard from './FriendCard'

class FriendsList extends React.Component {
  state = {
    friendsListArray: []
  }

  // function to grab array of friends data using authenticated header in api call,
  // function executes only when component mounts
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