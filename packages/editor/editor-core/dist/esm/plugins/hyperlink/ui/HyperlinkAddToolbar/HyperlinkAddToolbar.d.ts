import * as React from 'react';
import { ActivityItem, ActivityProvider } from '@atlaskit/activity';
import { InjectedIntlProps } from 'react-intl';
import { INPUT_METHOD } from '../../../analytics';
export declare const messages: {
    displayText: {
        id: string;
        defaultMessage: string;
        description: string;
    };
    clearText: {
        id: string;
        defaultMessage: string;
        description: string;
    };
    clearLink: {
        id: string;
        defaultMessage: string;
        description: string;
    };
};
export declare type LinkInputType = INPUT_METHOD.MANUAL | INPUT_METHOD.TYPEAHEAD;
export interface Props {
    onBlur?: (type: string, url: string, displayText: string, isTabPressed?: boolean) => void;
    onSubmit?: (href: string, text: string, inputMethod: LinkInputType) => void;
    popupsMountPoint?: HTMLElement;
    popupsBoundariesElement?: HTMLElement;
    autoFocus?: boolean;
    provider: Promise<ActivityProvider>;
    displayText?: string;
    displayUrl?: string;
}
export interface State {
    provider?: ActivityProvider;
    items: Array<ActivityItem>;
    selectedIndex: number;
    text: string;
    isLoading: boolean;
    displayText: string;
}
declare const _default: React.ComponentClass<Props, any> & {
    WrappedComponent: ReactIntl.ComponentConstructor<Props & InjectedIntlProps>;
};
export default _default;
