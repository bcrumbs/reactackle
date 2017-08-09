import React from 'react';
import PropTypes from 'prop-types';
import CircleProgress from '../CircleProgress/CircleProgress';
import { LinearProgress } from '../LinearProgress/LinearProgress';
import { ProgressHolderStyled } from './styles/ProgressHolderStyled';

const propTypes = {
  kind: PropTypes.oneOf(['linear', 'circle']).isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  alignX: PropTypes.oneOf(['left', 'center', 'right']),
  alignY: PropTypes.oneOf(['top', 'bottom', 'center']),
};

const defaultProps = {
  width: '',
  height: '',
  alignX: 'center',
  alignY: 'center',
};

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
      <Progress {...props} />
    </ProgressHolderStyled>
  );
};

Preloader.propTypes = propTypes;
Preloader.defaultProps = defaultProps;
Preloader.displayName = 'Preloader';
