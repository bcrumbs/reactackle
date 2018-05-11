import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { extractThemeOrDefault, getValueString } from 'reactackle-core';

const propTypes = {
  positionX: PropTypes.oneOf(['left', 'right']),
  positionY: PropTypes.oneOf(['top', 'bottom']),
};

const defaultProps = {
  positionX: 'right',
  positionY: 'bottom',
};


const position = ({ theme: themeFromProvider, positionX, positionY }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const oppositePosY = positionY === 'top' ? 'bottom' : 'top';

  const {
    marginX,
    marginY,
    zIndex,
    itemsSpacing,
  } = theme.reactackle.components.alertsArea.wrapper;

  return css`
    margin: ${getValueString(marginY)} ${getValueString(marginX)};
    z-index: ${zIndex};
    ${positionX}: 0;
    ${positionY}: 0;
    ${oppositePosY}: auto;
    
    & > * + * {
      margin-top: ${getValueString(itemsSpacing)};
    }
  `;
};

export const AlertsWrapperStyled = styled.div`
  position: fixed;
  right: 0;
  display: flex;
  ${position}
`;

AlertsWrapperStyled.propTypes = propTypes;
AlertsWrapperStyled.defaultProps = defaultProps;
