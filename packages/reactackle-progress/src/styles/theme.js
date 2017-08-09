import Color from 'color';

import {
  baseModule,
  fontSizeSmall,
  fontSizeBody,
  fontWeightNormal,
  fontWeightSemibold,
  colorPaletteGrey200,
  colorMain,
  extractThemeOrDefault,
} from 'reactackle-core';

export default {
  circle: {
    diameter: 88,
    labelCenteredPadding: baseModule,

    labelSpacing: {
      top: baseModule,
      bottom: baseModule,
    },

    valueLabel: {
      fontSize: fontSizeBody,
      fontWeight: fontWeightSemibold,
      lineHeight: 1.5,
    },

    supplementText: {
      fontSize: fontSizeSmall,
      fontWeight: fontWeightNormal,
      lineHeight: 1.25,
    },

    bgLine: {
      thickness: 4,
      colourDefault: colorPaletteGrey200,
    },

    mainLine: {
      thickness: 4,
      colourDefault: colorMain,
    },

    secondaryLine: {
      thickness: 4,
      colourDefault: colorMain,
      opacity: 0.15,
    },

    animation: () => props => ({
      svg: {
        transform: ['rotate(0deg)', 'rotate(1800deg)'],
        transitionDuration: [0, 10 * props.circleRotationTimeout],
        transitionTimingFunction: ['', 'linear'],
        computeTransform: {
          transitionDuration: stepValue =>
            `${stepValue * props.circleAnimationDuration}ms`,
        },
      },
      circle: {
        strokeDasharray: [props.minArcSize, props.maxArcSize, props.maxArcSize],
        strokeDashoffset: [0, 0, 1],
        transitionDuration: [
          props.arcShrinkTransitionTimeout,
          props.arcGrowTransitionTimeout,
          props.arcOffsetTransitionTimeout,
        ],
        computeTransform: {
          strokeDasharray: (stepValue, circleLength) =>
            `${stepValue * circleLength} ${circleLength}`,
          strokeDashoffset: (stepValue, circleLength) =>
            stepValue * -circleLength,
          transitionDuration: stepValue =>
            `${stepValue * props.circleAnimationDuration}ms`,
        },
      },
    }),
  },

  linear: {
    labelSpacing: {
      top: baseModule,
      bottom: baseModule,
    },

    valueLabel: {
      fontSize: fontSizeBody,
      fontWeight: fontWeightSemibold,
      lineHeight: 1.5,
    },

    supplementText: {
      fontSize: fontSizeSmall,
      fontWeight: fontWeightNormal,
      lineHeight: 1.25,
    },

    background: {
      thickness: 4,
      colourDefault: colorPaletteGrey200,
    },

    mainLine: {
      thickness: 4,
      colourDefault: colorMain,
    },

    secondaryLine: {
      thickness: 4,
      colourDefault: colorMain,
      opacity: 0.15,
    },
  },

  preloader: {
    backgroundColor: ({ theme }) =>
      Color(extractThemeOrDefault(theme).reactackle.colorPaletteGrey[100])
        .fade(0.4).string(),
    loaderMaxWidth: 300,
    width: '100%',
    height: 100,
  },
};

