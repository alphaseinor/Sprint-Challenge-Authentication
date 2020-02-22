import React, {useState, useEffect} from 'react'
import cogoToast from 'cogo-toast'
import './App.scss'

import Login from './components/Login'
import Jokes from './components/Jokes'

function App() {
  const [refresh, setRefresh] = useState(true)
  
  useEffect(()=>{cogoToast.info('Page Refreshed',{position:"bottom-right"})},[refresh])

  return (
    <>
      {
        localStorage.getItem('token') ? (
          <>
            <header>
              <h1>Dad Jokes</h1>
              <button onClick={()=>{
                localStorage.clear('token')
                setRefresh(!refresh)
              }}>Logout</button>
            </header>
            <main>
              <Jokes />
            </main>
          </>
        ):(
          <header>
            <h1>Dad Jokes</h1>
            <Login refresh={refresh} setRefresh={setRefresh} />
          </header>
        )
      }
    </>
  )
}

export default App;
