import { MockTaskDecisionResource, MockTaskDecisionResourceConfig } from './MockTaskDecisionResource';
export declare const getServiceTasksResponse: () => any;
export declare const getMockTaskDecisionResource: (config?: MockTaskDecisionResourceConfig | undefined) => MockTaskDecisionResource;
export declare const document: {
    version: number;
    type: string;
    content: {
        type: string;
        content: ({
            type: string;
            text: string;
            attrs?: undefined;
            marks?: undefined;
        } | {
            type: string;
            text?: undefined;
            attrs?: undefined;
            marks?: undefined;
        } | {
            type: string;
            attrs: {
                shortName: string;
                id: string;
                text: string;
                accessLevel?: undefined;
            };
            text?: undefined;
            marks?: undefined;
        } | {
            type: string;
            attrs: {
                id: string;
                text: string;
                accessLevel: string;
                shortName?: undefined;
            };
            text?: undefined;
            marks?: undefined;
        } | {
            type: string;
            text: string;
            marks: {
                type: string;
            }[];
            attrs?: undefined;
        })[];
    }[];
};
export declare const participants: string[];
export declare const getParticipants: (count: number) => string[];
