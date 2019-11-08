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
        attrs: {
            props: {
                width: {
                    type: string;
                    minimum: number;
                    maximum: number;
                    optional: boolean;
                };
                layout: {
                    type: string;
                    values: string[];
                };
            };
            optional: boolean;
        };
        marks: {
            type: string;
            items: string[];
            optional: boolean;
        };
    };
};
export default _default;
