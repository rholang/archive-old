import * as React from 'react';
import { KeyboardEvent, PureComponent } from 'react';
export interface Props {
    autoFocus?: boolean;
    defaultValue?: string;
    onChange?: (value: string) => void;
    onSubmit?: (value: string) => void;
    onCancel?: () => void;
    placeholder?: string;
    onMouseDown?: Function;
    onKeyDown?: (e: KeyboardEvent<any>) => void;
    onBlur?: Function;
    width?: number;
}
export interface State {
    value?: string;
}
export default class PanelTextInput extends PureComponent<Props, State> {
    private input?;
    private focusTimeoutId;
    constructor(props: Props);
    UNSAFE_componentWillReceiveProps(nextProps: Props): void;
    componentWillUnmount(): void;
    onMouseDown: () => void;
    onBlur: (e: React.FocusEvent<any>) => void;
    render(): JSX.Element;
    focus(): void;
    private handleChange;
    private handleKeydown;
    private handleRef;
}
