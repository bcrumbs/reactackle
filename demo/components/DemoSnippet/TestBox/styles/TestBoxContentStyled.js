'use strict';

import styled, { css } from 'styled-components';
import { baseModule } from '../../../../theme/styleHelpers';

/** PROP RECEIVERS */
const textAlign = ({ textAlign }) => textAlign
  ? `text-align: ${textAlign};`
  : 'text-align: left;';

const minWidth = ({ minWidth }) => minWidth
  ? `min-width: ${minWidth};`
  : 'min-width: 0;';

const minHeight = ({ minHeight }) => minHeight
  ? `min-height: ${minHeight};`
  : 'min-height: 0;';

const fontSize = ({ fontSize }) => fontSize
  ? `font-size: ${fontSize};`
  : '';

const flexDirection = ({ flexDirection }) => flexDirection
  ? `flex-direction: ${flexDirection};`
  : '';

const justifyContent = ({ justifyContent }) => justifyContent
  ? `justify-content: ${justifyContent};`
  : '';

const alignItems = ({ alignItems }) => alignItems
  ? `align-items: ${alignItems};`
  : '';

const backgroundColor = ({ bgColor }) => bgColor
  ? css`background-color: ${bgColor};`
  : '';

const flex = ({ flex }) => flex ? 'display: flex;' : '';

const padding = ({ padding }) =>
  padding ? css`padding: ${baseModule(2)}px;` : 'padding: 0;';

const contentSpaced = ({ contentSpaced }) =>
  contentSpaced ? css`& > * { margin: ${baseModule(1)}px;}` : '';

/** STYLES */
export const TestBoxContentStyled = styled.div`
  line-height: 1.5;
  position: relative;
  flex-grow: 1;
  flex-wrap: wrap;
  ${textAlign}
  ${minWidth}
  ${minHeight}
  ${fontSize}
  ${flexDirection}
  ${justifyContent}
  ${alignItems}
  ${backgroundColor}
  ${flex}
  ${padding}
  ${contentSpaced}
`;

TestBoxContentStyled.displayName = 'TestBoxContentStyled';
