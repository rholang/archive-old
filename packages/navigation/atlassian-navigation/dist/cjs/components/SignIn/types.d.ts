import { IconButtonProps } from '../IconButton/types';
export declare type SignInProps = Omit<IconButtonProps, 'icon' | 'tooltip'> & {
    tooltip: string;
};
