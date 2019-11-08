import { __makeTemplateObject } from "tslib";
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { colors, gridSize } from '@atlaskit/theme';
import CheckCircleIcon from '@atlaskit/icon/glyph/check-circle';
export default (function (_a) {
    var children = _a.children;
    return (jsx("section", { css: css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      margin-left: ", "px;\n    "], ["\n      margin-left: ", "px;\n    "])), gridSize() * 5) },
        jsx("div", { css: css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        position: absolute;\n        top: ", "px;\n        left: ", "px;\n      "], ["\n        position: absolute;\n        top: ", "px;\n        left: ", "px;\n      "])), gridSize() * 3, gridSize() * 3) },
            jsx(CheckCircleIcon, { label: "", "aria-hidden": true, primaryColor: colors.G300 })),
        children));
});
var templateObject_1, templateObject_2;
//# sourceMappingURL=SuccessContainer.js.map