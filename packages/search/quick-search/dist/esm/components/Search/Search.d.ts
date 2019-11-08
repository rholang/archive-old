import * as React from 'react';
export declare const controlKeys: string[];
declare type Props = {
    /** The elements to render as options to search from. */
    children?: React.ReactNode;
    /** The elements to render to the right of the search input. */
    inputControls?: React.ReactNode;
    /** Set whether the loading state should be shown. */
    isLoading?: boolean;
    /** Function to be called when the search input loses focus. */
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    /** Function to be called when a input action occurs (native `oninput` event). */
    onInput?: (event: React.FormEvent<HTMLInputElement>) => void;
    /** Function to be called when the user hits the escape key.  */
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    /** Placeholder text for search field. */
    placeholder?: string;
    /** Current value of search field. */
    value?: string;
    /** Autocomplete information */
    autocompleteText?: string;
};
export default class Search extends React.PureComponent<Props> {
    static defaultProps: Partial<Props>;
    onInputKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    setInputRef: (ref: React.Ref<any>) => void;
    renderInputControls: () => JSX.Element | null;
    inputRef?: React.Ref<any>;
    render(): JSX.Element;
}
export {};
