import * as React from 'react';
import { ButtonProps } from '@atlaskit/button';
export declare const FolderViewerNavigation: React.ComponentClass<React.HTMLAttributes<{}>>;
export declare const ControlsWrapper: React.ComponentClass<React.HTMLAttributes<{}>>;
export declare const Controls: React.ComponentClass<React.HTMLAttributes<{}>>;
export declare const ControlButton: (props: ButtonProps) => JSX.Element;
export declare const BreadCrumbs: React.ComponentClass<React.HTMLAttributes<{}>>;
export interface BreadCrumbLinkLabelProps {
    isLast: boolean;
}
export declare const BreadCrumbLinkLabel: React.ComponentClass<React.HTMLAttributes<{}> & BreadCrumbLinkLabelProps>;
export declare const BreadCrumbLinkSeparator: React.ComponentClass<React.HTMLAttributes<{}> & BreadCrumbLinkLabelProps>;
export declare const BreadCrumbLink: React.ComponentClass<React.HTMLAttributes<{}> & BreadCrumbLinkLabelProps>;
export declare const AccountItemButton: (props: ButtonProps) => JSX.Element;
export declare const AccountDropdownWrapper: React.ComponentClass<React.HTMLAttributes<{}>>;
