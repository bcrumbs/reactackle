import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { noop, getKey, registerDefaultComponentTheme } from 'reactackle-core';
import AccordionItem from './AccordionItem/AccordionItem';
import { AccordionStyled } from './styles/AccordionStyled';

import componentTheme from './styles/theme';

registerDefaultComponentTheme('accordion', componentTheme);

const propTypes = {
  /**
   * Speed of exit animation
   */
  items:
    PropTypes.arrayOf(
        PropTypes.shape({
          ...AccordionItem.propTypes,
          content: PropTypes.node,
        }),
    ),
  /**
   * Define if Item has state itself
   */
  stateless: PropTypes.bool,
  /**
   * Array of expanded Item's ids
   */
  expandedItemIds: PropTypes.arrayOf(PropTypes.string),
  /**
   * Expand all items at once
   */
  expandAll: PropTypes.bool,
  /**
   * If true, only one item may be expanded at one time
   */
  single: PropTypes.bool,
  /**
   * Function to be called on Item title click
   */
  onChange: PropTypes.func,
};

const defaultProps = {
  items: [],
  expandedItemIds: [],
  expandAll: false,
  single: false,
  stateless: false,
  onChange: noop,
};

export default class Accordion extends Component {
  constructor(props) {
    super(props);

    if (!props.stateless) {
      let expandedItemIds;
      if (props.expandAll)
        expandedItemIds = props.items.map(item => item.id);
      else
        expandedItemIds = props.expandedItemIds;

      this.state = {
        expandedItemIds,
      };
    }
    this._handleItemExpand = this._handleItemExpand.bind(this);
  }

  componentWillReceiveProps({ expandedItemIds }) {
    if (
      expandedItemIds !== this.props.expandedItemIds
      && !this.props.stateless
    ) this.setState({ expandedItemIds });
  }

  _getExpandedItemIds() {
    if (!this.props.stateless)
      return this.state.expandedItemIds;

    return this.props.expandedItemIds;
  }

  _toggleItemExpand(itemId) {
    let expandedItemIds = this._getExpandedItemIds().slice();
    const idx = expandedItemIds.indexOf(itemId);

    if (expandedItemIds.length && expandedItemIds.includes(itemId))
      expandedItemIds.splice(idx, 1);
    else if (this.props.single)
      expandedItemIds = [itemId];
    else
      expandedItemIds.push(itemId);

    return expandedItemIds;
  }

  _isExpanded(itemId) {
    if (!this.props.stateless)
      return this.state.expandedItemIds.includes(itemId);

    return this.props.expandedItemIds.includes(itemId);
  }

  _handleItemExpand({ id }) {
    const newExpandedIds = this._toggleItemExpand(id);

    if (!this.props.stateless) {
      this.setState({
        expandedItemIds: newExpandedIds,
      });
    }
    this.props.onChange({
      expandedItemIds: newExpandedIds,
    });
  }

  render() {
    const items = this.props.items && this.props.items.map(
      (item, index) => {
        const expanded = this._isExpanded(item.id);

        return (
          <AccordionItem
            key={getKey(item, index)}
            id={item.id}
            title={item.title}
            expanded={expanded}
            headerSlot={item.headerSlot}
            onToggleExpanded={this._handleItemExpand}
            {...item}
          >
            {item.content}
          </AccordionItem>
        );
      },
    );

    return (
      <AccordionStyled role="presentation">
        {items}
        {this.props.children}
      </AccordionStyled>
    );
  }
}

Accordion.propTypes = propTypes;
Accordion.defaultProps = defaultProps;
Accordion.displayName = 'Accordion';
