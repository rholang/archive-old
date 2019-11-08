import * as React from 'react';
declare type IconSize = 'small' | 'medium' | 'large' | 'xlarge';
export interface Icon {
    iconSize: IconSize;
    icon: React.ComponentType<{
        label: string;
        size?: IconSize;
    }>;
}
export interface IconTypeMap {
    connectivity: Icon;
    confirmation: Icon;
    info: Icon;
    warning: Icon;
    error: Icon;
    [key: string]: Icon;
}
export declare type IconType = 'connectivity' | 'confirmation' | 'info' | 'warning' | 'error';
export declare type InlineDialogPlacement = 'auto-start' | 'auto' | 'auto-end' | 'top-start' | 'top' | 'top-end' | 'right-start' | 'right' | 'right-end' | 'bottom-end' | 'bottom' | 'bottom-start' | 'left-end' | 'left' | 'left-start';
export {};
