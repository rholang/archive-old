import React from 'react';
import { Omit } from '@atlaskit/type-helpers';
export interface State {
    refWidth: number;
    refHeight: number;
}
export interface WithDimensionsProps {
    innerRef?: (element?: HTMLElement) => void;
    isRanking: boolean;
    refWidth: number;
    refHeight: number;
}
export default function withDimensions<WrappedComponentProps extends WithDimensionsProps>(WrappedComponent: React.ComponentType<WrappedComponentProps>): React.ComponentClass<Omit<WrappedComponentProps, 'refWidth' | 'refHeight' | 'innerRef'>, State>;
