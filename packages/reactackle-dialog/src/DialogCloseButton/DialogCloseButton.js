'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { withTheme, noop } from 'reactackle-core';
import { DialogCloseButtonStyled } from './styles/DialogCloseButtonStyled';

const propTypes = {
  transparentBg: PropTypes.bool,
  onClick: PropTypes.func,
  // eslint-disable-next-line react/require-default-props
  theme: PropTypes.object,
};

const defaultProps = {
  transparentBg: false,
  onClick: noop,
};

const _DialogCloseButton = props => {
  const iconSettingsPath =
    props.theme.reactackle.components.dialog.closeButton.source;

  const icon = React.cloneElement(
    iconSettingsPath.src,
    { size: 'custom', color: 'currentColor' }// eslint-disable-line comma-dangle
  );
  
  return (
    <DialogCloseButtonStyled
      transparentBg={props.transparentBg}
      onClick={props.onClick}
      type={iconSettingsPath.type}
    >
      {icon}
    </DialogCloseButtonStyled>
  );
};

_DialogCloseButton.propTypes = propTypes;
_DialogCloseButton.defaultProps = defaultProps;
_DialogCloseButton.displayName = 'DialogCloseButton';

export default withTheme(_DialogCloseButton);
