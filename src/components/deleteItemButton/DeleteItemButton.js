import React, { useContext }  from "react";

import DeleteBinLine from 'remixicon-reactjs/src/icons/System/DeleteBinLine'

import ItemsContext from "../../store/items-context";
import UIContext from "../../store/ui-context";

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
      <DeleteBinLine fill="rgb(114, 114, 114)" />
    </Button>
  );
};

export default DeleteItemButton;
