import * as React from 'react';
import { mockEndpoints } from '@atlaskit/atlassian-switcher-test-utils';
import { withAnalyticsLogger, withIntlProvider } from './helpers';
import AtlassianSwitcher from '../src';
import styled from 'styled-components';
import EditorCloseIcon from '@atlaskit/icon/glyph/editor/close';

const FakeTrelloInlineDialog = styled.div`
  width: 360px;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 0 8px;
  display: inline-block;
  margin: 5px;
  vertical-align: top;
  box-shadow: 0 8px 16px -4px rgba(9, 30, 66, 0.25),
    0 0 0 1px rgba(9, 30, 66, 0.08);
`;

const Header = styled.div`
  text-align: center;
  position: relative;
  width: 100%;
  padding: 10px 0;
  color: #5e6c84;
  border-bottom: 1px solid rgba(9, 30, 66, 0.13);
  box-sizing: border-box;
  font-weight: 400;
`;

const CloseButtonWrapper = styled.div`
  position: absolute;
  right: 0px;
  top: 7px;
`;
class InlineDialogSwitcherExample extends React.Component {
  state = {
    isLoaded: false,
  };

  componentDidMount() {
    this.loadData();
  }
  loadData = () => {
    mockEndpoints('trello');
    this.setState({
      isLoaded: true,
    });
  };

  renderFakeTrelloChrome(content: React.ReactNode) {
    return (
      <FakeTrelloInlineDialog>
        <Header>
          Switch to
          <CloseButtonWrapper>
            <EditorCloseIcon label="Close" />
          </CloseButtonWrapper>
        </Header>
        {content}
      </FakeTrelloInlineDialog>
    );
  }

  render() {
    // colors picked from trello's website. Alpha channel was removed to avoid overlays
    const trelloTheme = {
      primaryTextColor: '#172b4d',
      secondaryTextColor: '#5e6c84',
      primaryHoverBackgroundColor: '#E0E2E5',
      secondaryHoverBackgroundColor: '#F5F6F7',
    };

    return (
      this.state.isLoaded &&
      this.renderFakeTrelloChrome(
        <AtlassianSwitcher
          product="trello"
          disableCustomLinks
          disableRecentContainers
          disableHeadings
          appearance="standalone"
          theme={trelloTheme}
        />,
      )
    );
  }
}

export default withIntlProvider(
  withAnalyticsLogger(InlineDialogSwitcherExample),
);
