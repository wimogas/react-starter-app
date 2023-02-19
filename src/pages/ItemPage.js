import React, { useContext } from "react";
import { useParams, Navigate } from 'react-router-dom';

import ItemsContext from "../store/items-context";

import Page from "../ui/page/Page";
import Block from "../ui/block/Block";

import ToggleFavoriteButton from "../components/toggleFavoriteButton/ToggleFavoriteButton";
import DeleteItemButton from "../components/deleteItemButton/DeleteItemButton";
import EditableField from "../components/editableField/EditableField";

const ItemPage = () => {

  const { itemId } = useParams();
  
  const itemCtx = useContext(ItemsContext);
  
  const foundItem = itemCtx.items.filter(item => item.id.toString() === itemId)

  if (foundItem.length === 0) {
    return (
      <Navigate to="/" replace={true} />
    )
  }

  const actionButtons = (
    <Block gap={'12'}>
      <ToggleFavoriteButton item={foundItem[0]} />
      <DeleteItemButton id={foundItem[0].id} />
    </Block>
  )

  const title = (
    <EditableField field="title" item={foundItem[0]} required type={'h1'} color="white" />
  )

  return (
    <Page title={title} action={actionButtons}>
      <Block direction={'column'} variant={'card'} padding={40} gap={8}>
        <p>Description</p>
        <EditableField field="description" item={foundItem[0]} color="secondary" />
      </Block>
    </Page>
  );
};

export default ItemPage;

