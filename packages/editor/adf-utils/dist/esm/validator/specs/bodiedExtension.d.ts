declare const _default: {
    props: {
        type: {
            type: string;
            values: string[];
        };
        attrs: {
            props: {
                extensionKey: {
                    type: string;
                    minLength: number;
                };
                extensionType: {
                    type: string;
                    minLength: number;
                };
                parameters: {
                    type: string;
                    optional: boolean;
                };
                text: {
                    type: string;
                    optional: boolean;
                };
                layout: {
                    type: string;
                    values: string[];
                    optional: boolean;
                };
            };
        };
        content: string;
    };
    required: string[];
};
export default _default;
