'use strict';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import { extractThemeOrDefault, getValueString } from 'reactackle-core';

const propTypes = {
  theme: PropTypes.object,
};

const contentProps = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const { offset } = theme.reactackle.components.checkbox.content;

  return `
    padding-left: ${getValueString(offset)};
  `;
};

export const CheckboxContentStyled = styled.div`
  ${/* Prettier workarount until issue is not fixed: https://github.com/prettier/prettier/issues/2291 */ ''};
  ${contentProps};
`;

CheckboxContentStyled.propTypes = propTypes;
CheckboxContentStyled.displayName = 'CheckboxContentStyled';
