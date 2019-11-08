import { Component, ReactNode } from 'react';
interface Props {
    /** a single child */
    children: ReactNode;
    /** the name to reference from Spotlight */
    name: string;
}
declare class SpotlightTarget extends Component<Props> {
    render(): JSX.Element;
}
export default SpotlightTarget;
