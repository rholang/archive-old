import { LoadOptions, OptionData } from '@atlaskit/user-picker';
import * as React from 'react';
import { InjectedIntlProps } from 'react-intl';
import { Comment, ConfigResponse, DialogContentState, FormChildrenArgs } from '../types';
export declare const FromWrapper: import("styled-components").StyledComponentClass<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, any, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
declare type ShareError = {
    message: string;
};
export declare type ShareData = {
    users: OptionData[];
    comment: Comment;
};
export declare type Props = {
    capabilitiesInfoMessage?: React.ReactNode;
    config?: ConfigResponse;
    copyLink: string;
    isSharing?: boolean;
    loadOptions?: LoadOptions;
    onLinkCopy?: (link: string) => void;
    onSubmit?: (data: ShareData) => void;
    shareError?: ShareError;
    submitButtonLabel?: React.ReactNode;
    title?: React.ReactNode;
    onDismiss?: (data: ShareData) => void;
    defaultValue?: DialogContentState;
    isFetchingConfig?: boolean;
};
export declare type InternalFormProps = FormChildrenArgs<ShareData> & Props & InjectedIntlProps;
export declare const ShareForm: React.StatelessComponent<Props>;
export {};
