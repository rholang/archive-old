import { Component, ReactElement, ReactNode } from 'react';
declare type Props = {
    /** Page breadcrumbs to be rendered above the title. */
    breadcrumbs?: ReactElement;
    /** Contents of the action bar to be rendered next to the page title. */
    actions?: ReactElement;
    /** Contents of the header bar to be rendered below the page title. */
    bottomBar?: ReactElement;
    /** Content of the page title. The text would be trimmed if it doesn't fit the
     header width and end with an ellipsis */
    children?: ReactNode;
    /** Disable default styles for page title */
    disableTitleStyles?: boolean;
    /** Prevent the title from wrapping across lines */
    truncateTitle?: boolean;
};
export default class PageHeader extends Component<Props> {
    static defaultProps: Partial<Props>;
    render(): JSX.Element;
}
export {};
