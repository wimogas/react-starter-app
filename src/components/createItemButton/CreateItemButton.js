import React, { useContext }  from "react";
import {Icon} from 'react-remixicon-ts'

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
      <Icon icon={'add-fill'} color={"white"}/>
      Add
    </Button>
  );
};

export default CreateItemButton;
