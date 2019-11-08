import { WithAnalyticsEventsProps } from '@atlaskit/analytics-next';
import * as React from 'react';
import { UserPickerProps } from '../types';
declare type Props = UserPickerProps & WithAnalyticsEventsProps & {
    SelectComponent: React.ComponentClass<any>;
    pickerProps?: any;
    styles: any;
    components: any;
    width: string | number;
};
export declare const BaseUserPicker: React.ForwardRefExoticComponent<Pick<Pick<Props, "fieldId" | "options" | "width" | "menuMinWidth" | "loadOptions" | "onChange" | "isMulti" | "search" | "anchor" | "open" | "isLoading" | "onInputChange" | "onSelection" | "onFocus" | "onBlur" | "onClear" | "onClose" | "appearance" | "subtle" | "defaultValue" | "placeholder" | "addMoreMessage" | "noOptionsMessage" | "value" | "isDisabled" | "isClearable" | "clearValueLabel" | "menuPortalTarget" | "allowEmail" | "emailLabel" | "disableInput" | "isValidEmail" | "autoFocus" | "maxOptions" | "inputId" | "SelectComponent" | "pickerProps" | "styles" | "components">, "fieldId" | "options" | "width" | "menuMinWidth" | "loadOptions" | "onChange" | "search" | "anchor" | "open" | "isLoading" | "onInputChange" | "onSelection" | "onFocus" | "onBlur" | "onClear" | "onClose" | "appearance" | "defaultValue" | "placeholder" | "addMoreMessage" | "noOptionsMessage" | "value" | "isDisabled" | "clearValueLabel" | "menuPortalTarget" | "allowEmail" | "emailLabel" | "disableInput" | "isValidEmail" | "autoFocus" | "maxOptions" | "inputId" | "SelectComponent" | "pickerProps" | "styles" | "components"> & Partial<Pick<Pick<Props, "fieldId" | "options" | "width" | "menuMinWidth" | "loadOptions" | "onChange" | "isMulti" | "search" | "anchor" | "open" | "isLoading" | "onInputChange" | "onSelection" | "onFocus" | "onBlur" | "onClear" | "onClose" | "appearance" | "subtle" | "defaultValue" | "placeholder" | "addMoreMessage" | "noOptionsMessage" | "value" | "isDisabled" | "isClearable" | "clearValueLabel" | "menuPortalTarget" | "allowEmail" | "emailLabel" | "disableInput" | "isValidEmail" | "autoFocus" | "maxOptions" | "inputId" | "SelectComponent" | "pickerProps" | "styles" | "components">, "isMulti" | "subtle" | "isClearable">> & Partial<Pick<{
    isMulti: boolean;
    subtle: boolean;
    isClearable: boolean;
}, never>> & React.RefAttributes<any>>;
export {};
