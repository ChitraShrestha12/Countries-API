import React from 'react'
import { useParams } from 'react-router-dom'

const Contact = () => {
  const params = useParams()
  console.log(params);
  
  return (
    <div>
      <h1>Hello Contact!</h1>
    </div>
  )
}

export default Contact
