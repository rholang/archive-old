"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var editor_common_1 = require("@atlaskit/editor-common");
exports.Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  margin: ", " 0;\n  margin-left: 50%;\n  transform: translateX(-50%);\n"], ["\n  margin: ", " 0;\n  margin-left: 50%;\n  transform: translateX(-50%);\n"])), editor_common_1.blockNodesVerticalMargin);
function Breakout(props) {
    return (React.createElement(editor_common_1.WidthConsumer, null, function (_a) {
        var width = _a.width;
        return (React.createElement(exports.Wrapper, { "data-mode": props.mode, style: { width: editor_common_1.calcBreakoutWidth(props.mode, width) }, className: "fabric-editor-breakout-mark" }, props.children));
    }));
}
exports.default = Breakout;
var templateObject_1;
//# sourceMappingURL=breakout.js.map