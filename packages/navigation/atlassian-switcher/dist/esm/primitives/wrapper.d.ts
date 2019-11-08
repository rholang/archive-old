import * as React from 'react';
import { Appearance } from '../theme/types';
declare const ErrorBoundaryWrapper: import("styled-components").StyledComponentClass<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, any, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
declare type SwitcherWrapperProps = {
    children: React.ReactNode;
    onRender?: () => void;
    appearance?: Appearance;
};
declare class SwitcherWrapper extends React.Component<SwitcherWrapperProps> {
    render(): JSX.Element;
}
export { ErrorBoundaryWrapper };
export default SwitcherWrapper;
