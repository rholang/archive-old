declare const _default: {
    props: {
        type: {
            type: string;
            values: string[];
        };
        attrs: {
            props: {
                width: {
                    type: string;
                    minimum: number;
                    maximum: number;
                };
            };
        };
        content: {
            type: string;
            items: string[];
            minItems: number;
        };
    };
};
export default _default;
