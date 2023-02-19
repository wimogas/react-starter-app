import React from "react";
import { Link } from "react-router-dom";

import Block from "../../ui/block/Block";

import DeleteItemButton from "../deleteItemButton/DeleteItemButton";
import ToggleFavoriteButton from "../toggleFavoriteButton/ToggleFavoriteButton";

import styles from "./Item.module.css";

const Item = ({item}) => {

  const truncateTitle = item.title.length > 16 ? `${item.title.substring(0, 16)}...` : item.title;
  
  return (
    <Block 
      direction={'column'} 
      align={'center'}
      gap={'16'} 
      variant={'card'}
      padding={24}
    >
      <Link to={'/' + item.id} className={styles.title}>{truncateTitle}</Link>
      <Block gap={'12'}>
        <ToggleFavoriteButton item={item} />
        <DeleteItemButton id={item.id} />
      </Block>
    </Block>
  );
};

export default Item;

