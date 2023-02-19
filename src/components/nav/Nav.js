import React, { useContext } from "react";
import { Link } from "react-router-dom";

import FavoritesContext from "../../store/favorites-context";

import styles from "./Nav.module.css";

import Badge from "../../ui/badge/Badge";
import Block from "../../ui/block/Block";
import CreateItemButton from "../createItemButton/CreateItemButton";

const Nav = () => {
  const favCtx = useContext(FavoritesContext);
  
  return (
    <nav className={styles.nav}>
      <Link to="/">React Starter App</Link>
      <Block align={'center'} gap={'24'}>
        <CreateItemButton />
        <Link to="favorites">
          Favorites
          {favCtx.totalFavorites > 0 && <Badge>{favCtx.totalFavorites}</Badge>}
        </Link>
      </Block>
    </nav>
  );
};

export default Nav;
