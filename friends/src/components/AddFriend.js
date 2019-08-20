import React from 'react'

class AddFriend extends React.Component {
  state = {
    newFriendData: {
      id: '',
      name: '',
      age: '',
      email: ''
    }
  }

  onChangeHandler = event => {
    this.setState({
      newFriendData: {
      ...this.state.newFriendData,
      [event.target.name]: event.target.value
      }
    })
  }

  onSubmitHandler = event => {

  }

  render() {
    console.log('AddFriend render - state: ', this.state.newFriendData)
    return (
      <>
        <form onSubmit={this.onSubmitHandler}>
          <input name='name' placeholder='Name' value={this.state.newFriendData.name} onChange={this.onChangeHandler} />
          <input name='age' placeholder='Age' value={this.state.newFriendData.age} onChange={this.onChangeHandler} />
          <input name='email' placeholder='Email' value={this.state.newFriendData.email} onChange={this.onChangeHandler} />
        </form>
      </>
    )
  }
}

export default AddFriend