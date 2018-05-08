import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { noop, withTheme } from 'reactackle-core';
import { IconArrowChevronRight } from 'reactackle-icons';

import {
  BreadcrumbsItemStyled,
  AnchorStyled,
  TextBoxStyled,
  TitleStyled,
  SubtitleStyled,
  IconBoxStyled,
  IconHomeStyled,
  SeparatorStyled,
} from './styles';

const MenuItemType =
  PropTypes.shape({
    type: PropTypes.func,
    submenuGroup: PropTypes.shape(
      {
        type: PropTypes.func,
        // Lazy function for circular structure
        data: PropTypes.arrayOf(() => (() => MenuItemType)()),
      },
    ),
  });

const propTypes = {
  /**
   * Define component's color scheme
   */
  colorScheme: PropTypes.oneOf(['light', 'dark']),
  /**
   * Item index
   */
  index: PropTypes.number,
  /**
   * Adds home icon
   */
  home: PropTypes.bool,
  /**
   * Item's title
   */
  title: PropTypes.string,
  /**
   * Item's subtitle
   */
  subtitle: PropTypes.string,
  /**
   * Define separator
   */
  separatorIcon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  /**
   * Item's href
   */
  itemHref: PropTypes.string,
  /**
   * Active item isn't clickable and have special appearance
   */
  isActive: PropTypes.bool,
  /**
   * Component to be used as a link
   */
  linkComponent: PropTypes.func,
  /**
   * Content's vertical align
   */
  alignItems: PropTypes.oneOf(['top', 'center', 'bottom']),
  options: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    linkHref: PropTypes.string,
    type: PropTypes.func,
    data: PropTypes.arrayOf(MenuItemType),
  })),
  /**
   * ariaCurrentValue value
   */
  ariaCurrentValue: PropTypes.string,
  saveRef: PropTypes.func,
  onClick: PropTypes.func,
  // eslint-disable-next-line react/require-default-props
  theme: PropTypes.object,
};

const defaultProps = {
  colorScheme: 'dark',
  index: 0,
  home: false,
  title: '',
  subtitle: '',
  separatorIcon: <IconArrowChevronRight size="custom" color="currentColor" />,
  itemHref: '#',
  isActive: false,
  linkComponent: null,
  alignItems: 'center',
  saveRef: noop,
  onClick: noop,
  options: [],
  ariaCurrentValue: 'item',
};

class BreadcrumbsItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      left: 0,
      top: 0,
      isPortalOpened: false,
    };
    this._wrapper = null;
    this._createElementRef = this._createElementRef.bind(this);
    this._handleClick = this._handleClick.bind(this);
  }
  
  _handleClick(event) {
    if (this.props.onClick !== noop)
      this.props.onClick({ index: this.props.index }, event);
  }

  _createElementRef(ref) {
    this._wrapper = ref;
    this.props.saveRef(this.props.index, ref);
  }
  
  render() {
    const {
      colorScheme,
      isActive,
      alignItems,
      theme,
      ariaCurrentValue,
      separatorIcon,
    } = this.props;

    const componentThemePath = theme.reactackle.components.breadcrumbs.item;
  
    const breadcrumbsIcon = this.props.home && (
      <IconHomeStyled colorScheme={colorScheme}>
        {componentThemePath.iconHome.source}
      </IconHomeStyled>
    );
  
    const itemHref = (this.props.itemHref && !this.props.isActive)
      ? this.props.itemHref
      : null;
  
    const subtitle = this.props.subtitle && (
      <SubtitleStyled colorScheme={colorScheme}>
        {this.props.subtitle}
      </SubtitleStyled>
    );
  
    const arrow = this.props.options && this.props.options.length
      ? (
        <IconBoxStyled colorScheme={colorScheme}>
          {componentThemePath.iconMenuSource}
        </IconBoxStyled>
      )
      : null;

    const AnchorElement = this.props.linkComponent
      ? AnchorStyled.withComponent(this.props.linkComponent)
      : AnchorStyled;

    let ariaProps = {};
    if (ariaCurrentValue && isActive)
      ariaProps = { 'aria-current': ariaCurrentValue };

    const separator = (
        <SeparatorStyled colorScheme={colorScheme}>
          {separatorIcon}
        </SeparatorStyled>
      );
      
    return (
      <BreadcrumbsItemStyled
        innerRef={this._createElementRef}
        colorScheme={colorScheme}
      >
        <AnchorElement
          href={itemHref}
          alignItems={alignItems}
          onClick={this._handleClick}
          colorScheme={colorScheme}
          active={isActive}
          {...ariaProps}
        >
          {breadcrumbsIcon}

          <TextBoxStyled>
            <TitleStyled colorScheme={colorScheme} active={isActive}>
              {this.props.title}
            </TitleStyled>
            {subtitle}
          </TextBoxStyled>
          {arrow}
        </AnchorElement>
        {separator}
      </BreadcrumbsItemStyled>
    );
  }
}

BreadcrumbsItem.propTypes = propTypes;
BreadcrumbsItem.defaultProps = defaultProps;
BreadcrumbsItem.displayName = 'BreadcrumbsItem';

export default withTheme(BreadcrumbsItem);
