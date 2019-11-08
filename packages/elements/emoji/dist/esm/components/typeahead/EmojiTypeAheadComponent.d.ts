import * as PropTypes from 'prop-types';
import { PureComponent } from 'react';
import { EmojiProvider } from '../../api/EmojiResource';
import { EmojiDescription, OnEmojiEvent } from '../../types';
import { EmojiContext } from '../common/internal-types';
import { CreateUIAnalyticsEvent } from '@atlaskit/analytics-next';
export interface OnLifecycle {
    (): void;
}
export interface EmojiTypeAheadBaseProps {
    onSelection?: OnEmojiEvent;
    query?: string;
    listLimit?: number;
    onOpen?: OnLifecycle;
    onClose?: OnLifecycle;
    createAnalyticsEvent?: CreateUIAnalyticsEvent;
}
export interface Props extends EmojiTypeAheadBaseProps {
    emojiProvider: EmojiProvider;
}
export interface State {
    visible: boolean;
    emojis: EmojiDescription[];
    loading: boolean;
}
export default class EmojiTypeAheadComponent extends PureComponent<Props, State> {
    static childContextTypes: {
        emoji: PropTypes.Requireable<any>;
    };
    static defaultProps: {
        onSelection: () => void;
        onOpen: () => void;
        onClose: () => void;
        listLimit: number;
    };
    private emojiListRef;
    private openTime;
    private renderStartTime;
    private selectedTone;
    private pressed;
    private sessionId;
    private selected;
    constructor(props: Props);
    getChildContext(): EmojiContext;
    componentDidMount(): void;
    componentWillUnmount(): void;
    UNSAFE_componentWillReceiveProps(nextProps: Props): void;
    selectNext: () => void;
    selectPrevious: () => void;
    chooseCurrentSelection: () => void;
    count: () => number;
    getTone: (tone?: number | undefined) => string | undefined;
    private fireAnalyticsEvent;
    private onSearch;
    private onSearchResult;
    private fireSelectionEvent;
    private onProviderChange;
    private onEmojiListRef;
    render(): JSX.Element;
}
