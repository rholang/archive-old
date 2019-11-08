import { ComponentType } from 'react';
import { IconButtonProps } from '../IconButton/types';
export declare type NotificationsProps = Omit<IconButtonProps, 'icon' | 'tooltip'> & {
    badge: ComponentType<{}>;
    tooltip: string;
};
