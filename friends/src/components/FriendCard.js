import React from 'react'

const FriendCard = props => {
  return (
    <>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Email: {props.email}</p>
    </>
  )
}

export default FriendCard