import PropTypes from 'prop-types';

export const iconPropType = PropTypes.shape({
  /** Set icon's name (required for font-awesome icons */
  name: PropTypes.string,
  /** Set icon's source (required for library icons */
  src: PropTypes.string,
  /** Set icon type */
  type: PropTypes.oneOf(['font-awesome', 'library']),
});
