import React, { useContext }  from "react";
import {Icon} from 'react-remixicon-ts'

import Button from "../../ui/button/Button";

import FavoritesContext from "../../store/favorites-context";
import UIContext from "../../store/ui-context";

const ToggleFavoriteButton = ({item}) => {
  
  const favCtx = useContext(FavoritesContext);
  const uiCtx = useContext(UIContext);

  const itemIsFavorited = favCtx.findFavorite(item.id)

  const toggleFavoriteHandler = (item) => {
    if (!itemIsFavorited) {
      favCtx.addFavorite(item);
      uiCtx.pushAlert("Item added to Favorites", "success", "toast")
    } else {
      favCtx.removeFavorite(item.id);
      uiCtx.pushAlert("Item removed from Favorites", "success", "toast")
    }
  };

  return (
    <Button variant={'secondary'} action={() => toggleFavoriteHandler(item)}>
      {itemIsFavorited ? 
        <Icon icon={'heart-fill'} color={uiCtx.colors['error']}/>
      : <Icon icon={'heart-line'} color={uiCtx.colors['error']}/>
      } 
    </Button>
  );
};

export default ToggleFavoriteButton;
