'use strict';

import PropTypes from 'prop-types';
import styled from 'styled-components';

import { extractThemeOrDefault, getValueString } from 'reactackle-core';

const propTypes = {
  textFree: PropTypes.bool,
  theme: PropTypes.object,
};

const defaultProps = {
  textFree: false,
};

const checkboxSizeProps = ({ theme: themeFromProvider, textFree }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const { size } = theme.reactackle.components.checkbox.input;

  return `
    max-width: ${textFree ? getValueString(size) : '100%'};  
  `;
};

export const CheckboxElementStyled = styled.div`
  display: flex;
  cursor: pointer;
  ${checkboxSizeProps};
`;

CheckboxElementStyled.displayName = 'CheckboxElementStyled';
CheckboxElementStyled.propTypes = propTypes;
CheckboxElementStyled.defaultProps = defaultProps;
