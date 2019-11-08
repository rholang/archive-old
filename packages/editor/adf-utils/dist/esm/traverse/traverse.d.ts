import { ADFEntity } from '../types';
export declare type visitor = (node: ADFEntity, parent: EntityParent, index: number) => ADFEntity | false | undefined | void;
export declare type EntityParent = {
    node?: ADFEntity;
    parent?: EntityParent;
};
export declare function validateVisitors(_visitors: {
    [type: string]: visitor;
}): boolean;
export declare function traverse(adf: ADFEntity, visitors: {
    [type: string]: visitor;
}): false | ADFEntity;
