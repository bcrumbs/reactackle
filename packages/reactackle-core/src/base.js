import {
  grid,
  basicColors,
  themeColors,
  greyPalette,
  fontSize,
  fontFamily,
  fontWeight,
  body,
  colorsFgCalculated,
} from './constants/constants';

export default {
  baseModule: 8,
  contentWidth: 1360,
  totalColumns: grid.totalColumns,

  radiusDefault: 2,
  radiusRounded: 1000,

  /**
   * breakpoints contain lower bounds of screen sizes
   * ex. if you want some div to be 100% width for small screen (<60em) and
   * take 50% width on medium up screens
   * @example const boxStyled = styled.div css`
   *  width: 100%;
   *  ${media(medium)`width: 50%;`}
   * `
   */
  breakpoints: {
    xsmall: '0',
    small: '30em',
    medium: '60em',
    large: '80em',
    xlarge: '90em',
    xxlarge: '120em',
  },

  breakpointsEmBase: 16,

  color: {
    white: basicColors.white,
    black: basicColors.black,
    transparent: basicColors.transparent,

    main: themeColors.main,
    mainFgTextColor: colorsFgCalculated.main,
    secondary: themeColors.secondary,
    secondaryFgTextColor: colorsFgCalculated.secondary,

    alert: themeColors.alert,
    alertFgTextColor: colorsFgCalculated.alert,
    warning: themeColors.warning,
    warningFgTextColor: colorsFgCalculated.warning,
    error: themeColors.alert,
    errorFgTextColor: colorsFgCalculated.alert,
    success: themeColors.success,
    successFgTextColor: colorsFgCalculated.success,
    info: themeColors.info,
    infoFgTextColor: colorsFgCalculated.info,
  },

  colorPaletteGrey: { ...greyPalette },

  colorBorder: greyPalette[300],
  colorAnchor: basicColors.darkblue,

  colorBrand: {
    facebook: '#3b5998',
    vkontakte: '#45668e',
    googlePlus: '#dd4b39',
  },

  fontFamily: { ...fontFamily },

  fontWeight: { ...fontWeight },

  fontSize: { ...fontSize },

  fontColor: {
    light: greyPalette[300],
    medium: greyPalette[500],
  },

  direction: {
    text: 'ltr',
    float: 'left',
  },

  zIndex: {
    moon: 9999,
    tooltip: 9990,
    alertDesktop: 9000,
    popup: 8700,
    modal: 8500,
    overlay: 8000,
    dropdown: 7000,
    alertMobile: 5000,
    nav: 500,
    base: 1,
  },

  body: {
    backgroundColor: body.backgroundColor,
    fontColor: body.fontColor,
    fontColorAlt: body.fontColorAlt,
    fontFamily: 'sansSerif', // place here a key of fontFamily collection
    fontWeight: fontWeight.normal,
    lineHeight: 1.5,
  },
};
