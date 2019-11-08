declare const _default: {
    props: {
        type: {
            type: string;
            values: string[];
        };
        attrs: {
            props: {
                panelType: {
                    type: string;
                    values: string[];
                };
            };
        };
        content: {
            type: string;
            items: string[][];
            minItems: number;
        };
    };
};
export default _default;
