import React from 'react';
import PropTypes from 'prop-types';
import { ArticleModule } from '../../Article';
import { MemoBoxStyled } from './styles/MemoBoxStyled';
import { MemoHeadingStyled } from './styles/MemoHeadingStyled';

const propTypes = {
  kind: PropTypes.oneOf(['success', 'alert']),
  title: PropTypes.string,
};

const defaultProps = {
  kind: 'alert',
  title: '',
};

export const RouteMemo = props => (
  <ArticleModule>
    <MemoBoxStyled kind={props.kind}>
      {
        props.title
          ? <MemoHeadingStyled>{props.title}</MemoHeadingStyled>
          : null
      }
      {props.children}
    </MemoBoxStyled>
  </ArticleModule>
);

RouteMemo.propTypes = propTypes;
RouteMemo.defaultProps = defaultProps;
RouteMemo.displayName = 'RouteMemo';

export * from './MemoItem/MemoItem';
