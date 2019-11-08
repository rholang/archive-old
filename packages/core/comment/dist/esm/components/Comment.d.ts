import { Component, ReactNode } from 'react';
interface Props {
    /** An list of CommentAction items rendered as a row of buttons below the comment content */
    actions?: Array<ReactNode>;
    /** A CommentAuthor element containing the name of the comment author. */
    author?: ReactNode;
    /** The element to display as the Comment avatar - generally an Atlaskit Avatar */
    avatar: ReactNode;
    /** Nested comments should be provided as children of the Comment */
    children?: ReactNode;
    /** The main content of the Comment */
    content?: ReactNode;
    /** Whether this comment should appear highlighted */
    highlighted?: boolean;
    /** Text to show in the "restricted to" label. Will display in the top items */
    restrictedTo?: ReactNode;
    /** Enable "optimistic saving" mode, remove actions and show `savingText` prop */
    isSaving?: boolean;
    /** Text to show when in "optimistic saving" mode */
    savingText?: string;
    /** A CommentTime element containing the time to be displayed */
    time?: ReactNode;
    /** The type of the comment - will be rendered in a lozenge at the top of the Comment */
    type?: string;
    /** will be rendered beside the time to show whether the comment is edited or not */
    edited?: ReactNode;
    /** Indicates whether the component is in an error state - hides actions and time */
    isError?: boolean;
    /** A list of CommentAction items rendered with a warning icon instead of the actions */
    errorActions?: Array<ReactNode>;
    /** Text to show in the error icon label */
    errorIconLabel?: string;
    /** Optional ID for the comment */
    id?: string;
}
export default class Comment extends Component<Props, {}> {
    static defaultProps: {
        actions: never[];
        restrictedTo: string;
        highlighted: boolean;
        isSaving: boolean;
        savingText: string;
        isError: boolean;
        errorActions: never[];
        errorIconLabel: string;
    };
    render(): JSX.Element;
}
export {};
