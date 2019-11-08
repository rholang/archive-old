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
        attrs: {
            props: {
                localId: {
                    type: string;
                };
                state: {
                    type: string;
                };
            };
        };
    };
};
export default _default;
