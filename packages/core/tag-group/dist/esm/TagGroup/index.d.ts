import { PureComponent, ReactNode } from 'react';
interface Props {
    /** Whether the tags should be left-aligned or right-aligned. */
    alignment?: 'start' | 'end';
    /** Tags to render within the tag group. */
    children: ReactNode;
}
export default class TagGroup extends PureComponent<Props> {
    static defaultProps: {
        alignment: string;
    };
    render(): JSX.Element;
}
export {};
