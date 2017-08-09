'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { ProgressBase } from '../ProgressBase/ProgressBase';
import { ProgressBoxStyled } from '../styles/ProgressBoxStyled';
import { ContentWrapperStyled } from './styles/ContentWrapperStyled';
import { PrimaryLineStyled } from './styles/PrimaryLineStyled';
import { SecondaryLineStyled } from './styles/SecondaryLineStyled';
import { SplitterStyled } from './styles/SplitterStyled';
import { LinearProgressStyled } from './styles/LinearProgressStyled';

const propTypes = {
  ...ProgressBase.propTypes,
  /**
   * Specifies current value to calculate progress from
   */
  value: PropTypes.number,
  /**
   * Value for aria-valuetext attr
   */
  ariaValueText: PropTypes.string,
  /**
   * Specifies progress mode. Indeterminate one doesn't have value.
   */
  determinate: PropTypes.bool,
  /**
   * Progress type
   */
  progressType: PropTypes.oneOf(['circle', 'linear']),
};

const defaultProps = {
  ...ProgressBase.defaultProps,
  value: -1,
  determinate: false,
  progressType: 'linear',
};

export class LinearProgress extends ProgressBase {
  render() {
    const { secondaryProgress, value, determinate } = this.props;
    const color = this.getDynamicColor() || this.props.color;

    const secondaryColor = this.getSecondaryProgressColor()
        || this.props.secondaryProgressColor;

    const progressStyle = determinate
      ? {
        transform: `scaleX(${this.getProgress() / 100})`,
      }
      : null;

    const progressSplitter = determinate
      ? null
      : <SplitterStyled bg={color} />;
    
    const secondaryProgressBox = secondaryProgress
      ? (
        <SecondaryLineStyled
          bg={secondaryColor}
          style={{
            transform: `scaleX(${this.getSecondaryProgress() / 100})`,
          }}
        />
      )
      : null;

    const ariaValueText = determinate
      ? `${value} ${this.props.progressSupplementText}`
      : '';

    return (
      <ProgressBoxStyled
        role="progressbar"
        aria-valuenow={value > -1 ? value : ''}
        aria-valuemin={this.props.min}
        aria-valuemax={this.props.max}
        aria-valuetext={this.props.ariaValueText || ariaValueText}
      >
        <LinearProgressStyled>
          {this.getProgressLabel()}
          <ContentWrapperStyled>
            {secondaryProgressBox}
            <PrimaryLineStyled
              bg={color}
              style={progressStyle}
              indeterminate={!determinate}
            >
              {progressSplitter}
            </PrimaryLineStyled>
          </ContentWrapperStyled>
        </LinearProgressStyled>
      </ProgressBoxStyled>
    );
  }
}

LinearProgress.propTypes = propTypes;
LinearProgress.defaultProps = defaultProps;
LinearProgress.displayName = 'LinearProgress';
