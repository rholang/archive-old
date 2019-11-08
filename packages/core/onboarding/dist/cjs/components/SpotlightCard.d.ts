import { ThemeProp } from '@atlaskit/theme/components';
import React, { ReactNode, ComponentType, Ref } from 'react';
import { CardTokens } from './Card';
import { Actions } from '../types';
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
    /** The image src to render above the heading */
    image?: string | ReactNode;
    /** Removes elevation styles if set */
    isFlat?: boolean;
    /** the theme of the card */
    theme?: ThemeProp<CardTokens, {}>;
    /** width of the card in pixels */
    width?: number;
    innerRef?: Ref<HTMLElement> | null;
}
declare const _default: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLElement>>;
export default _default;
