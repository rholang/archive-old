import { IconButtonProps } from '../IconButton/types';
export declare type HelpProps = Omit<IconButtonProps, 'icon' | 'tooltip'> & {
    tooltip: string;
};
