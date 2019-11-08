import { WithAnalyticsEventsProps } from '@atlaskit/analytics-next';
import { ButtonAppearances } from '@atlaskit/button';
import { LoadOptions } from '@atlaskit/user-picker';
import * as React from 'react';
import { UrlShortenerClient } from '../clients/AtlassianUrlShortenerClient';
import { ConfigResponse, ShareClient } from '../clients/ShareServiceClient';
import { DialogContentState, DialogPlacement, Flag, OriginTracing, OriginTracingFactory, ProductId, RenderCustomTriggerButton, ShareButtonStyle, TooltipPosition } from '../types';
export declare const defaultConfig: ConfigResponse;
export declare type Props = {
    /** Share service client implementation that gets share configs and performs share.
     * Optional, a default one is provided. */
    shareClient?: ShareClient;
    /** URL Shortener service client implementation that may shorten links for copy.
     * Optional, a default one is provided. */
    urlShortenerClient?: UrlShortenerClient;
    /** Cloud ID of the instance.
     * Note: we assume this props is stable. */
    cloudId: string;
    /** Placement of the modal to the trigger button */
    dialogPlacement?: DialogPlacement;
    /** Transform function to provide custom formatted copy link.
     * Optional, a default one is provided. */
    formatCopyLink?: (origin: OriginTracing, link: string) => string;
    /** Function used to load users options asynchronously */
    loadUserOptions: LoadOptions;
    /** Factory function to generate new Origin Tracing instance */
    originTracingFactory: OriginTracingFactory;
    /** Product ID (Canonical ID) in ARI of the share request.
     * Note: we assume this props is stable. */
    productId: ProductId;
    /** Render function for a custom Share Dialog Trigger Button*/
    renderCustomTriggerButton?: RenderCustomTriggerButton;
    /** Atlassian Resource Identifier of a Site resource to be shared */
    shareAri: string;
    /** Content Type of the resource to be shared. It will also affect on the successful share message in the flag. A pre-defined list as follows:*/
    /** blogpost */
    /** board */
    /** calendar */
    /** draft */
    /** filter */
    /** issue */
    /** media */
    /** page */
    /** project */
    /** pullrequest */
    /** question */
    /** report */
    /** repository */
    /** request */
    /** roadmap */
    /** site */
    /** space */
    /** Any other unlisted type will have a default message of "Link shared"*/
    shareContentType: string;
    /** Link of the resource to be shared (should NOT includes origin tracing).
     * Optional, the current page URL is used by default. */
    shareLink?: string;
    /** Title of the resource to be shared that will be sent in notifications */
    shareTitle: string;
    /** Title of the share modal */
    shareFormTitle?: React.ReactNode;
    /** To enable closing the modal on escape key press */
    shouldCloseOnEscapePress?: boolean;
    /**
     * Callback function for showing successful share flag(s) with a parameter providing details of the flag, including the type of the message with a localized default title
     * This package has an opinion on showing flag(s) upon successful share, and Flag system is NOT provided. Instead, showFlag prop is available for this purpose.
     */
    showFlags: (flags: Array<Flag>) => void;
    /** Appearance of the share modal trigger button  */
    triggerButtonAppearance?: ButtonAppearances;
    /** Style of the share modal trigger button */
    triggerButtonStyle?: ShareButtonStyle;
    /** Position of the tooltip on share modal trigger button */
    triggerButtonTooltipPosition?: TooltipPosition;
    /** Custom text of the tooltip on share modal trigger button */
    triggerButtonTooltipText?: React.ReactNode;
    /** Message to be appended to the modal */
    bottomMessage?: React.ReactNode;
    /** Whether we should use the Atlassian Url Shortener or not.
     * Note that all products may not be supported. */
    useUrlShortener?: boolean;
    /** Action that will be performed by the recipient when he/she receives the notification. */
    shareeAction?: 'view' | 'edit';
};
export declare type State = {
    config?: ConfigResponse;
    isFetchingConfig: boolean;
    shareActionCount: number;
    currentPageUrl: string;
    shortenedCopyLink: null | string;
};
/**
 * This component serves as a Provider to provide customizable implementations
 * to ShareDialogTrigger component
 */
export declare class ShareDialogContainerInternal extends React.Component<WithAnalyticsEventsProps & Props, State> {
    private shareClient;
    private urlShortenerClient;
    private _isMounted;
    private _urlShorteningRequestCounter;
    private _lastUrlShorteningWasTooSlow;
    static defaultProps: {
        useUrlShortener: boolean;
        shareeAction: "view" | "edit";
    };
    constructor(props: Props);
    componentDidMount(): void;
    componentWillUnmount(): void;
    private createAndFireEvent;
    fetchConfig: () => void;
    handleSubmitShare: ({ users, comment, }: DialogContentState) => Promise<void>;
    handleDialogOpen: () => void;
    decorateAnalytics: (payload: Record<string, any>) => Record<string, any>;
    getUniqueCopyLinkOriginTracing: (link: string, originTracingFactory: OriginTracingFactory) => OriginTracing;
    getUniqueFormShareOriginTracing: (link: string, originTracingFactory: OriginTracingFactory, shareCount: number) => OriginTracing;
    getUpToDateShortenedCopyLink: (longLink: string, cloudId: string, productId: ProductId) => Promise<string | null>;
    getRawLink(): string;
    getCopyLinkOriginTracing(): OriginTracing;
    getFormShareOriginTracing(): OriginTracing;
    getFullCopyLink(): string;
    isShortCopyLinkAvailable: () => boolean;
    getCopyLink: () => string;
    updateShortCopyLink(): void;
    getFormShareLink: () => string;
    render(): JSX.Element;
}
export declare const ShareDialogContainer: React.ForwardRefExoticComponent<Pick<Pick<WithAnalyticsEventsProps & Props, "dialogPlacement" | "loadUserOptions" | "renderCustomTriggerButton" | "shareContentType" | "shareFormTitle" | "shouldCloseOnEscapePress" | "showFlags" | "triggerButtonAppearance" | "triggerButtonStyle" | "triggerButtonTooltipPosition" | "triggerButtonTooltipText" | "bottomMessage" | "shareClient" | "urlShortenerClient" | "cloudId" | "formatCopyLink" | "originTracingFactory" | "productId" | "shareAri" | "shareLink" | "shareTitle" | "useUrlShortener" | "shareeAction">, "dialogPlacement" | "loadUserOptions" | "renderCustomTriggerButton" | "shareContentType" | "shareFormTitle" | "shouldCloseOnEscapePress" | "showFlags" | "triggerButtonAppearance" | "triggerButtonStyle" | "triggerButtonTooltipPosition" | "triggerButtonTooltipText" | "bottomMessage" | "shareClient" | "urlShortenerClient" | "cloudId" | "formatCopyLink" | "originTracingFactory" | "productId" | "shareAri" | "shareLink" | "shareTitle"> & Partial<Pick<Pick<WithAnalyticsEventsProps & Props, "dialogPlacement" | "loadUserOptions" | "renderCustomTriggerButton" | "shareContentType" | "shareFormTitle" | "shouldCloseOnEscapePress" | "showFlags" | "triggerButtonAppearance" | "triggerButtonStyle" | "triggerButtonTooltipPosition" | "triggerButtonTooltipText" | "bottomMessage" | "shareClient" | "urlShortenerClient" | "cloudId" | "formatCopyLink" | "originTracingFactory" | "productId" | "shareAri" | "shareLink" | "shareTitle" | "useUrlShortener" | "shareeAction">, "useUrlShortener" | "shareeAction">> & Partial<Pick<{
    useUrlShortener: boolean;
    shareeAction: "view" | "edit";
}, never>> & React.RefAttributes<any>>;
