import { PureComponent } from 'react';
import { Stage } from '../types';
interface Props {
    /** stage data passed to each `ProgressTrackerStage` component */
    item: Stage;
}
export default class ProgressTrackerLink extends PureComponent<Props> {
    render(): JSX.Element;
}
export {};
