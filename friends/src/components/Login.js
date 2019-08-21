import React, {useState} from 'react'
import axios from 'axios'

const Login = (props) => {
  const [loginDetails, setLoginDetails] = useState({
    username: '',
    password: '',
  })

  const [loading, setLoading] = useState(false)

  const handleChanges = event => {
    setLoginDetails({
      ...loginDetails,
      [event.target.name]: event.target.value
   })
  }

  const handleLogin = event => {
    event.preventDefault()
    setLoading(true)
    axios
      .post('http://localhost:5000/api/login', loginDetails)
      .then(result => {
        localStorage.setItem('token', result.data.payload)
        props.history.push("/friendslist");
      })
      .catch(error => console.log(error.response))
  }
  
  return (
    <form onSubmit={handleLogin}>
      <input name='username' value={loginDetails.username} onChange={handleChanges} placeholder='Username'/>
      <input name='password' value={loginDetails.password} onChange={handleChanges} placeholder='Password' type='password'/>
      <button onClick={handleLogin}>Sign in</button>
      {loading ? <p>loading...</p> : ''}
    </form>
  )
}

export default Login