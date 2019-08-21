import React from 'react'
import { axiosWithAuth } from './../utils/axiosWithAuth'

class AddFriend extends React.Component {
  state = {
    newFriendData: {
      id: '',
      name: '',
      age: '',
      email: ''
    },
    successMessage: false
  }

  onChangeHandler = event => {
    this.setState({
      newFriendData: {
      ...this.state.newFriendData,
      [event.target.name]: event.target.value
      }
    })
  }

  // handler to add new friend via post request, using data from state of controlled form inputs
  onSubmitHandler = event => {
    event.preventDefault()
    axiosWithAuth()
      .post('http://localhost:5000/api/friends', this.state.newFriendData)
      .then(result => {
        this.setState({
          newFriendData: {
            id: '',
            name: '',
            age: '',
            email: ''
          },
          successMessage: true
        })
      })
      .catch(error => console.log('api add friend failure, error: ', error))
  }

  render() {
    return (
        <form onSubmit={this.onSubmitHandler}>
          <input name='name' placeholder='Name' value={this.state.newFriendData.name} onChange={this.onChangeHandler} />
          <input name='age' placeholder='Age' value={this.state.newFriendData.age} onChange={this.onChangeHandler} />
          <input name='email' placeholder='Email' value={this.state.newFriendData.email} onChange={this.onChangeHandler} />
          <button onClick={this.onSubmitHandler}>Add New Friend</button>
          {this.state.successMessage ? <p>New friend added!</p> : ''}
        </form>
    )
  }
}

export default AddFriend