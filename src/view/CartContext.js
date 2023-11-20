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

    const itemPrice = !isNaN(Number(item.price)) ? Number(item.price) : 0;

    if (existingItemIndex !== -1) {
      const existingQuantity = Number(updatedCart[existingItemIndex].quantity);
      const updatedQuantity = existingQuantity + 1;

      const existingPrice = Number(updatedCart[existingItemIndex].price);
      const updatedPrice = !isNaN(existingPrice)
        ? existingPrice + itemPrice
        : itemPrice;

      updatedCart[existingItemIndex] = {
        ...item,
        quantity: updatedQuantity,
        price: updatedPrice,
      };
    } else {
      updatedCart.push({ ...item, quantity: 1, price: itemPrice });
    }

    setCartItems(updatedCart);
  };

  const removeFromCart = (item) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updatedCart);
  };

  const decreaseQuantity = (item) => {
    const updatedCart = [...cartItems];
    const existingItemIndex = updatedCart.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItemIndex !== -1) {
      const existingQuantity = Number(updatedCart[existingItemIndex].quantity);

      if (existingQuantity > 1) {
        // Decrease quantity by 1
        const updatedQuantity = existingQuantity - 1;
        const itemPrice = !isNaN(Number(item.price)) ? Number(item.price) : 0;
        const updatedPrice = itemPrice * updatedQuantity;

        updatedCart[existingItemIndex] = {
          ...item,
          quantity: updatedQuantity,
          price: updatedPrice,
        };
      } else {
        // If quantity is 1, do not remove the item
        const updatedItem = { ...item, quantity: 1 };
        updatedCart[existingItemIndex] = updatedItem;
      }

      setCartItems(updatedCart);
    }
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
        decreaseQuantity,
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
