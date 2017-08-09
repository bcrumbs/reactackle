import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'reactackle-core';
import { ProgressBase } from '../ProgressBase/ProgressBase';
import { ProgressBoxStyled } from '../styles/ProgressBoxStyled';
import { SecondaryLineStyled } from './styles/SecondaryLineStyled';
import { ContentWrapperStyled } from './styles/ContentWrapperStyled';
import { CircleBoxStyled } from './styles/CircleBoxStyled';
import { BgLineStyled } from './styles/BgLineStyled';
import { PrimaryLineStyled } from './styles/PrimaryLineStyled';

const propTypes = {
  ...ProgressBase.propTypes,
  /**
   * Set text align for progress label
   */
  labelAlign: PropTypes.oneOf(['left', 'center', 'right']),
  /**
   * Progress type
   */
  progressType: PropTypes.oneOf(['circle', 'linear']),
  /**
   * Specifies current value to calculate progress from
   */
  value: PropTypes.number,
  /**
   * Set circle diameter
   */
  circleSize: PropTypes.number,
  /**
   * Set progress line thickness
   */
  strokeSize: PropTypes.number,
  /**
   * Define animation duration
   */
  circleAnimationDuration: PropTypes.number,
  /**
   * Set rotation timeout
   */
  circleRotationTimeout: PropTypes.number,
  /**
   * Set rotation pause timeout
   */
  circleRotationPauseTimeout: PropTypes.number,
  /**
   * Minimum arc size used for animation
   */
  minArcSize: PropTypes.number,
  /**
   * Maximum arc size used for animation
   */
  maxArcSize: PropTypes.number,
  /**
   * Timeout for arc grow animation
   */
  arcGrowTimeout: PropTypes.number,
  /**
   * Timeout for arc shrink animation
   */
  arcShrinkTimeout: PropTypes.number,
  /**
   * Arc offset animation timeout
   */
  arcOffsetTransitionTimeout: PropTypes.number,
  /**
   * Arc grow transition timeout
   */
  arcGrowTransitionTimeout: PropTypes.number,
  /**
   * Arc shrink transition timeout
   */
  arcShrinkTransitionTimeout: PropTypes.number,
  /**
   * Value for aria-valuetext attr
   */
  ariaValueText: PropTypes.string,
};

// TODO Дефолтные значения надо брать из темы, в т.ч. использовать их в
// рассчетах
const defaultProps = {
  ...ProgressBase.defaultProps,
  labelAlign: 'center',
  value: -1,
  circleSize: 100,
  strokeSize: 10,
  circleAnimationDuration: 1,
  circleRotationTimeout: 1000,
  circleRotationPauseTimeout: 50,
  minArcSize: 0.02,
  maxArcSize: 0.75,
  arcGrowTimeout: 650,
  arcShrinkTimeout: 150,
  arcOffsetTransitionTimeout: 850,
  arcGrowTransitionTimeout: 750,
  arcShrinkTransitionTimeout: 2,
  progressType: 'circle',
  ariaValueText: '',
};

class CircleProgress extends ProgressBase {
  constructor(props) {
    super(props);
    
    this._circleAnimTimer = null;
    this._svgAnimTimer = null;
    this._svgAnimationSecondTimer = null;
    this.state = {
      svgStyle: {},
      circleStyle: {},
    };
    this._svgAnimation = this._svgAnimation.bind(this);
  }
  
  componentDidMount() {
    if (!this.props.determinate)
      this.initAnimate();
  }

  componentWillUnmount() {
    if (!this.props.determinate)
      this.stopAnimate();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.determinate !== this.props.determinate) {
      if (this.props.determinate)
        this.stopAnimate();
      else
        this.initAnimate();
    }
  }
  
  _setSvgAnimationTimeout() {
    this._clearSvgAnimationTimer();
    this._svgAnimTimer = setTimeout(
      this._svgAnimation,
      this.props.circleRotationTimeout * 10 * this.props.circleAnimationDuration
        + this.props.circleRotationPauseTimeout,
    );
  }
  
  _clearSvgAnimationTimer() {
    if (this._svgAnimTimer)
      clearTimeout(this._svgAnimTimer);
    this._svgAnimTimer = null;
  }
  
  _setSvgAnimationSecondTimeout() {
    this._clearSvgAnimationSecondTimer();
    this._svgAnimationSecondTimer = setTimeout(() => this._animate({
      name: 'svg',
      types: ['transform', 'transitionDuration', 'transitionTimingFunction'],
      step: 1,
    }), this.props.circleRotationPauseTimeout);
  }
  
  _clearSvgAnimationSecondTimer() {
    if (this._svgAnimationSecondTimer)
      clearTimeout(this._svgAnimationSecondTimer);
    this._svgAnimationSecondTimer = null;
  }
  
  _setCircleAnimationTimeout(step) {
    this._clearCircleAnimationTimer();
    this._circleAnimTimer = setTimeout(
      () => this._circleAnimation(step + 1),
      (step ? this.props.arcGrowTimeout : this.props.arcShrinkTimeout)
        * this.props.circleAnimationDuration,
    );
  }
  
  _clearCircleAnimationTimer() {
    if (this._circleAnimTimer)
      clearTimeout(this._circleAnimTimer);
    this._circleAnimTimer = null;
  }
  
  initAnimate() {
    this._circleAnimation();
    this._svgAnimation();
  }

  stopAnimate() {
    this._clearSvgAnimationTimer();
    this._clearSvgAnimationSecondTimer();
    this._clearCircleAnimationTimer();
  }

  _animate({ name, types, step = 0, circleLength }) {
    const newStyle = {};
    const animationConfig =
      this.props.theme.reactackle.components.progress.circle.animation(
        this.props,
      );
    types.forEach(type => {
      let value = animationConfig[name][type][step];
      const { computeTransform } = animationConfig[name];

      if (computeTransform && computeTransform[type])
        value = computeTransform[type](value, circleLength);
      
      newStyle[type] = value;
    });

    this.setState({
      [`${name}Style`]: newStyle,
    });
  }

  _svgAnimation() {
    const { value } = this.props;

    if (value > -1) return;

    this._animate({
      name: 'svg',
      types: ['transform', 'transitionDuration', 'transitionTimingFunction'],
    });
    
    this._setSvgAnimationSecondTimeout();

    this._setSvgAnimationTimeout();
  }

  _circleAnimation(animationStep = 0) {
    if (this.props.value > -1) return;
    
    const step = animationStep % 3;
    const circleLength = this._getCircleLength();
    
    this._animate({
      name: 'circle',
      types: ['strokeDasharray', 'strokeDashoffset', 'transitionDuration'],
      step: step > 1 ? 2 : step,
      circleLength,
    });
    
    this._setCircleAnimationTimeout(step);
  }

  _getCircleLength() {
    const { circleSize, strokeSize } = this.props,
      circleRadius = circleSize / 2 - strokeSize / 2;

    return 2 * circleRadius * Math.PI.toFixed(20);
  }

  _getSecondaryProgressCircle() {
    const { secondaryProgress, strokeSize, circleSize } = this.props;

    if (secondaryProgress < 0) return null;

    const circleLength = this._getCircleLength(),
      circleRadius = circleSize / 2 - strokeSize / 2,
      circleCenter = circleSize / 2,
      secondaryProgressLength = this.getSecondaryProgress() / 100
        * circleLength,
      progressSecondaryStyle = {
        strokeDasharray: `${secondaryProgressLength} ${circleLength}`,
        strokeWidth: strokeSize,
        stroke: this.getSecondaryProgressColor(),
      };

    return (
      <SecondaryLineStyled
        r={circleRadius}
        cx={circleCenter}
        cy={circleCenter}
        style={progressSecondaryStyle}
        customThickness={strokeSize}
      />
    );
  }

  render() {
    const { circleSize, strokeSize, value } = this.props,
      viewBox = `0 0 ${circleSize} ${circleSize}`,
      circleRadius = circleSize / 2 - strokeSize / 2,
      circleCenter = circleSize / 2,
      circleLength = this._getCircleLength(),
      progressLength = this.getProgress() / 100 * circleLength,
      bgStyle = {
        strokeDasharray: `${circleLength} ${circleLength}`,
        strokeWidth: strokeSize,
      };
    
    let progressAdditionalStyle = {};
    if (value === -1) {
      progressAdditionalStyle = {
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      };
    } else if (value > -1) {
      progressAdditionalStyle = {
        strokeDasharray: `${progressLength} ${circleLength}`,
      };
    }

  
    const circleBoxStyle = {
      transform: 'rotate(-90deg)',
      shapeRendering: 'geometricPrecision',
      ...this.state.svgStyle,
    };
    const progressPrimaryStyle = {
      stroke: this.getProgressColor() || this.getDynamicColor(),
      strokeWidth: strokeSize,
      ...progressAdditionalStyle,
      ...this.state.circleStyle,
    };

    return (
      <ProgressBoxStyled
        role="progressbar"
        aria-valuenow={value > -1 ? value : ''}
        aria-valuemin={this.props.min}
        aria-valuemax={this.props.max}
        aria-valuetext={this.props.ariaValueText
          || `${value} ${this.props.progressSupplementText}`}
      >
        {this.getProgressLabel()}

        <ContentWrapperStyled customDiameter={circleSize / 2}>
          <CircleBoxStyled
            viewBox={viewBox}
            customDiameter={circleSize / 2}
            style={circleBoxStyle}
          >

            <BgLineStyled
              r={circleRadius}
              cx={circleCenter}
              cy={circleCenter}
              style={bgStyle}
              customThickness={strokeSize}
            />

            { this._getSecondaryProgressCircle() }

            <PrimaryLineStyled
              r={circleRadius}
              cx={circleCenter}
              cy={circleCenter}
              style={progressPrimaryStyle}
              customThickness={strokeSize}
            />
          </CircleBoxStyled>
        </ContentWrapperStyled>
      </ProgressBoxStyled>
    );
  }
}

CircleProgress.propTypes = propTypes;
CircleProgress.defaultProps = defaultProps;
CircleProgress.displayName = 'CircleProgress';

export default withTheme(CircleProgress);
