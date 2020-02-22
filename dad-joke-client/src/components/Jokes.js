import React, {useState, useEffect} from 'react'
import axiosWithAuth from './axiosWithAuth'
import Joke from './Joke'

const Jokes = () => {
  const [data, setData] = useState([])

  useEffect(()=> {
    axiosWithAuth()
      .get('http://localhost:3300/api/jokes')
      .then(response => {
        setData(response.data)
      })

  },[])

  return (
    <section>
      {data.map((item, index) => {
        return <Joke item={item} key={index} />
      })}
      
    </section>
  )
}

export default Jokes