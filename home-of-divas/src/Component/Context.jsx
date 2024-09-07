"use client"
import React, { useContext, useEffect, useState } from 'react';

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState({});
  const [favItem, setFavItem] = useState({});
  const [token, setToken] = useState('');
  const [user, setUser] = useState('');
  const [itemAdded, setItemAdded] = useState(null);
  const [favAdded, setFavAdded] = useState(null);

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

  const handleFav = (favId) => {
    setFavItem((prev) => {
      if (!prev[favId]) {
        setFavAdded("true");
        setTimeout(() => {
          setFavAdded(null);
        }, 1000);
        return { ...prev, [favId]:1 };
      }
      else{
        setFavAdded("false");
        setTimeout(() => {
          setFavAdded(null);
        }, 1000);
        return { ...prev, [favId]:0 };
      };
    });
  };

  console.log("FAVOURITE:", favItem);
  console.log("favAdded:", favAdded);

  return (
    <GlobalContext.Provider value={{
      cartItems,
      token,
      setToken,
      user,
      setUser,
      addToCart,
      removeFromCart,
      itemAdded,
      favAdded,
      favItem,
      handleFav
    }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(GlobalContext);
}

