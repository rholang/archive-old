"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var resetCss_1 = tslib_1.__importDefault(require("./resetCss"));
var srcDoc = tslib_1.__importStar(require("srcdoc-polyfill"));
var styled_1 = require("./styled");
var lodash_debounce_1 = tslib_1.__importDefault(require("lodash.debounce"));
exports.ArticleBody = function (props) {
    var iframeRef = react_1.useRef(null);
    var _a = tslib_1.__read(react_1.useState('auto'), 2), articleHeight = _a[0], setArticleHeight = _a[1];
    /**
     * Set article height
     */
    var resizeIframe = function (iframeRef) {
        var currentIframe = iframeRef.current;
        if (!currentIframe) {
            return;
        }
        if (currentIframe !== null && currentIframe.contentWindow !== null) {
            var iframeContent = currentIframe.contentWindow.document.body.firstElementChild;
            // if the iframe has content, set the height of the iframe body
            // and of the iframe itself
            if (iframeContent) {
                var contentHeight = iframeContent.scrollHeight;
                currentIframe.style.height = contentHeight + 'px';
                setArticleHeight(contentHeight + "px");
            }
        }
        return 0;
    };
    /**
     * Set iframe content
     * NOTE: I need to inject the content this way because I need to use srcDoc polyfill for IE11 and
     * old versions of Edge
     */
    var setIframeContent = function (iframeRef, body) {
        if (body === void 0) { body = ''; }
        var currentIframe = iframeRef.current;
        if (!currentIframe) {
            return;
        }
        if (currentIframe !== null && currentIframe.contentWindow !== null) {
            if (currentIframe.contentWindow.document.body) {
                srcDoc.set(currentIframe, "<style>" + resetCss_1.default + "</style><div style=\"overflow-x: hidden;\">" + body + "</div>");
            }
        }
    };
    /**
     * When the article changes, update the content of the iframe and
     * resize the iframe based on the new content
     */
    react_1.useEffect(function () {
        setIframeContent(iframeRef, props.body);
        resizeIframe(iframeRef);
    }, [props.body]);
    /**
     * When the window is resized, resize the iframe
     */
    react_1.useEffect(function () {
        /**
         * Set article height with debounce
         */
        var onWindowResize = lodash_debounce_1.default(function () { return resizeIframe(iframeRef); }, 500);
        window.addEventListener('resize', onWindowResize);
        /**
         * Add onload event to iframe. The iframe will be resized only after
         * the content is loaded
         */
        var currentIframe = iframeRef.current;
        if (currentIframe !== null && currentIframe.contentWindow !== null) {
            if (currentIframe.contentWindow.document.body) {
                currentIframe.onload = function () {
                    resizeIframe(iframeRef);
                };
            }
        }
        return function () {
            window.removeEventListener('resize', onWindowResize);
        };
    }, []);
    return props.body ? (react_1.default.createElement(styled_1.ArticleFrame, { style: { height: articleHeight }, ref: iframeRef, sandbox: "allow-scripts allow-same-origin" })) : null;
};
exports.default = exports.ArticleBody;
//# sourceMappingURL=index.js.map