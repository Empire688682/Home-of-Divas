"use client"
import React, { useContext, useEffect, useState } from 'react';

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState({});
  const [token, setToken] = useState('');
  const [user, setUser] = useState('');
  const [itemAdded, setItemAdded] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedToken = localStorage.getItem("Divastoken") || "";
      const savedUser = localStorage.getItem("Divasuserdata") || "";
      setToken(savedToken);
      setUser(savedUser);
    }
  }, []);

  const addToCart = (itemId) => {
    setItemAdded("true");
    setTimeout(()=>{
      setItemAdded(null)
    },1000)
    setCartItems((prev) => {
      if (!prev[itemId]) {
        return { ...prev, [itemId]: 1 };
      }
      else {
        return { ...prev, [itemId]: prev[itemId] + 1 };
      };
    });
  };

  const removeFromCart = (itemId) => {
    setItemAdded("false");
    setTimeout(()=>{
      setItemAdded(null)
    },1000)
    if (cartItems[itemId] > 0) {
      setCartItems((prev) => {
        return ({ ...prev, [itemId]: prev[itemId] - 1 });
      })
    } else return null
  };

  console.log("CARTITEMS:", cartItems);

  return (
    <GlobalContext.Provider value={{
      cartItems,
      token,
      setToken,
      user,
      setUser,
      addToCart,
      removeFromCart,
      itemAdded
    }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(GlobalContext);
}

