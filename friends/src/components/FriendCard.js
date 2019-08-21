import React, {useState} from 'react'
import styled from 'styled-components'
import { Redirect } from 'react-router';

import { axiosWithAuth } from './../utils/axiosWithAuth'

const StyledContainer = styled.div`
  border: 1px solid gray;
`

const FriendCard = props => {
  
  const deleteFriend = () => {
    axiosWithAuth()
      .delete(`http://localhost:5000/api/friends/${props.id}`)
      .then(result => console.log(result))
      .catch(error => console.log(error))
  }

  return (
    <StyledContainer>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Email: {props.email}</p>
      <button onClick={deleteFriend}>Delete</button>
    </StyledContainer>
  )
}

export default FriendCard