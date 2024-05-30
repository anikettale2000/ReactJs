import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function Login() {

const [username , setUsername] = useState('');
const [password , setPassword] = useState('');

const {setUser} = useContext(UserContext); {/* Step 3 = Consume the Context Value 
    Any component that needs the data can access it using the useContext hook. You simply pass the context object (created in step 1) to useContext, and it will return the current context value.
*/}

const handleSubmit = (e) => {
    e.preventDefault()
    setUser({username , password})
}

  return (
    <div>
        <h2>Login </h2>
        <input type='text' placeholder="Username" value={username}
        onChange={ (e) => setUsername(e.target.value)} />
        <br/>        <br/>
        <input type="text" placeholder="Password" value={password}
        onChange={(e) => setPassword(e.target.value)}/>
        <br/>        <br/>
        <button onClick = {handleSubmit}>Submit</button>
    </div>
  )
}

export default Login