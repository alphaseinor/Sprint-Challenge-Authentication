import React from 'react'

const Joke = ({item}) => {

  console.log(item)

  return (
    <>
      <article>
        <h3>{item.joke}</h3>
      </article>
    </>
  )
}

export default Joke