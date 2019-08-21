import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { axiosWithAuth } from '../utils/axiosWithAuth'

const StyledContainer = styled.div`
  border: 1px solid gray;
`

const FriendCardEdit = props => {
  const [userData, setUserData] = useState({})
  
  const [newUserData, setNewUserData] = useState({
    name: '',
    age: '',
    email: ''
  })
  
  const friendId = props.match.params.id

  // hook to make get request to grab data of friend using friend Id which is grabbed from the props.match
  // updated the userData to display current friend data, as well as sets default for form inputs for new friend data
  useEffect(() => {
    axiosWithAuth()
      .get(`http://localhost:5000/api/friends/${friendId}`)
      .then(result => {
        setUserData(result.data)
        setNewUserData({
          name: result.data.name,
          age: result.data.age,
          email: result.data.email
        })
      })
  }, [friendId])

  // edit friend function, using axios call with authenticated header, using the id of the friend grabbed from the props.match
  // using data from the state of the controlled form inputs to update friend info on backend,
  // then redirecting to /friendslist component
  const editFriend = event => {
    event.preventDefault()
    axiosWithAuth()
      .put(`http://localhost:5000/api/friends/${friendId}`, newUserData)
      .then(result => props.history.push("/friendslist"))
      .catch(error => console.log(error))
  }

  const handleChanges = event => {
    setNewUserData({
      ...newUserData,
      [event.target.name]: event.target.value
    })
  }

  return (
    <StyledContainer>
      <p>Current Name: {userData.name}</p>
      <p>Current Age: {userData.age}</p>
      <p>Current Email: {userData.email}</p>

      <form onSubmit={editFriend}>
        <input name='name' value={newUserData.name} onChange={handleChanges} />
        <input name='age' value={newUserData.age} onChange={handleChanges} />
        <input name='email' value={newUserData.email} onChange={handleChanges} />
        <button onClick={editFriend}>Edit</button>
      </form>
    </StyledContainer>
  )
}

export default FriendCardEdit