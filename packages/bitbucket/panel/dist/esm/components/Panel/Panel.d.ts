import { PureComponent } from 'react';
import { BasePanelProps } from './PanelStateless';
declare type Props = BasePanelProps & {
    /** Defines whether the panel is expanded by default. */
    isDefaultExpanded?: boolean;
};
declare type State = {
    isExpanded: boolean;
};
export default class Panel extends PureComponent<Props, State> {
    static defaultProps: {
        isDefaultExpanded: boolean;
    };
    state: {
        isExpanded: boolean;
    };
    handleChange: () => void;
    render(): JSX.Element;
}
export {};
