import React, { useContext } from "react";
import GhostLine from 'remixicon-reactjs/src/icons/user/GhostLine'

import UIContext from "../../store/ui-context";

import Block from "../block/Block";

const EmptyState = (props) => {

  const uiCtx = useContext(UIContext)

  return (
    <Block 
      variant={'empty'} 
      direction={'column'} 
      gap={24} 
      align={'center'}
    >
      <GhostLine size={64} fill={uiCtx.colors['secondary']} />
      {props.content}
      {props.action && props.action}
    </Block>
  );
};

export default EmptyState;
