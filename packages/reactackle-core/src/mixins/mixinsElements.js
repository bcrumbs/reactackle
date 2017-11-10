import { oppositeDirection } from '../styleFunctions';

/**
 * Icon size mixin
 */
export function iconSizeMixin(
  height,
  imgHeight = height,
  width = height,
  imgWidth = imgHeight,
) {
  return `
    width: ${width};
    height: ${height};
    line-height: ${height} !important;
    background-size: ${imgHeight};
    align-items: center;
    justify-content: center;
    
    ${imgHeight && `
      svg {
        width: ${imgWidth};
        height: ${imgHeight};
      }
    `}
  `;
}

/**
 * Generate triangle
 * @param {string} direction - triangle direction
 * @param {string} [color='currentcolor'] - triangle color
 * @param {number} [width=1] - triangle width
 * @param {number} [height=width/2] - triangle height
 * @param {string} [unit='em'] - size unit
 */
export const triangle = (
  direction,
  color = 'currentcolor',
  width = 1,
  height = width / 2,
  unit = 'em',
) => {
  const perpendicularBorder = `${height} solid transparent`;

  return `
    width: 0;
    height: 0;
    
    border-${oppositeDirection(direction.toLowerCase())}:
      ${height + unit} solid $color;
    border-${direction}: 0 solid transparent;
    
    ${direction.toLowerCase() === 'top' || direction.toLowerCase() === 'bottom'
      ? `
        border-left:   ${perpendicularBorder};
        border-right:  ${perpendicularBorder};
      `
      : `
        border-top:   ${perpendicularBorder};
        border-bottom:  ${perpendicularBorder};
      `}    
  `;
};
