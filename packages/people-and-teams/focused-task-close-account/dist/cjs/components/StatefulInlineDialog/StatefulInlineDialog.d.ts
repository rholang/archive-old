import * as React from 'react';
import { Placement } from '@atlaskit/inline-dialog';
interface Props {
    children: React.ReactNode;
    content: React.ReactNode;
    placement?: Placement;
}
interface State {
    isOpen: boolean;
}
export declare class StatefulInlineDialog extends React.Component<Props, State> {
    state: {
        isOpen: boolean;
    };
    openDialog: () => void;
    closeDialog: () => void;
    handleMouseOver: () => void;
    handleMouseOut: () => void;
    render(): JSX.Element;
}
export default StatefulInlineDialog;
