'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { withTheme, noop } from 'reactackle-core';
import { IconSvg } from 'reactackle-icons';
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

  return (
    <DialogCloseButtonStyled
      transparentBg={props.transparentBg}
      onClick={props.onClick}
      type={iconSettingsPath.type}
    >
      <IconSvg size="custom" color="currentColor">
        {iconSettingsPath.src}
      </IconSvg>
    </DialogCloseButtonStyled>
  );
};

_DialogCloseButton.propTypes = propTypes;
_DialogCloseButton.defaultProps = defaultProps;
_DialogCloseButton.displayName = 'DialogCloseButton';

export default withTheme(_DialogCloseButton);
