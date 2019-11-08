import * as React from 'react';
import { HighlightDetail } from '../../types';
export declare type ReactComponentConstructor = new (props: any) => React.Component<any, any>;
export declare function renderHighlight(ReactComponent: ReactComponentConstructor, value?: string, highlights?: HighlightDetail[], prefix?: string): JSX.Element | null;
