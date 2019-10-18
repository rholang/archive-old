import * as React from 'react';
import { AnalyticsListener, UIAnalyticsEvent } from '@atlaskit/analytics-next';
import Button, { ButtonGroup } from '@atlaskit/button';
import Page from '@atlaskit/page';
import {
  RightSidePanel,
  FlexContainer,
  ContentWrapper,
} from '@atlaskit/right-side-panel';

import LocaleIntlProvider from '../example-helpers/LocaleIntlProvider';
import { getArticle, searchArticle } from './utils/mockData';
import {
  ButtonsWrapper,
  FooterContent,
  ExampleDefaultContent,
} from './utils/styled';

import Help from '../src';

interface ArticleFeedback {
  RateReasonText: string;
  negativeRateReason?: string;
}

const handleEvent = (analyticsEvent: { payload: any; context: any }) => {
  const { payload, context } = analyticsEvent;
  console.log('Received event:', { payload, context });
};

export default class extends React.Component {
  state = {
    isOpen: false,
    searchText: 'test',
    articleId: undefined,
  };

  private helpTimeoutId: number | undefined;
  private getArticleTimeoutId: number | undefined;
  private searchArticleTimeoutId: number | undefined;

  componentWillUnmount() {
    window.clearTimeout(this.helpTimeoutId);
    window.clearTimeout(this.getArticleTimeoutId);
    window.clearTimeout(this.searchArticleTimeoutId);
  }

  onWasHelpfulSubmit = (
    articleFeedback: ArticleFeedback,
    analyticsEvent: UIAnalyticsEvent,
  ): Promise<boolean> => {
    return new Promise(
      resolve =>
        (this.helpTimeoutId = window.setTimeout(() => {
          analyticsEvent.fire('help');
          console.log(articleFeedback);
          resolve(true);
        }, 1000)),
    );
  };

  openDrawer = async (articleId: string = '') => {
    await this.setState({
      isOpen: true,
      articleId,
    });
  };

  closeDrawer = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    analyticsEvent: UIAnalyticsEvent,
  ) => {
    event.preventDefault();
    analyticsEvent.fire('help');
    this.setState({
      isOpen: false,
    });
  };

  articleWasHelpfulNoButtonClick = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    analyticsEvent: UIAnalyticsEvent,
  ) => {
    event.preventDefault();
    analyticsEvent.fire('help');
  };

  articleWasHelpfulYesButtonClick = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    analyticsEvent: UIAnalyticsEvent,
  ) => {
    event.preventDefault();
    analyticsEvent.fire('help');
  };

  onGetArticle = (articleId: string): Promise<any> => {
    return new Promise(resolve => {
      this.getArticleTimeoutId = window.setTimeout(
        () => resolve(getArticle(articleId)),
        100,
      );
    });
  };

  onSearch = (value: string): Promise<any> => {
    return new Promise(resolve => {
      this.searchArticleTimeoutId = window.setTimeout(
        () => resolve(searchArticle(value)),
        1000,
      );
    });
  };

  articleIdSetter = (id: string): void => {
    this.setState({
      articleId: id,
    });
  };

  render() {
    const { isOpen, articleId } = this.state;
    return (
      <AnalyticsListener channel="help" onEvent={handleEvent}>
        <FlexContainer id="helpExample">
          <ContentWrapper>
            <Page>
              <ButtonsWrapper>
                <ButtonGroup>
                  <Button type="button" onClick={() => this.openDrawer()}>
                    Open drawer - default content
                  </Button>

                  <Button type="button" onClick={() => this.openDrawer('00')}>
                    Open drawer - Article 00
                  </Button>

                  <Button type="button" onClick={() => this.openDrawer('01')}>
                    Open drawer - Article 01
                  </Button>

                  <Button type="button" onClick={() => this.openDrawer('02')}>
                    Open drawer - Article 02
                  </Button>

                  <Button type="button" onClick={this.closeDrawer}>
                    Close drawer
                  </Button>
                </ButtonGroup>
              </ButtonsWrapper>
              <RightSidePanel isOpen={isOpen} attachPanelTo="helpExample">
                <LocaleIntlProvider locale={'en'}>
                  <Help
                    articleIdSetter={this.articleIdSetter}
                    onButtonCloseClick={this.closeDrawer}
                    onWasHelpfulSubmit={this.onWasHelpfulSubmit}
                    articleId={articleId}
                    onGetArticle={this.onGetArticle}
                    onWasHelpfulYesButtonClick={
                      this.articleWasHelpfulYesButtonClick
                    }
                    onWasHelpfulNoButtonClick={
                      this.articleWasHelpfulNoButtonClick
                    }
                    footer={
                      <FooterContent>
                        <span>Footer</span>
                      </FooterContent>
                    }
                  >
                    <ExampleDefaultContent>
                      <span>Default content</span>
                    </ExampleDefaultContent>
                  </Help>
                </LocaleIntlProvider>
              </RightSidePanel>
            </Page>
          </ContentWrapper>
        </FlexContainer>
      </AnalyticsListener>
    );
  }
}
