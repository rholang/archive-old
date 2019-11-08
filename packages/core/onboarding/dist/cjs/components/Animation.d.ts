import { ReactNode } from 'react';
interface Props {
    in: boolean;
    children: (animationStyles: Record<string, any>) => ReactNode;
    onExited?: () => any;
}
export declare const Fade: ({ in: hasEntered, children, onExited }: Props) => JSX.Element;
export {};
