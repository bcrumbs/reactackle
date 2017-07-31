'use strict';

import { extractThemeOrDefault } from 'reactackle';

const multiplierFunctions = Object.create(null);

export const baseModule = multiplier => {
  if (!multiplierFunctions[multiplier]) {
    multiplierFunctions[multiplier] = ({ theme }) =>
    extractThemeOrDefault(theme).reactackle.baseModule * multiplier;
  }

  return multiplierFunctions[multiplier];
};

/** Size parameters */
export const contentWidth = ({ theme }) =>
  extractThemeOrDefault(theme).reactackle.contentWidth;
export const totalColumns = ({ theme }) =>
  extractThemeOrDefault(theme).reactackle.totalColumns;

export const radiusDefault = ({ theme }) =>
  extractThemeOrDefault(theme).reactackle.radiusDefault;
export const radiusRounded = ({ theme }) =>
  extractThemeOrDefault(theme).reactackle.radiusRounded;

/** Colors */
export const colorWhite = ({ theme }) =>
  extractThemeOrDefault(theme).reactackle.color.white;
export const colorBlack = ({ theme }) =>
  extractThemeOrDefault(theme).reactackle.color.black;
export const colorTransparent = ({ theme }) =>
  extractThemeOrDefault(theme).reactackle.color.transparent;

export const colorMain = ({ theme }) =>
  extractThemeOrDefault(theme).reactackle.color.main;
export const colorMainForeground = ({ theme }) =>
  extractThemeOrDefault(theme).reactackle.color.mainFgTextColor;
export const colorSecondary = ({ theme }) =>
  extractThemeOrDefault(theme).reactackle.color.secondary;
export const colorSecondaryForeground = ({ theme }) =>
  extractThemeOrDefault(theme).reactackle.color.secondaryFgTextColor;
export const colorAlert = ({ theme }) =>
  extractThemeOrDefault(theme).reactackle.color.alert;
export const colorAlertForeground = ({ theme }) =>
  extractThemeOrDefault(theme).reactackle.color.alertFgTextColor;
export const colorWarning = ({ theme }) =>
  extractThemeOrDefault(theme).reactackle.color.warning;
export const colorWarningForeground = ({ theme }) =>
  extractThemeOrDefault(theme).reactackle.color.warningFgTextColor;
export const colorError = ({ theme }) =>
  extractThemeOrDefault(theme).reactackle.color.alert;
export const colorErrorForeground = ({ theme }) =>
  extractThemeOrDefault(theme).reactackle.color.alertFgTextColor;
export const colorSuccess = ({ theme }) =>
  extractThemeOrDefault(theme).reactackle.color.success;
export const colorSuccessForeground = ({ theme }) =>
  extractThemeOrDefault(theme).reactackle.color.successFgTextColor;
export const colorInfo = ({ theme }) =>
  extractThemeOrDefault(theme).reactackle.color.info;
export const colorInfoForeground = ({ theme }) =>
  extractThemeOrDefault(theme).reactackle.color.infoFgTextColor;

export const colorPaletteGrey50 = ({ theme }) =>
  extractThemeOrDefault(theme).reactackle.colorPaletteGrey[50];
export const colorPaletteGrey75 = ({ theme }) =>
  extractThemeOrDefault(theme).reactackle.colorPaletteGrey[75];
export const colorPaletteGrey100 = ({ theme }) =>
  extractThemeOrDefault(theme).reactackle.colorPaletteGrey[100];
export const colorPaletteGrey200 = ({ theme }) =>
  extractThemeOrDefault(theme).reactackle.colorPaletteGrey[200];
export const colorPaletteGrey300 = ({ theme }) =>
  extractThemeOrDefault(theme).reactackle.colorPaletteGrey[300];
export const colorPaletteGrey400 = ({ theme }) =>
  extractThemeOrDefault(theme).reactackle.colorPaletteGrey[400];
export const colorPaletteGrey500 = ({ theme }) =>
  extractThemeOrDefault(theme).reactackle.colorPaletteGrey[500];
export const colorPaletteGrey600 = ({ theme }) =>
  extractThemeOrDefault(theme).reactackle.colorPaletteGrey[600];
export const colorPaletteGrey700 = ({ theme }) =>
  extractThemeOrDefault(theme).reactackle.colorPaletteGrey[700];
export const colorPaletteGrey800 = ({ theme }) =>
  extractThemeOrDefault(theme).reactackle.colorPaletteGrey[800];
export const colorPaletteGrey900 = ({ theme }) =>
  extractThemeOrDefault(theme).reactackle.colorPaletteGrey[900];

export const paletteBlueGrey25 = ({ theme }) =>
  theme.reactackleDemo.paletteBlueGrey[25];
export const paletteBlueGrey50 = ({ theme }) =>
  theme.reactackleDemo.paletteBlueGrey[50];
export const paletteBlueGrey75 = ({ theme }) =>
  theme.reactackleDemo.paletteBlueGrey[75];
export const paletteBlueGrey100 = ({ theme }) =>
  theme.reactackleDemo.paletteBlueGrey[100];
export const paletteBlueGrey200 = ({ theme }) =>
  theme.reactackleDemo.paletteBlueGrey[200];
export const paletteBlueGrey300 = ({ theme }) =>
  theme.reactackleDemo.paletteBlueGrey[300];
export const paletteBlueGrey400 = ({ theme }) =>
  theme.reactackleDemo.paletteBlueGrey[400];
export const paletteBlueGrey500 = ({ theme }) =>
  theme.reactackleDemo.paletteBlueGrey[500];
export const paletteBlueGrey600 = ({ theme }) =>
  theme.reactackleDemo.paletteBlueGrey[600];
export const paletteBlueGrey700 = ({ theme }) =>
  theme.reactackleDemo.paletteBlueGrey[700];
export const paletteBlueGrey800 = ({ theme }) =>
  theme.reactackleDemo.paletteBlueGrey[800];
export const paletteBlueGrey900 = ({ theme }) =>
  theme.reactackleDemo.paletteBlueGrey[900];

export const colorBorder = ({ theme }) =>
  extractThemeOrDefault(theme).reactackle.colorBorder;
export const colorAnchor = ({ theme }) =>
  extractThemeOrDefault(theme).reactackle.colorAnchor;

export const colorBrandFacebook = ({ theme }) =>
  extractThemeOrDefault(theme).reactackle.colorBrand.facebook;
export const colorBrandVkontakte = ({ theme }) =>
  extractThemeOrDefault(theme).reactackle.colorBrand.vkontakte;
export const colorBrandGooglePlus = ({ theme }) =>
  extractThemeOrDefault(theme).reactackle.colorBrand.googlePlus;

/** Font */
export const fontFamilySansSerif = ({ theme }) =>
  extractThemeOrDefault(theme).reactackle.fontFamily.sansSerif;
export const fontFamilySerif = ({ theme }) =>
  extractThemeOrDefault(theme).reactackle.fontFamily.serif;
export const fontFamilyMonospace = ({ theme }) =>
  extractThemeOrDefault(theme).reactackle.fontFamily.monospace;

export const fontWeightLight = ({ theme }) =>
  extractThemeOrDefault(theme).reactackle.fontWeight.light;
export const fontWeightNormal = ({ theme }) =>
  extractThemeOrDefault(theme).reactackle.fontWeight.normal;
export const fontWeightSemibold = ({ theme }) =>
  extractThemeOrDefault(theme).reactackle.fontWeight.semibold;
export const fontWeightBold = ({ theme }) =>
  extractThemeOrDefault(theme).reactackle.fontWeight.bold;

export const fontSizeXsmall = ({ theme }) =>
  extractThemeOrDefault(theme).reactackle.fontSize[-2];
export const fontSizeSmall = ({ theme }) =>
  extractThemeOrDefault(theme).reactackle.fontSize[-1];
export const fontSizeBody = ({ theme }) =>
  extractThemeOrDefault(theme).reactackle.fontSize[0];
export const fontSizeBody2 = ({ theme }) =>
  extractThemeOrDefault(theme).reactackle.fontSize[1];
export const fontSizeTitle = ({ theme }) =>
  extractThemeOrDefault(theme).reactackle.fontSize[2];
export const fontSizeHeadline = ({ theme }) =>
  extractThemeOrDefault(theme).reactackle.fontSize[3];
export const fontSizeDisplay1 = ({ theme }) =>
  extractThemeOrDefault(theme).reactackle.fontSize[4];
export const fontSizeDisplay2 = ({ theme }) =>
  extractThemeOrDefault(theme).reactackle.fontSize[5];
export const fontSizeDisplay3 = ({ theme }) =>
  extractThemeOrDefault(theme).reactackle.fontSize[6];
export const fontSizeDisplay4 = ({ theme }) =>
  extractThemeOrDefault(theme).reactackle.fontSize[7];

export const fontColorLight = ({ theme }) =>
  extractThemeOrDefault(theme).reactackle.fontColor.light;
export const fontColorMedium = ({ theme }) =>
  extractThemeOrDefault(theme).reactackle.fontColor.medium;

/** Other */
export const directionText = ({ theme }) =>
  extractThemeOrDefault(theme).reactackle.direction.text;
export const directionFloat = ({ theme }) =>
  extractThemeOrDefault(theme).reactackle.direction.float;

export const zIndexBase = ({ theme }) =>
  extractThemeOrDefault(theme).reactackle.zIndex.base;
export const zIndexNav = ({ theme }) =>
  extractThemeOrDefault(theme).reactackle.zIndex.nav;
export const zIndexAlertMobile = ({ theme }) =>
  extractThemeOrDefault(theme).reactackle.zIndex.alertMobile;
export const zIndexDropdown = ({ theme }) =>
  extractThemeOrDefault(theme).reactackle.zIndex.dropdown;
export const zIndexOverlay = ({ theme }) =>
  extractThemeOrDefault(theme).reactackle.zIndex.overlay;
export const zIndexModal = ({ theme }) =>
  extractThemeOrDefault(theme).reactackle.zIndex.modal;
export const zIndexPopup = ({ theme }) =>
  extractThemeOrDefault(theme).reactackle.zIndex.popup;
export const zIndexAlertDesktop = ({ theme }) =>
  extractThemeOrDefault(theme).reactackle.zIndex.alertDesktop;
export const zIndexTooltip = ({ theme }) =>
  extractThemeOrDefault(theme).reactackle.zIndex.tooltip;
export const zIndexMoon = ({ theme }) =>
  extractThemeOrDefault(theme).reactackle.zIndex.moon;

/** Body Settings */
export const bodyBackgroundColor = ({ theme }) =>
  extractThemeOrDefault(theme).reactackle.body.bgColor;
export const bodyFontColor = ({ theme }) =>
  extractThemeOrDefault(theme).reactackle.body.fontColor;
export const bodyFontColorAlt = ({ theme }) =>
  extractThemeOrDefault(theme).reactackle.body.fontColorAlt;
export const bodyFontFamily = ({ theme }) =>
  extractThemeOrDefault(theme).reactackle.body.fontFamily;
export const bodyFontWeight = ({ theme }) =>
  extractThemeOrDefault(theme).reactackle.body.fontWeight;
export const bodyLineHeight = ({ theme }) =>
  extractThemeOrDefault(theme).reactackle.body.lineHeight;
