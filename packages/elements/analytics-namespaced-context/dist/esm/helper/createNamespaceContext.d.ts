import * as React from 'react';
import { ReactNode } from 'react';
export declare type Props = {
    children?: ReactNode;
    data: {};
};
declare const createNamespaceContext: <T extends Props>(namespace: string, displayName?: string) => React.FunctionComponent<T>;
export default createNamespaceContext;
