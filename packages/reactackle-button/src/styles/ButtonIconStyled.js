'use strict';

import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { extractThemeOrDefault } from 'reactackle-core';

const propTypes = {
  /** Define button's size */
  size: PropTypes.oneOf(['inline', 'small', 'normal', 'large']),

  /** Swap icon and text position */
  iconPositionRight: PropTypes.bool,

  /** Define button theme
   * See https://github.com/styled-components/styled-components/blob/master/docs/theming.md
   * for more information
   */
  theme: PropTypes.object,
};
const defaultProps = {
  size: 'normal',
  iconPositionRight: false,
};

// PROP RECEIVERS
const iconStyleProps = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const opacityAmount = theme.reactackle.components.button.iconOpacity;

  return `
    opacity: ${opacityAmount};
  `;
};

const iconSizeProps = ({ size }) => css`
  ${size === 'inline'
    ? `
      width: 1em;
      height: 1em;
      line-height: inherit;
      font-size: 1em;
      display: inline-flex;
      align-self: center;
      
      & > *::before {
        line-height: 1;
      }
    `
    : null}
`;

export const ButtonIconBoxStyled = styled.div`
  order: ${props => (props.iconPositionRight ? '2' : '1')};
  display: flex;
  ${iconStyleProps};
  ${iconSizeProps};
`;

ButtonIconBoxStyled.propTypes = propTypes;
ButtonIconBoxStyled.defaultProps = defaultProps;
ButtonIconBoxStyled.displayName = 'ButtonIconBoxStyled';
