import * as React from 'react';
import { PureComponent } from 'react';
import { EmojiDescriptionWithVariations, OnToneSelected } from '../../types';
import { WithAnalyticsEventsProps } from '@atlaskit/analytics-next';
export interface Props {
    emoji: EmojiDescriptionWithVariations;
    onToneSelected: OnToneSelected;
}
export declare class ToneSelectorInternal extends PureComponent<Props & WithAnalyticsEventsProps, {}> {
    private fireEvent;
    UNSAFE_componentWillMount(): void;
    private onToneSelectedHandler;
    render(): JSX.Element;
}
declare const ToneSelector: React.ForwardRefExoticComponent<Pick<Props & WithAnalyticsEventsProps, "emoji" | "onToneSelected"> & React.RefAttributes<any>>;
export default ToneSelector;
