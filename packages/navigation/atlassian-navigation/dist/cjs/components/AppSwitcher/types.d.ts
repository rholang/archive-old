import { IconButtonProps } from '../IconButton/types';
export declare type AppSwitcherProps = Omit<IconButtonProps, 'icon' | 'tooltip'> & {
    tooltip: string;
};
