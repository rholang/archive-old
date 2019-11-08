/** @jsx jsx */
import React from 'react';
import { ThemeTokens } from '../theme';
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    isDisabled: boolean;
    isReadOnly: boolean;
    isRequired: boolean;
    theme: ThemeTokens;
    onBlur: React.FocusEventHandler<HTMLInputElement>;
    onFocus: React.FocusEventHandler<HTMLInputElement>;
    onMouseDown: React.MouseEventHandler<HTMLElement>;
    onMouseEnter: React.MouseEventHandler<HTMLElement>;
    onMouseLeave: React.MouseEventHandler<HTMLElement>;
    /** Element after the input field */
    elemAfterInput?: React.ReactNode;
    /** Element before the input field */
    elemBeforeInput?: React.ReactNode;
    innerRef: (ref: HTMLInputElement | null) => void;
    /**
     * A `testId` prop is provided for specified elements, which is a unique
     * string that appears as a data attribute `data-testid` in the rendered code,
     * serving as a hook for automated tests */
    testId?: string;
}
export default function Input({ elemAfterInput, elemBeforeInput, isDisabled, isReadOnly, isRequired, onMouseDown, onMouseEnter, onMouseLeave, onBlur, onFocus, theme, innerRef, testId, ...theirInputProps }: Props): JSX.Element;
export {};
