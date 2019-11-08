/// <reference types="react" />
import { ShareError } from './ShareContentState';
export declare type RenderCustomTriggerButton = (args: {
    error?: ShareError;
    isSelected?: boolean;
    onClick: () => void;
}) => React.ReactNode;
export declare type DialogPlacement = 'auto-start' | 'auto' | 'auto-end' | 'top-start' | 'top' | 'top-end' | 'right-start' | 'right' | 'right-end' | 'bottom-end' | 'bottom' | 'bottom-start' | 'left-end' | 'left' | 'left-start';
