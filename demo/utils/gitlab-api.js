'use strict';

import {
  GITLAB_API_URL,
  GITLAB_API_PRIVATE_TOKEN,
  GITLAB_API_ISSUES_PATH,
} from '../config';

const formatQueryString = params => Object.keys(params)
  .map(key => `${key}=${encodeURIComponent(params[key])}`)
  .join('&');

export const fetchIssuesByLabels = labels => {
  const query = {
    labels: labels.join(','),
    state: 'opened',
    private_token: GITLAB_API_PRIVATE_TOKEN,
  };
  
  const url =
    `${GITLAB_API_URL}/${GITLAB_API_ISSUES_PATH}?${formatQueryString(query)}`;
  
  return fetch(url).then(response => response.json());
};
