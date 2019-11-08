declare const _default: {
    props: {
        type: {
            type: string;
            values: string[];
        };
        content: {
            type: string;
            items: string[];
            allowUnsupportedInline: boolean;
            optional: boolean;
        };
        marks: {
            type: string;
            items: never[];
            optional: boolean;
        };
        attrs: {
            props: {
                level: {
                    type: string;
                    minimum: number;
                    maximum: number;
                };
            };
        };
    };
};
export default _default;
