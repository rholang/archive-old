declare const _default: {
    props: {
        version: {
            type: string;
            values: number[];
        };
        type: {
            type: string;
            values: string[];
        };
        content: {
            type: string;
            items: string[][];
            allowUnsupportedBlock: boolean;
        };
    };
};
export default _default;
