import { PureComponent, ReactNode } from 'react';
export declare type BasePanelProps = {
    /** Content to be shown inside the panel. */
    children?: ReactNode;
    /** Header to render on the panel. Clicking the header expands and collapses the panel */
    header?: ReactNode;
};
export declare type Props = BasePanelProps & {
    /** Defines whether the panel is expanded by default. */
    isExpanded: boolean;
    /** This callback is called when panel is expanded/collapsed */
    onChange: (isExpanded: boolean) => void;
};
export default class PanelStateless extends PureComponent<Props> {
    static defaultProps: {
        isExpanded: boolean;
    };
    render(): JSX.Element;
}
