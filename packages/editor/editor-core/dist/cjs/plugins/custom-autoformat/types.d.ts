import { ADFEntity } from '@atlaskit/adf-utils';
import { Node as ProsemirrorNode } from 'prosemirror-model';
export declare type AutoformatReplacement = ADFEntity;
export declare type AutoformatHandler = (match: Array<string>) => Promise<AutoformatReplacement>;
export declare type Ruleset = {
    [regex: string]: AutoformatHandler;
};
export interface AutoformattingProvider {
    getRules(): Promise<Ruleset>;
}
export declare type AutoformatCandidate = {
    start: number;
    end: number;
    match: string[];
};
export declare type AutoformatMatch = {
    matchString: string;
    replacement?: ProsemirrorNode;
};
export declare type CustomAutoformatState = {
    resolving: Array<AutoformatCandidate>;
    matches: Array<AutoformatMatch>;
};
export declare type CustomAutoformatMatched = {
    action: 'matched';
    start: number;
    end: number;
    match: string[];
};
export declare type CustomAutoformatResolved = {
    action: 'resolved';
    matchString: string;
    replacement?: ProsemirrorNode;
};
export declare type CustomAutoformatFinish = {
    action: 'finish';
    matchString: string;
};
export declare type CustomAutoformatAction = CustomAutoformatMatched | CustomAutoformatResolved | CustomAutoformatFinish;
