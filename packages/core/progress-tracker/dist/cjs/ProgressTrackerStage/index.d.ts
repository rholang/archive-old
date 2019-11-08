import { PureComponent } from 'react';
import { Stage, ProgressTrackerStageRenderProp } from '../types';
export interface ProgressTrackerStageProps {
    /** stage data passed to each `ProgressTrackerStage` component */
    item: Stage;
    /** render prop to specify how to render components */
    render: ProgressTrackerStageRenderProp;
    /** delay before transitioning in ms */
    transitionDelay: number;
    /** speed at which to transition in ms */
    transitionSpeed: number;
    /** interface of easing for transition */
    transitionEasing: string;
}
interface State {
    transitioning: boolean;
    oldMarkerColor?: string;
    oldPercentageComplete: number;
}
export default class ProgressTrackerStage extends PureComponent<ProgressTrackerStageProps, State> {
    constructor(props: ProgressTrackerStageProps);
    UNSAFE_componentWillMount(): void;
    UNSAFE_componentWillReceiveProps(): void;
    shouldShowLink(): boolean;
    render(): JSX.Element;
}
export {};
