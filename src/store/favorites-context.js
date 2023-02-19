import React, { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  findFavorite: (itemId) => {},
  addFavorite: (favoriteItem) => {},
  removeFavorite: (itemId) => {},
});

export const FavoritesContextProvider = (props) => {
  const [userFavorites, setUserFavorites] = useState([]);

  const findFavoriteHandler = (itemId) => {
    return userFavorites.some(i => i.id === itemId)
  }

  const addFavoriteHandler = (favoriteItem) => {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteItem);
    });
  };

  const removeFavoriteHandler = (itemId) => {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((item) => item.id !== itemId);
    });
  };

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    findFavorite: findFavoriteHandler,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
