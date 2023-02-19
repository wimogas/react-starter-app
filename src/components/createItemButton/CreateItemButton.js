import React, { useContext }  from "react";

import AddFill from '../../assets/icons/add-fill.svg?raw'

import UIContext from "../../store/ui-context";

import Button from "../../ui/button/Button";
import Icon from '../../ui/icon/Icon';

import CreateItemForm from "../createItemForm/CreateItemForm";

const CreateItemButton = () => {

  const uiCtx = useContext(UIContext)

  const handleOpenCreateItemModal = () => {
    uiCtx.pushModal(<CreateItemForm />, 'Add new item')
  }

  return (
    <Button variant={'primary'} action={handleOpenCreateItemModal}>
      <Icon fill="white"><AddFill/></Icon>
      Add
    </Button>
  );
};

export default CreateItemButton;
