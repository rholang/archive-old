declare const _default: {
    props: {
        type: {
            type: string;
            values: string[];
        };
        attrs: {
            props: {
                text: {
                    type: string;
                    minLength: number;
                };
                color: {
                    type: string;
                    values: string[];
                };
                localId: {
                    type: string;
                    optional: boolean;
                };
                style: {
                    type: string;
                    optional: boolean;
                };
            };
        };
    };
};
export default _default;
