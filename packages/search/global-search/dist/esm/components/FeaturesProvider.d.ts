import * as React from 'react';
import { ConfluenceFeatures, JiraFeatures } from '../util/features';
interface State {
    features: (ConfluenceFeatures | JiraFeatures) | undefined;
}
export interface FeaturesProviderProps {
    features: ConfluenceFeatures | JiraFeatures;
}
export declare function injectFeatures<T>(Component: React.ComponentType<T & FeaturesProviderProps>): (props: Pick<T, Exclude<keyof T, "features">>) => JSX.Element;
export default class FeaturesProvider extends React.Component<FeaturesProviderProps, State> {
    state: {
        features: ConfluenceFeatures | JiraFeatures;
    };
    render(): JSX.Element;
}
export {};
