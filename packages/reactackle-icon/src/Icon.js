import React from 'react';
import { IconSvg } from 'reactackle-icon-svg';
import { IconCustom } from 'reactackle-icon-custom';
import { iconPropType } from './iconPropType';

const propTypes = {
  ...iconPropType,
};
const defaultProps = {
  isRequired: {},
  type: 'svg',
};

export default function Icon(props) {
  const Icon = props.type === 'custom' ? IconCustom : IconSvg;

  return <Icon {...props} />;
}

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;
Icon.displayName = 'Icon';
