import * as React from 'react';
import { UIAnalyticsEvent } from '@atlaskit/analytics-next';
declare type ManageButtonProps = {
    href: string;
};
export default class ManageButton extends React.Component<ManageButtonProps> {
    onClick: (_: React.MouseEvent<HTMLElement, MouseEvent>, analyticsEvent: UIAnalyticsEvent) => void;
    render(): JSX.Element;
}
export {};
