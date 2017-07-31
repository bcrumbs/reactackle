import Color from 'color';
import {
  fontWeightSemibold,
  bodyFontColor,
  baseModule,
  halfBaseModule,
  oneAndHalfBaseModule,
  doubleBaseModule,
  tripleBaseModule,
  colorPaletteGrey100,
  colorTransparent,
  colorMain,
  colorWhite,
  colorBlack,
  radiusDefault,
} from 'reactackle-core';

import {
  buttonConstants,
  buttonSizeConstants,
  buttonHeightConstants,
  buttonColorConstants,
} from './constants';

export default {
  functionFactor: buttonConstants.functionFactor,
  iconOpacity: 0.54,

  borderRadiusDefault: radiusDefault,
  borderStyle: 'solid',
  borderWidth: 1,

  disabled: {
    backgroundColor: colorPaletteGrey100,
    fontColor: ({ fontColor }) => fontColor.medium,
  },

  text: {
    fontSize: buttonSizeConstants.normal.fontSize,
    fontFamily: ({ body }) => body.fontFamily,
    fontAlign: ({ direction }) => direction.float,
    fontWeight: fontWeightSemibold,
    lineHeight: buttonSizeConstants.normal.lineHeight,

    textTransform: 'uppercase',

    colorLight: colorWhite,
    colorDark: colorBlack,
  },

  subtitle: {
    fontColor: 'inherit',
    fontOpacity: 0.9,
    fontWeight: ({ fontWeight }) => fontWeight.normal,
    textTransform: 'none',

    subtitleTitleSpacing: halfBaseModule,
  },

  size: {
    small: {
      fontSize: buttonSizeConstants.small.fontSize,
      lineHeight: buttonSizeConstants.small.lineHeight,

      paddingY: buttonSizeConstants.small.paddingY,
      paddingX: baseModule,
      narrowPaddingX: 0,
      roundedPaddingX: doubleBaseModule,

      textPaddingY: buttonSizeConstants.small.textPaddingY,
      textPaddingX: baseModule,
      minHeight: buttonHeightConstants.buttonSmallMinHeight,

      subtitleFontSize: buttonSizeConstants.small.subtitleFontSize,
      subtitleLineHeight: buttonSizeConstants.small.subtitleLineHeight,
    },

    normal: {
      fontSize: buttonSizeConstants.normal.fontSize + 1,
      lineHeight: buttonSizeConstants.normal.lineHeight,
      paddingX: baseModule,
      narrowPaddingX: 0,
      roundedPaddingX: doubleBaseModule,
      paddingY: buttonSizeConstants.normal.paddingY,
      textPaddingY: buttonSizeConstants.normal.textPaddingY,
      textPaddingX: baseModule,
      minHeight: buttonHeightConstants.buttonNormalMinHeight,

      subtitleFontSize: buttonSizeConstants.normal.subtitleFontSize,
      subtitleLineHeight: buttonSizeConstants.normal.subtitleLineHeight,
    },

    large: {
      fontSize: buttonSizeConstants.large.fontSize,
      lineHeight: buttonSizeConstants.large.lineHeight,
      paddingX: oneAndHalfBaseModule,
      narrowPaddingX: baseModule,
      roundedPaddingX: tripleBaseModule,
      paddingY: buttonSizeConstants.large.paddingY,
      textPaddingY: buttonSizeConstants.large.textPaddingY,
      textPaddingX: baseModule,
      minHeight: buttonHeightConstants.buttonLargeMinHeight,

      subtitleFontSize: buttonSizeConstants.large.subtitleFontSize,
      subtitleLineHeight: buttonSizeConstants.large.lineHeight,
    },

    inline: {
      fontSize: 'inherit',
      lineHeight: 'inherit',
      paddingX: '0.75em',
      narrowPaddingX: '0.5em',
      paddingY: 0,
      textPaddingY: '0.3em',
      textPaddingX: '0.5em',
      minHeight: 0,

      subtitleFontSize: 'inherit',
      subtitleLineHeight: 'inherit',
    },

    link: {
      fontSize: 'inherit',
      lineHeight: 'inherit',
      paddingX: 0,
      narrowPaddingX: 0,
      paddingY: 0,
      smallPaddingY: halfBaseModule,
      textPaddingY: 0,
      textPaddingX: 0,
      minHeight: 0,

      subtitleFontSize: 'inherit',
      subtitleLineHeight: 'inherit',
    },
  },

  colorScheme: {
    flat: {
      backgroundColor: colorTransparent,
      fontColor: bodyFontColor,

      hover: {
        backgroundColor: ({ color }) => Color(color.black).fade(0.9),
        fontColor: bodyFontColor,
      },

      focus: {
        backgroundColor: ({ color }) => Color(color.black).fade(0.8),
        fontColor: bodyFontColor,
      },
    },

    flatLight: {
      backgroundColor: colorTransparent,
      fontColor: colorWhite,

      hover: {
        backgroundColor: ({ color }) => Color(color.white).fade(0.8),
        fontColor: colorWhite,
      },

      focus: {
        backgroundColor: ({ color }) => Color(color.white).fade(0.6),
        fontColor: colorWhite,
      },
    },

    white: {
      backgroundColor: colorWhite,
      fontColor: colorMain,

      hover: {
        backgroundColor: colorPaletteGrey100,
        fontColor: colorMain,
      },

      focus: {
        backgroundColor: colorPaletteGrey100,
        fontColor: colorMain,
      },
    },

    primary: {
      backgroundColor: buttonColorConstants.primary.backgroundColor,
      fontColor: buttonColorConstants.primary.fontColor,

      hover: {
        backgroundColor: base =>
          Color(buttonColorConstants.primary.backgroundColor(base)).darken(
            buttonConstants.functionFactor,
          ),
        fontColor: buttonColorConstants.primary.fontColor,
      },

      focus: {
        backgroundColor: base =>
          Color(buttonColorConstants.primary.backgroundColor(base)).darken(
            buttonConstants.functionFactor,
          ),
        fontColor: buttonColorConstants.primary.fontColor,
      },
    },

    secondary: {
      backgroundColor: buttonColorConstants.secondary.backgroundColor,
      fontColor: buttonColorConstants.secondary.fontColor,

      hover: {
        backgroundColor: base =>
          Color(buttonColorConstants.secondary.backgroundColor(base)).darken(
            buttonConstants.functionFactor,
          ),
        fontColor: buttonColorConstants.secondary.fontColor,
      },

      focus: {
        backgroundColor: base =>
          Color(buttonColorConstants.secondary.backgroundColor(base)).darken(
            buttonConstants.functionFactor,
          ),
        fontColor: buttonColorConstants.secondary.fontColor,
      },
    },

    alert: {
      backgroundColor: buttonColorConstants.alert.backgroundColor,
      fontColor: buttonColorConstants.alert.fontColor,

      hover: {
        backgroundColor: base =>
          Color(buttonColorConstants.alert.backgroundColor(base)).darken(
            buttonConstants.functionFactor,
          ),
        fontColor: buttonColorConstants.alert.fontColor,
      },

      focus: {
        backgroundColor: base =>
          Color(buttonColorConstants.alert.backgroundColor(base)).darken(
            buttonConstants.functionFactor,
          ),
        fontColor: buttonColorConstants.alert.fontColor,
      },
    },

    success: {
      backgroundColor: buttonColorConstants.success.backgroundColor,
      fontColor: buttonColorConstants.success.fontColor,

      hover: {
        backgroundColor: base =>
          Color(buttonColorConstants.success.backgroundColor(base)).darken(
            buttonConstants.functionFactor,
          ),
        fontColor: buttonColorConstants.success.fontColor,
      },

      focus: {
        backgroundColor: base =>
          Color(buttonColorConstants.success.backgroundColor(base)).darken(
            buttonConstants.functionFactor,
          ),
        fontColor: buttonColorConstants.success.fontColor,
      },
    },

    warning: {
      backgroundColor: buttonColorConstants.warning.backgroundColor,
      fontColor: buttonColorConstants.warning.fontColor,

      hover: {
        backgroundColor: base =>
          Color(buttonColorConstants.warning.backgroundColor(base)).darken(
            buttonConstants.functionFactor,
          ),
        fontColor: buttonColorConstants.warning.fontColor,
      },

      focus: {
        backgroundColor: base =>
          Color(buttonColorConstants.warning.backgroundColor(base)).darken(
            buttonConstants.functionFactor,
          ),
        fontColor: buttonColorConstants.warning.fontColor,
      },
    },

    info: {
      backgroundColor: buttonColorConstants.info.backgroundColor,
      fontColor: buttonColorConstants.info.fontColor,

      hover: {
        backgroundColor: base =>
          Color(buttonColorConstants.info.backgroundColor(base)).darken(
            buttonConstants.functionFactor,
          ),
        fontColor: buttonColorConstants.info.fontColor,
      },

      focus: {
        backgroundColor: base =>
          Color(buttonColorConstants.info.backgroundColor(base)).darken(
            buttonConstants.functionFactor,
          ),
        fontColor: buttonColorConstants.info.fontColor,
      },
    },

    link: {
      backgroundColor: base =>
        Color(buttonColorConstants.link.backgroundColor(base)).darken(
          buttonConstants.functionFactor,
        ),
      fontColor: buttonColorConstants.link.fontColor,
      textAlign: 'left',
      fontWeight: fontWeightSemibold,
      textTransform: 'none',

      hover: {
        textDecoration: 'underline',
        backgroundColor: base =>
          Color(buttonColorConstants.link.backgroundColor(base)).darken(
            buttonConstants.functionFactor,
          ),
        fontColor: buttonColorConstants.link.fontColor,
      },

      focus: {
        backgroundColor: base =>
          Color(buttonColorConstants.link.backgroundColor(base)).darken(
            buttonConstants.functionFactor,
          ),
        fontColor: buttonColorConstants.link.fontColor,
      },
    },
  },
};
