declare const _default: {
    props: {
        type: {
            type: string;
            values: string[];
        };
        content: {
            type: string;
            items: (string | {
                props: {
                    marks: {
                        type: string;
                        items: never[];
                        maxItems: number;
                        optional: boolean;
                    };
                };
            })[][];
            optional: boolean;
        };
        marks: {
            type: string;
            items: never[];
            optional: boolean;
        };
        attrs: {
            props: {
                language: {
                    type: string;
                    optional: boolean;
                };
            };
            optional: boolean;
        };
    };
};
export default _default;
