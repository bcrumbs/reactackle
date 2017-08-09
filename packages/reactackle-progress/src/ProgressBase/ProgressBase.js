import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  rgb2html,
  hsv2rgb,
  interpolateHSV,
  colorLuminance,
} from 'reactackle-core';
import { LabelWrapperStyled } from './styles/LabelWrapperStyled';
import { SupplementTextStyled } from './styles/SupplementTextStyled';
import { ValueLabelStyled } from './styles/ValueLabelStyled';

const DEFAULT_COLOR = {
  START: { H: 45, S: 94, V: 100 },
  END: { H: 121, S: 56, V: 69 },
  STATIC: '#8cc63f',
};

const HSVType = PropTypes.shape({
  H: PropTypes.number,
  S: PropTypes.number,
  V: PropTypes.number,
});

const propTypes = {
  /**
   * Override progress line default color
   */
  color: PropTypes.string,
  /**
   * Progress line will change its colour accordingly to progress
   */
  dynamicColor: PropTypes.bool,
  /**
   * Start color for progress line with dynamic colour
   */
  startColor: HSVType,
  /**
   * End color for progress line with dynamic colour
   */
  endColor: HSVType,
  /**
   * Specifies max value to calculate progress from
   */
  max: PropTypes.number,
  /**
   * Specifies min value to calculate progress from
   */
  min: PropTypes.number,
  /**
   * Specifies current value to calculate progress from
   */
  value: PropTypes.number,
  /**
   * Specifies progress mode. Indeterminate one doesn't have value.
   */
  // eslint-disable-next-line react/no-unused-prop-types
  determinate: PropTypes.bool,
  /*
   * Show progress label value or not
   */
  progressLabel: PropTypes.bool,
  /**
   * Set text align for progress label
   */
  labelAlign: PropTypes.oneOf(['left', 'center', 'right']),
  /**
   * Set label position. "Center" is valid for circle progress only.
   */
  labelPositionY: PropTypes.oneOf(['top', 'bottom', 'center']),
  /**
   * Set subtitle for progress label
   */
  progressSupplementText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(
        PropTypes.shape({
          start: PropTypes.number,
          text: PropTypes.string,
        }),
    ),
  ]),
  /**
   * Add secondary progress line
   */
  secondaryProgress: PropTypes.number,
  /**
   * Add secondary progress line colour
   */
  secondaryProgressColor: PropTypes.string,
  /**
   * Progress type
   */
  progressType: PropTypes.oneOf(['circle', 'linear']),
};

const defaultProps = {
  color: '',
  startColor: DEFAULT_COLOR.START,
  endColor: DEFAULT_COLOR.END,
  dynamicColor: false,
  max: 100,
  min: 0,
  value: -1,
  determinate: false,
  progressLabel: false,
  labelAlign: 'left',
  labelPositionY: 'top',
  progressSupplementText: '',
  secondaryProgress: -1,
  secondaryProgressColor: '',
  progressType: 'linear',
};

export class ProgressBase extends Component {
  getSupplementText() {
    const text = this.props.progressSupplementText;

    if (typeof text === 'string') {
      return (
        <SupplementTextStyled progressType={this.props.progressType}>
          {text}
        </SupplementTextStyled>
      );
    } else {
      const progress = this.getProgress();
      let newText = '';
      for (let i = 0; i < text.length; i++) {
        if (text[i].start <= progress)
          newText = ` ${text[i].text}`;
      }

      return (
        <SupplementTextStyled progressType={this.props.progressType}>
          {newText}
        </SupplementTextStyled>
      );
    }
  }

  getValue() {
    return this.toAllowRange(this.props.value, this.props.min, this.props.max);
  }

  getProgress() {
    return 100 / this.props.max * this.getValue();
  }

  getSecondaryProgress() {
    let val = this.toAllowRange(
      this.props.secondaryProgress,
      this.props.min,
      this.props.max,
    );
    val *= this.props.max / 100;

    if (val < this.getProgress()) return this.getProgress();

    return val;
  }

  getSecondaryProgressColor() {
    if (this.props.secondaryProgressColor === '' && this.props.color) {
      const color = this.props.color;
      return colorLuminance(color, 0.4);
    }

    return this.props.secondaryProgressColor;
  }

  getProgressColor() {
    return this.props.color;
  }

  getPrimaryText() {
    if (!this.props.progressLabel) return null;

    return (
      <ValueLabelStyled progressType={this.props.progressType}>
        { `${this.getProgress()}%` }
      </ValueLabelStyled>
    );
  }

  getProgressLabel() {
    if (!this.props.progressLabel && !this.props.progressSupplementText)
      return null;

    return (
      <LabelWrapperStyled
        labelAlign={this.props.labelAlign}
        labelPositionY={this.props.labelPositionY}
        progressType={this.props.progressType}
      >
        {this.getPrimaryText()}
        {this.getSupplementText()}
      </LabelWrapperStyled>
    );
  }

  getDynamicColor() {
    if (this.props.dynamicColor) {
      return rgb2html(hsv2rgb(interpolateHSV(
        this.props.startColor,
        this.props.endColor,
        this.getProgress() / 100,
      )));
    }
    return '';
  }

  toAllowRange(value, min, max) {
    if (value < min) return min;
    if (value > max) return max;
    return value;
  }
  
  render() {
    return void 0;
  }
}

ProgressBase.propTypes = propTypes;
ProgressBase.defaultProps = defaultProps;
ProgressBase.displayName = 'ProgressBase';
