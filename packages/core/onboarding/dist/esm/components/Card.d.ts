import React, { ReactNode, ComponentType } from 'react';
import { ThemeProp } from '@atlaskit/theme/components';
import { Actions } from '../types';
export interface CardTokens {
    container: Record<string, string | undefined>;
}
interface Props {
    /** Buttons to render in the footer */
    actions?: Actions;
    /** An optional element rendered to the left of the footer actions */
    actionsBeforeElement?: ReactNode;
    /** The content of the card */
    children?: ReactNode;
    /** The container elements rendered by the component */
    components?: {
        Header?: ComponentType<any>;
        Footer?: ComponentType<any>;
    };
    /** The heading to be rendered above the body */
    heading?: ReactNode;
    /** An optional element rendered to the right of the heading */
    headingAfterElement?: ReactNode;
    /** The image to render above the heading. Can be a url or a Node. */
    image?: string | ReactNode;
    /** the theme of the card */
    theme?: ThemeProp<CardTokens, {}>;
    innerRef?: React.Ref<HTMLElement>;
}
declare const _default: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLElement>>;
export default _default;
