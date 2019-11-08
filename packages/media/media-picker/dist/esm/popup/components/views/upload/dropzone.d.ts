import * as React from 'react';
import { Component } from 'react';
import { Browser } from '../../../../components/browser/browser';
export interface DropzoneProps {
    readonly isEmpty?: boolean;
    readonly browserRef: React.RefObject<Browser>;
}
export declare class Dropzone extends Component<DropzoneProps> {
    render(): JSX.Element;
}
