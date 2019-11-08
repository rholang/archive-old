declare const _default: {
    props: {
        type: {
            type: string;
            values: string[];
        };
        content: {
            type: string;
            items: string[];
            minItems: number;
            maxItems: number;
        };
        marks: {
            type: string;
            items: string[];
            optional: boolean;
        };
    };
};
export default _default;
