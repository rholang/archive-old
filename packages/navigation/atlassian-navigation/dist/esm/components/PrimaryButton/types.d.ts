import { ButtonProps } from '@atlaskit/button/types';
export declare type PrimaryButtonProps = Omit<ButtonProps, 'appearance'> & {
    /**  */
    testId?: string;
    /** A string to render as a tooltip */
    tooltip?: string;
};
export declare type PrimaryButtonSkeletonProps = {
    className?: string;
};
