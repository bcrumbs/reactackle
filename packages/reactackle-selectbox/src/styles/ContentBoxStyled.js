'use strict';

import PropTypes from 'prop-types';
import styled from 'styled-components';

const propTypes = {
  labelPosition: PropTypes.oneOf(['top', 'side']),
};

const defaultProps = {
  labelPosition: 'top',
};

/** Prop Receivers */
const contentFlow = ({ labelPosition }) =>
  labelPosition === 'side' &&
  `
    display: flex;
    flex-direction: row;
    align-items: flex-end;
  `;

/** Styles */
export const ContentBoxStyled = styled.div`
  flex-grow: 1;
  max-width: 100%;
  ${contentFlow};
`;

ContentBoxStyled.propTypes = propTypes;
ContentBoxStyled.defaultProps = defaultProps;
ContentBoxStyled.displayName = 'ContentBoxStyled';
