import React from 'react';
import { PositionTypeBase } from '../types';
declare type GetAnimationStyles = (position: PositionTypeBase) => Object;
interface AnimationProps {
    children: (getAnimationFn: GetAnimationStyles) => React.ReactNode;
    immediatelyHide: boolean;
    immediatelyShow: boolean;
    in: boolean;
    onExited: () => any;
}
declare const Animation: ({ children, immediatelyHide, immediatelyShow, onExited, in: inProp, }: AnimationProps) => JSX.Element;
export default Animation;
