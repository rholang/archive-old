export declare const BaseUrls: {
    dev: string;
    development: string;
    stg: string;
    staging: string;
    prd: string;
    prod: string;
    production: string;
};
export declare const getBaseUrl: (envKey?: "dev" | "development" | "stg" | "staging" | "prd" | "prod" | "production" | undefined) => string;
export declare const getResolverUrl: (envKey?: "dev" | "development" | "stg" | "staging" | "prd" | "prod" | "production" | undefined) => string;
export default BaseUrls;
