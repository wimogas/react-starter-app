import React, { useEffect, useState, useContext } from 'react'

import ItemsContext from "../../store/items-context";
import UIContext from "../../store/ui-context";

import Block from "../../ui/block/Block";
import Button from "../../ui/button/Button";
import Text from "../../ui/text/Text";
import Input from '../../ui/input/Input';

const EditableField = ({item, field, type, required, color}) => {

  const itemCtx = useContext(ItemsContext);
  const uiCtx = useContext(UIContext)

  const [newField, setNewField] = useState('')
  const [isEditable, setIsEditable] = useState(false)
  const [validateError, setValidateError] = useState(false)

  useEffect(() => {
    if (item[field]) {
      setNewField(item[field])
    }
  }, [item[field]])

  const handleSaveField = () => {
    if (required && newField === '') {
      setValidateError(true)
      uiCtx.pushAlert(field + " is mandatory", "error", "toast")
      return
    }

    if (item[field] === newField) {
      setIsEditable(false)
      return
    }
    item[field] = newField
    itemCtx.updateItem(item.id, item)
    setIsEditable(false)
    uiCtx.pushAlert(field + " has been updated", "success", "toast")
  }

  const handleCancel = () => {
    setIsEditable(false); 
    setNewField(item[field])
  }
  
  const handleClick = () => {
    setIsEditable(true); 
    setNewField(item[field]); 
    setValidateError(false)
  }

  const editBlock = (
  <Block align={'center'} gap={12}>
    <Input name={field} value={newField} onChange={e => setNewField(e.target.value)} error={validateError} />
    <Button variant={'primary'} action={handleSaveField}>Save</Button>
    <Button variant={'secondary'} action={handleCancel}>Cancel</Button>
  </Block>)

  const fieldBlock = (
    <Text type={type} text={newField} color={color} editable />
  )

  const emptyState = (
    <Text text={`Add a ${field} ...`} editable color={'secondary'} />
  )

  if (isEditable) {
    return (editBlock)
  }

  return (
    <div onClick={handleClick}>
      <Block align={'center'} gap={8} width={'100%'}>
        <Block style={{cursor: 'text'}}>
          {newField ?  fieldBlock : emptyState}
        </Block> 
      </Block>
    </div>
  )
}

export default EditableField;


