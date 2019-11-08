import { Component } from 'react';
import { SizeType, AppearanceType } from '../types';
interface SkeletonProps {
    appearance: AppearanceType;
    color?: string;
    size: SizeType;
    weight: 'normal' | 'strong';
}
export default class Skeleton extends Component<SkeletonProps> {
    static defaultProps: {
        appearance: string;
        size: string;
        weight: string;
    };
    render(): JSX.Element;
}
export {};
