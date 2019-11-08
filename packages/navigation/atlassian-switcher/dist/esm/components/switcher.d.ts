import * as React from 'react';
import { Messages } from 'react-intl';
import { UIAnalyticsEvent } from '@atlaskit/analytics-next';
import { SwitcherItemType, RecentItemType } from '../utils/links';
import { Appearance } from '../theme/types';
import { TriggerXFlowCallback, DiscoverMoreCallback } from '../types';
export declare type SwitcherProps = {
    messages: Messages;
    triggerXFlow: TriggerXFlowCallback;
    /**
     * Whether all the contents have been loaded
     */
    hasLoaded: boolean;
    /**
     * Whether contents considered critical path have been loaded
     */
    hasLoadedCritical: boolean;
    onDiscoverMoreClicked: DiscoverMoreCallback;
    licensedProductLinks: SwitcherItemType[];
    suggestedProductLinks: SwitcherItemType[];
    fixedLinks: SwitcherItemType[];
    adminLinks: SwitcherItemType[];
    recentLinks: RecentItemType[];
    customLinks: SwitcherItemType[];
    manageLink?: string;
    /**
     * Remove section headers - useful if something else is providing them. i.e: trello inline dialog
     */
    disableHeadings?: boolean;
    appearance?: Appearance;
    /**
     * Links for experimental "Discover" section
     * which is a variation of suggestedProductLinks and fixedLinks combined
     */
    isDiscoverSectionEnabled?: boolean;
    discoverSectionLinks: SwitcherItemType[];
};
export default class Switcher extends React.Component<SwitcherProps> {
    static defaultProps: {
        appearance: string;
    };
    mountedAt?: number;
    componentDidMount(): void;
    shouldComponentUpdate(nextProps: SwitcherProps): boolean;
    timeSinceMounted(): number;
    triggerXFlow: (key: string) => (event: any, analyticsEvent: UIAnalyticsEvent) => void;
    /** https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/6522/issue-prst-13-adding-discover-more-button/
     * Currently Atlaskit's Item prioritises the usage of href over onClick in the case the href is a valid value.
     *
     *  The Discover more link is rendered with href=”” and onClick={actualImplementation}. Because the value of
     *  href is not valid for this case the item will instead call the onClick callback provided.
     *  */
    onDiscoverMoreClicked: (event: any, analyticsEvent: UIAnalyticsEvent) => void;
    render(): JSX.Element;
}
