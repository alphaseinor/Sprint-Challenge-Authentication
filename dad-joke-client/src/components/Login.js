import React, {useState} from 'react'
import axios from 'axios'
import cogoToast from 'cogo-toast'

const Login = ({refresh, setRefresh}) => {
  const [userLogin, setUserLogin] = useState(
    {
      username: '',
      password: ''
    }  
  )

  const handleChange = e => {
    setUserLogin({ ...userLogin, [e.target.name]: e.target.value })
  }

  const submitLogin = e => {
    e.preventDefault()
    axios.post('http://localhost:3300/api/auth/login', userLogin)
         .then(response => {
           localStorage.setItem('token', response.data.token)
           setRefresh(!refresh)
         })
         .catch(error => {
            cogoToast.error('error logging in',{position:"bottom-right"})
         })
  }

  const submitRegister = e => {
    e.preventDefault()
    console.log(userLogin)
    axios.post('http://localhost:3300/api/auth/register', userLogin)
         .then(response => {
           submitLogin(e)
         })
         .catch(error => {
            cogoToast.error('error registering',{position:"bottom-right"})
         })
  }

  return(
    <>
      <form
        onSubmit={e => submitLogin(e)}
      >
        <label>Username</label>
        <input 
          name="username"
          value={userLogin.username}
          onChange={e => handleChange(e)}
        />
        <label>Password</label>
        <input 
          type="password"
          name="password"
          value={userLogin.password}
          onChange={e => handleChange(e)}
        />
        <button type="submit">Login</button>
        <button
          onClick={e=> submitRegister(e)}
        >Register</button>
      </form>
    </>
  )
}

export default Login