/** Base Module Calculations */
export const baseModule = ({ baseModule }) => baseModule;
export const halfBaseModule = ({ baseModule }) => baseModule * 0.5;
export const oneAndHalfBaseModule = ({ baseModule }) => baseModule * 1.5;
export const doubleBaseModule = ({ baseModule }) => baseModule * 2;
export const twoAndHalfBaseModule = ({ baseModule }) => baseModule * 2.5;
export const tripleBaseModule = ({ baseModule }) => baseModule * 3;

const multiplierFunctions = Object.create(null);

export const bmodule = multiplier => {
  if (!multiplierFunctions[multiplier]) {
    multiplierFunctions[multiplier] =
      ({ baseModule }) => baseModule * multiplier;
  }

  return multiplierFunctions[multiplier];
};

/** Size parameters */
export const contentWidth = ({ contentWidth }) => contentWidth;
export const totalColumns = ({ totalColumns }) => totalColumns;

export const radiusDefault = ({ radiusDefault }) => radiusDefault;
export const radiusRounded = ({ radiusRounded }) => radiusRounded;

/** Breakpoints */
export const breakpointXsmall = ({ breakpoints }) => breakpoints.xsmall;
export const breakpointSmall = ({ breakpoints }) => breakpoints.small;
export const breakpointMedium = ({ breakpoints }) => breakpoints.medium;
export const breakpointLarge = ({ breakpoints }) => breakpoints.large;
export const breakpointXlarge = ({ breakpoints }) => breakpoints.xlarge;
export const breakpointXxlarge = ({ breakpoints }) => breakpoints.xxlarge;

/** Colors */
export const colorWhite = ({ color }) => color.white;
export const colorBlack = ({ color }) => color.black;
export const colorTransparent = ({ color }) => color.transparent;

export const colorMain = ({ color }) => color.main;
export const colorMainForeground = ({ color }) => color.mainFgTextColor;
export const colorSecondary = ({ color }) => color.secondary;
export const colorSecondaryForeground = ({ color }) =>
  color.secondaryFgTextColor;
export const colorAlert = ({ color }) => color.alert;
export const colorAlertForeground = ({ color }) => color.alertFgTextColor;
export const colorWarning = ({ color }) => color.warning;
export const colorWarningForeground = ({ color }) => color.warningFgTextColor;
export const colorError = ({ color }) => color.alert;
export const colorErrorForeground = ({ color }) => color.alertFgTextColor;
export const colorSuccess = ({ color }) => color.success;
export const colorSuccessForeground = ({ color }) => color.successFgTextColor;
export const colorInfo = ({ color }) => color.info;
export const colorInfoForeground = ({ color }) => color.infoFgTextColor;

export const colorPaletteGrey50 = ({ colorPaletteGrey }) =>
  colorPaletteGrey[50];
export const colorPaletteGrey75 = ({ colorPaletteGrey }) =>
  colorPaletteGrey[75];
export const colorPaletteGrey100 = ({ colorPaletteGrey }) =>
  colorPaletteGrey[100];
export const colorPaletteGrey200 = ({ colorPaletteGrey }) =>
  colorPaletteGrey[200];
export const colorPaletteGrey300 = ({ colorPaletteGrey }) =>
  colorPaletteGrey[300];
export const colorPaletteGrey400 = ({ colorPaletteGrey }) =>
  colorPaletteGrey[400];
export const colorPaletteGrey500 = ({ colorPaletteGrey }) =>
  colorPaletteGrey[500];
export const colorPaletteGrey600 = ({ colorPaletteGrey }) =>
  colorPaletteGrey[600];
export const colorPaletteGrey700 = ({ colorPaletteGrey }) =>
  colorPaletteGrey[700];
export const colorPaletteGrey800 = ({ colorPaletteGrey }) =>
  colorPaletteGrey[800];
export const colorPaletteGrey900 = ({ colorPaletteGrey }) =>
  colorPaletteGrey[900];

export const colorBorder = ({ colorBorder }) => colorBorder;
export const colorAnchor = ({ colorAnchor }) => colorAnchor;

export const colorBrandFacebook = ({ colorBrand }) => colorBrand.facebook;
export const colorBrandVkontakte = ({ colorBrand }) => colorBrand.vkontakte;
export const colorBrandGooglePlus = ({ colorBrand }) => colorBrand.googlePlus;

/** Font */
export const fontFamilySansSerif = ({ fontFamily }) => fontFamily.sansSerif;
export const fontFamilySerif = ({ fontFamily }) => fontFamily.serif;
export const fontFamilyMonospace = ({ fontFamily }) => fontFamily.monospace;

export const fontWeightLight = ({ fontWeight }) => fontWeight.light;
export const fontWeightNormal = ({ fontWeight }) => fontWeight.normal;
export const fontWeightSemibold = ({ fontWeight }) => fontWeight.semibold;
export const fontWeightBold = ({ fontWeight }) => fontWeight.bold;

export const fontSizeXsmall = ({ fontSize }) => fontSize[-2];
export const fontSizeSmall = ({ fontSize }) => fontSize[-1];
export const fontSizeBody = ({ fontSize }) => fontSize[0];
export const fontSizeBody2 = ({ fontSize }) => fontSize[1];
export const fontSizeTitle = ({ fontSize }) => fontSize[2];
export const fontSizeHeadline = ({ fontSize }) => fontSize[3];
export const fontSizeDisplay1 = ({ fontSize }) => fontSize[4];
export const fontSizeDisplay2 = ({ fontSize }) => fontSize[5];
export const fontSizeDisplay3 = ({ fontSize }) => fontSize[6];
export const fontSizeDisplay4 = ({ fontSize }) => fontSize[7];

export const fontColorLight = ({ fontColor }) => fontColor.light;
export const fontColorMedium = ({ fontColor }) => fontColor.medium;

/** Other */
export const directionText = ({ direction }) => direction.text;
export const directionFloat = ({ direction }) => direction.float;

export const zIndexBase = ({ zIndex }) => zIndex.base;
export const zIndexNav = ({ zIndex }) => zIndex.nav;
export const zIndexAlertMobile = ({ zIndex }) => zIndex.alertMobile;
export const zIndexDropdown = ({ zIndex }) => zIndex.dropdown;
export const zIndexOverlay = ({ zIndex }) => zIndex.overlay;
export const zIndexModal = ({ zIndex }) => zIndex.modal;
export const zIndexPopup = ({ zIndex }) => zIndex.popup;
export const zIndexAlertDesktop = ({ zIndex }) => zIndex.alertDesktop;
export const zIndexTooltip = ({ zIndex }) => zIndex.tooltip;
export const zIndexMoon = ({ zIndex }) => zIndex.moon;

/** Body Settings */
export const bodyBackgroundColor = ({ body }) => body.bgColor;
export const bodyFontColor = ({ body }) => body.fontColor;
export const bodyFontColorAlt = ({ body }) => body.fontColorAlt;
export const bodyFontFamily = ({ fontFamily }) => fontFamily.sansSerif;
export const bodyFontWeight = ({ body }) => body.fontWeight;
export const bodyLineHeight = ({ body }) => body.lineHeight;
