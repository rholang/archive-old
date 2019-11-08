import { Component } from 'react';
export declare type Locale = {
    value: string;
    label: string;
};
export declare type LocaleSelectProps = {
    locales: Locale[];
    defaultLocale: Locale;
    onLocaleChange: (locale: Locale) => void;
};
export declare const defaultLocales: Array<Locale>;
export default class LocaleSelect extends Component<LocaleSelectProps> {
    static defaultProps: {
        locales: Locale[];
        defaultLocale: Locale;
        onLocaleChange: () => void;
    };
    render(): JSX.Element;
}
