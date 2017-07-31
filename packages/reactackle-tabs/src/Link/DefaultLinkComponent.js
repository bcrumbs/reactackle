'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { noop } from 'reactackle-core';

const propTypes = {
  href: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func,
};

const defaultProps = {
  href: '',
  title: 'defaultLink',
  onClick: noop,
};

export const DefaultLinkComponent = props => {
  const content = props.children || props.title;

  return (
    <a href={props.href} onClick={props.onClick}>
      {content}
    </a>
  );
};

DefaultLinkComponent.propTypes = propTypes;
DefaultLinkComponent.defaultProps = defaultProps;
DefaultLinkComponent.displayName = 'DefaultLinkComponent';
