import React from 'react'

export default function Post(props) {
  return (
    <div className='post'>
      <h1>{props.title}</h1>
      <p>{props.paragraph}</p>
    </div>
  )
}
