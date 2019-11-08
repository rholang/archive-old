declare const _default: {
    props: {
        type: {
            type: string;
            values: string[];
        };
        attrs: {
            props: {
                colspan: {
                    type: string;
                    optional: boolean;
                };
                rowspan: {
                    type: string;
                    optional: boolean;
                };
                colwidth: {
                    type: string;
                    items: {
                        type: string;
                    }[];
                    optional: boolean;
                };
                background: {
                    type: string;
                    optional: boolean;
                };
            };
            optional: boolean;
        };
        content: string;
    };
    required: string[];
};
export default _default;
