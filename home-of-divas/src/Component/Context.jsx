"use client"
import React, { useContext, useEffect, useState } from 'react';

const GlobalContext = React.createContext();

export const GlobalProvider = ({children}) => {

    const [cartItems, setCartItems] = useState({});
    const [token, setToken] = useState('');
    const [user, setUser] = useState('');

    useEffect(()=>{
      if(typeof window !== "undefined"){
        const savedToken = localStorage.getItem("Divastoken") || "";
        const savedUser = localStorage.getItem("Divasuser") || "";
        setToken(savedToken);
        setUser(savedUser);
      }
    },[]);

    console.log(token);
    console.log(user);

  return (
    <GlobalContext.Provider value={{
        cartItems,
        token, 
        setToken,
        user
    }}>
        {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () =>{
    return useContext(GlobalContext);
}

