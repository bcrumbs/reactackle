import { oppositeDirection } from '../styleFunctions';

/**
 * Icon size mixin
 */
export function iconSizeMixin(outerSize, imgSize, outerWidth = outerSize) {
  return `
    &,
    .icon {
      width: ${outerWidth}px;
      height: ${outerSize}px;
      line-height: ${outerSize}px;
    }
  
    .icon::before {
      font-size: ${imgSize}px;
    }
    
    .icon-holder { background-size: ${imgSize}px; }
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
