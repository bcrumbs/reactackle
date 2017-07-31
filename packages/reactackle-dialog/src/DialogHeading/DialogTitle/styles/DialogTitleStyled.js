'use strict';

import PropTypes from 'prop-types';
import styled from 'styled-components';

import { extractThemeOrDefault, getValueString } from 'reactackle-core';

const propTypes = {
  haveCloseButton: PropTypes.bool,
  paddingSize: PropTypes.oneOf(['none', 'default']),
  /**
   * Define theme
   * See https://github.com/styled-components/styled-components/blob/master/docs/theming.md
   * for more information
   */
  theme: PropTypes.object,
};

const defaultProps = {
  haveCloseButton: false,
  paddingSize: 'default',
};

/** Prop Receivers */
const baseProps = ({
  theme: themeFromProvider,
  paddingSize,
  haveCloseButton,
}) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  const { paddingX, paddingY } = theme.reactackle.components.dialog.title;

  const paddingXValue = getValueString(paddingX);

  const { width } = theme.reactackle.components.dialog.closeButton,
    py = paddingSize !== 'none' ? `${getValueString(paddingY)}` : 0,
    px = paddingSize !== 'none' ? `${paddingXValue}` : 0;

  const pxRight = haveCloseButton
    ? `calc(${paddingXValue} + ${getValueString(width)})`
    : `${paddingXValue}`;

  return `
    padding: ${py} ${pxRight} ${py} ${px};
  `;
};

/** Styles */
export const DialogTitleStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  flex-grow: 1;
  ${baseProps};
`;

DialogTitleStyled.propTypes = propTypes;
DialogTitleStyled.defaultProps = defaultProps;
DialogTitleStyled.displayName = 'DialogTitleStyled';
