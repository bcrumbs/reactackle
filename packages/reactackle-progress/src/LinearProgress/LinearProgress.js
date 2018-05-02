import React from 'react';
import { withTheme } from 'reactackle-core';
import { ProgressBase } from '../ProgressBase/ProgressBase';
import { ProgressBoxStyled } from '../styles/ProgressBoxStyled';
import { ContentWrapperStyled } from './styles/ContentWrapperStyled';
import { PrimaryLineStyled } from './styles/PrimaryLineStyled';
import { SecondaryLineStyled } from './styles/SecondaryLineStyled';
import { SplitterStyled } from './styles/SplitterStyled';
import { LinearProgressStyled } from './styles/LinearProgressStyled';

const propTypes = {
  ...ProgressBase.propTypes,
};

const defaultProps = {
  ...ProgressBase.defaultProps,
};

class _LinearProgress extends ProgressBase {
  _renderSecondaryProgress() {
    const { withSecondaryProgress, indeterminate } = this.props;

    if (indeterminate || !withSecondaryProgress) return null;

    const normalizedSecondaryProgress =
      this._getNormalizedSecondaryProgress();

    return (
      <SecondaryLineStyled
        style={{
          backgroundColor: this._getSecondaryProgressColor('linear').string(),
          transform: `scaleX(${normalizedSecondaryProgress})`,
        }}
      />
    );
  }

  render() {
    const { indeterminate } = this.props;

    const normalizedProgress = this._getNormalizedProgress();
    const progressStyle = {
      backgroundColor: this._getProgressColor('linear').string(),
    };

    if (!indeterminate)
      progressStyle.transform = `scaleX(${normalizedProgress})`;

    const progressSplitter = indeterminate
      ? <SplitterStyled />
      : null;

    return (
      <ProgressBoxStyled {...this._getAriaAttributes()}>
        <LinearProgressStyled>
          {this._renderLabel('linear')}
          <ContentWrapperStyled>
            {this._renderSecondaryProgress()}
            <PrimaryLineStyled
              indeterminate={indeterminate}
              style={progressStyle}
            >
              {progressSplitter}
            </PrimaryLineStyled>
          </ContentWrapperStyled>
        </LinearProgressStyled>
      </ProgressBoxStyled>
    );
  }
}

_LinearProgress.propTypes = propTypes;
_LinearProgress.defaultProps = defaultProps;
_LinearProgress.displayName = 'LinearProgress';

export const LinearProgress = withTheme(_LinearProgress);
