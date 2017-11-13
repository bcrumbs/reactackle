import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  transition,
} from 'reactackle-core';

import { iconsPropType } from '../../iconsPropType';

import {
  transform,
  border,
  borderRadius,
  backgroundProps,
  sizeProps,
} from '../../styles/styleMixins';

const propTypes = {
  ...iconsPropType,
  /** Set icon's source */
  src: PropTypes.string,
};

const defaultProps = {
  src: '',
  border: false,
  rounded: false,
  size: 'normal',
  colorScheme: 'default',
  color: '',
  backgroundColor: '',
  flip: 'none',
  rotate: 0,
};

const IconImg = ({ src }) => `        
  background-image: url('${src}');
`;

// STYLES
export const IconCustomStyled = styled.div`
  text-align: center;
  flex-shrink: 0;
  position: relative;
  background-position: center;
  background-repeat: no-repeat;
  box-sizing: border-box;
  ${transition('background-color, color, opacity')};
  ${sizeProps};
  ${backgroundProps};
  ${border};
  ${borderRadius};
  ${transform};
  ${IconImg};
`;

IconCustomStyled.propTypes = propTypes;
IconCustomStyled.defaultProps = defaultProps;
IconCustomStyled.displayName = 'IconCustomStyled';
