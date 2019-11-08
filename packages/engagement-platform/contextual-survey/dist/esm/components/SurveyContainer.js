import { __makeTemplateObject } from "tslib";
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Button from '@atlaskit/button';
import { elevation, borderRadius, colors, gridSize } from '@atlaskit/theme';
import CrossIcon from '@atlaskit/icon/glyph/cross';
import { surveyInnerWidth } from '../constants';
var padding = gridSize() * 3;
export default (function (_a) {
    var children = _a.children, onDismiss = _a.onDismiss;
    return (jsx("div", { css: css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        background-color: ", ";\n        border-radius: ", "px;\n        padding: ", "px;\n        ", "\n        width: ", "px;\n      "], ["\n        background-color: ", ";\n        border-radius: ", "px;\n        padding: ", "px;\n        ", "\n        width: ", "px;\n      "])), colors.N0, borderRadius(), padding, elevation.e500(), surveyInnerWidth) },
        jsx("div", { css: css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n          position: absolute;\n          top: ", "px;\n          right: ", "px;\n        "], ["\n          position: absolute;\n          top: ", "px;\n          right: ", "px;\n        "])), padding - gridSize(), padding - gridSize()) },
            jsx(Button, { iconBefore: jsx(CrossIcon, { label: "", primaryColor: colors.N50 }), "aria-label": "Dismiss", appearance: "subtle", onClick: onDismiss })),
        children));
});
var templateObject_1, templateObject_2;
//# sourceMappingURL=SurveyContainer.js.map