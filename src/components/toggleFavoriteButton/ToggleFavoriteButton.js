import React, { useContext }  from "react";

import HeartFill from '../../assets/icons/heart-fill.svg?raw'
import HeartLine from '../../assets/icons/heart-line.svg?raw'

import Button from "../../ui/button/Button";
import Icon from '../../ui/icon/Icon';

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
        <Icon fill={uiCtx.colors['error']}><HeartFill/></Icon>
      : <Icon fill={uiCtx.colors['error']}><HeartLine/></Icon>
      } 
    </Button>
  );
};

export default ToggleFavoriteButton;
