import React from "react";
import Grid from "../../ui/grid/Grid";

import Item from "../item/Item";
const ItemList = ({items}) => {
  
  return (
      <Grid>
        {items.map((item, index) => {
          return (
            <Item item={item} key={index}/>
        )})}
      </Grid>
  );
};

export default ItemList;
