'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  GITLAB_ISSUE_LABEL_BUG,
  GITLAB_ISSUE_LABEL_IMPROVEMENT,
} from '../../constants';

import {
  RouteMemo,
  MemoItem,
} from '../Route/RouteStructure';

import { fetchIssuesByLabels } from '../../utils/gitlab-api';

const propTypes = {
  components: PropTypes.array,
};

const defaultProps = {
  components: [],
};

export class IssuesTable extends Component {
  constructor() {
    super();
    this._isMounted = false;
    this.state = {
      bugs: [],
      improvements: [],
    };
  }

  componentDidMount() {
    this._isMounted = true;
    fetchIssuesByLabels(this.props.components.map(cmp => `component/${cmp}`))
      .then(issues => {
        if (this._isMounted) {
          this.setState({
            bugs:
              Array.isArray(issues)
              ? issues.filter(
                issue => issue.labels.includes(GITLAB_ISSUE_LABEL_BUG),
              )
              : [],
            improvements:
              Array.isArray(issues)
              ? issues.filter(
                issue => issue.labels.includes(GITLAB_ISSUE_LABEL_IMPROVEMENT),
              )
              : [],
          });
        }
      });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  _renderBugs() {
    if (!this.state.bugs.length) return null;

    const bugs = this.state.bugs.map(bug => (
      <MemoItem
        key={bug.id}
        anchor={bug.web_url}
      >
        {bug.title}
      </MemoItem>
    ));

    return (
      <RouteMemo title="Bugs">
        {bugs}
      </RouteMemo>
    );
  }

  _renderImprovements() {
    if (!this.state.improvements.length) return null;

    const improvements = this.state.improvements.map(improvement => (
      <MemoItem
        key={improvement.id}
        anchor={improvement.web_url}
      >
        {improvement.title}
      </MemoItem>
    ));

    return (
      <RouteMemo kind="success" title="Improvements">
        {improvements}
      </RouteMemo>
    );
  }

  render() {
    const bugs = this._renderBugs(),
      improvements = this._renderImprovements();

    return (
      <div>
        {improvements}
        {bugs}
      </div>
    );
  }
}

IssuesTable.propTypes = propTypes;
IssuesTable.defaultProps = defaultProps;
IssuesTable.displayName = 'IssuesTable';
