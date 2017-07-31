'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { DialogTitle } from './DialogTitle';
import { DialogHeadingStyled } from './styles/DialogHeadingStyled';

const propTypes = {
  haveCloseButton: PropTypes.bool,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

const defaultProps = {
  haveCloseButton: false,
  title: '',
  subtitle: '',
};

export default function DialogHeading(props) {
  const title =
    props.title || props.subtitle
      ? <DialogTitle
          haveCloseButton={props.haveCloseButton}
          title={props.title}
          subtitle={props.subtitle}
        />
      : null;

  return title
    ? <DialogHeadingStyled>
        {title}
      </DialogHeadingStyled>
    : null;
}

DialogHeading.propTypes = propTypes;
DialogHeading.defaultProps = defaultProps;
DialogHeading.displayName = 'DialogHeading';
