import { PureComponent, ReactNode } from 'react';
export interface Props {
    localId?: string;
    children?: ReactNode;
}
export default class TaskList extends PureComponent<Props, {}> {
    render(): JSX.Element | null;
}
