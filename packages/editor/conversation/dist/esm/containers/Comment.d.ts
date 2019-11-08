/// <reference types="react-redux" />
import * as React from 'react';
import { SharedProps } from '../components/types';
import { Comment as CommentType } from '../model';
export interface Props extends SharedProps {
    comment: CommentType;
    conversationId: string;
    objectId?: string;
    containerId?: string;
    renderComment: (props: any) => JSX.Element;
}
declare const _default;
export default _default;
