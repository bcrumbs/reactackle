'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash.omit';
import { CircleProgress } from '../CircleProgress/CircleProgress';
import { LinearProgress } from '../LinearProgress/LinearProgress';
import { ProgressHolderStyled } from './styles/ProgressHolderStyled';

const propTypes = {
  ...LinearProgress.propTypes,
  ...CircleProgress.propTypes,
  /*
  * Kind of loader, used for styling
  */
  kind: PropTypes.oneOf(['linear', 'circle']).isRequired,
  /*
   * Width of the Preloader
   */
  width: PropTypes.string,
  /*
   * height of the Preloader
   */
  height: PropTypes.string,
  /*
   * Content horizontal align
   */
  alignX: PropTypes.oneOf(['left', 'center', 'right']),
  /*
   * Content vertical align
   */
  alignY: PropTypes.oneOf(['top', 'bottom', 'center']),
};

const defaultProps = {
  ...LinearProgress.defaultProps,
  ...CircleProgress.defaultProps,
  width: '',
  height: '',
  alignX: 'center',
  alignY: 'center',
};

const preloaderProps = ['width', 'height', 'alignX', 'alignY', 'children'];

export const Preloader = props => {
  const { kind, width, height, alignY, alignX } = props;
  
  const Progress = kind === 'linear'
    ? LinearProgress
    : CircleProgress;
  
  return (
    <ProgressHolderStyled
      kind={kind}
      customWidth={width}
      customHeight={height}
      alignX={alignX}
      alignY={alignY}
    >
      <Progress {...omit(props, preloaderProps)}>
        {props.children}
      </Progress>
    </ProgressHolderStyled>
  );
};

Preloader.propTypes = propTypes;
Preloader.defaultProps = defaultProps;
Preloader.displayName = 'Preloader';
