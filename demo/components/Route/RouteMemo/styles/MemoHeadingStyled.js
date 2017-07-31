'use strict';

import styled from 'styled-components';
import { routeMemoConstants } from './constants';

import {
  baseModule,
  fontSizeTitle,
  fontWeightSemibold,
} from '../../../../theme/styleHelpers';

export const MemoHeadingStyled = styled.div`
  padding: 0 ${routeMemoConstants.paddingX}px;
  margin-bottom: ${baseModule(1.5)}px;
  font-size: ${fontSizeTitle}px;
  font-weight: ${fontWeightSemibold};
`;

MemoHeadingStyled.displayName = 'MemoHeadingStyled';
