import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
const {userid} = useParams()
  return (
    <div className='bg-green-700 m-5 p-10 text-3xl'>User :{userid}</div>
  )
}

export default User;