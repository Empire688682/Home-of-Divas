"use client"
import React, { useContext, useState } from 'react';

const GlobalContext = React.createContext();

export const GlobalProvider = ({children}) => {

    const [cartItems, setCartItems] = useState({});
    const [token, setToken] = useState(false);

  return (
    <GlobalContext.Provider value={{
        cartItems,
        token, 
        setToken
    }}>
        {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () =>{
    return useContext(GlobalContext);
}

