import * as React from 'react';
import { ProfileCardErrorType } from '../types';
declare type Props = {
    reload?: () => void | undefined;
    errorType?: ProfileCardErrorType;
};
export default class ErrorMessage extends React.PureComponent<Props> {
    static defaultProps: {
        errorType: {
            reason: string;
        };
    };
    renderNotFound: () => JSX.Element;
    renderDefault: () => JSX.Element;
    renderRetryButton: () => JSX.Element | null;
    renderErrorContent(): JSX.Element;
    render(): JSX.Element;
}
export {};
