import PropTypes from 'prop-types';

export const OptionPropTypeCustom = PropTypes.shape({
  value: PropTypes.any,
  text: PropTypes.string,
  disabled: PropTypes.bool,
});
