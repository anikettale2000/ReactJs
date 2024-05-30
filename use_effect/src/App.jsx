import { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios"
import React from 'react';



function App() {
  const [selectedId, setSelectedId] = useState(1);

  return (
    <>
      <button onClick={() => {setSelectedId(1)}}>btn1</button>
      <button onClick={() => {setSelectedId(2)}}>btn2</button>
      <button onClick={() => {setSelectedId(3)}}>btn3</button>
      <button onClick={() => {setSelectedId(4)}}>btn4</button>

      <Todo id={selectedId} />
    </>
  )
}

function Todo({id}){
  const [todo , setTodo] = useState({});
  
  useEffect(() => {
    axios.get('https://sum-server.100xdevs.com/todo?id=${id}')
    .then(response => {
      setTodo(response.data.todo)
    })
  } , [todo])


return <div>
  id: {id}
  <h1>
    {todo.title}
  </h1>
  <h4>
    {todo.description}
  </h4>
</div>
} 

export default App;
