import React from 'react';
import PropTypes from 'prop-types';
import { registerDefaultComponentTheme } from 'reactackle-core';
import { SelectBoxCustom } from './SelectBoxCustom/SelectBoxCustom';
import { SelectBoxNative } from './SelectBoxNative/SelectBoxNative';
import componentTheme from './styles/theme';

registerDefaultComponentTheme('selectBox', componentTheme);

const propTypes = {
  ...SelectBoxNative.propTypes,
  ...SelectBoxCustom.propTypes,
  /**
   * Type of the SelectBox
   */
  type: PropTypes.oneOf(['custom', 'native']),
};

const defaultProps = {
  ...SelectBoxNative.defaultProps,
  ...SelectBoxCustom.defaultProps,
  type: 'custom',
};

export default function SelectBox(props) {
  const Select = props.type === 'custom' ? SelectBoxCustom : SelectBoxNative;

  return <Select {...props} />;
}

SelectBox.propTypes = propTypes;
SelectBox.defaultProps = defaultProps;
SelectBox.displayName = 'SelectBox';
