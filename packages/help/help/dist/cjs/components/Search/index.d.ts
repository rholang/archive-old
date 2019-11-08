import * as React from 'react';
import { InjectedIntlProps } from 'react-intl';
import { HelpContextInterface } from '../HelpContext';
export interface Props {
    displayResults: boolean;
}
export interface State {
    value: string;
}
export declare class Search extends React.Component<Props & InjectedIntlProps & HelpContextInterface, State> {
    state: {
        value: string;
    };
    handleSearchInput: ({ target }: React.FormEvent<HTMLInputElement>) => void;
    debouncedSearch: any;
    render(): JSX.Element;
}
declare const _default: (props: any) => JSX.Element;
export default _default;
