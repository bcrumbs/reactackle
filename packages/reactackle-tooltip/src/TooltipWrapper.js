import React from 'react';

import { TooltipStyled } from './styles/TooltipStyled';
import { TooltipContentStyled } from './styles/TooltipContentStyled';

export default ({
  isVisible, positionX, positionY, tooltipRef, children,
}) =>
  <TooltipStyled
  visible={isVisible}
  positionX={positionX}
  positionY={positionY}
  innerRef={tooltipRef}
  >
    <TooltipContentStyled>
      {children}
    </TooltipContentStyled>
  </TooltipStyled>;

