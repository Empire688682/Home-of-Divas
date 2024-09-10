"use client";
import all_product from '../../public/all_product';
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const [allProduct, setAllProduct] = ([all_product]);
  const [cartItems, setCartItems] = useState({});
  const [favItem, setFavItem] = useState({});
  const [token, setToken] = useState({});
  const [user, setUser] = useState({});
  const [itemAdded, setItemAdded] = useState(null);
  const [favAdded, setFavAdded] = useState(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const [inCart, setInCart] = useState(false);
  const [inFav, setInFav] = useState(false);
  const route = useRouter()

  // Initialize state from localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const localSavedToken = localStorage.getItem("Divastoken") || "";
      const LocalSavedUser = localStorage.getItem("Divasuserdata") || {}; // Ensure user data is parsed correctly
      const localSavedCart = JSON.parse(localStorage.getItem("cartItems")) || {};
      const localSavedFav = JSON.parse(localStorage.getItem("favItems")) || {};
  
      setToken(localSavedToken);
      setUser(LocalSavedUser);
      setCartItems(localSavedCart);
      setFavItem(localSavedFav);
      setIsInitialized(true);
    }
  }, []);

  // Save to localStorage whenever state changes
  useEffect(() => {
    if (isInitialized && typeof window !== "undefined") {
      localStorage.setItem("Divastoken", token);
      localStorage.setItem("Divasuserdata", JSON.stringify(user)) || {};
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      localStorage.setItem("favItems", JSON.stringify(favItem));
    }
  }, [isInitialized, token, user, cartItems, favItem]);

  console.log("USER:", user)

  const addToCart = (itemId) => {
    setItemAdded("true");
    setTimeout(() => {
      setItemAdded(null)
    }, 1000)
    setCartItems((prev) => {
      const newCart = { ...prev, [itemId]: (prev[itemId] || 0) + 1 };
      return newCart;
    });
  };

  const removeFromCart = (itemId) => {
    setItemAdded("false");
    setTimeout(() => {
      setItemAdded(null)
    }, 1000)
    setCartItems((prev) => {
      if (prev[itemId] > 0) {
        const newCart = { ...prev, [itemId]: prev[itemId] - 1 };
        if (newCart[itemId] === 0) {
          delete newCart[itemId];
        }
        return newCart;
      }
      return prev;
    });
  };

  const getTotalValue = () => {
    let total = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let totalInfo = allProduct.find((product) => product.id === item || product.id === Number(item));
        console.log("totalInfo:", total)
        if (totalInfo) {
          total += totalInfo.new_price * cartItems[item];
        }
      }
    }
    return total;
  };


  const handleFav = (favId) => {
    setFavItem((prev) => {
      const newFav = { ...prev, [favId]: prev[favId] ? 0 : 1 };
      setFavAdded(newFav[favId] ? "true" : "false");
      setTimeout(() => {
        setFavAdded(null);
      }, 1000);
      return newFav;
    });
  };

  useEffect(()=>{
    const hasItemInCart = allProduct.some((item)=> cartItems[item.id] > 0);
    setInCart(hasItemInCart);
  },[cartItems, allProduct]);

  useEffect(()=>{
    const hasItemInFav = allProduct.some((item)=> favItem[item.id] > 0);
    setInFav(hasItemInFav);
  },[favItem, allProduct]);

  const logoutUser = async () =>{
    try {
     const response =  await axios.get("api/users/logout");
     if(response){
      route.push("/");
      localStorage.clear("Divasuserdata")
      setToken("");
     }
    } catch (error) {
      console.log("ERROR:", error)
    }
  }

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
      handleFav,
      allProduct,
      inCart,
      inFav,
      getTotalValue,
      logoutUser
    }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(GlobalContext);
}