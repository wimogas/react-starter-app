import React, { useContext } from "react";
import {Icon} from 'react-remixicon-ts'

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
      <Icon icon={'ghost-line'} size={64} color={uiCtx.colors['secondary']}/>
      {props.content}
      {props.action && props.action}
    </Block>
  );
};

export default EmptyState;
