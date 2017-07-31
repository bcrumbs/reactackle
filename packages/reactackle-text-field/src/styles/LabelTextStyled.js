import PropTypes from 'prop-types';
import styled from 'styled-components';
import { extractThemeOrDefault, getValueString } from 'reactackle-core';

const propTypes = {
  theme: PropTypes.object,
};

/** PROP RECEIVERS */
const spacingProps = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const marginRight = getValueString(
    theme.reactackle.components.textfield.label.labelTooltipSpacing,
  );

  return `margin-right: ${marginRight};`;
};
const paddingBottom = 1; // To be sure that font descenders aren't cut

/** STYLES */
export const LabelTextStyled = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: ${paddingBottom}px;
  ${spacingProps};
`;

LabelTextStyled.propTypes = propTypes;
LabelTextStyled.displayName = 'LabelTextStyled';
