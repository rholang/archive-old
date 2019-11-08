import React, { RefObject } from 'react';
import { WithAnalyticsEventsProps } from '@atlaskit/analytics-next';
export interface OwnProps {
    createTeamLink?: string;
    /** Callback to track the event where user click on x icon */
    onClose: () => void;
    onCreateTeamLinkClick?: () => void;
    onViewed?: () => void;
}
export interface State {
    isHighlightHidden: boolean;
}
export declare type Props = OwnProps & WithAnalyticsEventsProps;
export declare class TeamMentionHighlightInternal extends React.Component<Props, State> {
    elWrapper: RefObject<HTMLDivElement>;
    elCloseWrapper: RefObject<HTMLDivElement>;
    elCreateTeamWrapper: RefObject<HTMLDivElement>;
    static defaultProps: {
        createTeamLink: string;
    };
    constructor(props: Props);
    componentDidMount(): void;
    componentWillUnmount(): void;
    onCreateTeamLinkClick: () => void;
    private preventClickOnCard;
    private addEventHandler;
    private removeEventHandler;
    onCloseClick: () => void;
    render(): JSX.Element | null;
}
declare const TeamMentionHighlight: React.ForwardRefExoticComponent<Pick<Pick<Props, "createTeamLink" | "onClose" | "onCreateTeamLinkClick" | "onViewed">, "onClose" | "onCreateTeamLinkClick" | "onViewed"> & Partial<Pick<Pick<Props, "createTeamLink" | "onClose" | "onCreateTeamLinkClick" | "onViewed">, "createTeamLink">> & Partial<Pick<{
    createTeamLink: string;
}, never>> & React.RefAttributes<any>>;
declare type TeamMentionHighlight = TeamMentionHighlightInternal;
export default TeamMentionHighlight;
