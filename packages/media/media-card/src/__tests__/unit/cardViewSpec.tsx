jest.mock('../../../src/utils/breakpoint', () => ({
  breakpointSize: jest.fn(),
  breakpointStyles: jest.fn(),
}));
jest.mock('../../../src/utils/shouldDisplayImageThumbnail', () => ({
  shouldDisplayImageThumbnail: jest.fn(() => true),
}));

import * as React from 'react';

import { shallow, mount } from 'enzyme';
import { FileDetails } from '@atlaskit/media-client';

import { AnalyticsListener, UIAnalyticsEvent } from '@atlaskit/analytics-next';
import {
  CardView,
  CardViewBase,
  CardViewOwnProps,
} from '../../../src/root/cardView';
import { FileCard } from '../../../src/files';
import { Wrapper } from '../../../src/root/styled';
import { breakpointSize } from '../../../src/utils/breakpoint';

import { shouldDisplayImageThumbnail } from '../../../src/utils/shouldDisplayImageThumbnail';
import { FabricChannel } from '@atlaskit/analytics-listeners';

describe('CardView', () => {
  const file: FileDetails = {
    id: 'abcd',
    name: 'my-file',
    mimeType: 'image/png',
    size: 42,
    processingStatus: 'pending',
    mediaType: 'image',
  };

  let createAnalyticsEventMock: any;
  beforeEach(() => {
    createAnalyticsEventMock = jest.fn();
    (shouldDisplayImageThumbnail as any).mockReturnValue(true);
  });

  const shallowCardViewBaseElement = (
    props: Partial<CardViewOwnProps>,
    renderOptions = {},
  ) =>
    shallow(
      <CardViewBase
        createAnalyticsEvent={createAnalyticsEventMock}
        status="loading"
        {...props}
      />,
      renderOptions,
    );

  it('should render FileCard when no metadata is passed', () => {
    const element = mount(<CardView status="loading" />);
    const fileCard = element.find(FileCard);
    expect(fileCard).toHaveLength(1);
  });

  it('should render FileCard with details', () => {
    const element = shallowCardViewBaseElement({ metadata: file });

    const card = element.find(FileCard);
    expect(card).toHaveLength(1);
    expect(card.props().details).toBe(file);
  });

  it('should render FileCard with other props', () => {
    const element = shallowCardViewBaseElement({
      metadata: file,
      appearance: 'image',
    });

    const fileCard = element.find(FileCard);
    expect(fileCard).toHaveLength(1);
    expect(fileCard.prop('appearance')).toEqual('image');
  });

  it('should NOT fire onSelectChange when card is NOT selectable', () => {
    const handler = jest.fn();
    const element = shallowCardViewBaseElement({
      metadata: file,
      onSelectChange: handler,
    });
    element.setProps({ selected: true });

    expect(handler).not.toHaveBeenCalled();
  });

  it('should fire onSelectChange when selected state is changed by the consumer and selectable is true', () => {
    const handler = jest.fn();
    const element = shallowCardViewBaseElement({
      metadata: file,
      onSelectChange: handler,
      selectable: true,
    });
    element.setProps({ selected: true });

    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler).toHaveBeenCalledWith({
      selected: true,
      mediaItemDetails: file,
    });
  });

  it('should render a cropped image by default', () => {
    const card = mount(
      <CardView status="complete" dataURI="a" metadata={file} />,
    );

    expect(card.find('MediaImage').prop('crop')).toBe(true);
  });

  it('should render a non-stretched image by default', () => {
    const card = mount(
      <CardView status="complete" dataURI="a" metadata={file} />,
    );

    expect(card.find('MediaImage').prop('stretch')).toBe(false);
  });

  it('should render not render a cropped image if we specify a different resizeMode', () => {
    const card = mount(
      <CardView
        status="complete"
        dataURI="a"
        metadata={file}
        resizeMode="full-fit"
      />,
    );

    expect(card.find('MediaImage').prop('crop')).toBe(false);
  });

  it('should render a stretched image if we specify stretchy-fit resizeMode', () => {
    const card = mount(
      <CardView
        status="complete"
        dataURI="a"
        metadata={file}
        resizeMode="stretchy-fit"
      />,
    );

    expect(card.find('MediaImage').prop('stretch')).toBe(true);
  });

  describe('Dimensions', () => {
    it('should render wrapper with correct breakpoint size', () => {
      const dimensions = { width: '100%', height: '50%' };

      (breakpointSize as jest.Mock<void>).mockReturnValue('small');
      const element = shallowCardViewBaseElement(
        {
          status: 'loading',
          metadata: file,
          dimensions,
        },
        { disableLifecycleMethods: true },
      );
      expect(breakpointSize).toHaveBeenCalledWith('100%');

      expect(element.find(Wrapper).props().breakpointSize).toEqual('small');
    });

    it('should render wrapper with default dimensions based on default appearance when dimensions and appearance are not provided', () => {
      const element = shallowCardViewBaseElement({
        status: 'loading',
        metadata: file,
      });
      expect(element.find(Wrapper).props().dimensions).toEqual({
        width: 156,
        height: 125,
      });
    });

    it('should use default dimensions based on passed appearance', () => {
      const element = shallowCardViewBaseElement({
        status: 'loading',
        metadata: file,
      });
      expect(element.find(Wrapper).props().dimensions).toEqual({
        width: 156,
        height: 125,
      });
    });

    it('should use passed dimensions when provided', () => {
      const element = shallowCardViewBaseElement(
        {
          status: 'loading',
          metadata: file,
          dimensions: { width: '70%', height: 100 },
        },
        { disableLifecycleMethods: true },
      );

      expect(element.find(Wrapper).props().dimensions).toEqual({
        width: '70%',
        height: 100,
      });
    });

    it('should use item type to calculate default dimensions', () => {
      const element = shallowCardViewBaseElement({
        status: 'loading',
        metadata: file,
      });
      const props = element.find(Wrapper).props();

      expect(props.dimensions).toEqual({
        width: 156,
        height: 125,
      });
    });

    it('should pass "disableOverlay" prop to <FileCard /> when mediaItemType is "file"', () => {
      const element = shallowCardViewBaseElement(
        {
          status: 'complete',
          metadata: file,
          disableOverlay: true,
        },
        { disableLifecycleMethods: true },
      );

      expect(element.find(FileCard).props().disableOverlay).toEqual(true);
    });
  });

  it('should return analytics event as a last argument when card is clicked', () => {
    const clickHandler = jest.fn();
    const analyticsEventHandler = jest.fn();
    const card = mount(
      <AnalyticsListener
        channel={FabricChannel.media}
        onEvent={analyticsEventHandler}
      >
        <CardView status="loading" metadata={file} onClick={clickHandler} />
      </AnalyticsListener>,
    );

    card.simulate('click');

    expect(clickHandler).toHaveBeenCalledTimes(1);
    expect(analyticsEventHandler).toHaveBeenCalledTimes(1);
    const actualFiredEvent: Partial<UIAnalyticsEvent> =
      analyticsEventHandler.mock.calls[0][0];
    const actualReturnedEvent: UIAnalyticsEvent = clickHandler.mock.calls[0][1];
    expect(actualFiredEvent.hasFired).toEqual(true);
    expect(actualFiredEvent.payload).toMatchObject({
      eventType: 'ui',
      action: 'clicked',
      actionSubject: 'mediaCard',
    });
    expect(actualReturnedEvent.hasFired).toEqual(false);
    expect(actualReturnedEvent.payload.action).toEqual('clicked');
    expect(actualReturnedEvent.context).toEqual(actualFiredEvent.context);
  });

  it('should trigger "media-viewed" in globalMediaEventEmitter when image card is rendered', () => {
    const onDisplayImage = jest.fn();
    mount(
      <CardView
        status="complete"
        dataURI="a"
        metadata={file}
        resizeMode="stretchy-fit"
        onDisplayImage={onDisplayImage}
      />,
    );

    expect(onDisplayImage).toHaveBeenCalledTimes(1);
  });
});
