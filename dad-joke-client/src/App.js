import React, {useState, useEffect} from 'react'
import cogoToast from 'cogo-toast'
import './App.scss'

import Login from './components/Login'
import Jokes from './components/Jokes'

function App() {
  const [refresh, setRefresh] = useState(true)
  
  useEffect(()=>{cogoToast.info('Page Refreshed',{position:"bottom-right"})},[refresh])

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
