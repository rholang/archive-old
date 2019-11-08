import Environments from '../utils/environments';
export interface CardClient {
    fetchData(url: string): Promise<JsonLd>;
}
export interface CardRequest {
    resourceUrl: string;
    context?: string;
}
export interface CardRequestBatch {
    resourceUrls: CardRequest[];
}
export declare type JsonLdAuth = {
    key: string;
    displayName: string;
    url: string;
};
export declare type JsonLdVisibility = 'public' | 'restricted' | 'other' | 'not_found';
export declare type JsonLdAccess = 'granted' | 'unauthorized' | 'forbidden';
export declare type JsonLdBatch = Array<JsonLdResponse>;
export declare type JsonLdResponse = {
    status: number;
    body: JsonLd;
};
export declare type JsonLd = {
    meta: {
        visibility: JsonLdVisibility;
        access: JsonLdAccess;
        auth: JsonLdAuth[];
        definitionId: string;
    };
    data?: {
        [name: string]: any;
    };
};
export declare type ClientEnvironment = {
    baseUrl: string;
    resolverUrl: string;
};
export declare type EnvironmentsKeys = keyof typeof Environments;
export interface ServerError {
    message: string;
    name: string;
    resourceUrl: string;
    status: number;
}
export declare const isServerError: (obj: any) => boolean;
