import styled from 'styled-components';
import PropTypes from 'prop-types';

const propTypes = {
  alignItems: PropTypes.oneOf(['top', 'center', 'bottom']),
};

const defaultProps = {
  alignItems: 'center',
};

const ALIGN_MAP = {
  top: 'flex-start',
  center: 'center',
  bottom: 'flex-end',
};

const align = ({ alignItems }) => `align-items: ${ALIGN_MAP[alignItems]};`;

export const ListStyled = styled.ol`
  list-style-type: none;
  padding: 0;
  margin: 0;
  flex-grow: 1;
  display: flex;
  ${align}
`;

ListStyled.propTypes = propTypes;
ListStyled.defaultProps = defaultProps;
