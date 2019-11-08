import { DetailedHTMLProps, IframeHTMLAttributes } from 'react';
declare type IframeProps = DetailedHTMLProps<IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>;
export declare type NotificationsProps = Omit<IframeProps, 'src'> & {
    locale?: 'confluence' | 'jira' | string;
    product?: string;
    testId?: string;
};
export {};
