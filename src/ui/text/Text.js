import React, { useContext, useState } from "react";
import PencilLine from "remixicon-reactjs/src/icons/design/PencilLine";

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
      {editable && hovered && <PencilLine fill={uiCtx.colors[color]}/>}
    </Type>
  );
};

export default Text;
