import React, {useState} from 'react'

const Login = () => {
  
  const [loginDetails, setLoginDetails] = useState({
    username: '',
    password: ''
  })

  const handleChanges = event => {
    setLoginDetails({
    ...loginDetails,
    [event.target.name]: event.target.value
   })
  }
  
  console.log(loginDetails)
  return (
    <form>
      <input name='username' value={loginDetails.username} onChange={handleChanges} placeholder='Username'/>
      <input name='password' value={loginDetails.password} onChange={handleChanges} placeholder='Password' type='password'/>
      <button>Sign in</button>
    </form>
  )
}

export default Login