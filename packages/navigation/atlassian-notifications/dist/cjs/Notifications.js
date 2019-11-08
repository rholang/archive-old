"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/** @jsx jsx */
var spinner_1 = tslib_1.__importDefault(require("@atlaskit/spinner"));
var core_1 = require("@emotion/core");
var react_1 = require("react");
var styles_1 = require("./styles");
var utils_1 = require("./utils");
exports.Notifications = function (props) {
    var locale = props.locale, product = props.product, testId = props.testId, iframeProps = tslib_1.__rest(props, ["locale", "product", "testId"]);
    var ref = react_1.useRef(null);
    var _a = tslib_1.__read(react_1.useState(true), 2), loading = _a[0], setLoading = _a[1];
    var onMessage = function (event) {
        if (!ref.current || !event.source) {
            return;
        }
        if (event.source.window === ref.current.contentWindow &&
            event.data === 'readyForUser') {
            setLoading(false);
        }
    };
    react_1.useEffect(function () {
        window.addEventListener('message', onMessage);
        return function () {
            window.removeEventListener('message', onMessage);
        };
    }, []);
    var onLoad = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        setLoading(false);
        if (iframeProps.onLoad) {
            iframeProps.onLoad.apply(iframeProps, tslib_1.__spread(args));
        }
    };
    return (core_1.jsx(react_1.Fragment, null,
        loading && (core_1.jsx("div", { css: styles_1.spinnerCSS },
            core_1.jsx(spinner_1.default, { size: "large", isCompleting: !loading }))),
        core_1.jsx("iframe", tslib_1.__assign({}, iframeProps, { css: styles_1.iframeCSS({ loading: loading }), "data-testid": testId, onLoad: onLoad, ref: ref, src: utils_1.getNotificationsSrc({ locale: locale, product: product }) }))));
};
//# sourceMappingURL=Notifications.js.map