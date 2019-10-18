import * as React from 'react';
import { MediaPluginState, MediaProvider } from '../../pm-plugins/main';
import {
  ClipboardConfig,
  BrowserConfig,
  DropzoneConfig,
  MediaPicker,
} from '@atlaskit/media-picker';
import { MediaClientConfig } from '@atlaskit/media-core';
import { ErrorReporter } from '@atlaskit/editor-common';
import PickerFacade from '../../picker-facade';
import { CustomMediaPicker } from '../../types';
import {
  getUploadMediaClientConfigFromMediaProvider,
  getViewMediaClientConfigFromMediaProvider,
} from '../../utils/media-common';

export interface ChildrenProps {
  config: ClipboardConfig | BrowserConfig | DropzoneConfig;
  mediaClientConfig: MediaClientConfig;
  pickerFacadeInstance: PickerFacade;
}

export type Props = {
  mediaState: MediaPluginState;
  analyticsName: string;
  children: (props: ChildrenProps) => React.ReactNode;
};

type State = {
  config?: ClipboardConfig | BrowserConfig | DropzoneConfig;
  mediaClientConfig?: MediaClientConfig;
  pickerFacadeInstance?: PickerFacade;
};

const dummyMediaPickerObject: CustomMediaPicker = {
  on: () => {},
  removeAllListeners: () => {},
  emit: () => {},
  destroy: () => {},
  setUploadParams: () => {},
};

export default class PickerFacadeProvider extends React.Component<
  Props,
  State
> {
  state: State = {};

  private handleMediaProvider = async (
    _name: string,
    provider?: Promise<MediaProvider>,
  ) => {
    const { mediaState, analyticsName } = this.props;
    const mediaProvider = await provider;

    if (!mediaProvider || !mediaProvider.uploadParams) {
      return;
    }

    const resolvedMediaClientConfig =
      (await getUploadMediaClientConfigFromMediaProvider(mediaProvider)) ||
      (await getViewMediaClientConfigFromMediaProvider(mediaProvider));

    if (!resolvedMediaClientConfig) {
      return;
    }

    const pickerFacadeConfig = {
      mediaClientConfig: resolvedMediaClientConfig,
      errorReporter: mediaState.options.errorReporter || new ErrorReporter(),
    };

    /**
     * As the first MediaPicker component to be migrated to React, we want to scope the amount of changes logic changed/moved on Editor side.
     * To achieve this we agreed on using `PickerFacade` 'customMediaPicker' type, since we only need this instance to reuse the logic when we subscribe
     * for all the different events in MediaPicker (onPreviewUpdate, onError, onProcessing, etc).
     * The `dummyMediaPickerObject` provided here serves as a workaround for the old picker api that `PickerFacade` will try to use.
     * But we don't want this to do anything since it's all part of the new React component (`Clipboard` component in this case).
     * Eventually PickerFacade will be removed and replaced with a new abstraction explained here https://product-fabric.atlassian.net/browse/MS-1937
     */
    const pickerFacadeInstance = await new PickerFacade(
      'customMediaPicker',
      pickerFacadeConfig,
      dummyMediaPickerObject,
      MediaPicker,
      analyticsName,
    ).init();

    /**
     * Based on the `initPickers` method in `MediaPluginState` we need these 2 `onNewMedia` subscriptions.
     * First one in order to trigger the entire process of uploading a file for when `onPreviewUpdate` is called
     * Second one in order to track all analytics as before.
     */
    pickerFacadeInstance.onNewMedia(mediaState.insertFile);
    pickerFacadeInstance.onNewMedia(mediaState.trackNewMediaEvent);
    pickerFacadeInstance.setUploadParams(mediaProvider.uploadParams);

    const config = {
      uploadParams: mediaProvider.uploadParams,
    };

    this.setState({
      pickerFacadeInstance,
      config,
      mediaClientConfig: resolvedMediaClientConfig,
    });
  };

  componentDidMount() {
    this.props.mediaState.options.providerFactory.subscribe(
      'mediaProvider',
      this.handleMediaProvider,
    );
  }

  componentWillUnmount() {
    this.props.mediaState.options.providerFactory.unsubscribe(
      'mediaProvider',
      this.handleMediaProvider,
    );
  }

  render() {
    const { mediaClientConfig, config, pickerFacadeInstance } = this.state;

    if (!mediaClientConfig || !config || !pickerFacadeInstance) {
      return null;
    }

    return this.props.children({
      mediaClientConfig,
      config,
      pickerFacadeInstance,
    });
  }
}
