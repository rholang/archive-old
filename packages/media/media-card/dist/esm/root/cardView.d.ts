import * as React from 'react';
import { MouseEvent } from 'react';
import { FileDetails, ImageResizeMode } from '@atlaskit/media-client';
import { WithAnalyticsEventsProps, UIAnalyticsEvent } from '@atlaskit/analytics-next';
import { SharedCardProps, CardStatus, OnSelectChangeFuncResult } from '../index';
export interface CardViewOwnProps extends SharedCardProps {
    readonly status: CardStatus;
    readonly metadata?: FileDetails;
    readonly resizeMode?: ImageResizeMode;
    readonly onRetry?: () => void;
    readonly onClick?: (event: React.MouseEvent<HTMLDivElement>, analyticsEvent?: UIAnalyticsEvent) => void;
    readonly onMouseEnter?: (event: MouseEvent<HTMLDivElement>) => void;
    readonly onSelectChange?: (result: OnSelectChangeFuncResult) => void;
    readonly onDisplayImage?: () => void;
    readonly dataURI?: string;
    readonly progress?: number;
    readonly disableOverlay?: boolean;
    readonly previewOrientation?: number;
}
export interface CardViewState {
    elementWidth?: number;
}
export declare type CardViewProps = CardViewOwnProps & WithAnalyticsEventsProps;
/**
 * This is classic vanilla CardView class. To create an instance of class one would need to supply
 * `createAnalyticsEvent` prop to satisfy it's Analytics Events needs.
 */
export declare class CardViewBase extends React.Component<CardViewProps, CardViewState> {
    state: CardViewState;
    divRef: React.RefObject<HTMLDivElement>;
    static defaultProps: Partial<CardViewOwnProps>;
    componentDidMount(): void;
    UNSAFE_componentWillReceiveProps(nextProps: CardViewProps): void;
    private fireOnSelectChangeToConsumer;
    private readonly width;
    saveElementWidth(): void;
    render(): JSX.Element;
    private renderFile;
}
export declare const CardView: React.ForwardRefExoticComponent<Pick<Pick<CardViewProps, "progress" | "metadata" | "onClick" | "onMouseEnter" | "appearance" | "actions" | "selectable" | "selected" | "onRetry" | "disableOverlay" | "dimensions" | "status" | "dataURI" | "alt" | "resizeMode" | "onDisplayImage" | "previewOrientation" | "onSelectChange">, never> & Partial<Pick<Pick<CardViewProps, "progress" | "metadata" | "onClick" | "onMouseEnter" | "appearance" | "actions" | "selectable" | "selected" | "onRetry" | "disableOverlay" | "dimensions" | "status" | "dataURI" | "alt" | "resizeMode" | "onDisplayImage" | "previewOrientation" | "onSelectChange">, "progress" | "metadata" | "onClick" | "onMouseEnter" | "appearance" | "actions" | "selectable" | "selected" | "onRetry" | "disableOverlay" | "dimensions" | "status" | "dataURI" | "alt" | "resizeMode" | "onDisplayImage" | "previewOrientation" | "onSelectChange">> & Partial<Pick<Partial<CardViewOwnProps>, never>> & React.RefAttributes<any>>;
