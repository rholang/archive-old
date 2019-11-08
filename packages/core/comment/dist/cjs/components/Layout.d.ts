import { Component, ReactNode } from 'react';
interface Props {
    /** The element to display as the Comment avatar - generally an Atlaskit Avatar */
    avatar?: ReactNode;
    /** Nested comments to render */
    children?: ReactNode;
    /** The main content of the Comment */
    content?: ReactNode;
    /** Whether this comment should appear highlighted */
    highlighted?: boolean;
    /** Optional ID for the comment */
    id?: string;
}
export default class Layout extends Component<Props> {
    renderAvatar(): JSX.Element | null;
    renderNestedComments(): JSX.Element | null;
    render(): JSX.Element;
}
export {};
