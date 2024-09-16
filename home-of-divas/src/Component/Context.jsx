"use client";
import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import axios from 'axios';
import { set } from 'mongoose';

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {

  const [allProduct, setAllProduct] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [favItem, setFavItem] = useState({});
  const [token, setToken] = useState({});
  const [itemAdded, setItemAdded] = useState(null);
  const [favAdded, setFavAdded] = useState(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const [inCart, setInCart] = useState(false);
  const [inFav, setInFav] = useState(false);
  const [allProductError, setAllProductError] = useState(false)
  const [loading, setLoading] = useState(false);

  // Initialize state from localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const localSavedToken = localStorage.getItem("Divastoken") || "";
  
      setToken(localSavedToken);
      setIsInitialized(true);
    }
  }, []);

  // Save to localStorage whenever state changes
  useEffect(() => {
    if (isInitialized && typeof window !== "undefined") {
      localStorage.setItem("Divastoken", token);
    }
  }, [isInitialized, token, cartItems, favItem]);

  const addToCart = async (itemId) => {
    setItemAdded("true");
    setTimeout(() => {
      setItemAdded(null)
    }, 1000)
    setCartItems((prev) => {
      const newCart = { ...prev, [itemId]: (prev[itemId] || 0) + 1 };
      return newCart;
    });
    if (token) {
      try {
        await axios.post('api/order/addToCart', { itemId }, {
          withCredentials: true,
        });
        fetchCartData();
      } catch (error) {
        console.log("Error:", error);
      }
    }
    console.log("Token:", token)
  };

  const removeFromCart = async (itemId) => {
    setItemAdded("false");
    setTimeout(() => {
      setItemAdded(null)
    },  1000)
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
    if (token) {
      try {
        await axios.post('api/order/removeFromCart', { itemId }, {
          withCredentials: true,
        });
        fetchCartData();
      } catch (error) {
        console.log("Error:", error);
      }
    }
  };

  useEffect(()=>{
    fetchCartData();
  }, [])

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get("api/products/getAllProducts");
      if(response.data.success){
        setAllProduct(response.data.data || []);
      }else{
        setAllProductError(true);
        setAllProduct([]);
      }
      
    } catch (error) {
      console.log("Error:", error)
    }
    finally{
      setLoading(false)
    }
  };

  useEffect(()=>{
    fetchProducts()
  }, [])

  const getTotalValue = () => {
    let total = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let totalInfo = allProduct.find((product) => product._id === item || product._id === Number(item));
        console.log("totalInfo:", total)
        if (totalInfo) {
          total += totalInfo.price * cartItems[item];
        }
      }
    }
    return total;
  };


  const handleFav = async (favId) => {
    setFavItem((prev) => {
      const newFav = { ...prev, [favId]: prev[favId] ? 0 : 1 };
      setFavAdded(newFav[favId] ? "true" : "false");
      setTimeout(() => {
        setFavAdded(null);
      }, 1000);
      return newFav;
    });
    if (token) {
      try {
        const response = await axios.post("api/order/addToFav", { favId }, {withCredentials:true});
        if(response.data.success){
          setFavAdded(response.data.data);
          console.log("favAdded:", favAdded);
          console.log("response:", response.data.data);
        }else{
          console.log(response);
        }
      } catch (error) {
        console.log("Error:", error);
      }
    }
  };

  useEffect(()=>{
    const hasItemInCart = allProduct.some((item)=> cartItems[item._id] > 0);
    setInCart(hasItemInCart);
  },[cartItems, allProduct]);

  useEffect(()=>{
    const hasItemInFav = allProduct.some((item)=> favItem[item._id] > 0);
    setInFav(hasItemInFav);
  },[favItem, allProduct]);

  const fetchCartData = async () => {
    try {
      const response = await axios.get("api/order/getCartData");
      if(response.data.success){
        setCartItems(response.data.data || {});
      }
    } catch (error) {
      console.log("Error:", error)
    }
  };

  return (
    <GlobalContext.Provider value={{
      cartItems,
      token,
      setToken,
      addToCart,
      removeFromCart,
      itemAdded,
      favAdded,
      favItem,
      handleFav,
      allProduct,
      allProductError,
      inCart,
      inFav,
      getTotalValue,
      loading,
      fetchProducts 
    }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(GlobalContext);
}