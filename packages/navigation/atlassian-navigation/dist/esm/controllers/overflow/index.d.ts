import React from 'react';
import { OverflowProviderProps } from './types';
export declare const OverflowProvider: ({ children, isVisible, }: OverflowProviderProps) => JSX.Element;
export declare const useOverflowStatus: () => {
    isVisible: boolean;
};
export declare const useOverflowController: (nodes: string | number | boolean | {} | React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)> | React.ReactNodeArray | React.ReactPortal | React.ReactNode[] | null | undefined) => {
    visibleItems: React.ReactNode[];
    overflowItems: React.ReactNode[];
    updateWidth: any;
};
