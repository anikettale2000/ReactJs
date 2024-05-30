import React, { useState } from "react";
import UserContext from "./UserContext";


const UserContextProvider = ({children}) => {      {/* Step 2 - Provide the Context Value: */}
    const [user , setUser] = useState();

    return(
        <UserContext.Provider value={{user , setUser}}>  {/* To make the context value accessible to component tree, use the Context.Provider component. This allows you to "provide" the context to all the components that are its descendants. */}
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;