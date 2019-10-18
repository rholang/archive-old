import React from 'react';
import { mount } from 'enzyme';
import {
  AnalyticsListener,
  withAnalyticsEvents,
  CreateUIAnalyticsEvent,
  UIAnalyticsEvent,
} from '@atlaskit/analytics-next';
import { FabricChannel } from '@atlaskit/analytics-listeners';
import {
  createAndFireMediaEvent,
  MediaCardAnalyticsPayload,
  MediaCardAnalyticsPayloadBase,
  createAndFireCustomMediaEvent,
  getUIAnalyticsContext,
  getBaseAnalyticsContext,
} from '../../analytics';
import {
  version as packageVersion,
  name as packageName,
} from '../../../version.json';
import { FileDetails } from '@atlaskit/media-client';

const somePayload: MediaCardAnalyticsPayloadBase = {
  eventType: 'ui',
  action: 'the-action',
  actionSubject: 'the-subject',
  actionSubjectId: 'the-subject-id',
  attributes: {
    attr1: 'this',
    attr2: 'is',
    attr3: 'nice',
  },
};

const mediaPayload: MediaCardAnalyticsPayload = {
  ...somePayload,
  attributes: {
    packageName,
    ...somePayload.attributes,
  },
};

describe('Media Analytics', () => {
  it('Should provide an analytics event creator for Media Card', () => {
    const SomeComponent = ({ onClick }: any) => (
      <span onClick={onClick}>Hi!</span>
    );
    const SomeWrappedComponent = withAnalyticsEvents({
      onClick: createAndFireMediaEvent(somePayload),
    })(SomeComponent);

    const analyticsEventHandler = jest.fn();
    const listener = mount(
      <AnalyticsListener
        channel={FabricChannel.media}
        onEvent={analyticsEventHandler}
      >
        <SomeWrappedComponent />
      </AnalyticsListener>,
    );
    listener.find(SomeComponent).simulate('click');

    expect(analyticsEventHandler).toHaveBeenCalledTimes(1);
    const actualEvent: Partial<UIAnalyticsEvent> =
      analyticsEventHandler.mock.calls[0][0];
    expect(actualEvent.payload).toMatchObject(mediaPayload);
  });

  it('Should provide a custom analytics event creator for Media Card', () => {
    type SomeComponentProps = {
      createAnalyticsEvent: CreateUIAnalyticsEvent;
    };
    const SomeComponent = (props: SomeComponentProps) => {
      const onCustomEvent = () => {
        createAndFireCustomMediaEvent(somePayload, props.createAnalyticsEvent);
      };
      onCustomEvent();
      return <span>'Hi!'</span>;
    };
    const SomeWrappedComponent = withAnalyticsEvents()(SomeComponent);

    const analyticsEventHandler = jest.fn();
    mount(
      <AnalyticsListener
        channel={FabricChannel.media}
        onEvent={analyticsEventHandler}
      >
        <SomeWrappedComponent />
      </AnalyticsListener>,
    );

    expect(analyticsEventHandler).toHaveBeenCalledTimes(1);
    const actualEvent: Partial<UIAnalyticsEvent> =
      analyticsEventHandler.mock.calls[0][0];
    expect(actualEvent.payload).toMatchObject(mediaPayload);
  });

  it('should generate Media Card UI Analytics Context data', () => {
    const metadata: FileDetails = {
      id: 'some-id',
      mediaType: 'video',
      size: 12345,
      processingStatus: 'succeeded',
    };

    const expectedContextData = {
      actionSubjectId: 'some-id',
      attributes: {
        packageVersion,
        packageName,
        componentName: 'mediaCard',
        fileAttributes: {
          fileSource: 'mediaCard',
          fileMediatype: 'video',
          fileId: 'some-id',
          fileSize: 12345,
          fileStatus: 'succeeded',
        },
      },
    };

    const contextData = getUIAnalyticsContext('some-id', metadata);
    expect(contextData).toMatchObject(expectedContextData);
  });

  it('should generate Base Analytics Context data', () => {
    const expectedContextData = {
      packageVersion,
      packageName,
      componentName: 'mediaCard',
    };

    const contextData = getBaseAnalyticsContext();
    expect(contextData).toMatchObject(expectedContextData);
  });
});
