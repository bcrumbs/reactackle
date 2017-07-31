'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { noop } from 'reactackle-core';
import { DefaultLinkComponent } from './DefaultLinkComponent';

const propTypes = {
  href: PropTypes.string,
  boxed: PropTypes.bool,
  title: PropTypes.string,

  icon: PropTypes.shape({
    /** Set icon's name (required for font-awesome icons */
    name: PropTypes.string,
    /** Set icon's source (required for library icons */
    src: PropTypes.string,
    /** Set icon type */
    type: PropTypes.oneOf(['font-awesome', 'library']),
  }),

  onClick: PropTypes.func,
  linkComponent: PropTypes.func,
};
const defaultProps = {
  href: '#',
  boxed: false,
  title: '',

  icon: {
    name: '',
    src: '',
    type: 'font-awesome',
  },

  onClick: noop,
  linkComponent: DefaultLinkComponent,
};

export const LinkWrapper = props => {
  const { linkComponent: Link, ...linkProps } = props;
  if (Link !== DefaultLinkComponent) delete linkProps.boxed;
  return (
    <Link {...linkProps}>
      {props.children}
    </Link>
  );
};
LinkWrapper.propTypes = propTypes;
LinkWrapper.defaultProps = defaultProps;
LinkWrapper.displayName = 'LinkWrapper';
