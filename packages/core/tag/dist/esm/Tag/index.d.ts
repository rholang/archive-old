import React, { Component, ReactNode, ComponentType } from 'react';
import { WithAnalyticsEventsProps } from '@atlaskit/analytics-next';
import { AppearanceType, TagColor } from '../types';
interface Props extends WithAnalyticsEventsProps {
    /** Set whether tags should be rounded. */
    appearance?: AppearanceType;
    /** The color theme to apply, setting both background and text color. */
    color?: TagColor;
    /** Component to be rendered before the Tag. */
    elemBefore?: ReactNode;
    /** Text to be displayed in the tag. */
    text: string;
    /** uri or path. If provided, the tag will be a link.  */
    href?: string;
    /** Text display as the aria-label for remove text. Setting this makes the
     tag removable. */
    removeButtonText?: string;
    /** Handler to be called before the tag is removed. If it does not return a
     truthy value, the tag will not be removed. */
    onBeforeRemoveAction?: () => boolean;
    /** Handler to be called after tag is removed. Called with the string 'Post
     Removal Hook'. */
    onAfterRemoveAction?: (text: string) => void;
    linkComponent?: ComponentType<any>;
}
interface State {
    isRemoving: boolean;
    isRemoved: boolean;
    markedForRemoval: boolean;
    isFocused: boolean;
}
declare class Tag extends Component<Props, State> {
    static defaultProps: {
        color: TagColor;
        appearance: AppearanceType;
        elemBefore: null;
        onAfterRemoveAction: () => void;
        onBeforeRemoveAction: () => boolean;
    };
    state: {
        isRemoving: boolean;
        isRemoved: boolean;
        markedForRemoval: boolean;
        isFocused: boolean;
    };
    handleRemoveRequest: () => void;
    handleRemoveComplete: () => void;
    handleHoverChange: (hoverState: boolean) => void;
    handleFocusChange: (focusState: boolean) => void;
    render(): JSX.Element;
}
export { Tag as TagWithoutAnalytics };
declare const _default: React.ForwardRefExoticComponent<Pick<Pick<Pick<Props, "color" | "text" | "href" | "linkComponent" | "appearance" | "elemBefore" | "removeButtonText" | "onBeforeRemoveAction" | "onAfterRemoveAction">, "text" | "href" | "linkComponent" | "removeButtonText"> & Partial<Pick<Pick<Props, "color" | "text" | "href" | "linkComponent" | "appearance" | "elemBefore" | "removeButtonText" | "onBeforeRemoveAction" | "onAfterRemoveAction">, "color" | "appearance" | "elemBefore" | "onBeforeRemoveAction" | "onAfterRemoveAction">> & Partial<Pick<{
    color: TagColor;
    appearance: AppearanceType;
    elemBefore: null;
    onAfterRemoveAction: () => void;
    onBeforeRemoveAction: () => boolean;
}, never>> & React.RefAttributes<any> & import("@atlaskit/analytics-next/dist/cjs/withAnalyticsContext").WithContextProps, "color" | "text" | "key" | "href" | "linkComponent" | "appearance" | "elemBefore" | "removeButtonText" | "onBeforeRemoveAction" | "onAfterRemoveAction" | "analyticsContext"> & React.RefAttributes<any>>;
export default _default;
