import PropTypes from 'prop-types';
import { IconSvg } from 'reactackle-icon-svg';
import { IconCustom } from 'reactackle-icon-custom';

export const iconPropType = PropTypes.shape({
  ...IconSvg.propTypes,
  ...IconCustom.propTypes,
  src: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  /** Set icon type */
  type: PropTypes.oneOf(['custom', 'svg']),
});
