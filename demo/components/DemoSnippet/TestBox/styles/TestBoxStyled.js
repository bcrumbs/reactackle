'use strict';

import styled, { css } from 'styled-components';
import {
  baseModule,
  colorBorder,
  fontSizeBody,
} from '../../../../theme/styleHelpers';

/** PROP RECEIVERS */
const spread = ({ spread }) => spread ? 'flex-grow: 1;' : '';

const shrinkForbidden = ({ shrinkForbiden }) =>
  shrinkForbiden ? 'flex-shrink: 0;' : '';

const bordered = ({ bordered }) =>
  bordered ? css`border: 1px solid ${colorBorder};` : '';

const width = ({ width }) =>
  width ? `width: ${width};` : 'width: auto;';

const maxWidth = ({ maxWidth }) =>
  maxWidth ? `max-width: ${maxWidth};` : 'max-width: 0;';

const spaced = ({ spaced }) =>
  spaced ? css`margin-top: ${baseModule(2)}px;` : '';

/** STYLES */
export const TestBoxStyled = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${fontSizeBody}px;
  ${spread}
  ${shrinkForbidden}
  ${bordered}
  ${width}
  ${maxWidth}
  ${spaced}
`;

TestBoxStyled.displayName = 'TestBoxStyled';
