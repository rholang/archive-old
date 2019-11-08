import { ADFEntity } from '../types';
export declare type Content = Array<string | [string, object] | Array<string>>;
declare type ArrayForceContentValidationAttributesSpec = {
    type: 'array';
    items: Array<Array<string>>;
    optional?: boolean;
    forceContentValidation: boolean;
};
declare type AttributesSpec = ArrayForceContentValidationAttributesSpec | {
    type: 'number';
    optional?: boolean;
    minimum: number;
    maximum: number;
} | {
    type: 'integer';
    optional?: boolean;
    minimum: number;
    maximum: number;
} | {
    type: 'boolean';
    optional?: boolean;
} | {
    type: 'string';
    optional?: boolean;
    minLength?: number;
    pattern?: RegExp;
} | {
    type: 'enum';
    values: Array<string>;
    optional?: boolean;
} | {
    type: 'object';
    optional?: boolean;
} | {
    type: 'array';
    items: Array<AttributesSpec>;
    optional?: boolean;
};
interface ValidatorSpec {
    props?: {
        attrs?: {
            props: {
                [key: string]: AttributesSpec;
            };
            optional?: boolean;
        };
        content?: {
            type: 'array';
            items: Array<Array<string>>;
            minItems?: number;
            optional?: boolean;
            allowUnsupportedBlock: boolean;
            allowUnsupportedInline: boolean;
        };
        text?: AttributesSpec;
        marks?: {
            type: 'array';
            items: Array<Array<string>>;
            maxItems?: number;
            optional?: boolean;
        };
    };
    minItems?: number;
    required?: Array<string>;
}
export declare function validateAttrs<T>(spec: AttributesSpec, value: T): boolean;
interface ValidationErrorMap {
    MISSING_PROPERTIES: {
        props: Array<string>;
    };
    REDUNDANT_PROPERTIES: {
        props: Array<string>;
    };
    REDUNDANT_ATTRIBUTES: {
        attrs: Array<string>;
    };
    REDUNDANT_MARKS: {
        marks: Array<string>;
    };
    INVALID_TYPE: never;
    INVALID_TEXT: never;
    INVALID_CONTENT: never;
    INVALID_CONTENT_LENGTH: {
        length: number;
    };
    INVALID_ATTRIBUTES: {
        attrs: Array<string>;
    };
    DEPRECATED: never;
}
export declare type ValidationErrorType = keyof ValidationErrorMap;
export interface ValidationError {
    code: ValidationErrorType;
    message: string;
    meta?: object;
}
export declare type ErrorCallback = (entity: ADFEntity, error: ValidationError, options: {
    allowUnsupportedBlock?: boolean;
    allowUnsupportedInline?: boolean;
}) => ADFEntity | undefined;
export declare type ValidationMode = 'strict' | 'loose';
export interface ValidationOptions {
    mode?: ValidationMode;
    allowPrivateAttributes?: boolean;
}
export interface Output {
    valid: boolean;
    entity?: ADFEntity;
}
export declare function validator(nodes?: Array<string>, marks?: Array<string>, options?: ValidationOptions): (entity: ADFEntity, errorCallback?: ErrorCallback | undefined, allowed?: (string | string[] | [string, object])[] | undefined, parentSpec?: ValidatorSpec | undefined) => Output;
export {};
