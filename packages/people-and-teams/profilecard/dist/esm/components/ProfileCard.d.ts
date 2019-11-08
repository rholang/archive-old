import * as React from 'react';
import { ProfilecardProps } from '../types';
export default class Profilecard extends React.PureComponent<ProfilecardProps> {
    static defaultProps: ProfilecardProps;
    private timeOpen;
    clientFetchProfile: () => void;
    constructor(props: ProfilecardProps);
    private durationSince;
    callClientFetchProfile: (...args: any) => void;
    callAnalytics: (id: string, options: any) => void;
    componentDidMount(): void;
    renderErrorMessage(): JSX.Element;
    renderActionsButtons(): JSX.Element | null;
    renderCardDetailsDefault(): JSX.Element;
    renderCardDetailsForDisabledAccount(): JSX.Element;
    getDisabledAccountName(): string | JSX.Element | null | undefined;
    getDisabledAccountDesc(): {};
    private renderFullNameAndPublicName;
    renderCardDetailsApp(): JSX.Element;
    renderCardDetails(): JSX.Element;
    render(): JSX.Element;
}
