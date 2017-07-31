'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { DialogActionsRegionStyled } from './styles/DialogActionsRegionStyled';

const propTypes = {
  alignLeft: PropTypes.bool,
};

const defaultProps = {
  alignLeft: false,
};

export default function DialogActionsRegion(props) {
  return (
    <DialogActionsRegionStyled alignLeft={props.alignLeft}>
      {props.children}
    </DialogActionsRegionStyled>
  );
}

DialogActionsRegion.propTypes = propTypes;
DialogActionsRegion.defaultProps = defaultProps;
DialogActionsRegion.displayName = 'DialogActionsRegion';
