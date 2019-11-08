import React from 'react';
import { WidthNames } from '../shared-variables';
export interface PositionerProps {
    scrollBehavior: void | 'inside' | 'outside';
    style: Object;
    widthName?: WidthNames;
    widthValue?: string | number;
}
declare const Positioner: React.ComponentType<PositionerProps>;
export default Positioner;
