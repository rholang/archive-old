import { ButtonProps } from '@atlaskit/button';
export declare type IconButtonProps = Omit<ButtonProps, 'children' | 'iconBefore' | 'iconAfter'> & {
    icon: ButtonProps['iconBefore'];
    testId?: string;
    tooltip: string;
};
export declare type IconButtonSkeletonProps = {
    className?: string;
    marginLeft?: number;
    marginRight?: number;
    size?: number;
};
