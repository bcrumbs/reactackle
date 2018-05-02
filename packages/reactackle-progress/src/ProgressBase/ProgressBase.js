import React, { Component } from 'react';
import { minMax } from 'reactackle-core';
import PropTypes from 'prop-types';
import Color from 'color';
import { LabelWrapperStyled } from './styles/LabelWrapperStyled';
import { SupplementTextStyled } from './styles/SupplementTextStyled';
import { ValueLabelStyled } from './styles/ValueLabelStyled';

const propTypes = {
  /*
   * Progress line will change its colour accordingly to progress
   */
  dynamicColor: PropTypes.bool,
  /*
   * Specifies progress mode. Indeterminate one doesn't have value.
   */
  indeterminate: PropTypes.bool,
  /*
   * Specifies max value to calculate progress from
   */
  max: PropTypes.number,
  /*
   * Specifies min value to calculate progress from
   */
  min: PropTypes.number,
  /*
   * Specifies current value to calculate progress from
   */
  value: PropTypes.number,
  /*
   * Shows a progress label with the exact value (=shows this.props.value)
   * Has priority over progressLabel
   */
  exactProgressLabel: PropTypes.bool,
  /*
   * Show postfix after exact progress label
   */
  labelPostfix: PropTypes.string,
  /*
   * Shows a progress label with the percentage value
   */
  progressLabel: PropTypes.bool,
  /*
   * Set text align for progress label
   */
  labelPositionX: PropTypes.oneOf(['left', 'center', 'right']),
  /*
   * Set label position. "Center" is valid for circle progress only.
   */
  labelPositionY: PropTypes.oneOf(['top', 'center', 'bottom']),
  /*
   * Set subtitle for progress label
   */
  subtitle: PropTypes.string,
  /*
   * Add secondary progress line
   */
  withSecondaryProgress: PropTypes.bool, // eslint-disable-line react/no-unused-prop-types
  /*
   * Value for secondary progress
   */
  secondaryProgressValue: PropTypes.number,
  /**
   * Value for aria-valuetext attr
   */
  ariaValueText: PropTypes.string,
  /**
   * Theme provided by withTheme HOC
   */
  theme: PropTypes.object.isRequired,
};

const defaultProps = {
  dynamicColor: false,
  indeterminate: false,
  max: 100,
  min: 0,
  value: 0,
  exactProgressLabel: false,
  labelPostfix: '',
  progressLabel: false,
  labelPositionX: 'left',
  labelPositionY: 'top',
  subtitle: '',
  withSecondaryProgress: false,
  secondaryProgressValue: 0,
  ariaValueText: '',
};

const normalizeValue = (value, min, max) =>
  (minMax(value, min, max) - min) / (max - min);

export class ProgressBase extends Component {
  _getNormalizedProgress() {
    const { value, min, max } = this.props;
    
    return normalizeValue(value, min, max);
  }

  _getNormalizedSecondaryProgress() {
    const { secondaryProgressValue, min, max } = this.props;

    const value = normalizeValue(secondaryProgressValue, min, max);
    const progress = this._getNormalizedProgress();

    return value < progress ? progress : value;
  }

  _getProgressColor(progressType) {
    const { dynamicColor, theme } = this.props;

    const componentTheme = theme.reactackle.components.progress;
    const colors = componentTheme[progressType].mainLine;
    const { startColor, endColor, color } = colors;

    if (dynamicColor) {
      const start = Color(startColor);
      const end = Color(endColor);
      const progress = this._getNormalizedProgress();

      return start.mix(end, progress);
    } else {
      return Color(color);
    }
  }

  _getSecondaryProgressColor(progressType) {
    const { theme } = this.props;

    const componentTheme = theme.reactackle.components.progress;
    const { color, opacity } = componentTheme[progressType].secondaryLine;

    return color
      ? Color(color)
      : this._getProgressColor(progressType).fade(1 - opacity);
  }

  _getAriaAttributes() {
    const {
      indeterminate,
      min,
      max,
      value,
      subtitle,
      ariaValueText,
    } = this.props;

    const ret = {
      role: 'progressbar',
    };

    const valueText = ariaValueText || subtitle;
    if (valueText) ret['aria-valuetext'] = valueText;

    if (!indeterminate) {
      ret['aria-valuenow'] = String(value);
      ret['aria-valuemin'] = String(min);
      ret['aria-valuemax'] = String(max);
    }

    return ret;
  }

  _renderPrimaryText(progressType) {
    const {
      progressLabel,
      exactProgressLabel,
      value,
      labelPostfix,
    } = this.props;
    let text;

    if (!progressLabel && !exactProgressLabel) return null;

    if (exactProgressLabel) {
      text = `${value}${labelPostfix}`;
    } else {
      const progressPercent = Math.round(this._getNormalizedProgress() * 100);
      text = `${progressPercent}%`;
    }

    return (
      <ValueLabelStyled progressType={progressType}>
        {text}
      </ValueLabelStyled>
    );
  }

  _renderSubtitle(progressType) {
    const { subtitle, children } = this.props;

    if (!children && !subtitle) return null;

    return (
      <SupplementTextStyled progressType={progressType}>
        {children && subtitle ? <div>{subtitle}</div> : subtitle}
        {children}
      </SupplementTextStyled>
    );
  }

  _renderLabel(progressType) {
    const {
      progressLabel,
      exactProgressLabel,
      subtitle,
      labelPositionX,
      labelPositionY,
    } = this.props;

    if (!progressLabel && !exactProgressLabel && !subtitle) return null;

    return (
      <LabelWrapperStyled
        labelAlign={labelPositionX}
        labelPositionY={labelPositionY}
        progressType={progressType}
      >
        {this._renderPrimaryText(progressType)}
        {this._renderSubtitle(progressType)}
      </LabelWrapperStyled>
    );
  }
}

ProgressBase.propTypes = propTypes;
ProgressBase.defaultProps = defaultProps;
ProgressBase.displayName = 'ProgressBase';
