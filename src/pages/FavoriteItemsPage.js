import React, { useContext } from "react";
import { Link } from "react-router-dom";

import FavoritesContext from "../store/favorites-context";

import ItemList from "../components/itemList/ItemList";

import EmptyState from "../ui/emptyState/EmptyState";
import Button from "../ui/button/Button";
import Page from "../ui/page/Page";

const FavoriteItemsPage = () => {

  const favCtx = useContext(FavoritesContext);

  return (
    <Page title={<h1>Favorites</h1>}>
      {favCtx.favorites.length > 0 ? 
        <ItemList items={favCtx.favorites}/> 
        : <EmptyState 
          content="No favorites found" 
          action={
            <Button variant="primary">
              <Link to="/">Add Favorites</Link>
            </Button>
          }></EmptyState>
      }
    </Page>
  );
};

export default FavoriteItemsPage;
