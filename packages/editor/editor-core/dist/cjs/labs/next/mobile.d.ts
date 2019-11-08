import * as React from 'react';
import { EditorProps } from '../../types';
export interface MobileEditorProps {
    isMaxContentSizeReached?: boolean;
    maxHeight?: number;
}
export declare class Mobile extends React.Component<EditorProps, any> {
    static displayName: string;
    private renderMobile;
    render(): JSX.Element;
}
