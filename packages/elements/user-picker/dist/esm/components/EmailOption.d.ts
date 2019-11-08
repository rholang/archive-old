import * as React from 'react';
import { Email } from '../types';
import { EmailValidationResponse } from './emailValidation';
export declare type EmailOptionProps = {
    email: Email;
    isSelected: boolean;
    label?: string;
    emailValidity: EmailValidationResponse;
};
export declare class EmailOption extends React.PureComponent<EmailOptionProps> {
    private renderOption;
    render(): JSX.Element;
}
