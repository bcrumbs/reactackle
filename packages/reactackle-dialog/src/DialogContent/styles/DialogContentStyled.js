'use strict';

import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { extractThemeOrDefault, getValueString } from 'reactackle-core';

const propTypes = {
  bordered: PropTypes.bool,
  scrollable: PropTypes.bool,
  displayFlex: PropTypes.bool,
  followsHeading: PropTypes.bool,
  paddingSize: PropTypes.oneOf(['none', 'default']),
  /**
   * Define theme
   * See https://github.com/styled-components/styled-components/blob/master/docs/theming.md
   * for more information
   */
  theme: PropTypes.object,
};

const defaultProps = {
  bordered: false,
  scrollable: false,
  displayFlex: false,
  followsHeading: false,
  paddingSize: 'default',
};

/** Prop Receivers */
const baseProps = ({
  theme: themeFromProvider,
  paddingSize,
  followsHeading,
  bordered,
  displayFlex,
}) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const {
    paddingX,
    paddingY,
    fontSize,
    lineHeight,
    color,
    fontWeight,
    borderWidth,
    borderColor,
  } = theme.reactackle.components.dialog.content;

  const py = getValueString(paddingY),
    px = getValueString(paddingX);

  const padding = paddingSize !== 'none' ? `padding: ${py} ${px};` : '';

  return css`
    font-size: ${getValueString(fontSize)};
    line-height: ${lineHeight};
    color: ${color};
    font-weight: ${fontWeight};

    ${padding}

    ${followsHeading && 'padding-top: 0;'}

    & + & {
      padding-top: 0;
      margin-top: -calc(${py} / 2);
    }

    ${bordered
      ? `border-top: ${getValueString(borderWidth)} solid ${borderColor};`
      : ''}
    
    ${displayFlex && 'display: flex;'}
  `;
};

const scrollable = ({ scrollable }) => (scrollable ? 'overflow-y: auto;' : '');

/** Styles */
export const DialogContentStyled = styled.div`
  flex-grow: 1;
  position: relative;
  ${baseProps} ${scrollable};
`;

DialogContentStyled.propTypes = propTypes;
DialogContentStyled.defaultProps = defaultProps;
DialogContentStyled.displayName = 'DialogContentStyled';
