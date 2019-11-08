/**
 * This map was originally used to configure the analytics codemod to run over
 * each component.
 * It is now also used as the source of truth for the instrumented components section of
 * the docs.
 * If analytics has been manually for a component and you do not wish for it to be
 * codemodded, add an `ignore: true` prop to it.
 */
export interface AnalyticsEventConfig {
    /** Path to component being wrapped with analytics */
    path: string;
    /** Path to analytics test file that will be created and/or already exists */
    testPath: string;
    /** The 'component' context value that will be exposed via analytics context */
    actionSubject: string;
    /** Any components that derive from the base component that will therefore have analytics
     * as well. E.g. any stateful version of a stateless component.
     */
    derivatives?: string[];
    /** The name of the component used in the component test file. This is also used
     * as the name of the base (unwrapped) component export in the component file path.
     * This name should be consistent, some names were manually updated so that they aligned.
     */
    component: string;
    /** A map of prop callbacks that will be instrumented with analytics.
     *  The key represents the prop callback name and the value represents the 'action'
     *  payload value that will be attached to the analytics event.
     */
    props: {
        [propName: string]: string | string[];
    };
    /** A map of prop callbacks that will be instrumented with analytics.
     *  The key represents the prop callback name and the value represents the 'action'
     *  payload value that will be attached to the analytics event.
     */
    attributes: {
        componentName: string;
        [attribute: string]: string;
    };
    /** Path to the components existing test file so that we can add mount tests to it */
    componentTestPath?: string;
    /** Signals to the codemod to not override the analytics tests in the component test
     *  file as some manual work has been done that cannot be automated.
     */
    manualComponentTestOverride?: boolean;
    /** Signals that this map entry is for test purposes and should not be part of other exports */
    test?: true;
    ignore?: boolean;
    overwrite?: string;
    overwritePackage?: string;
    refIssue?: boolean;
    rerun?: boolean;
    needsMountTest?: boolean;
}
export declare const analyticsEventMap: AnalyticsEventConfig[];
export declare const analyticsPackages: string[];
export interface InstrumentedItem {
    packageName: string;
    component: string;
    actionSubject: string;
    prop: string;
    payload: Record<string, string | string[]>;
}
export declare const instrumentedComponents: InstrumentedItem[];
