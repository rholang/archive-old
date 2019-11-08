import React, { Component, ReactNode } from 'react';
import { UIAnalyticsEvent } from '@atlaskit/analytics-next';
interface Props {
    hasAuthor?: boolean;
    children?: ReactNode;
    href?: string;
    onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, analyticsEvent?: UIAnalyticsEvent) => void;
    onFocus?: (event: React.FocusEvent<HTMLElement>) => void;
    onMouseOver?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}
export default class CommentField extends Component<Props> {
    render(): JSX.Element;
}
export {};
