import * as React from 'react';
import { MentionProvider } from '../../api/MentionResource';
import { MentionEventHandler } from '../../types';
export interface Props {
    id: string;
    text: string;
    accessLevel?: string;
    mentionProvider?: Promise<MentionProvider>;
    onClick?: MentionEventHandler;
    onMouseEnter?: MentionEventHandler;
    onMouseLeave?: MentionEventHandler;
}
export interface State {
    isHighlighted: boolean;
    resolvedMentionName?: string;
}
export default class ResourcedMention extends React.PureComponent<Props, State> {
    constructor(props: Props);
    componentDidMount(): void;
    UNSAFE_componentWillReceiveProps(nextProps: Props): void;
    private processName;
    private handleMentionProvider;
    render(): JSX.Element;
}
