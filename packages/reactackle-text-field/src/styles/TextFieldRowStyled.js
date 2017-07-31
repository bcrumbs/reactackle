import PropTypes from 'prop-types';
import styled from 'styled-components';
import { extractThemeOrDefault, getValueString } from 'reactackle-core';

const propTypes = {
  disabled: PropTypes.bool,
  /**
   * Full-width TextArea doesn't have borders
   */
  fullWidth: PropTypes.bool,
  /**
   * If textfield is dense it has smaller paddings
   */
  dense: PropTypes.bool,
  /**
   * If bordered = false, TextArea will have only bottom border
   */
  bordered: PropTypes.bool,
  colorScheme: PropTypes.oneOf(['neutral', 'error', 'success']),
  /**
   * If slidingLabel = true, label will float to top
   * when parent textfield is focused or filled
   */
  slidingLabel: PropTypes.bool,
  /**
   * Define component theme config
   * See https://github.com/styled-components/styled-components/blob/master/docs/theming.md
   * for more information
   */
  theme: PropTypes.object,
};

const defaultProps = {
  disabled: false,
  fullWidth: false,
  dense: false,
  bordered: false,
  colorScheme: 'neutral',
  slidingLabel: false,
};

/** PROP RECEIVERS */
const size = ({ dense, fullWidth, theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  let source = null;

  if (dense && !fullWidth) {
    source = theme.reactackle.components.textfield.textfield.size.dense;
  } else if (dense && fullWidth) {
    source =
      theme.reactackle.components.textfield.textfield.size.denseFullWidth;
  } else if (!dense && fullWidth) {
    source = theme.reactackle.components.textfield.textfield.size.fullWidth;
  } else {
    source = theme.reactackle.components.textfield.textfield.size;
  }

  const align = fullWidth ? 'center' : 'stretch';

  const { fontSize, lineHeight } = source;

  return `
    font-size: ${getValueString(fontSize)};
    line-height: ${lineHeight};
    align-items: ${align};
  `;
};

const slidingLabelOffset = ({
  slidingLabel,
  dense,
  fullWidth,
  bordered,
  theme: themeFromProvider,
}) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const textfieldStyleKey = bordered ? 'bordered' : 'underlined';
  const path = theme.reactackle.components.textfield.label.positionTop;
  let source = null;

  if (dense && !fullWidth) source = path.size[textfieldStyleKey].dense;
  else if (dense && fullWidth)
    source = path.size[textfieldStyleKey].denseFullWidth;
  else if (!dense && fullWidth) source = path.size[textfieldStyleKey].fullWidth;
  else source = path.size[textfieldStyleKey];

  const { labelSpacing } = source;
  const { lineHeight } = path;

  const paddingTop = `calc(${lineHeight}em + ${getValueString(labelSpacing)})`;

  return slidingLabel && `padding-top: ${paddingTop};`;
};

/** STYLES */
export const TextFieldRowStyled = styled.div`
  display: flex;
  position: relative;
  max-width: 100%;
  flex-grow: 1;
  ${size};
  ${slidingLabelOffset};
`;

TextFieldRowStyled.propTypes = propTypes;
TextFieldRowStyled.defaultProps = defaultProps;
TextFieldRowStyled.displayName = 'TextFieldRowStyled';
