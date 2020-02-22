import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.scss'

function App() {
  const [refresh, setRefresh] = useState(true)
  const [userLogin, setUserLogin] = useState(
    {
      username: '',
      password: ''
    }  
  )

  useEffect(()=>{console.log(refresh)},[refresh])

  const handleChange = e => {
    setUserLogin({ ...userLogin, [e.target.name]: e.target.value })
  }

  const submitLogin = e => {
    e.preventDefault()
    console.log(userLogin)
    axios.post('http://localhost:3300/api/auth/login', userLogin)
         .then(response => {
           localStorage.setItem('token', response.data.token)
           setRefresh(!refresh)
         })
         .catch(error => {
           console.log(error)
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
           console.log(error)
         })
  }

  return (
    <>
      {
        localStorage.getItem('token') ? (
          <>
            token
          </>
        ):(
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
              <label>password</label>
              <input 
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
    </>
  )
}

export default App;
