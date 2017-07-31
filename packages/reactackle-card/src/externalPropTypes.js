import PropTypes from 'prop-types';

export const externalPropTypes = {
  externalProps: PropTypes.shape({
    size: PropTypes.oneOf(['default', 'medium', 'large', 'xlarge']),
  }),
};

export const externalDefaultProps = {
  externalProps: {
    size: 'default',
  },
};
