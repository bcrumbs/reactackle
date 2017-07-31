/**
 * Set SVG Icons as Background
 * @param {string} svg - path to svg-image or base-64
 * @param {string} [positionX='center'] - the x-alignement of image
 * @param {string} [positionY='center] - the y-alignement of image
 * @param {string} size - size of image
 */
export const svgBackground = (svg, size, positionX, positionY) => `
  background-image: url('${svg}');
  background-position: ${positionX || 'center'} ${positionY || 'center'};
  background-size: ${size};
  background-repeat: no-repeat;
`;

/**
 * Set side radius to the component
 * @param {string} side - side of the component
 * @param {string} [radius=radiusConstants.default] - radius of side
 */
export const sideRadius = (side, radius) => `
  ${(side === 'left' || side === 'right') &&
    `
    border-bottom-${side}-radius: ${radius};
    border-top-${side}-radius: ${radius};
  `}
  
  ${(side === 'top' || side === 'bottom') &&
    `
    border-${side}-left-radius: ${radius};
    border-${side}-right-radius: ${radius};
  `}
`;

/**
 * Set transition
 * @param {string} property - transitioned propertied
 * @param {string} [speed='300ms'] - transition speed
 * @param {string} [ease='ease-out'] - transition easing function
 * @param {string} [delay='0ms'] - transition delay
 */
export const transition = (property, speed, ease, delay) => `
  transition-property: ${property};
  transition-duration: ${speed || '300ms'};
  transition-timing-function: ${ease || 'ease-out'};
  transition-delay: ${delay || '0ms'};
`;

/**
 * Visibility
 */
export const elementInvisible = `
  position: fixed;
  opacity: 0;
  pointer-events: none;
  margin: 0;
  padding: 0;
  width: 0;
  height: 0;
`;

export const elementInvisibleOff = `
  position: static;
  opacity: initial;
  pointer-events: initial;
`;

/**
 * Box shadow
 */
export const boxShadow = (elevation = 0, color = 'rgba(0, 0, 0, 0.1)') => {
  const blur1 = 2;
  const offset1 = 0;
  const x1 = 0;
  const y1 = blur1 / 2;

  const blur2 = (blur1 + 1) * Math.abs(elevation);
  const offset2 = (offset1 + 0.25) * Math.abs(elevation);
  const x2 = 0;
  const y2 = (y1 + 0.5) * elevation;

  const blur3 = blur2 + 1;
  const offset3 = offset2 + 0.25;
  const x3 = 0;
  const y3 = y2 + 0.5;

  const shadow1 = `${x1}px ${y1}px ${blur1}px ${offset1}px ${color}`;
  const shadow2 = `${x2}px ${y2}px ${blur2}px ${offset2}px ${color}`;
  const shadow3 = `${x3}px ${y3}px ${blur3}px ${offset3}px ${color}`;

  return `box-shadow: ${shadow1}, ${shadow2}, ${shadow3};`;
};
