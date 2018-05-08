import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { noop, withTheme } from 'reactackle-core';

import {
  HeadingStyled,
  TitleBoxStyled,
  TitleContentStyled,
  IconExpandWrapperStyled,
  IconWrapperStyled,
  TitleStyled,
  ContentStyled,
} from './styles';

const propTypes = {
  /*
   * Item id
   */
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /*
   * Item title
   */
  title: PropTypes.string,
  /*
   * Show/hide item's content
   */
  expanded: PropTypes.bool,
  /*
   * Removes content paddings
   */
  contentBlank: PropTypes.bool,
  /*
   * Adds additional content slot to the item's header
   */
  headerSlot: PropTypes.node,
  /*
   * Function to be called on title click
   */
  onToggleExpanded: PropTypes.func,
  // eslint-disable-next-line react/require-default-props
  theme: PropTypes.object,
};

const defaultProps = {
  id: null,
  title: '',
  expanded: false,
  contentBlank: false,
  onToggleExpanded: noop,
  headerSlot: null,
};

class AccordionItem extends Component {
  constructor(props) {
    super(props);
    this._handleClick = this._handleClick.bind(this);
  }
  
  _handleClick() {
    this.props.onToggleExpanded({ id: this.props.id });
  }
  
  render() {
    const {
      expanded,
      contentBlank,
    } = this.props;
    
    const title = this.props.title &&
      <TitleStyled expanded={expanded}>{this.props.title}</TitleStyled>;

    const styleKey = expanded ? 'expanded' : 'collapsed';
    
    return [
      <HeadingStyled key="heading" role="heading">
        <TitleBoxStyled
          expanded={expanded}
          onClick={this._handleClick}
          role="button"
          aria-expanded={expanded}
          aria-controls={this.props.id}
          id={`labelfor${this.props.id}`}
        >
          <TitleContentStyled>
            {title}
            {this.props.headerSlot}
          </TitleContentStyled>

          <IconExpandWrapperStyled>
            <IconWrapperStyled expanded={expanded}>
              {this.props.theme.reactackle.components.accordion.item
                .expandIcon[styleKey].iconElement}
            </IconWrapperStyled>
          </IconExpandWrapperStyled>
        </TitleBoxStyled>
      </HeadingStyled>,
      <ContentStyled
        key="content"
        expanded={expanded}
        contentBlank={contentBlank}
        id={this.props.id}
        role="region"
        aria-labelledby={`labelfor${this.props.id}`}
      >
        {this.props.children}
      </ContentStyled>,
    ];
  }
}

AccordionItem.propTypes = propTypes;
AccordionItem.defaultProps = defaultProps;
AccordionItem.displayName = 'AccordionItem';

export default withTheme(AccordionItem);
