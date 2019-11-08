import { ComponentType } from 'react';
interface Appearance {
    backgroundColor: string;
    primaryIconColor: string;
    Icon: ComponentType<any>;
}
export declare const baseAppearanceObj: {
    [key: string]: Appearance;
};
export {};
