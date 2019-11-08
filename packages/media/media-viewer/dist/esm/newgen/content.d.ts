import { Component, ReactElement } from 'react';
import { WithShowControlMethodProp } from '@atlaskit/media-ui';
export interface ContentProps {
    onClose?: () => void;
    children: ReactElement<WithShowControlMethodProp>;
}
export declare class Content extends Component<ContentProps> {
    render(): JSX.Element;
}
