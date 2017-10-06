import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { extractThemeOrDefault, getValueString } from 'reactackle-core';
import { iconSvgSizeMixin, iconCustomSizeMixin } from 'reactackle-icons';

const propTypes = {
  /** Define button's size */
  size: PropTypes.oneOf(['inline', 'small', 'normal', 'large']),
  /** Swap icon and text position */
  iconPositionRight: PropTypes.bool,
};

const defaultProps = {
  size: 'normal',
  iconPositionRight: false,
};

// PROP RECEIVERS
const iconStyleProps = ({
  theme: themeFromProvider,
}) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const path = theme.reactackle.components.button;
  const opacityAmount = path.iconOpacity;

  return css`
    opacity: ${opacityAmount};   
    
    svg {
      fill: currentColor;
    }
  `;
};

const iconSizeProps = ({ size, type, theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const path = theme.reactackle.components.button.size[size].icon;
  const sizeMixin = type === 'svg' ? iconSvgSizeMixin : iconCustomSizeMixin;

  return css`
    ${sizeMixin(
      getValueString(path.width),
      getValueString(path.imgSize || path.width),
      getValueString(path.height || path.width),
    )}
    
    ${size === 'inline' && `
      display: inline-flex;
      align-self: center;
    `}
  `;
};

export const ButtonIconBoxStyled = styled.div`
  order: ${props => (props.iconPositionRight ? '2' : '1')};
  display: flex;
  ${iconStyleProps};
  ${iconSizeProps};
`;

ButtonIconBoxStyled.propTypes = propTypes;
ButtonIconBoxStyled.defaultProps = defaultProps;
ButtonIconBoxStyled.displayName = 'ButtonIconBoxStyled';
