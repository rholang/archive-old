import { ComponentType } from 'react';
export interface FeedbackCollectorProps {
    name?: string;
    email?: string;
}
export interface InjectedInputControlProps {
    inputControls: JSX.Element | undefined;
}
export declare function withFeedbackButton<P extends InjectedInputControlProps>(WrappedComponent: ComponentType<P>): (props: Pick<Pick<P, Exclude<keyof P, "inputControls">> & FeedbackCollectorProps, "name" | "email" | Exclude<Exclude<keyof P, "inputControls">, "features">>) => JSX.Element;
