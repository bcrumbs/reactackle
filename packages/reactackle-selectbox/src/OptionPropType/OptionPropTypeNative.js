import PropTypes from 'prop-types';

export const OptionPropTypeNative = PropTypes.shape({
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  text: PropTypes.string,
  disabled: PropTypes.bool,
});
