import React from 'react'
import { useLocation } from 'react-router-dom'

const EditBook = () => {
    const location = useLocation()
    console.log(location)
  return (
    <div>EditBook</div>
  )
}

export default EditBook