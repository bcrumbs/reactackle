import {
  baseModule,
  oneAndHalfBaseModule,
  colorMain,
  colorSecondary,
  colorTransparent,
  fontSize,
} from 'reactackle-core';

export const buttonConstants = {
  functionFactor: 0.15,
};

export const buttonSizeConstants = {
  small: {
    lineHeight: 1,
    fontSize: fontSize['-1'],
    paddingY: 0,
    textPaddingY: baseModule,

    subtitleFontSize: fontSize['-1'],
    subtitleLineHeight: 1,
  },
  normal: {
    lineHeight: 1.25,
    fontSize: fontSize[0],
    paddingY: 0,
    textPaddingY: baseModule,

    subtitleFontSize: fontSize[0],
    subtitleLineHeight: 1.25,
  },
  large: {
    lineHeight: 1.15,
    fontSize: fontSize[1],
    paddingY: 0,
    textPaddingY: oneAndHalfBaseModule,

    subtitleFontSize: fontSize[1],
    subtitleLineHeight: 1.15,
  },
};

export const buttonHeightConstants = {
  buttonSmallMinHeight: base =>
    buttonSizeConstants.small.lineHeight * buttonSizeConstants.small.fontSize +
    (buttonSizeConstants.small.paddingY +
      buttonSizeConstants.small.textPaddingY(base)) *
      2,

  buttonNormalMinHeight: base =>
    buttonSizeConstants.normal.lineHeight *
      buttonSizeConstants.normal.fontSize +
    (buttonSizeConstants.normal.paddingY +
      buttonSizeConstants.normal.textPaddingY(base)) *
      2,

  buttonLargeMinHeight: base =>
    buttonSizeConstants.large.lineHeight * buttonSizeConstants.large.fontSize +
    (buttonSizeConstants.large.paddingY +
      buttonSizeConstants.large.textPaddingY(base)) *
      2,
};

export const buttonColorConstants = {
  primary: {
    backgroundColor: colorMain,
    fontColor: ({ color }) => color.mainFgTextColor,
  },

  secondary: {
    backgroundColor: colorSecondary,
    fontColor: ({ color }) => color.secondaryFgTextColor,
  },

  alert: {
    backgroundColor: ({ color }) => color.alert,
    fontColor: ({ color }) => color.alertFgTextColor,
  },

  success: {
    backgroundColor: ({ color }) => color.success,
    fontColor: ({ color }) => color.successFgTextColor,
  },

  warning: {
    backgroundColor: ({ color }) => color.warning,
    fontColor: ({ color }) => color.warningFgTextColor,
  },

  info: {
    backgroundColor: ({ color }) => color.info,
    fontColor: ({ color }) => color.infoFgTextColor,
  },

  link: {
    backgroundColor: colorTransparent,
    fontColor: ({ colorAnchor }) => colorAnchor,
  },
};
