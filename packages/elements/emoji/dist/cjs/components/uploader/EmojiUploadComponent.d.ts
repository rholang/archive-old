import { PureComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { EmojiProvider } from '../../api/EmojiResource';
import { CreateUIAnalyticsEvent } from '@atlaskit/analytics-next';
export interface UploadRefHandler {
    (ref: HTMLDivElement): void;
}
export interface Props {
    emojiProvider: EmojiProvider;
    onUploaderRef?: UploadRefHandler;
    createAnalyticsEvent?: CreateUIAnalyticsEvent;
}
export interface State {
    uploadErrorMessage?: FormattedMessage.MessageDescriptor;
}
export default class EmojiUploadComponent extends PureComponent<Props, State> {
    private ref?;
    constructor(props: Props);
    private onUploadEmoji;
    private prepareForUpload;
    onFileChooserClicked: () => void;
    private onUploadCancelled;
    private onUploaderRef;
    private fireAnalytics;
    render(): JSX.Element;
}
