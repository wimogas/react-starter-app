import React, { useContext } from "react";

import ItemsContext from "../store/items-context";

import Page from "../ui/page/Page";

import ItemList from "../components/itemList/ItemList";
import CreateItemButton from "../components/createItemButton/CreateItemButton";
import EmptyState from "../ui/emptyState/EmptyState";

const ItemListPage = () => {
  
  const itemsCtx = useContext(ItemsContext);

  const ITEMS = itemsCtx.items

  return (
    <Page title={<h1>Items</h1>} action={<CreateItemButton />}>
      {ITEMS.length > 0 ? 
        <ItemList items={ITEMS} /> 
        : <EmptyState content={'No Items found'}></EmptyState>
      }
    </Page>
  );
};

export default ItemListPage;
