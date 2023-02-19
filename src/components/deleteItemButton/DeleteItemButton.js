import React, { useContext }  from "react";

import DeleteBinLine from '../../assets/icons/delete-bin-line.svg?raw'

import ItemsContext from "../../store/items-context";
import UIContext from "../../store/ui-context";

import Icon from '../../ui/icon/Icon'
import Button from "../../ui/button/Button";

const DeleteItemButton = ({id}) => {
  
  const itemCtx = useContext(ItemsContext);
  const uiCtx = useContext(UIContext);

  const toggleDeleteItemHandler = (id) => {
    itemCtx.removeItem(id);
    uiCtx.pushAlert("Item deleted successfully", "success")
  };

  return (
    <Button 
      variant={'secondary'} 
      action={() => toggleDeleteItemHandler(id)}>
      <Icon fill="rgb(114, 114, 114)">
        <DeleteBinLine/>
      </Icon>
    </Button>
  );
};

export default DeleteItemButton;
