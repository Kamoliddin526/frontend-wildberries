import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const addToCart = (item) => {
    const updatedCart = [...cartItems];
    const existingItemIndex = updatedCart.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    // Parse the item price to a number, or default to 0 if it's not a valid number
    const itemPrice = !isNaN(Number(item.price)) ? Number(item.price) : 0;

    if (existingItemIndex !== -1) {
      // Calculate the updated price
      const existingPrice = Number(updatedCart[existingItemIndex].price);
      const updatedPrice = !isNaN(existingPrice)
        ? existingPrice + itemPrice
        : itemPrice;

      updatedCart[existingItemIndex].price = updatedPrice;
    } else {
      updatedCart.push({ ...item, price: itemPrice });
    }

    setCartItems(updatedCart);
  };

  const removeFromCart = (item) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updatedCart);
  };

  const addToFavorites = (item) => {
    setFavorites([...favorites, item]);
  };

  const deleteFromFavorites = (item) => {
    const updatedFavorites = favorites.filter(
      (favoriteItem) => favoriteItem.id !== item.id
    );
    setFavorites(updatedFavorites);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        favorites,
        addToFavorites,
        deleteFromFavorites,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
