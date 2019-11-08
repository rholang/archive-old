declare const _default: {
    props: {
        type: {
            type: string;
            values: string[];
        };
        attrs: {
            props: {
                isNumberColumnEnabled: {
                    type: string;
                    optional: boolean;
                };
                layout: {
                    type: string;
                    values: string[];
                    optional: boolean;
                };
            };
            optional: boolean;
        };
        content: {
            type: string;
            items: string[];
            minItems: number;
        };
    };
};
export default _default;
