import React from 'react';
import { WithAnalyticsEventsProps } from '@atlaskit/analytics-next';
export interface Props extends WithAnalyticsEventsProps {
    /**
     * controls the appearance of the field.
     * subtle shows styling on hover.
     * none prevents all field styling.
     */
    appearance?: 'standard' | 'subtle' | 'none';
    /** Set whether the fields should expand to fill available horizontal space. */
    isCompact?: boolean;
    /** Sets the field as uneditable, with a changed hover state. */
    isDisabled?: boolean;
    /** If true, prevents the value of the input from being edited. */
    isReadOnly?: boolean;
    /** Set required for form that the field is part of. */
    isRequired?: boolean;
    /** Sets styling to indicate that the input is invalid. */
    isInvalid?: boolean;
    /** The minimum number of rows of text to display */
    minimumRows?: number;
    /** The maxheight of the textarea */
    maxHeight?: string;
    /** The value of the text-area. */
    value?: string;
    /** The default value of the textarea */
    defaultValue?: string;
    /** The placeholder within the textarea */
    placeholder?: string;
    /** Handler to be called when the input is blurred */
    onBlur?: React.FocusEventHandler<HTMLTextAreaElement>;
    /** Handler to be called when the input changes. */
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
    /** Handler to be called when the input is focused */
    onFocus?: React.FocusEventHandler<HTMLTextAreaElement>;
    /** Sets content text value to monospace */
    isMonospaced?: boolean;
    /**
     * Enables the resizing of the textarea:
     * auto: both directions.
     * horizontal: only along the x axis.
     * vertical: only along the y axis.
     * smart (default): vertically grows and shrinks the textarea automatically to wrap your input text.
     * none: explicitly disallow resizing on the textarea.
     */
    resize?: 'auto' | 'vertical' | 'horizontal' | 'smart' | 'none';
    /**
     * Passed down to the <textarea /> element.
     */
    spellCheck?: boolean;
    /**
     * The theme function TextArea consumes to derive theming constants for use in styling its components
     */
    theme?: any;
    /**
     * Ref used to access the textarea dom element. NOTE we expose this via
     * forwardRef, so you can also use the ref prop of this component to the
     * same effect.
     */
    forwardedRef?: React.Ref<HTMLTextAreaElement>;
    /**
     * A `testId` prop is provided for specified elements, which is a unique
     * string that appears as a data attribute `data-testid` in the rendered code,
     * serving as a hook for automated tests */
    testId?: string;
}
declare const TextArea: React.ForwardRefExoticComponent<Pick<Props, "appearance" | "isCompact" | "isDisabled" | "isReadOnly" | "isRequired" | "isInvalid" | "minimumRows" | "maxHeight" | "value" | "defaultValue" | "placeholder" | "onBlur" | "onChange" | "onFocus" | "isMonospaced" | "resize" | "spellCheck" | "theme" | "forwardedRef" | "testId" | "createAnalyticsEvent"> & React.RefAttributes<HTMLTextAreaElement>>;
export { TextArea as TextAreaWithoutAnalytics };
declare const _default: React.ForwardRefExoticComponent<Pick<Pick<Pick<Props, "appearance" | "isCompact" | "isDisabled" | "isReadOnly" | "isRequired" | "isInvalid" | "minimumRows" | "maxHeight" | "value" | "defaultValue" | "placeholder" | "onBlur" | "onChange" | "onFocus" | "isMonospaced" | "resize" | "spellCheck" | "theme" | "forwardedRef" | "testId" | "createAnalyticsEvent"> & React.RefAttributes<HTMLTextAreaElement>, "appearance" | "isCompact" | "isDisabled" | "isReadOnly" | "isRequired" | "isInvalid" | "minimumRows" | "maxHeight" | "value" | "defaultValue" | "placeholder" | "onBlur" | "onChange" | "onFocus" | "isMonospaced" | "resize" | "spellCheck" | "theme" | "forwardedRef" | "testId" | "key"> & React.RefAttributes<any> & import("@atlaskit/analytics-next/dist/cjs/withAnalyticsContext").WithContextProps, "appearance" | "isCompact" | "isDisabled" | "isReadOnly" | "isRequired" | "isInvalid" | "minimumRows" | "maxHeight" | "value" | "defaultValue" | "placeholder" | "onBlur" | "onChange" | "onFocus" | "isMonospaced" | "resize" | "spellCheck" | "theme" | "forwardedRef" | "testId" | "key" | "analyticsContext"> & React.RefAttributes<any>>;
export default _default;
