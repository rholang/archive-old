import * as React from 'react';
import { ReactWrapper } from 'enzyme';
import { Observable } from 'rxjs';
import { CustomMediaPlayer } from '@atlaskit/media-ui';
import { MediaFileArtifacts } from '@atlaskit/media-store';
import {
  FileIdentifier,
  FileState,
  globalMediaEventEmitter,
  MediaViewedEventPayload,
} from '@atlaskit/media-client';
import {
  asMockReturnValue,
  expectFunctionToHaveBeenCalledWith,
  fakeMediaClient,
  mountWithIntlContext,
  nextTick,
} from '@atlaskit/media-test-helpers';
import {
  InlinePlayer,
  InlinePlayerProps,
  getPreferredVideoArtifact,
  InlinePlayerState,
} from '../../../root/inlinePlayer';
import { CardLoading } from '../../../utils/lightCards/cardLoading';
import { InlinePlayerWrapper } from '../../../root/styled';
import { AnalyticsListener, UIAnalyticsEvent } from '@atlaskit/analytics-next';
import { FabricChannel } from '@atlaskit/analytics-listeners';

const defaultFileState: FileState = {
  status: 'processed',
  id: '123',
  name: 'file-name',
  size: 10,
  artifacts: {},
  mediaType: 'image',
  mimeType: 'image/png',
  representations: { image: {} },
};

describe('<InlinePlayer />', () => {
  const defaultArtifact: MediaFileArtifacts = {
    'video_1280.mp4': { processingStatus: 'succeeded', url: '' },
  };
  const setup = (
    props?: Partial<InlinePlayerProps>,
    artifacts: MediaFileArtifacts = defaultArtifact,
    analyticsHandler: any = false,
  ) => {
    const mediaClient = fakeMediaClient();
    asMockReturnValue(
      mediaClient.file.getFileState,
      Observable.of({
        ...defaultFileState,
        artifacts,
      }),
    );
    asMockReturnValue(
      mediaClient.file.getArtifactURL,
      Promise.resolve('some-url'),
    );
    asMockReturnValue(
      mediaClient.file.getFileBinaryURL,
      Promise.resolve('binary-url'),
    );
    const identifier = {
      id: Promise.resolve('some-id'),
      collectionName: 'some-collection',
    } as FileIdentifier;

    const TheInlinePlayer = () => (
      <InlinePlayer
        dimensions={{}}
        mediaClient={mediaClient}
        identifier={identifier}
        {...props}
      />
    );

    const component = mountWithIntlContext<
      InlinePlayerProps,
      InlinePlayerState
    >(
      analyticsHandler ? (
        <AnalyticsListener
          channel={FabricChannel.media}
          onEvent={analyticsHandler}
        >
          <TheInlinePlayer />
        </AnalyticsListener>
      ) : (
        <TheInlinePlayer />
      ),
    );

    return {
      component,
      mediaClient,
    };
  };
  const update = async (
    component: ReactWrapper<InlinePlayerProps, InlinePlayerState>,
  ) => {
    await new Promise(resolve => window.setTimeout(resolve));
    component.update();
  };

  beforeEach(() => {
    jest.spyOn(globalMediaEventEmitter, 'emit');
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should render loading component when the video src is not ready', () => {
    const { component } = setup({
      dimensions: {
        width: 10,
        height: '5%',
      },
    });

    expect(component.find(CardLoading)).toHaveLength(1);
    expect(component.find(CardLoading).prop('dimensions')).toEqual({
      width: 10,
      height: '5%',
    });
  });

  it('should call getFileState with right properties', async () => {
    const { component, mediaClient } = setup();

    await update(component);
    expect(mediaClient.file.getFileState).toBeCalledTimes(1);
    expect(mediaClient.file.getFileState).toBeCalledWith('some-id', {
      collectionName: 'some-collection',
    });
  });

  it('should set width according to dimensions in the wrapper element', async () => {
    const { component } = setup({
      dimensions: {
        width: 1,
        height: 1,
      },
    });

    await update(component);
    expect(component.find(InlinePlayerWrapper).prop('style')).toEqual({
      width: 1,
    });
  });

  it('should use local preview if available', async () => {
    const blob = new Blob([], { type: 'video/mp4' });
    const mediaClient = {
      file: {
        getFileState: jest.fn().mockReturnValue(
          Observable.of({
            status: 'uploading',
            preview: {
              value: blob,
            },
          }),
        ),
      },
    } as any;
    const { component } = setup({ mediaClient });

    await update(component);

    expect(component.find(CustomMediaPlayer).prop('src')).toEqual(
      'mock result of URL.createObjectURL()',
    );
  });

  it('should use right file artifact', async () => {
    const { component, mediaClient } = setup();

    await update(component);
    expect(mediaClient.file.getArtifactURL).toBeCalledTimes(1);
    expect(mediaClient.file.getArtifactURL).toBeCalledWith(
      {
        'video_1280.mp4': {
          processingStatus: 'succeeded',
          url: '',
        },
      },
      'video_1280.mp4',
      'some-collection',
    );
    expect(component.find(CustomMediaPlayer).prop('src')).toEqual('some-url');
  });

  it('should use sd artifact if hd one is not present', async () => {
    const { component, mediaClient } = setup(undefined, {
      'video_640.mp4': {
        processingStatus: 'succeeded',
        url: '',
      },
    });

    await update(component);
    expect(mediaClient.file.getArtifactURL).toBeCalledTimes(1);
    expect(mediaClient.file.getArtifactURL).toBeCalledWith(
      {
        'video_640.mp4': {
          processingStatus: 'succeeded',
          url: '',
        },
      },
      'video_640.mp4',
      'some-collection',
    );
    expect(component.find(CustomMediaPlayer).prop('src')).toEqual('some-url');
  });

  it('should use binary artifact if file is processing and no other artifact is present', async () => {
    const { component, mediaClient } = setup(undefined, {});

    await update(component);
    expect(mediaClient.file.getFileBinaryURL).toBeCalledTimes(1);
    expect(mediaClient.file.getFileBinaryURL).toBeCalledWith(
      'some-id',
      'some-collection',
    );
    expect(component.find(CustomMediaPlayer).prop('src')).toEqual('binary-url');
  });

  it('should download video binary when download button is clicked', async () => {
    const { component, mediaClient } = setup();

    await update(component);
    const button = component.find('DownloadIcon');
    button.simulate('click');
    await nextTick();
    expect(mediaClient.file.downloadBinary).toBeCalledTimes(1);
    expect(mediaClient.file.downloadBinary).toBeCalledWith(
      'some-id',
      undefined,
      'some-collection',
    );
  });

  describe('getPreferredVideoArtifact()', () => {
    it('should return hd artifact if present', () => {
      const state = {
        status: 'processed',
        artifacts: {
          'video_1280.mp4': {},
          'video_640.mp4': {},
        },
      };

      expect(getPreferredVideoArtifact(state as FileState)).toEqual(
        'video_1280.mp4',
      );
    });

    it('should fallback to sd artifact if hd is not present', () => {
      const state = {
        status: 'processed',
        artifacts: {
          'audio.mp3': {},
          'video_640.mp4': {},
        },
      };

      expect(getPreferredVideoArtifact(state as FileState)).toEqual(
        'video_640.mp4',
      );
    });

    it('should work with processing status', () => {
      const state = {
        status: 'processing',
        artifacts: {
          'video_1280.mp4': {},
        },
      };

      expect(getPreferredVideoArtifact(state as FileState)).toEqual(
        'video_1280.mp4',
      );
    });
  });

  it('should return analytics event as a last argument when player is clicked', async () => {
    const clickHandler = jest.fn();
    const analyticsEventHandler = jest.fn();
    const { component } = setup(
      {
        onClick: clickHandler,
      },
      undefined,
      analyticsEventHandler,
    );
    await update(component);

    component.find(InlinePlayer).simulate('click');

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
      actionSubjectId: 'mediaCardInlinePlayer',
    });
    expect(actualReturnedEvent.hasFired).toEqual(false);
    expect(actualReturnedEvent.payload.action).toEqual('clicked');
    expect(actualReturnedEvent.context).toEqual(actualFiredEvent.context);
  });

  it('should trigger media-viewed when video is first played', async () => {
    const { component } = setup();
    await update(component);
    const { onFirstPlay } = component.find(CustomMediaPlayer).props();
    if (!onFirstPlay) {
      return expect(onFirstPlay).toBeDefined();
    }
    onFirstPlay();
    expect(globalMediaEventEmitter.emit).toHaveBeenCalledTimes(1);
    expectFunctionToHaveBeenCalledWith(globalMediaEventEmitter.emit, [
      'media-viewed',
      {
        fileId: 'some-id',
        viewingLevel: 'full',
      } as MediaViewedEventPayload,
    ]);
  });
});
