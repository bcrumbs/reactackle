'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { SidebarRegionStyled } from './styles/SidebarRegionStyled';

const propTypes = {
  spread: PropTypes.bool,
  scrollable: PropTypes.bool,
  bordered: PropTypes.bool,
  /**
   * If region is scrollable, it requires some minHeight set
   * to work properly
   */
  scrollableMinHeight: PropTypes.number,
};

const defaultProps = {
  spread: false,
  scrollable: false,
  bordered: false,
  scrollableMinHeight: 200,
};

export default function SidebarRegion(props) {
  return (
    <SidebarRegionStyled
      spread={props.spread}
      bordered={props.bordered}
      scrollable={props.scrollable}
      scrollableMinHeight={props.scrollableMinHeight}
    >
      {props.children}
    </SidebarRegionStyled>
  );
}

SidebarRegion.propTypes = propTypes;
SidebarRegion.defaultProps = defaultProps;
SidebarRegion.displayName = 'SidebarRegion';
