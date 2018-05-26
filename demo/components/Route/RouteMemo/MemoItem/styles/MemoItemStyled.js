import styled from 'styled-components';
import { routeMemoConstants } from '../../styles/constants';
import {
  baseModule,
} from '../../../../../theme/styleHelpers';

/** STYLES */
export const MemoItemStyled = styled.span`
  display: flex;
  align-items: flex-start;
  padding: ${baseModule(1)}px ${routeMemoConstants.paddingX}px;
`;

MemoItemStyled.displayName = 'MemoItemStyled';
