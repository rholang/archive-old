import * as React from 'react';
import { EventHandlers } from '@atlaskit/editor-common';
export declare type CardErrorBoundaryProps = {
    unsupportedComponent: React.ComponentType;
};
export declare class CardErrorBoundary extends React.PureComponent<{
    url?: string;
    data?: object;
    eventHandlers?: EventHandlers;
} & CardErrorBoundaryProps> {
    state: {
        isError: boolean;
    };
    onClickFallback: (e: React.MouseEvent<Element, MouseEvent>) => void;
    render(): {} | null | undefined;
    componentDidCatch(_error: Error): void;
}
