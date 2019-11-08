import { IconButtonProps } from '../IconButton/types';
export declare type SettingsProps = Omit<IconButtonProps, 'icon' | 'tooltip'> & {
    tooltip: string;
};
