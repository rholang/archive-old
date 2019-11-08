declare const _default: {
    [x: number]: {
        padding: {
            compact: {
                bottom: any;
                left: any;
                right: any;
                top: any;
            };
            default: {
                bottom: any;
                left: number;
                right: number;
                top: any;
            };
        };
        borderRadius: number;
        height: {
            compact: number;
            default: number;
        };
        beforeItemSpacing: {
            compact: any;
            default: number;
        };
        default: {
            background: import("./types").Color;
            text: import("./types").Color;
            secondaryText: import("./types").Color;
        };
        hover: {
            background: import("./types").Color;
            text: import("./types").Color;
            secondaryText: import("./types").Color;
        };
        active: {
            background: import("./types").Color;
            text: import("./types").Color;
            secondaryText: import("./types").Color;
        };
        selected: {
            background: import("./types").Color;
            text: import("./types").Color;
            secondaryText: import("./types").Color;
        };
        focus: {
            outline: string | Function | undefined;
        };
        dragging: {
            background: import("./types").Color;
        };
    };
};
export default _default;
