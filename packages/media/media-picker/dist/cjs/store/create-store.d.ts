import { MediaClient } from '@atlaskit/media-client';
import { Store } from 'redux';
import { State } from '../popup/domain';
import { PopupConfig, PopupUploadEventEmitter } from '../components/types';
declare const _default: (eventEmitter: PopupUploadEventEmitter, tenantMediaClient: MediaClient, userMediaClient: MediaClient, config: Partial<PopupConfig>) => Store<State>;
export default _default;
