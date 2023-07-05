import React, { useContext, useState } from "react";
import {Icon} from 'react-remixicon-ts'

import ItemsContext from "../../store/items-context";
import UIContext from "../../store/ui-context";

import Button from "../../ui/button/Button";
import Block from "../../ui/block/Block";
import Input from "../../ui/input/Input";

const CreateItemForm = () => {

  const itemCtx = useContext(ItemsContext)
  const uiCtx = useContext(UIContext)

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [validateError, setValidateError] = useState(false)

  const handleAddItem = (e) => {
    e.preventDefault();
    if (title === '') {
      setValidateError(true)
      uiCtx.pushAlert("Title is mandatory", "error", "toast")
      return
    }
    const newItem = {
      title,
      description
    }
    itemCtx.addItem(newItem)
    uiCtx.closeAllModals()
    uiCtx.pushAlert("Item created successfully", "success")
  }

  const handleChangeTitle = (e) => {
    setTitle(e.target.value)
    setValidateError(false)
  }

  return (
    <form onSubmit={(e) => handleAddItem(e)}>
      <Block direction={'column'} gap={24}>
        <Input label="Title *" name="title" value={title} onChange={handleChangeTitle} error={validateError} />
        <Input label="Description" name="description" value={description} onChange={e => setDescription(e.target.value)} />
        <Block justify={'flex-end'}>
          <Button variant={'primary'}><Icon icon={'add-fill'} color="white"/> Add Item</Button>
        </Block>
      </Block>
    </form>
  );
};

export default CreateItemForm;

