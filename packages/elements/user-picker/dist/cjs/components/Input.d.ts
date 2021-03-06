import * as React from 'react';
export declare type Props = {
    selectProps?: {
        disableInput?: boolean;
    };
    innerRef: (ref: HTMLInputElement) => void;
};
export declare class Input extends React.Component<Props> {
    handleKeyPress: (e: KeyboardEvent) => void;
    render(): JSX.Element;
}
