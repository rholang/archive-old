import * as React from 'react';
import { AnnotationComponentProps, AnnotationInfo } from '@atlaskit/editor-core';
export declare type ExampleInlineCommentComponentState = {
    commentingValue: string;
};
export default class ExampleInlineCommentComponent extends React.Component<AnnotationComponentProps, ExampleInlineCommentComponentState> {
    state: {
        commentingValue: string;
    };
    componentWillMount(): void;
    shouldComponentUpdate(nextProps: AnnotationComponentProps, nextState: ExampleInlineCommentComponentState): boolean;
    saveComment: () => void;
    renderInsertComment: () => JSX.Element;
    renderContent: (comments: AnnotationInfo[]) => JSX.Element | JSX.Element[];
    getStyles(showing: boolean): React.CSSProperties;
    render(): JSX.Element | undefined;
}
