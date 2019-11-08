import * as React from 'react';
import { ComponentClass } from 'react';
import LoadingEmojiComponent, { Props as LoadingProps, State as LoadingState } from '../common/LoadingEmojiComponent';
import { UploadRefHandler, Props as ComponentProps } from './EmojiUploadComponent';
import { EmojiProvider } from '../../api/EmojiResource';
import { CreateUIAnalyticsEvent } from '@atlaskit/analytics-next';
export interface Props extends LoadingProps {
    onUploaderRef?: UploadRefHandler;
    createAnalyticsEvent?: CreateUIAnalyticsEvent;
}
export declare class EmojiUploaderInternal extends LoadingEmojiComponent<Props, LoadingState> {
    static AsyncLoadedComponent?: ComponentClass<ComponentProps>;
    state: {
        asyncLoadedComponent: React.ComponentClass<ComponentProps, any> | undefined;
    };
    constructor(props: Props);
    asyncLoadComponent(): void;
    renderLoaded(loadedEmojiProvider: EmojiProvider, EmojiUploadComponent: ComponentClass<ComponentProps>): JSX.Element;
}
declare type EmojiUploader = EmojiUploaderInternal;
declare const EmojiUploader: React.ForwardRefExoticComponent<Pick<Props, "emojiProvider" | "onUploaderRef"> & React.RefAttributes<any>>;
export default EmojiUploader;
