'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'reactackle-core';
import { ProgressBase } from '../ProgressBase/ProgressBase';
import { ProgressBoxStyled } from '../styles/ProgressBoxStyled';
import { SecondaryLineStyled } from './styles/SecondaryLineStyled';
import { ContentWrapperStyled } from './styles/ContentWrapperStyled';
import { CircleWrapperStyled } from './styles/CircleWrapperStyled';
import { CircleBoxStyled } from './styles/CircleBoxStyled';
import { BgLineStyled } from './styles/BgLineStyled';
import { PrimaryLineStyled } from './styles/PrimaryLineStyled';

const propTypes = {
  ...ProgressBase.propTypes,
  /**
   * Set circle diameter
   */
  circleSize: PropTypes.number,
  /**
   * Set progress line thickness
   */
  strokeSize: PropTypes.number,
};

const defaultProps = {
  ...ProgressBase.defaultProps,
  labelPositionX: 'center',
  circleSize: 0,
  strokeSize: 0,
};

class _CircleProgress extends ProgressBase {
  get theme() {
    return this.props.theme.reactackle.components.progress.circle;
  }

  get circleSize() {
    return this.props.circleSize || this.theme.circleSize;
  }

  get strokeSize() {
    return this.props.strokeSize || this.theme.strokeSize;
  }

  get circleRadius() {
    return this.circleSize / 2 - this.strokeSize / 2;
  }

  get circleLength() {
    return 2 * this.circleRadius * Math.PI;
  }

  get circleCenter() {
    return this.circleSize / 2;
  }

  _renderSecondaryProgressCircle() {
    const { indeterminate, withSecondaryProgress } = this.props;

    if (indeterminate || !withSecondaryProgress) return null;

    const normalizedSecondaryProgress = this._getNormalizedSecondaryProgress();
    const circleLength = this.circleLength;
    const circleRadius = this.circleRadius;
    const circleCenter = this.circleCenter;
    const secondaryProgressLength = normalizedSecondaryProgress * circleLength;
    
    const progressSecondaryStyle = {
      stroke: this._getSecondaryProgressColor('circle').string(),
      strokeDasharray: `${secondaryProgressLength} ${circleLength}`,
    };

    return (
      <SecondaryLineStyled
        r={circleRadius}
        cx={circleCenter}
        cy={circleCenter}
        customThickness={this.strokeSize}
        style={progressSecondaryStyle}
      />
    );
  }

  render() {
    const { indeterminate } = this.props;

    const normalizedProgress = this._getNormalizedProgress();
    const viewBox = `0 0 ${this.circleSize} ${this.circleSize}`;
    const circleRadius = this.circleRadius;
    const circleCenter = this.circleCenter;
    const circleLength = this.circleLength;
    const progressLength = normalizedProgress * circleLength;
    const bgStyle = {
      strokeDasharray: `${circleLength} ${circleLength}`,
    };
    
    let progressAdditionalStyle;
    if (indeterminate) {
      progressAdditionalStyle = {
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      };
    } else {
      progressAdditionalStyle = {
        strokeDasharray: `${progressLength} ${circleLength}`,
      };
    }
  
    const progressPrimaryStyle = {
      stroke: this._getProgressColor('circle').string(),
      ...progressAdditionalStyle,
    };

    const strokeSize = this.strokeSize;

    return (
      <ProgressBoxStyled {...this._getAriaAttributes()}>
        {this._renderLabel('circle')}
        <ContentWrapperStyled customDiameter={this.circleSize}>
          <CircleWrapperStyled>
            <CircleBoxStyled
              viewBox={viewBox}
              customDiameter={this.circleSize}
              shapeRendering="geometricPrecision"
              indeterminate={this.props.indeterminate}
            >
              <BgLineStyled
                r={circleRadius}
                cx={circleCenter}
                cy={circleCenter}
                style={bgStyle}
                customThickness={strokeSize}
              />
              {this._renderSecondaryProgressCircle()}
              <PrimaryLineStyled
                r={circleRadius}
                cx={circleCenter}
                cy={circleCenter}
                customThickness={strokeSize}
                style={progressPrimaryStyle}
                circleLength={this.circleLength}
                indeterminate={this.props.indeterminate}
              />
            </CircleBoxStyled>
          </CircleWrapperStyled>
        </ContentWrapperStyled>
      </ProgressBoxStyled>
    );
  }
}

_CircleProgress.propTypes = propTypes;
_CircleProgress.defaultProps = defaultProps;
_CircleProgress.displayName = 'CircleProgress';

export const CircleProgress = withTheme(_CircleProgress);
