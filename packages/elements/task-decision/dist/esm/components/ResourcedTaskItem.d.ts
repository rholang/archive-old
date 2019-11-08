import { PureComponent } from 'react';
import { Appearance, ContentRef, TaskDecisionProvider } from '../types';
export interface Props {
    taskId: string;
    isDone?: boolean;
    onChange?: (taskId: string, isChecked: boolean) => void;
    contentRef?: ContentRef;
    children?: any;
    taskDecisionProvider?: Promise<TaskDecisionProvider>;
    objectAri?: string;
    showPlaceholder?: boolean;
    placeholder?: string;
    appearance?: Appearance;
    disabled?: boolean;
}
export interface State {
    isDone?: boolean;
}
export default class ResourcedTaskItem extends PureComponent<Props, State> {
    static defaultProps: Partial<Props>;
    private mounted;
    constructor(props: Props);
    componentDidMount(): void;
    UNSAFE_componentWillReceiveProps(nextProps: Props): void;
    componentWillUnmount(): void;
    private subscribe;
    private unsubscribe;
    private onUpdate;
    private handleOnChange;
    render(): JSX.Element;
}
