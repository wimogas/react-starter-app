import React, { useContext, useState } from "react";
import {Icon} from 'react-remixicon-ts'

import UIContext from "../../store/ui-context";

import styles from './Text.module.css'

const Text = ({type, text, color, editable}) => {

  const uiCtx = useContext(UIContext)

  const [hovered, setHovered] = useState(false)

  const Type = type || 'span';

  const handleHover = () => {
    setHovered(!hovered)
  }

  return (
    <Type 
      className={styles.text} 
      style={{color: uiCtx.colors[color]}} 
      onMouseEnter={handleHover} 
      onMouseLeave={handleHover}
    >
      {text}
      {editable && hovered && <Icon icon={'pencil-line'} color={uiCtx.colors[color]}/>}
    </Type>
  );
};

export default Text;
