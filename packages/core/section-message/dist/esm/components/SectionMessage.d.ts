import React from 'react';
import { Appearance } from '../types';
interface ActionType {
    text: React.ReactNode;
    onClick?: () => void;
    href?: string;
    key: string;
    testId?: string;
}
interface Props {
    appearance?: Appearance;
    children: React.ReactNode;
    title?: string;
    actions?: Array<ActionType>;
    icon?: React.ElementType;
    linkComponent?: React.ComponentType<any>;
    /**
     * A `testId` prop is provided for specified elements, which is a unique
     * string that appears as a data attribute `data-testid` in the rendered code,
     * serving as a hook for automated tests */
    testId?: string;
}
export default class SectionMessage extends React.Component<Props, any> {
    static defaultProps: {
        appearance: string;
    };
    renderAction: (action: ActionType, linkComponent?: React.ComponentClass<any, any> | React.FunctionComponent<any> | undefined) => JSX.Element;
    render(): JSX.Element;
}
export {};
