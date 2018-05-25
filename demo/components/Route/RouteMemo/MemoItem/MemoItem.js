import React from 'react';
import PropTypes from 'prop-types';
import { MemoItemStyled } from './styles/MemoItemStyled';
import { MemoContentStyled } from './styles/MemoContentStyled';
import { MemoAnchorStyled } from './styles/MemoAnchorStyled';

const propTypes = {
  anchor: PropTypes.string,
  anchorTitle: PropTypes.string,
};
const defaultProps = {
  anchor: '',
  anchorTitle: 'issue',
};

export const MemoItem = props => (
  <MemoItemStyled>
    <MemoContentStyled>
      {props.children}
    </MemoContentStyled>
    {
      props.anchor
        ? (
          <MemoAnchorStyled href={props.anchor}>
            {props.anchorTitle}
          </MemoAnchorStyled>
        )
        : null
    }
  </MemoItemStyled>
);

MemoItem.propTypes = propTypes;
MemoItem.defaultProps = defaultProps;
MemoItem.displayName = 'MemoItem';
