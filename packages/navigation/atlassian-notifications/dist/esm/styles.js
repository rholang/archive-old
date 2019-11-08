import { gridSize } from '@atlaskit/theme/constants';
export var iframeCSS = function (_a) {
    var loading = _a.loading;
    return ({
        border: 0,
        flex: '1 1 auto',
        height: "calc(100% - " + 3 * gridSize() + "px)",
        visibility: loading ? 'hidden' : 'visible',
        width: '100%',
    });
};
export var spinnerCSS = {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    top: '11.25rem',
};
//# sourceMappingURL=styles.js.map