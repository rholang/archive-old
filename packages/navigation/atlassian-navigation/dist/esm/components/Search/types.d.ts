import { IconButtonProps } from '../IconButton/types';
export declare type SearchProps = Omit<IconButtonProps, 'icon'> & {
    text: string;
    tooltip: string;
};
