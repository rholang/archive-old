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
        };
        attrs: {
            props: {
                order: {
                    type: string;
                    minimum: number;
                };
            };
            optional: boolean;
        };
    };
};
export default _default;
