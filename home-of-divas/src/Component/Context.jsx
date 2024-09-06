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
        const savedUser = localStorage.getItem("Divasuserdata") || "";
        setToken(savedToken);
        setUser(savedUser);
      }
    },[]);

    const addToCart = (itemId) =>{
      if(cartItems[itemId] < 0){
        setCartItems((prev) =>{
          if(!prev[itemId]){
            return {...prev, [itemId]:1}
          }
          else{
            return {...prev, [itemId]: +1}
          }
        })
      }
    };

    console.log("CARTITEMS:", cartItems);

  return (
    <GlobalContext.Provider value={{
        cartItems,
        token, 
        setToken,
        user,
        setUser,
        addToCart
    }}>
        {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () =>{
    return useContext(GlobalContext);
}

