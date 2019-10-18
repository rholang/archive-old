import * as React from 'react';
import { mount } from 'enzyme';
import { fakeMediaClient, nextTick } from '@atlaskit/media-test-helpers';
import { FileIdentifier } from '@atlaskit/media-client';
import { CardLoading } from '../../../utils/lightCards/cardLoading';
import CardLoader, {
  CardWithMediaClientConfigProps,
  AsyncCardState,
} from '../../card/cardLoader';

const mediaClient = fakeMediaClient();

const identifier: FileIdentifier = {
  id: '123',
  mediaItemType: 'file',
  collectionName: 'some-name',
};

const props = {
  dimensions: {
    width: 10,
    height: 10,
  },
  mediaClientConfig: mediaClient.config,
  identifier,
};

describe('Async Card Loader', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('When the async import returns with error', () => {
    beforeEach(() => {
      jest.mock('../../card', () => {
        throw new Error('Forcing async import error');
      });
    });

    it('should pass dimensions to the loading component if the async components were NOT resolved', async () => {
      const wrapper = mount<CardWithMediaClientConfigProps, AsyncCardState>(
        <CardLoader {...props} />,
      );

      await nextTick();

      expect(wrapper.find(CardLoading).prop('dimensions')).toEqual(
        props.dimensions,
      );
    });

    it('should NOT render Card component', async () => {
      const wrapper = mount<CardWithMediaClientConfigProps, AsyncCardState>(
        <CardLoader {...props} />,
      );

      await nextTick();

      expect(wrapper.find(CardLoading).prop('dimensions')).toEqual(
        props.dimensions,
      );

      expect(wrapper.state().Card).toBeUndefined();
    });
  });

  describe('When the async import returns with success', () => {
    let MediaPickerAnalyticsErrorBoundary: React.ReactComponentElement<any>;
    beforeEach(() => {
      jest.unmock('../../card');
      jest.unmock('../../media-card-analytics-error-boundary');
      MediaPickerAnalyticsErrorBoundary = jest.requireActual(
        '../../media-card-analytics-error-boundary',
      ).default;
    });

    it('should render Card component', async () => {
      const wrapper = await mount<
        CardWithMediaClientConfigProps,
        AsyncCardState
      >(<CardLoader {...props} />);

      await nextTick();

      expect(wrapper.state().Card).not.toBeUndefined();
    });

    it('should render Error boundary component', async () => {
      const wrapper = await mount<
        CardWithMediaClientConfigProps,
        AsyncCardState
      >(<CardLoader {...props} />);
      await nextTick();
      expect(wrapper.find(MediaPickerAnalyticsErrorBoundary)).toBeDefined();
    });
  });

  describe('When the async import for Error Boundary returns with error', () => {
    beforeEach(() => {
      jest.unmock('../../card');
      jest.mock('../../media-card-analytics-error-boundary', () => {
        throw new Error('Forcing error boundary async import error');
      });
    });

    it('should render CardLoading component', async () => {
      const wrapper = await mount<
        CardWithMediaClientConfigProps,
        AsyncCardState
      >(<CardLoader {...props} />);

      await nextTick();

      expect(wrapper.find(CardLoading)).toHaveLength(1);
    });
  });
});
