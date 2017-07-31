'use strict';

import styled from 'styled-components';
import Color from 'color';

import {
  baseModule,
  radiusDefault,
  colorAlert,
} from '../../../../theme/styleHelpers';

const backgroundColor = ({
  theme,
}) => Color(colorAlert(theme)).lighten(0.7).string();

/** STYLES */
export const DemoAlertStyled = styled.div`
  display: block;
  width: 100%;
  background-color: ${backgroundColor};
  border-left: 4px solid ${colorAlert};
  border-radius: ${radiusDefault}px;
  padding: ${baseModule(2)}px;
`;

DemoAlertStyled.displayName = 'DemoAlertStyled';
