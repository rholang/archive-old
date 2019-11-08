import { ReactNode, SyntheticEvent } from 'react';
import { WithAnalyticsEventsProps } from '@atlaskit/analytics-next';
export declare type OptionPropType = {
    isDisabled?: boolean;
    isChecked?: boolean;
    label?: ReactNode;
    name?: string;
    value?: string | number;
} & Pick<RadioProps, 'testId'>;
export declare type OptionsPropType = Array<OptionPropType>;
export declare type RadioIconProps = {
    isActive?: boolean;
    isChecked?: boolean;
    isDisabled?: boolean;
    isFocused?: boolean;
    isHovered?: boolean;
    isInvalid?: boolean;
};
export declare type RadioInputProps = RadioIconProps & {
    isRequired?: boolean;
    label?: string;
    name?: string;
    onError?: (e: SyntheticEvent<any>) => void;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    onBlur: React.ChangeEventHandler<HTMLInputElement>;
    onFocus: React.ChangeEventHandler<HTMLInputElement>;
    onInvalid?: (e: SyntheticEvent<any>) => void;
    value?: string;
};
export interface RadioProps extends WithAnalyticsEventsProps {
    /** the aria-label attribute associated with the radio element */
    ariaLabel?: string;
    /** Field disabled */
    isDisabled?: boolean;
    /** Marks this as a required field */
    isRequired?: boolean;
    /** Field is invalid */
    isInvalid?: boolean;
    /** Set the field as checked */
    isChecked?: boolean;
    /** The label value for the input rendered to the dom */
    label?: ReactNode;
    /** Field name */
    name?: string;
    /** onChange event handler, passed into the props of each Radio Component instantiated within RadioGroup */
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
    onFocus?: React.FocusEventHandler<HTMLInputElement>;
    onMouseDown?: React.MouseEventHandler;
    onMouseUp?: React.MouseEventHandler;
    onMouseEnter?: React.MouseEventHandler;
    onMouseLeave?: React.MouseEventHandler;
    /** onInvalid event handler, passed into the props of each Radio Component instantiated within RadioGroup */
    onInvalid?: (e: SyntheticEvent<any>) => void;
    /** Field value */
    value?: string | number;
    /**
        A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests
        we have 2 different testid generated based on the one you pass to the Radio component:
        - `{testId}--hidden-radio` to check if it got changed to checked/unchecked.
        - `{testId}--radio-label` to click the input, because in IE11 the input has opacity: 0 and can't be interacted.
      */
    testId?: string;
}
