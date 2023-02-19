import React, { createContext, useState, useContext } from "react";
import FavoritesContext from "./favorites-context";

const ItemsContext = createContext({
  items: [],
  totalItems: 0,
  addItem: (item) => {},
  removeItem: (itemId) => {},
  getItem: (itemId) => {},
  updateItem: (itemId, newItem) => {}
});

export const ItemsContextProvider = (props) => {

  const favCtx = useContext(FavoritesContext);

  const [userItems, setUserItems] = useState([]);

  const getItemHandler = (itemId) => {
    return userItems.filter(i => i.id !== itemId)
  }

  const addItemHandler = (item) => {
    const newId = context.totalItems > 0 ? userItems[context.totalItems - 1].id + 1 : 1
    const newItem = {
      id: newId,
      title: item.title,
      description: item.description,
    }
    setUserItems((prevUserItems) => {
      return prevUserItems.concat(newItem);
    });
  };

  const updateItemHandler = (itemId, newItem) => {
    const foundItem = context.getItem(itemId)
    return userItems.map(item => {
      if (item.id === foundItem.id) {
        item = newItem
      }
    })
  };

  const removeItemHandler = (itemId) => {
    setUserItems((prevUserItems) => {
      return prevUserItems.filter((item) => item.id !== itemId);
    });
    favCtx.removeFavorite(itemId)
  };

  const context = {
    items: userItems,
    totalItems: userItems.length,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    getItem: getItemHandler,
    updateItem: updateItemHandler
  };

  return (
    <ItemsContext.Provider value={context}>
      {props.children}
    </ItemsContext.Provider>
  );
};

export default ItemsContext;
