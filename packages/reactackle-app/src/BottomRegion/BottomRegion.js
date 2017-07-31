'use strict';

import React from 'react';
import { BottomRegionStyled } from './styles/BottomRegionStyled';
import { BottomRegionContentStyled } from './styles/BottomRegionContentStyled';

const propTypes = {};
const defaultProps = {};

export default function BottomRegion(props) {
  return (
    <BottomRegionStyled>
      <BottomRegionContentStyled>
        {props.children}
      </BottomRegionContentStyled>
    </BottomRegionStyled>
  );
}

BottomRegion.propTypes = propTypes;
BottomRegion.defaultProps = defaultProps;
BottomRegion.displayName = 'BottomRegion';
