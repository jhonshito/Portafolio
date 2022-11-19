
import React, { createContext, useState } from 'react'

export const UserContext = createContext();

const UseProvider = (props) => {
    
    const [estado, setEstado] = useState();

  return (
    <UserContext.Provider value={{estado, setEstado}}>
      {props.Children}
    </UserContext.Provider>
  )
}

export default UseProvider
