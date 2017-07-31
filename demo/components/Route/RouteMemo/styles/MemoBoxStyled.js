'use strict';

import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Color from 'color';

import {
  baseModule,
  radiusDefault,
  colorSuccess,
  colorError,
} from '../../../../theme/styleHelpers';

const propTypes = {
  kind: PropTypes.oneOf(['success', 'alert']).isRequired,
};

const base = ({ kind, theme }) => {
  const kindColor = kind === 'success'
    ? colorSuccess
    : colorError;
  
  const backgroundColor = Color(kindColor({ theme })).lighten(0.75).string();
  
  return css`
    border-left-color: ${kindColor};
    background-color: ${backgroundColor};
  `;
};

/** STYLES */
export const MemoBoxStyled = styled.div`
  border-left: 4px solid;
  padding: ${baseModule(2)}px 0;
  border-radius: ${radiusDefault}px;  
  ${base}
`;

MemoBoxStyled.propTypes = propTypes;
MemoBoxStyled.displayName = 'MemoBoxStyled';
