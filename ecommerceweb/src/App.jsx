import { useState } from 'react'
import Header from './Componets/Header'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1 className='bg-orange-500 p-4 m-4 rounded-ss-lg'>Hello Aniket</h1> */}
      <Header/>
    </>
  )
}

export default App
