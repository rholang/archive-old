import * as React from 'react';
import { ContextIdentifierProvider } from '@atlaskit/editor-common';
export declare type ErrorBoundaryProps = {
    contextIdentifierProvider?: Promise<ContextIdentifierProvider>;
};
export declare type ErrorBoundaryState = {
    error?: Error;
};
export default class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    state: {
        error: undefined;
    };
    render(): React.ReactNode;
}
