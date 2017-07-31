'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { DialogContentStyled } from './styles/DialogContentStyled';

const propTypes = {
  bordered: PropTypes.bool,
  flex: PropTypes.bool,
  scrollable: PropTypes.bool,
  followsHeading: PropTypes.bool,
  paddingSize: PropTypes.oneOf(['none', 'default']),
};

const defaultProps = {
  bordered: false,
  flex: false,
  scrollable: false,
  followsHeading: false,
  paddingSize: 'default',
};

export default function DialogContent(props) {
  return (
    <DialogContentStyled
      bordered={props.bordered}
      displayFlex={props.flex}
      paddingSize={props.paddingSize}
      scrollable={props.scrollable}
      followsHeading={props.followsHeading}
    >
      {props.children}
    </DialogContentStyled>
  );
}

DialogContent.propTypes = propTypes;
DialogContent.defaultProps = defaultProps;
DialogContent.displayName = 'DialogContent';
