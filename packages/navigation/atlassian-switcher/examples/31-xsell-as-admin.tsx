import * as React from 'react';
import Button from '@atlaskit/button';
import Drawer from '@atlaskit/drawer';
import {
  mockEndpoints,
  REQUEST_MEDIUM,
} from '@atlaskit/atlassian-switcher-test-utils';
import { withAnalyticsLogger, withIntlProvider } from './helpers';
import AtlassianSwitcher from '../src';

class JiraSwitcherExample extends React.Component {
  state = {
    isDrawerOpen: false,
  };

  componentDidMount() {
    this.openDrawer();
  }

  openDrawer = () => {
    mockEndpoints(
      'jira',
      originalMockData => ({
        ...originalMockData,
        AVAILABLE_PRODUCTS_DATA: {
          sites: [
            {
              adminAccess: false,
              availableProducts: [
                {
                  activityCount: 0,
                  productType: 'JIRA_SOFTWARE',
                  url: null,
                },
              ],
              cloudId: 'some-cloud-id',
              displayName: 'random-instance',
              url: 'https://some-random-instance.atlassian.net',
              avatar:
                'https://site-admin-avatar-cdn.staging.public.atl-paas.net/avatars/240/rings.png',
            },
          ],
        },
      }),
      REQUEST_MEDIUM,
    );
    this.setState({
      isDrawerOpen: true,
    });
  };

  onClose = () => {
    this.setState({
      isDrawerOpen: false,
    });
  };

  onTriggerXFlow = (productKey: string, sourceComponent: string) => {
    console.log(
      `Triggering xflow for => ${productKey} from ${sourceComponent}`,
    );
  };

  render() {
    return (
      <div style={{ padding: '2rem' }}>
        <Drawer onClose={this.onClose} isOpen={this.state.isDrawerOpen}>
          <AtlassianSwitcher
            product="jira"
            cloudId="some-cloud-id"
            triggerXFlow={this.onTriggerXFlow}
          />
        </Drawer>
        <Button type="button" onClick={this.openDrawer}>
          Open drawer
        </Button>
      </div>
    );
  }
}

export default withIntlProvider(withAnalyticsLogger(JiraSwitcherExample));
