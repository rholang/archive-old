import { JsonLd } from '../client/types';
export declare const mocks: {
    success: JsonLd;
    notFound: JsonLd;
    forbidden: JsonLd;
    unauthorized: JsonLd;
};
export declare const fakeResponse: () => Promise<JsonLd>;
export declare const fakeFactory: any;
export declare const waitFor: (time?: number) => Promise<unknown>;
