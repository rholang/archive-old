import { PureComponent } from 'react';
import { Appearance, ContentRef } from '../types';
export interface Props {
    children?: any;
    contentRef?: ContentRef;
    placeholder?: string;
    showPlaceholder?: boolean;
    appearance?: Appearance;
}
export default class DecisionItem extends PureComponent<Props, {}> {
    static defaultProps: Partial<Props>;
    render(): JSX.Element;
}
