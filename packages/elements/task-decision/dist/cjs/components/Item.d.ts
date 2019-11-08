import { PureComponent } from 'react';
import { Appearance, ContentRef } from '../types';
export interface Props {
    icon: JSX.Element;
    children?: any;
    appearance?: Appearance;
    contentRef?: ContentRef;
    placeholder?: string;
    showPlaceholder?: boolean;
}
export default class Item extends PureComponent<Props, {}> {
    static defaultProps: Partial<Props>;
    private renderPlaceholder;
    renderMessageAppearance(): JSX.Element;
    render(): JSX.Element;
}
