declare const _default: {
    props: {
        type: {
            type: string;
            values: string[];
        };
        attrs: ({
            props: {
                url: {
                    type: string;
                };
                data?: undefined;
            };
        } | {
            props: {
                data: {
                    type: string;
                };
                url?: undefined;
            };
        })[];
    };
    required: string[];
};
export default _default;
