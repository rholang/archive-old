import React, { ComponentType, ReactNode } from 'react';
import { WithAnalyticsEventsProps } from '@atlaskit/analytics-next';
import { Actions } from '../types';
export interface SpotlightDialogProps extends WithAnalyticsEventsProps {
    /** Buttons to render in the footer */
    actions?: Actions;
    /** An optional element rendered beside the footer actions */
    actionsBeforeElement?: ReactNode;
    /** The elements rendered in the modal */
    children?: ReactNode;
    /** Where the dialog should appear, relative to the contents of the children. */
    dialogPlacement?: 'top left' | 'top center' | 'top right' | 'right top' | 'right middle' | 'right bottom' | 'bottom left' | 'bottom center' | 'bottom right' | 'left top' | 'left middle' | 'left bottom';
    /** The width of the dialog in pixels. Min 160 - Max 600 */
    dialogWidth: number;
    /** Optional element rendered below the body */
    footer?: ComponentType<any>;
    /** Optional element rendered above the body */
    header?: ComponentType<any>;
    /** Heading text rendered above the body */
    heading?: string;
    /** Path to the the your image */
    image?: string;
    /** The spotlight target node */
    targetNode: HTMLElement;
    /** js object containing the animation styles to apply to component */
    animationStyles: Object;
}
declare const _default: React.ForwardRefExoticComponent<Pick<Pick<SpotlightDialogProps, "footer" | "header" | "image" | "actions" | "children" | "heading" | "targetNode" | "actionsBeforeElement" | "dialogPlacement" | "dialogWidth" | "animationStyles"> & React.RefAttributes<any> & import("@atlaskit/analytics-next/dist/cjs/withAnalyticsContext").WithContextProps, "footer" | "header" | "image" | "actions" | "children" | "heading" | "key" | "analyticsContext" | "targetNode" | "actionsBeforeElement" | "dialogPlacement" | "dialogWidth" | "animationStyles"> & React.RefAttributes<any>>;
export default _default;
