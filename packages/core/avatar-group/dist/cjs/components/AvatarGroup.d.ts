import React, { Component, ElementType } from 'react';
import { AvatarClickType, AvatarPropTypes, SizeType } from '@atlaskit/avatar';
interface Props {
    /** Indicates the shape of the avatar. Most avatars are circular, but square avatars
     can be used for 'container' objects. */
    appearance: 'grid' | 'stack';
    /** Component used to render each avatar */
    avatar: ElementType<AvatarPropTypes>;
    /** The maximum number of avatars allowed in the grid */
    maxCount: number;
    /** Defines the size of the avatar */
    size: SizeType;
    /** Typically the background color that the avatar is presented on.
     Accepts any color argument that the CSS border-color property accepts. */
    borderColor?: string;
    /**
      Array of avatar data passed to each `avatar` component. These props will be spread
      on to the component passed into avatar.
    */
    data: AvatarPropTypes[];
    /** Handle the click event on the avatar item */
    onAvatarClick?: AvatarClickType;
    /** Take control of the click event on the more indicator. This will cancel
     the default dropdown behavior. */
    onMoreClick?: (event: React.MouseEvent) => unknown;
    /** Provide additional props to the MoreButton. Example use cases: altering
     tab order by providing tabIndex; adding onClick behaviour without losing the
     default dropdown */
    showMoreButtonProps?: Partial<React.HTMLAttributes<HTMLElement>>;
    boundariesElement?: 'viewport' | 'window' | 'scrollParent';
}
export default class AvatarGroup extends Component<Props> {
    static defaultProps: {
        appearance: string;
        avatar: React.ForwardRefExoticComponent<Pick<Pick<AvatarPropTypes, "label" | "isActive" | "isHover" | "className" | "tabIndex" | "onFocus" | "onBlur" | "onKeyDown" | "onKeyUp" | "onClick" | "onMouseDown" | "onMouseEnter" | "onMouseLeave" | "onMouseUp" | "size" | "appearance" | "isFocus" | "theme" | "borderColor" | "href" | "isInteractive" | "name" | "target" | "presence" | "src" | "status" | "isDisabled" | "component" | "groupAppearance" | "enableTooltip" | "isSelected" | "stackIndex" | "testId"> & React.RefAttributes<any> & import("@atlaskit/analytics-next/dist/cjs/withAnalyticsContext").WithContextProps, "label" | "isActive" | "isHover" | "key" | "className" | "tabIndex" | "onFocus" | "onBlur" | "onKeyDown" | "onKeyUp" | "onClick" | "onMouseDown" | "onMouseEnter" | "onMouseLeave" | "onMouseUp" | "size" | "appearance" | "isFocus" | "theme" | "borderColor" | "href" | "isInteractive" | "name" | "target" | "presence" | "src" | "status" | "isDisabled" | "component" | "groupAppearance" | "enableTooltip" | "isSelected" | "stackIndex" | "testId" | "analyticsContext"> & React.RefAttributes<any>>;
        maxCount: number;
        showMoreButtonProps: {};
        size: string;
    };
    renderMoreDropdown(max: number, total: number): JSX.Element | null;
    render(): JSX.Element;
}
export {};
