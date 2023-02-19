import React, { useContext } from "react";

import CheckboxCircleLine from 'remixicon-reactjs/src/icons/system/CheckboxCircleLine'
import CloseCircleLine from 'remixicon-reactjs/src/icons/system/CloseCircleLine'
import CloseFill from 'remixicon-reactjs/src/icons/system/CloseFill'

import UIContext from "../../store/ui-context";

import Button from "../button/Button";
import Block from "../block/Block";

import styles from "./Alert.module.css";

const Alert = ({message, variant, type, close}) => {

  const uiCtx = useContext(UIContext)

  return (
    <div className={`${styles.alert} ${styles[type]}`}>
      <Block align={'center'} gap={12}>
        {variant === 'success' ? <CheckboxCircleLine fill={uiCtx.colors['success']} /> :
        <CloseCircleLine fill={uiCtx.colors['error']} />}0
        {message}
      </Block>
      <Button variant={'secondary'} action={close}>
        <CloseFill fill={uiCtx.colors['secondary']} />
      </Button>
    </div>
  );
};

export default Alert;
