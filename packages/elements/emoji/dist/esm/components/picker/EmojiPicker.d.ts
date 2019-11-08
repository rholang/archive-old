import { WithAnalyticsEventsProps } from '@atlaskit/analytics-next';
import * as React from 'react';
import { ComponentClass } from 'react';
import { EmojiProvider } from '../../api/EmojiResource';
import { OnEmojiEvent } from '../../types';
import LoadingEmojiComponent, { Props as LoadingProps, State as LoadingState } from '../common/LoadingEmojiComponent';
import { PickerRefHandler, Props as ComponentProps } from './EmojiPickerComponent';
export interface Props extends LoadingProps {
    onSelection?: OnEmojiEvent;
    onPickerRef?: PickerRefHandler;
    hideToneSelector?: boolean;
}
export declare class EmojiPickerInternal extends LoadingEmojiComponent<Props & WithAnalyticsEventsProps, LoadingState> {
    static AsyncLoadedComponent?: ComponentClass<ComponentProps>;
    state: {
        asyncLoadedComponent: React.ComponentClass<ComponentProps, any> | undefined;
    };
    constructor(props: Props);
    asyncLoadComponent(): void;
    renderLoading(): JSX.Element | null;
    renderLoaded(loadedEmojiProvider: EmojiProvider, EmojiPickerComponent: ComponentClass<ComponentProps>): JSX.Element;
}
declare const EmojiPicker: React.ForwardRefExoticComponent<Pick<Props & WithAnalyticsEventsProps, "emojiProvider" | "onSelection" | "onPickerRef" | "hideToneSelector"> & React.RefAttributes<any>>;
export default EmojiPicker;
