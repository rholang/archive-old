import { PureComponent } from 'react';
import { Stages, Spacing, LinkComponentProps, ProgressTrackerStageRenderProp } from '../types';
export interface ProgressTrackerProps {
    /** Ordered list of stage data */
    items: Stages;
    /** Margin spacing type between steps */
    spacing: Spacing;
    /** Render prop to specify custom implementations of components */
    render: ProgressTrackerStageRenderProp;
    /** Turns off transition animations if set to false */
    animated: boolean;
}
interface State {
    prevStages: Stages;
}
export default class ProgressTracker extends PureComponent<ProgressTrackerProps, State> {
    static defaultProps: {
        items: never[];
        spacing: string;
        render: {
            link: (props: LinkComponentProps) => JSX.Element;
        };
        animated: boolean;
    };
    createTheme: () => {
        spacing: Spacing;
        columns: number;
    };
    UNSAFE_componentWillMount(): void;
    UNSAFE_componentWillReceiveProps(): void;
    render(): JSX.Element;
}
export {};
