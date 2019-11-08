/** @jsx jsx */
import { ReactNode } from 'react';
declare type Props = {
    /** Whether the form should be rendered */
    shouldShow: boolean;
    /** A function that returns Node to be rendered (`<ContextualSurvey/>`)
     * Using a function as child so that the child node does
     * not need to be evaluated if it is not mounted
     */
    children: () => ReactNode;
};
export default function SurveyMarshal(props: Props): JSX.Element;
export {};
