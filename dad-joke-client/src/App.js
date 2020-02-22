import React, {useState, useEffect} from 'react'
import './App.scss'

import Login from './components/Login'
import Jokes from './components/Jokes'

function App() {
  const [refresh, setRefresh] = useState(true)
  
  useEffect(()=>{console.log(refresh)},[refresh])

  return (
    <main>
      {
        localStorage.getItem('token') ? (
          <>
            <button onClick={()=>{
              localStorage.clear('token')
              setRefresh(!refresh)
            }}>Logout</button>
            <Jokes />
          </>
        ):(
          <>
            <Login refresh={refresh} setRefresh={setRefresh} />
          </>
        )
      }
    </main>
  )
}

export default App;
