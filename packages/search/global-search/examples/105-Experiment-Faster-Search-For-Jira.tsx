import * as React from 'react';
import StorybookQuickSearch from '../example-helpers/StorybookQuickSearch';

export default class GlobalQuickSearchExample extends React.Component {
  render() {
    return <StorybookQuickSearch context="jira" experimentId="faster-search" />;
  }
}
