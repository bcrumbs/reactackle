'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import {
  Header,
  HeaderRegion,
  HeaderTitle,
  Tabs,
} from 'reactackle';
import { RouteHeaderStyled } from './styles/RouteHeaderStyled';

const propTypes = {
  match: PropTypes.object.isRequired,
  section: PropTypes.string,
  componentTitle: PropTypes.string,
  tabs: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    href: PropTypes.string,
  })),
};

const defaultProps = {
  section: 'Components',
  componentTitle: '',
  tabs: [],
};

const StyledLink = styled(Link)`
  display: flex;
  
  &,
  &:hover,
  &:focus {
    text-decoration: none;
  }
`;

const LinkComponent = props => (
  <StyledLink replace to={props.href}> { props.children } </StyledLink>
);

LinkComponent.propTypes = {
  href: PropTypes.string.isRequired,
};

export class RouteHeadingComponent extends Component {

  get selectedTab() {
    return +!this.props.match.isExact;
  }

  _renderTabs() {
    if (this.props.tabs.length) {
      const tabs = this.props.tabs.map(item => (
        {
          text: item.text,
          linkHref: item.href,
        }
      ));
      return (
        <Tabs
          tabs={tabs}
          selected={this.selectedTab}
          linkComponent={LinkComponent}
          onChange={this._handleTabSelection}
        />
      );
    }
    return null;
  }

  render() {
    const headerTitle = this.props.section
      ? `${this.props.section} — ${this.props.componentTitle}`
      : this.props.componentTitle;

    return (
      <RouteHeaderStyled>
        <Header behavior="fixed" backgroundColor="#ECEFF7">
          <HeaderRegion verticalAlign="center">
            <HeaderTitle colorScheme="dark">
              {headerTitle}
            </HeaderTitle>
          </HeaderRegion>
          <HeaderRegion
            spread
            size="blank"
            verticalAlign="stretch"
          >
            {this._renderTabs()}
          </HeaderRegion>
        </Header>
      </RouteHeaderStyled>
    );
  }
}

RouteHeadingComponent.propTypes = propTypes;
RouteHeadingComponent.defaultProps = defaultProps;
RouteHeadingComponent.displayName = 'RouteHeading';

export const RouteHeading = withRouter(RouteHeadingComponent);
