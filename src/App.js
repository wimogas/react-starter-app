import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './style.css';

import  {UIContextProvider } from "./store/ui-context";
import { ItemsContextProvider } from "./store/items-context";
import { FavoritesContextProvider } from "./store/favorites-context";

import Nav from "./components/nav/Nav";

import FavoriteItemsPage from "./pages/FavoriteItemsPage";
import ItemListPage from "./pages/ItemListPage";
import ItemPage from "./pages/ItemPage";


const App = () => {

  return (
    <FavoritesContextProvider>
      <ItemsContextProvider>
        <UIContextProvider>
          <BrowserRouter>
            <Nav />
            <Routes>
              <Route path="/" element={<ItemListPage />} />
              <Route path="/:itemId" element={<ItemPage />} />
              <Route path="favorites" element={<FavoriteItemsPage />} />
            </Routes>
          </BrowserRouter>
        </UIContextProvider>
      </ItemsContextProvider>
    </FavoritesContextProvider>
  );
};

export default App;
