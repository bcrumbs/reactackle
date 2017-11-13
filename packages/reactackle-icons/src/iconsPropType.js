import PropTypes from 'prop-types';

export const iconsPropType = {
  /** Turns on/off icon's border */
  border: PropTypes.bool,
  /** Set icon's border width */
  borderWidth: PropTypes.number,
  /** Make icon rounded */
  rounded: PropTypes.bool,
  /** Set icon size */
  size: PropTypes.oneOf(['custom', 'small', 'normal', 'large', 'xlarge']),
  /** Set icon's color scheme */
  colorScheme: PropTypes.oneOf(['light', 'dark', 'default']),
  /** Set exact icon's border color */
  color: PropTypes.string,
  /** Set icon's background color */
  backgroundColor: PropTypes.string,
  /** Set icon's flipping plane */
  flip: PropTypes.oneOf(['none', 'horizontal', 'vertical']),
  /** Rotate icon by some degree */
  rotate: PropTypes.number,
};
