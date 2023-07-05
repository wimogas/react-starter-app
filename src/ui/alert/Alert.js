import React, { useContext } from "react";
import {Icon} from 'react-remixicon-ts'

import UIContext from "../../store/ui-context";

import Button from "../button/Button";
import Block from "../block/Block";

import styles from "./Alert.module.css";

const Alert = ({message, variant, type, close}) => {

  const uiCtx = useContext(UIContext)

  return (
    <div className={`${styles.alert} ${styles[type]}`}>
      <Block align={'center'} gap={12}>
        {variant === 'success' ? <Icon icon={'checkbox-circle-line'} color={uiCtx.colors['success']}/> :
        <Icon icon={'close-circle-line'} color={uiCtx.colors['error']}/>}
        {message}
      </Block>
      <Button variant={'secondary'} action={close}>
        <Icon icon={'close-fill'} color={uiCtx.colors['secondary']}/>
      </Button>
    </div>
  );
};

export default Alert;
