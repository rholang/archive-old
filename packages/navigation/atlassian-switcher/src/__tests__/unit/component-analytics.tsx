import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import Switcher from '../../components/switcher';
import { MANAGE_HREF } from '../../providers/jira-data-providers';
import Item from '@atlaskit/item';
import ManageButton from '../../primitives/manage-button';
import messages from '../../utils/messages';
import { IntlProvider } from 'react-intl';
import createStream, { Stream } from '../../../test-helpers/stream';
import { AnalyticsListener, UIAnalyticsEvent } from '@atlaskit/analytics-next';
import { WorklensProductType } from '../../types';

const DefaultAtlassianSwitcher = (props: any = {}) => {
  const stubIcon = () => <span />;
  const switcherLinks = {
    licensedProductLinks: [
      {
        key: 'jira',
        label: 'Jira',
        Icon: stubIcon,
        href: '/secure/MyJiraHome.jspa',
        productType: WorklensProductType.JIRA_BUSINESS,
        childItems: [
          {
            label: 'some-site',
            href: '/some-jira-site',
          },
          {
            label: 'other-site',
            href: '/other-jira-site',
          },
        ],
      },
    ],
    suggestedProductLinks: [
      {
        key: 'confluence.ondemand',
        label: 'Confluence',
        Icon: stubIcon,
        href: '/wiki',
      },
    ],
    fixedLinks: [],
    adminLinks: [
      {
        key: 'discoverMore',
        label: 'Discover More',
        Icon: stubIcon,
        href: '/admin/billing/addapplication',
      },
    ],
    recentLinks: [
      {
        key: 'recentLink',
        label: 'Recent Container',
        Icon: stubIcon,
        href: '/some/recent/container',
        type: 'container-type',
        description: 'Container Type',
      },
    ],
    customLinks: [
      {
        key: 'customLink',
        label: 'Some arbitrary link',
        Icon: stubIcon,
        href: 'https://example.com',
      },
    ],
    discoverSectionLinks: [],
    ...(props.overrideSwitcherLinks || {}),
  };
  return (
    <IntlProvider locale="en">
      <AnalyticsListener channel="*" onEvent={props.onEventFired}>
        <Switcher
          product="jira"
          cloudId="some-cloud-id"
          triggerXFlow={() => 'triggering xflow'}
          manageLink={MANAGE_HREF}
          messages={messages}
          hasLoaded
          hasLoadedCritical
          {...switcherLinks}
          {...props}
        />
      </AnalyticsListener>
    </IntlProvider>
  );
};

const flattenContext = (context: Record<string, any>[]) =>
  context.reduce(
    (flattenedContext, contextLayer) =>
      contextLayer.navigationCtx && contextLayer.navigationCtx.attributes
        ? {
            ...flattenedContext,
            ...contextLayer.navigationCtx.attributes,
          }
        : flattenedContext,
    {},
  );

describe('Atlassian Switcher - Component Analytics', () => {
  let wrapper: ReactWrapper;
  let eventStream: Stream<UIAnalyticsEvent>;
  beforeEach(() => {
    eventStream = createStream();
    wrapper = mount(<DefaultAtlassianSwitcher onEventFired={eventStream} />);
  });
  it('should fire "atlassianSwitcher rendered and "atlassianSwitcher viewed"', async () => {
    // UI event when the Switcher is viewed at all (before content load)
    const { payload: viewedPayload } = await eventStream.next();
    expect(viewedPayload).toMatchObject({
      eventType: 'ui',
      action: 'viewed',
      actionSubject: 'atlassianSwitcher',
      attributes: {
        suggestedProducts: ['confluence.ondemand'],
        licensedProducts: ['jira'],
        adminLinks: ['discoverMore'],
        fixedLinks: [],
        numberOfSites: 2,
      },
    });

    // Operational event when the Switcher first displays content
    const { payload } = await eventStream.next();
    expect(payload).toMatchObject({
      eventType: 'operational',
      action: 'rendered',
      actionSubject: 'atlassianSwitcher',
    });
    expect(payload.attributes).toHaveProperty('duration');
    expect(payload.attributes.duration).toBeGreaterThanOrEqual(0);
  });

  it('should fire "atlassianSwitcher viewed" with correct numberOfSites for site-centric', async () => {
    // site-centric response doesn't have any childItems
    const overrideSwitcherLinks = {
      licensedProductLinks: [
        {
          key: 'jira',
          label: 'Jira',
          Icon: () => <span />,
          href: '/secure/MyJiraHome.jspa',
          productType: WorklensProductType.JIRA_BUSINESS,
        },
      ],
    };
    eventStream = createStream();
    wrapper = mount(
      <DefaultAtlassianSwitcher
        onEventFired={eventStream}
        overrideSwitcherLinks={overrideSwitcherLinks}
      />,
    );

    // UI event when the Switcher is viewed at all (before content load)
    const { payload: viewedPayload } = await eventStream.next();
    expect(viewedPayload).toMatchObject({
      eventType: 'ui',
      action: 'viewed',
      actionSubject: 'atlassianSwitcher',
      attributes: {
        suggestedProducts: ['confluence.ondemand'],
        licensedProducts: ['jira'],
        adminLinks: ['discoverMore'],
        fixedLinks: [],
        numberOfSites: 1,
      },
    });
  });

  describe('should fire "atlassianSwitcherItem clicked"', () => {
    const appSwitcherLinksCategories = [
      {
        name: 'for licensedProductLinks',
        data: {
          itemType: 'product',
          itemId: 'jira',
          itemsCount: 5,
          groupItemsCount: 3,
          domain: 'invalid',
        },
      },
      {
        name: 'for licensedProductLinks expand',
        data: {
          itemType: 'product',
          itemId: 'jira',
          itemsCount: 5,
          groupItemsCount: 3,
          domain: 'invalid',
        },
        subject: 'atlassianSwitcherItemExpand',
      },
      {
        name: 'for suggestedProductLinks',
        data: {
          itemType: 'try',
          itemId: 'confluence.ondemand',
          itemsCount: 5,
          groupItemsCount: 3,
          domain: 'invalid',
        },
      },
      {
        name: 'for adminLinks',
        data: {
          itemType: 'admin',
          itemId: 'discoverMore',
          itemsCount: 5,
          groupItemsCount: 3,
          domain: 'invalid',
        },
      },
      {
        name: 'for recentLinks',
        data: {
          group: 'recent',
          itemType: 'recent',
          itemId: 'container-type',
          itemsCount: 5,
          groupItemsCount: 1,
          domain: 'invalid',
        },
      },
      {
        name: 'for customLinks',
        data: {
          group: 'customLinks',
          itemType: 'customLink',
          itemId: null,
          itemsCount: 5,
          groupItemsCount: 1,
          domain: 'example.com',
        },
      },
    ];

    for (let i = 0; i < appSwitcherLinksCategories.length; i++) {
      const appSwitcherLinkCategory = appSwitcherLinksCategories[i];
      it(appSwitcherLinkCategory.name, async () => {
        // skip viewed/rendered events
        eventStream.skip(2);
        const item = wrapper.find(Item);
        item.at(i).simulate('click');
        const { payload, context } = await eventStream.next();
        expect(payload).toMatchObject({
          eventType: 'ui',
          action: 'clicked',
          actionSubject:
            appSwitcherLinkCategory.subject || 'atlassianSwitcherItem',
        });
        expect(flattenContext(context)).toMatchObject({
          group: 'switchTo',
          ...appSwitcherLinkCategory.data,
        });
      });
    }
  });

  it('should fire "atlassianSwitcherItemExpand clicked" and "atlassianSwitcherChildItem clicked"', async () => {
    const analyticsData = {
      itemType: 'product',
      itemId: 'jira',
      itemsCount: 5,
      groupItemsCount: 3,
      domain: 'invalid',
      productType: WorklensProductType.JIRA_BUSINESS,
    };

    // skip viewed/rendered events
    eventStream.skip(2);

    const expandToggle = wrapper
      .find(Item)
      .find('[data-test-id="switcher-expand-toggle"]');

    expandToggle.at(0).simulate('click');
    const { payload, context } = await eventStream.next();

    expect(payload).toMatchObject({
      eventType: 'ui',
      action: 'clicked',
      actionSubject: 'atlassianSwitcherItemExpand',
    });
    expect(flattenContext(context)).toMatchObject({
      group: 'switchTo',
      ...analyticsData,
    });

    const childItem = wrapper
      .find(Item)
      .find('[data-test-id="switcher-child-item"]');
    childItem.at(0).simulate('click');

    const {
      payload: childItemClickPayload,
      context: childItemClickContext,
    } = await eventStream.next();
    expect(childItemClickPayload).toMatchObject({
      eventType: 'ui',
      action: 'clicked',
      actionSubject: 'atlassianSwitcherChildItem',
    });
    expect(flattenContext(childItemClickContext)).toMatchObject({
      group: 'switchTo',
      ...analyticsData,
    });
  });

  it('should fire "button clicked - manageListButton"', async () => {
    // skip viewed/rendered events
    await eventStream.skip(2);
    /*
      This is needed as there's a slight delay between the rendered event being fired
      and the last endpoint being proccessed. This can be removed once we instrument
      the data providers with analytics and we intentionally skip the events triggered
      by the fetch calls.
     */
    process.nextTick(() => {
      wrapper.update();
      const manageButton = wrapper.find(ManageButton);
      manageButton.simulate('click');
    });
    const { payload, context } = await eventStream.next();
    expect(payload).toMatchObject({
      action: 'clicked',
      actionSubject: 'button',
    });
    expect(flattenContext(context)).toMatchObject({
      itemsCount: 5,
    });
  });
});
