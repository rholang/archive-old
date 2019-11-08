import React, { PureComponent } from 'react';
export interface Props {
    removeText?: string;
    isRounded: boolean;
    onHoverChange?: (hovering: boolean) => void;
    onRemoveAction?: () => void;
}
export default class RemoveButton extends PureComponent<Props> {
    onKeyPress: (e: React.KeyboardEvent<HTMLButtonElement>) => void;
    onMouseOver: () => void;
    onMouseOut: () => void;
    onBlur: () => void;
    onFocus: () => void;
    render(): JSX.Element;
}
