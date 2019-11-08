import * as React from 'react';
import { CardAppearance } from './types';
import { CardProps } from './types';
export declare const Card: React.ForwardRefExoticComponent<Pick<CardProps, "url" | "data" | "isSelected" | "onClick" | "appearance" | "onResolve" | "importer" | "container"> & React.RefAttributes<any>>;
export { CardAppearance, CardProps };
