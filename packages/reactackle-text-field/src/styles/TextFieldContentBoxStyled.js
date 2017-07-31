import PropTypes from 'prop-types';
import styled from 'styled-components';

const propTypes = {
  /**
   * Define label position
   */
  labelPosition: PropTypes.oneOf(['top', 'side']),
};

const defaultProps = {
  labelPosition: 'top',
};

/** PROP RECEIVERS */
const contentFlow = ({ labelPosition }) =>
  labelPosition === 'top' ? 'flex-direction: column;' : 'flex-direction: row;';

/** STYLES */
/** ex textfield-content-box */
export const TextFieldContentBoxStyled = styled.div`
  display: flex;
  position: relative;
  max-width: 100%;
  ${contentFlow};
`;

TextFieldContentBoxStyled.propTypes = propTypes;
TextFieldContentBoxStyled.defaultProps = defaultProps;
TextFieldContentBoxStyled.displayName = 'TextFieldContentBoxStyled';
