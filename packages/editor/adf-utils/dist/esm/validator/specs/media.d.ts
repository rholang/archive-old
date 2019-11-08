declare const _default: {
    props: {
        type: {
            type: string;
            values: string[];
        };
        attrs: ({
            props: {
                type: {
                    type: string;
                    values: string[];
                };
                id: {
                    type: string;
                    minLength: number;
                };
                collection: {
                    type: string;
                };
                height: {
                    type: string;
                    optional: boolean;
                };
                width: {
                    type: string;
                    optional: boolean;
                };
                occurrenceKey: {
                    type: string;
                    minLength: number;
                    optional: boolean;
                };
                url?: undefined;
            };
        } | {
            props: {
                type: {
                    type: string;
                    values: string[];
                };
                url: {
                    type: string;
                };
                width: {
                    type: string;
                    optional: boolean;
                };
                height: {
                    type: string;
                    optional: boolean;
                };
                id?: undefined;
                collection?: undefined;
                occurrenceKey?: undefined;
            };
        })[];
    };
    required: string[];
};
export default _default;
