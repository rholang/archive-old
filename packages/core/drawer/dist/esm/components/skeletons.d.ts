/** @jsx jsx */
interface DrawerSkeletonItemProps {
    isCollapsed?: boolean;
    itemTextWidth?: string;
    isAvatarHidden?: boolean;
}
interface DrawerSkeletonHeaderProps {
    isCollapsed?: boolean;
    isAvatarHidden?: boolean;
}
export declare const DrawerSkeletonHeader: (props: DrawerSkeletonHeaderProps) => JSX.Element;
export declare const DrawerSkeletonItem: (props: DrawerSkeletonItemProps) => JSX.Element;
export {};
