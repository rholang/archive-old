import * as React from 'react';
import { Option as OptionType } from '../types';
export declare type OptionProps = {
    data: OptionType;
    isSelected: boolean;
    status?: string;
    selectProps: {
        emailLabel?: string;
    };
};
export declare const Option: React.StatelessComponent<OptionProps>;
