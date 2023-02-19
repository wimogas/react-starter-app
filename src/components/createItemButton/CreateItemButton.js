import React, { useContext }  from "react";

import AddFill from 'remixicon-reactjs/src/icons/system/AddFill'

import UIContext from "../../store/ui-context";

import Button from "../../ui/button/Button";
import CreateItemForm from "../createItemForm/CreateItemForm";

const CreateItemButton = () => {

  const uiCtx = useContext(UIContext)

  const handleOpenCreateItemModal = () => {
    uiCtx.pushModal(<CreateItemForm />, 'Add new item')
  }

  return (
    <Button variant={'primary'} action={handleOpenCreateItemModal}>
      <AddFill fill="white" /> Add
    </Button>
  );
};

export default CreateItemButton;
