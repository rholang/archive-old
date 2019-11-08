/** @jsx jsx */
import { ReactNode } from 'react';
interface Props {
    /** React Elements to be displayed within the group. This should generally be
     a collection of NavigationItems. */
    children?: ReactNode;
    /** Set whether the text should be compacted. */
    isCompact?: boolean;
    /** Text to appear as heading above group. Will be auto-capitalised. */
    title?: string;
}
export declare const DrawerItemGroup: ({ title, isCompact, children }: Props) => JSX.Element;
export {};
