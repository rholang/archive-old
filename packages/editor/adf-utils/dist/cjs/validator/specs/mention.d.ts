declare const _default: {
    props: {
        type: {
            type: string;
            values: string[];
        };
        attrs: {
            props: {
                id: {
                    type: string;
                };
                text: {
                    type: string;
                    optional: boolean;
                };
                userType: {
                    type: string;
                    values: string[];
                    optional: boolean;
                };
                accessLevel: {
                    type: string;
                    optional: boolean;
                };
            };
        };
    };
};
export default _default;
