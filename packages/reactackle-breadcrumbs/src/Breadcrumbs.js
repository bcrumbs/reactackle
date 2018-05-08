import React, { Component } from 'react';
import PropTypes from 'prop-types';
import throttle from 'lodash.throttle';
import { Button } from 'reactackle-button';
import { noop, getKey, registerDefaultComponentTheme } from 'reactackle-core';
import { IconArrowChevronRight, IconArrowChevronLeft } from 'reactackle-icons';
import { BreadcrumbsItem } from './BreadcrumbsItem';

import {
  componentTheme,
  BreadcrumbsStyled,
  ListWrapperStyled,
  ListStyled,
  NavigationButtonStyled,
} from './styles';

registerDefaultComponentTheme('breadcrumbs', componentTheme);

const propTypes = {
  /**
   * Array of breadcrumbs items
   */
  items: PropTypes.arrayOf(PropTypes.shape(BreadcrumbsItem.propTypes))
    .isRequired,
  /**
   * If true, breadcrumbs will become scrollable to fit wrapper width
   */
  overflow: PropTypes.bool,
  /**
   * Component to be used as a link in BreadcrumbItem
   */
  linkComponent: PropTypes.func,
  /**
   * Define component's color scheme
   */
  colorScheme: PropTypes.oneOf(['light', 'dark']),
  /**
   * Vertical align of items
   */
  alignItems: PropTypes.oneOf(['top', 'center', 'bottom']),
  /**
   * Type of separator between items
   */
  separatorType: PropTypes.oneOf(['text', 'icon']),
  /**
   * Define separator
   */
  separatorIcon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  /**
   * Function to be used on item's click
   */
  onItemClick: PropTypes.func,
};
const defaultProps = {
  linkComponent: null,
  overflow: false,
  colorScheme: 'dark',
  alignItems: 'center',
  separatorType: 'icon',
  separatorIcon: <IconArrowChevronRight size="custom" color="inherit" />,
  onItemClick: noop,
};

export default class Breadcrumbs extends Component {
  constructor(props) {
    super(props);

    this.itemDomNodes = new Map();
    this.wrapperDomNode = null;
    this.lastId = props.items.length - 1;
    this.scrollAfterRender = false;
    this.animateScroll = false;
    this.animateEnd = true;

    this.state = {
      showLeftButton: false,
      showRightButton: false,
      offset: 0,
      id: 0,
    };

    this._handleNext = this._handleNext.bind(this);
    this._handlePrev = this._handlePrev.bind(this);
    this._handleTransitionEnd = this._handleTransitionEnd.bind(this);
    this._handleResize = throttle(this._handleResize.bind(this), 100);
    this._saveWrapListRef = this._saveWrapListRef.bind(this);
    this._saveItemRef = this._saveItemRef.bind(this);
    this._saveContainerRef = this._saveContainerRef.bind(this);
  }

  componentDidMount() {
    this.containerDomNode.addEventListener('transitionend',
      this._handleTransitionEnd, false);
    this._showButtonsAndScroll(this.lastId);
    window.addEventListener('resize', this._handleResize, false);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.items !== this.props.items) {
      this.lastId = nextProps.items.length - 1;

      this.setState({
        showLeftButton: false,
        showRightButton: false,
        offset: 0,
        id: 0,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.items !== this.props.items) {
      this._showButtonsAndScroll(this.lastId);
      this.animateScroll = false;
    } else if (this.props.overflow && this.scrollAfterRender) {
      this._scrollToElement(this.state.id, this.state.id >= prevState.id);
      this.scrollAfterRender = false;
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._handleResize, false);
    this.containerDomNode.removeEventListener('transitionend',
            this._handleTransitionEnd, false);
  }

  _isOverflow() {
    if (!this.props.overflow || this.itemDomNodes.size < 2) return false;

    const lastItem = this.itemDomNodes.get(this.lastId),
      firstItem = this.itemDomNodes.get(0),
      lastItemSize = lastItem.getBoundingClientRect(),
      firstItemSize = firstItem.getBoundingClientRect(),
      wrapListSize = this.wrapperDomNode.getBoundingClientRect(),
      overflowToRight = lastItemSize.right > wrapListSize.right,
      overflowToLeft = firstItemSize.left < wrapListSize.left;

    return overflowToRight || overflowToLeft;
  }

  _handleTransitionEnd() {
    this.animateEnd = true;
  }

  _handleResize() {
    this.animateScroll = false;
    this._scrollToCurrent();
  }

  _showButtonsAndScroll(id) {
    const newState = {
      showLeftButton: false,
      showRightButton: false,
      id,
    };

    if (this._isOverflow()) {
      if (id === 0) {
        newState.showRightButton = true;
        newState.showLeftButton = false;
      }

      if (id === this.lastId) {
        newState.showRightButton = false;
        newState.showLeftButton = true;
      }

      if (id > 0 && id < this.lastId) {
        newState.showRightButton = true;
        newState.showLeftButton = true;
      }

      this.scrollAfterRender = true;
    }

    this.setState(newState);
  }

  _saveItemRef(index, ref) {
    if (ref)
      this.itemDomNodes.set(index, ref);
    else
      this.itemDomNodes.delete(index);
  }

  _saveWrapListRef(ref) {
    this.wrapperDomNode = ref;
  }

  _saveContainerRef(ref) {
    this.containerDomNode = ref;
  }

  _scrollToElement(id, alignRight) {
    if (this.itemDomNodes.size && this.itemDomNodes.get(id)) {
      const elSize = this.itemDomNodes.get(id).getBoundingClientRect(),
        wrapperSize = this.wrapperDomNode.getBoundingClientRect();
  
      let offset = this.state.offset + elSize.left - wrapperSize.left;
  
      if (alignRight)
        offset -= (wrapperSize.width - elSize.width);
  
      this.setState({
        offset,
      });
    }
  }

  _scrollToCurrent() {
    this._showButtonsAndScroll(this.state.id);
  }

  _handleNext() {
    if (!this.animateEnd) return;

    const wrapListSize = this.wrapperDomNode.getBoundingClientRect();
    let newId = this.state.id;

    while (newId < this.lastId) {
      newId += 1;

      if (!this.itemDomNodes.has(newId)) break;

      const newItem = this.itemDomNodes.get(newId),
        newItemSize = newItem.getBoundingClientRect();

      if (newItemSize.right > wrapListSize.right) {
        this._showButtonsAndScroll(newId);
        break;
      }
    }

    this.animateScroll = true;
    this.animateEnd = false;
  }

  _handlePrev() {
    if (!this.animateEnd) return;

    const wrapListSize = this.wrapperDomNode.getBoundingClientRect();
    let newId = this.state.id;

    while (newId > 0) {
      newId -= 1;

      if (!this.itemDomNodes.has(newId)) break;

      const newItem = this.itemDomNodes.get(newId),
        newItemSize = newItem.getBoundingClientRect();

      if (newItemSize.left < wrapListSize.left) {
        this._showButtonsAndScroll(newId);
        break;
      }
    }

    this.animateScroll = true;
    this.animateEnd = false;
  }

  _renderLeftButton() {
    if (!this.props.overflow || !this.state.showLeftButton) return null;

    return (
      <NavigationButtonStyled left>
        <Button
          icon={<IconArrowChevronLeft size="custom" color="inherit" />}
          onPress={this._handlePrev}
          colorScheme={this.props.colorScheme === 'light'
            ? 'flatLight'
            : 'flat'}
        />
      </NavigationButtonStyled>
    );
  }

  _renderRightButton() {
    if (!this.props.overflow || !this.state.showRightButton) return null;

    return (
      <NavigationButtonStyled right>
        <Button
          icon={<IconArrowChevronRight size="custom" color="inherit" />}
          onPress={this._handleNext}
          colorScheme={this.props.colorScheme === 'light'
            ? 'flatLight'
            : 'flat'
          }
        />
      </NavigationButtonStyled>
    );
  }

  render() {
    const {
        separatorType,
        separatorIcon,
        linkComponent,
        onItemClick,
        colorScheme,
        alignItems,
        items,
    } = this.props;
    
    const BreadcrumbsItemsList = items.map((item, index, array) => (
      <BreadcrumbsItem
        index={index}
        title={item.title}
        subtitle={item.subtitle}
        separatorType={separatorType}
        separatorIcon={separatorIcon}
        home={item.home}
        itemHref={item.itemHref}
        isActive={index === array.length - 1}
        linkComponent={linkComponent}
        onClick={onItemClick}
        saveRef={this._saveItemRef}
        options={item.options}
        key={getKey(item, index)}
        colorScheme={colorScheme}
        {...item}
      />
    ));

    const style = {
      transform: `translateX(-${this.state.offset}px)`,
    };

    if (this.animateScroll)
      style.transition = '0.3s ease-in-out';

    return (
      <BreadcrumbsStyled aria-label="Breadcrumb">
        {this._renderLeftButton()}

        <ListWrapperStyled innerRef={this._saveWrapListRef}>
          <ListStyled
            style={style}
            alignItems={alignItems}
            innerRef={this._saveContainerRef}
          >
            {BreadcrumbsItemsList}
          </ListStyled>
        </ListWrapperStyled>

        {this._renderRightButton()}
      </BreadcrumbsStyled>
    );
  }
}

Breadcrumbs.propTypes = propTypes;
Breadcrumbs.defaultProps = defaultProps;
