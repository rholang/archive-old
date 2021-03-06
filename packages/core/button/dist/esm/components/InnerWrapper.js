import { __assign, __rest } from "tslib";
/** @jsx jsx */
import { jsx } from '@emotion/core';
export default (function (_a) {
    var fit = _a.fit, children = _a.children, rest = __rest(_a, ["fit", "children"]);
    return (jsx("span", __assign({ css: __assign(__assign({ alignSelf: 'center', display: 'inline-flex', flexWrap: 'nowrap', maxWidth: '100%', position: 'relative' }, (fit && { width: '100%' })), (fit && { justifyContent: 'center' })) }, rest), children));
});
//# sourceMappingURL=InnerWrapper.js.map