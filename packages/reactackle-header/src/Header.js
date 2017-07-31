'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactResizeDetector from 'react-resize-detector';
import { noop, registerDefaultComponentTheme, isUndef } from 'reactackle-core';
import { HeaderStyled } from './styles/HeaderStyled';
import { HeaderWrapperStyled } from './styles/HeaderWrapperStyled';

import { HeaderContentWrapperStyled } from './styles/HeaderContentWrapperStyled';

import { HeaderBackgroundContainerStyled } from './styles/HeaderBackgroundContainerStyled';
import componentTheme from './styles/theme';

registerDefaultComponentTheme('header', componentTheme);

const propTypes = {
  /**
   * Background image url
   */
  backgroundImage: PropTypes.string,
  /**
   * Customize header background color
   */
  backgroundColor: PropTypes.string,
  /**
   * Define header position. Fixed header will be always visible on the screen.
   */
  behavior: PropTypes.oneOf(['static', 'fixed']),
  /**
   * If true, the header's height will condense to condensedHeaderHeight as the
   * user scrolls down from the top of the content area.
   * @type {boolean}
   * @default false
   */
  // eslint-disable-next-line react/no-unused-prop-types
  condenses: PropTypes.bool,
  /**
   * If true, the condensed header is always shown and does not move away.
   * @type {boolean}
   * @default false
   */
  keepCondensedHeader: PropTypes.bool,
  /**
   * The height of the header when it is condensed.
   * @type {number}
   * @default 0
   */
  condensedHeaderHeight: PropTypes.number,
  /**
   * Define header's padding size. 'Blank' means zero paddings.
   */
  size: PropTypes.oneOf(['default', 'blank', 'dense']),
  /**
   * Specify function to call when Header offset is changed
   */
  onChangeOffset: PropTypes.func,
};

const defaultProps = {
  backgroundImage: '',
  backgroundColor: '',
  behavior: 'static',
  condenses: false,
  keepCondensedHeader: false,
  condensedHeaderHeight: 0,
  size: 'default',
  onChangeOffset: noop,
};

export default class Header extends Component {
  constructor(props) {
    super(props);

    this._scrollListened = false;
    this._refHeader = null;
    this._refWrapper = null;
    this._headerHeight = null;
    this._headerOffset = null;

    this._saveRefHeader = this._saveRefHeader.bind(this);
    this._saveRefWrapper = this._saveRefWrapper.bind(this);
    this._handleScroll = this._handleScroll.bind(this);
    this._applyHeaderStyle = this._applyHeaderStyle.bind(this);
  }

  componentDidMount() {
    const { width } = this._refHeader.getBoundingClientRect();
    const { height } = this._refWrapper.getBoundingClientRect();

    this._applyHeaderStyle({ width, height });
    this._toggleScrollListener();
  }

  componentWillReceiveProps(nextProps) {
    this._toggleScrollListener(this._isCondensed(nextProps));
  }

  componentWillUnmount() {
    this._toggleScrollListener(false);
  }

  _isCondensed(source = this.props) {
    return source.condenses;
  }

  _toggleScrollListener(condition = this._isCondensed()) {
    if (condition && !this._scrollListened) {
      this._scrollListened = true;
      window.addEventListener('scroll', this._handleScroll);
    } else if (!condition && this._scrollListened) {
      this._scrollListened = false;
      window.removeEventListener('scroll', this._handleScroll);
    }
  }

  _handleScroll() {
    const { condensedHeaderHeight, keepCondensedHeader } = this.props;
    const finalHeaderOffset = keepCondensedHeader
      ? this._headerHeight - condensedHeaderHeight
      : this._headerHeight;
    const newWindowOffset = window.pageYOffset;
    const newHeaderOffset = newWindowOffset > finalHeaderOffset
      ? finalHeaderOffset
      : newWindowOffset;


    if (this._headerOffset !== newHeaderOffset) {
      this._applyHeaderStyle({ offset: newHeaderOffset });
      this.props.onChangeOffset({ offset: newHeaderOffset });
    }
  }

  _applyHeaderStyle({ height, width, offset }) {
    if (!isUndef(height)) {
      this._headerHeight = height;
      this._refHeader.style.height = `${height}px`;
    }
    if (!isUndef(width)) this._refWrapper.style.width = `${width}px`;
    if (!isUndef(offset)) {
      this._headerOffset = offset;
      this._refWrapper.style.transform = `translateY(-${offset}px)`;
    }
  }

  _saveRefHeader(ref) {
    this._refHeader = ref;
  }

  _saveRefWrapper(ref) {
    this._refWrapper = ref;
  }

  _renderInnerBackground() {
    const { backgroundImage } = this.props;

    if (!backgroundImage) return null;

    return (
      <HeaderBackgroundContainerStyled
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
    );
  }

  render() {
    const { behavior, size, backgroundColor, children } = this.props;
    const innerBg = this._renderInnerBackground();

    return (
      <HeaderStyled
        size={size}
        customBackgroundColor={backgroundColor}
        innerRef={this._saveRefHeader}
      >
        <HeaderWrapperStyled
          innerRef={this._saveRefWrapper}
          size={size}
          behavior={behavior}
          customBackgroundColor={backgroundColor}
        >
          {innerBg}
          <HeaderContentWrapperStyled>
            {children}
          </HeaderContentWrapperStyled>
        </HeaderWrapperStyled>
        {/* eslint-disable react/jsx-handler-names */}
        <ReactResizeDetector
          handleWidth
          onResize={
            width => this._applyHeaderStyle({ width })
          }
        />
      </HeaderStyled>
    );
  }
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;
Header.displayName = 'Header';
