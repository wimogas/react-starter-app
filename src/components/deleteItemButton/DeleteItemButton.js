import React, { useContext }  from "react";
import {Icon} from 'react-remixicon-ts'

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
      <Icon icon={'delete-bin-line'} color="rgb(114, 114, 114)"/>
    </Button>
  );
};

export default DeleteItemButton;
