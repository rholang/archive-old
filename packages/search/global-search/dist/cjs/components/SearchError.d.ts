import * as React from 'react';
export interface Props {
    onRetryClick: (e?: React.SyntheticEvent<HTMLElement>) => void;
}
export default class SearchError extends React.Component<Props> {
    render(): JSX.Element;
}
