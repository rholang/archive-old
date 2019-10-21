import * as React from 'react';
import { ContextIdentifierProvider } from '@atlaskit/editor-common';

export type ErrorBoundaryProps = {
  contextIdentifierProvider?: Promise<ContextIdentifierProvider>;
};

export type ErrorBoundaryState = {
  error?: Error;
};

export default class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state = {
    error: undefined,
  };



  render() {
    if (this.state.error) {
      throw new Error(this.state.error);
    }
    return this.props.children;
  }
}
