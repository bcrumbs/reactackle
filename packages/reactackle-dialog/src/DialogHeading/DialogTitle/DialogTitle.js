'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { DialogTitleStyled } from './styles/DialogTitleStyled';
import { DialogTitleTextStyled } from './styles/DialogTitleTextStyled';
import { DialogSubtitleTextStyled } from './styles/DialogSubtitleTextStyled';

const propTypes = {
  haveCloseButton: PropTypes.bool,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  paddingSize: PropTypes.oneOf(['none', 'default']),
};

const defaultProps = {
  haveCloseButton: false,
  title: '',
  subtitle: '',
  paddingSize: 'default',
};

export default function DialogTitle(props) {
  const subtitle = props.subtitle
    ? <DialogSubtitleTextStyled>
        {props.subtitle}
      </DialogSubtitleTextStyled>
    : null;

  return (
    <DialogTitleStyled
      paddingSize={props.paddingSize}
      haveCloseButton={props.haveCloseButton}
    >
      <DialogTitleTextStyled>
        {props.title}
      </DialogTitleTextStyled>
      {subtitle}
    </DialogTitleStyled>
  );
}

DialogTitle.propTypes = propTypes;
DialogTitle.defaultProps = defaultProps;
DialogTitle.displayName = 'DialogTitle';
