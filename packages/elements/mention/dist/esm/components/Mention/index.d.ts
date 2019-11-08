import * as React from 'react';
import { MentionEventHandler } from '../../types';
import { WithAnalyticsEventsProps } from '@atlaskit/analytics-next';
export declare const ANALYTICS_HOVER_DELAY = 1000;
export declare const UNKNOWN_USER_ID = "_|unknown|_";
export declare type OwnProps = {
    id: string;
    text: string;
    isHighlighted?: boolean;
    accessLevel?: string;
    onClick?: MentionEventHandler;
    onMouseEnter?: MentionEventHandler;
    onMouseLeave?: MentionEventHandler;
    onHover?: () => void;
};
export declare type Props = OwnProps & WithAnalyticsEventsProps;
export declare class MentionInternal extends React.PureComponent<Props, {}> {
    private hoverTimeout?;
    private handleOnClick;
    private handleOnMouseEnter;
    private handleOnMouseLeave;
    private getMentionType;
    componentWillUnmount(): void;
    renderUnknownUserError(id: string): JSX.Element;
    render(): JSX.Element;
}
declare const Mention: React.ForwardRefExoticComponent<Pick<Props, "text" | "id" | "onClick" | "onMouseEnter" | "onMouseLeave" | "isHighlighted" | "accessLevel" | "onHover"> & React.RefAttributes<any>>;
declare type Mention = MentionInternal;
export default Mention;
