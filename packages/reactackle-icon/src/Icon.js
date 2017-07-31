'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { registerDefaultComponentTheme } from 'reactackle-core';
import { IconFontAwesome } from './IconFontAwesome/IconFontAwesome';
import { IconLibrary } from './IconLibrary/IconLibrary';
import componentTheme from './styles/theme';

registerDefaultComponentTheme('icon', componentTheme);

const propTypes = {
  ...IconFontAwesome.propTypes,
  ...IconLibrary.propTypes,
  /** Set icon type */
  type: PropTypes.oneOf(['font-awesome', 'library']),
};
const defaultProps = {
  type: 'font-awesome',
};

export default function Icon(props) {
  if (!props.name && !props.src) return null;

  const Icon = props.type === 'font-awesome' ? IconFontAwesome : IconLibrary;

  return <Icon {...props} />;
}

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;
Icon.displayName = 'Icon';
