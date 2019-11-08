import { FC } from 'react';
import { ReactNode } from 'react';
import { SizeType, AppearanceType } from '../types';
interface AvatarProps {
    /** A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests */
    testId?: string;
    size: SizeType;
    children: ReactNode;
    stackIndex?: number;
}
declare const Avatar: FC<AvatarProps>;
export default Avatar;
interface PresenceWrapperProps {
    appearance: AppearanceType;
    size: SizeType;
    children: ReactNode;
}
export declare const PresenceWrapper: FC<PresenceWrapperProps>;
interface StatusWrapperProps {
    appearance: AppearanceType;
    size: SizeType;
    children: any;
}
export declare const StatusWrapper: FC<StatusWrapperProps>;
