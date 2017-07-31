'use strict';

import PropTypes from 'prop-types';
import styled from 'styled-components';

const propTypes = {
  theme: PropTypes.object,
};

/** Styles */
export const CardMediaStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

CardMediaStyled.propTypes = propTypes;
CardMediaStyled.displayName = 'CardMediaStyled';
