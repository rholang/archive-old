import * as React from 'react';
import {
  ProcessedFileState,
  MediaClient,
  FileState,
  globalMediaEventEmitter,
} from '@atlaskit/media-client';
import AudioIcon from '@atlaskit/icon/glyph/media-services/audio';
import { Outcome } from '../domain';
import {
  AudioPlayer,
  AudioCover,
  Audio,
  DefaultCoverWrapper,
  blanketColor,
  CustomAudioPlayerWrapper,
} from '../styled';
import { createError, MediaViewerError } from '../error';
import { BaseState, BaseViewer } from './base-viewer';
import { isIE } from '../utils/isIE';
import {
  CustomMediaPlayer,
  WithShowControlMethodProp,
} from '@atlaskit/media-ui';
import { getObjectUrlFromFileState } from '../utils/getObjectUrlFromFileState';

export type Props = Readonly<
  {
    item: FileState;
    mediaClient: MediaClient;
    collectionName?: string;
    previewCount: number;
    onCanPlay?: () => void;
    onError?: () => void;
  } & WithShowControlMethodProp
>;

export type State = BaseState<string> & {
  coverUrl?: string;
};

const defaultCover = (
  <DefaultCoverWrapper>
    <AudioIcon label="cover" size="xlarge" primaryColor={blanketColor} />
  </DefaultCoverWrapper>
);

const getCoverUrl = (
  item: ProcessedFileState,
  mediaClient: MediaClient,
  collectionName?: string,
): Promise<string> =>
  mediaClient.getImageUrl(item.id, {
    collection: collectionName,
  });

export class AudioViewer extends BaseViewer<string, Props, State> {
  protected get initialState() {
    return {
      content: Outcome.pending<string, MediaViewerError>(),
    };
  }

  private renderCover = () => {
    const { item } = this.props;
    const { coverUrl } = this.state;

    if (coverUrl && item.status !== 'error') {
      return <AudioCover src={coverUrl} alt={item.name} />;
    } else {
      return defaultCover;
    }
  };

  private saveAudioElement = (audioElement?: HTMLElement) => {
    if (!audioElement) {
      return;
    }

    audioElement.setAttribute('controlsList', 'nodownload');
  };

  private onFirstPlay = () => {
    const { item } = this.props;
    globalMediaEventEmitter.emit('media-viewed', {
      fileId: item.id,
      viewingLevel: 'full',
    });
  };

  protected renderSuccessful(src: string) {
    const { showControls, previewCount, onCanPlay, onError } = this.props;

    const useCustomAudioPlayer = !isIE();
    const isAutoPlay = previewCount === 0;
    return useCustomAudioPlayer ? (
      <AudioPlayer>
        {this.renderCover()}
        <CustomAudioPlayerWrapper>
          <CustomMediaPlayer
            type="audio"
            isAutoPlay={isAutoPlay}
            src={src}
            isShortcutEnabled={true}
            showControls={showControls}
            onCanPlay={onCanPlay}
            onFirstPlay={this.onFirstPlay}
            onError={onError}
          />
        </CustomAudioPlayerWrapper>
      </AudioPlayer>
    ) : (
      <AudioPlayer>
        {this.renderCover()}
        <CustomAudioPlayerWrapper>
          <Audio
            autoPlay={isAutoPlay}
            controls
            innerRef={this.saveAudioElement}
            src={src}
            preload="metadata"
          />
        </CustomAudioPlayerWrapper>
      </AudioPlayer>
    );
  }

  private loadCover = (coverUrl: string) => {
    return new Promise(async (resolve, reject) => {
      const img = new Image();

      img.src = coverUrl;
      img.onload = resolve;
      img.onerror = reject;
    });
  };

  private setCoverUrl = async () => {
    const { mediaClient, item, collectionName } = this.props;

    if (item.status !== 'processed') {
      return;
    }
    const coverUrl = await getCoverUrl(item, mediaClient, collectionName);

    try {
      await this.loadCover(coverUrl);
      this.setState({ coverUrl });
    } catch (e) {}
  };

  protected async init() {
    const { mediaClient, item, collectionName } = this.props;

    try {
      let audioUrl: string | undefined;

      if (item.status === 'processed') {
        audioUrl = await mediaClient.file.getArtifactURL(
          item.artifacts,
          'audio.mp3',
          collectionName,
        );

        if (!audioUrl) {
          throw new Error('No audio artifacts found');
        }
      } else {
        audioUrl = await getObjectUrlFromFileState(item);
        if (!audioUrl) {
          this.setState({
            content: Outcome.pending(),
          });
          return;
        }
      }
      this.setCoverUrl();
      this.setState({
        content: Outcome.successful(audioUrl),
      });
    } catch (err) {
      this.setState({
        content: Outcome.failed(createError('previewFailed', err, item)),
      });
    }
  }
  protected release() {
    const { content } = this.state;
    if (!content.data) {
      return;
    }

    URL.revokeObjectURL(content.data);
  }
}
