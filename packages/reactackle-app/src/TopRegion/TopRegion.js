'use strict';

import React from 'react';
import { TopRegionStyled } from './styles/TopRegionStyled';
import { TopRegionContentStyled } from './styles/TopRegionContentStyled';

const propTypes = {};
const defaultProps = {};

export default function TopRegion(props) {
  return (
    <TopRegionStyled>
      <TopRegionContentStyled>
        {props.children}
      </TopRegionContentStyled>
    </TopRegionStyled>
  );
}

TopRegion.propTypes = propTypes;
TopRegion.defaultProps = defaultProps;
TopRegion.displayName = 'TopRegion';
