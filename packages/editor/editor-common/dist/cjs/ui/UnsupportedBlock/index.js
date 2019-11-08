"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var theme_1 = require("@atlaskit/theme");
var BlockNode = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  align-items: center;\n  background: ", ";\n  border: 1px dashed ", ";\n  border-radius: ", "px;\n  box-sizing: border-box;\n  cursor: default;\n  display: block;\n  font-size: 13px;\n  margin: 10px 0;\n  min-height: 24px;\n  padding: 10px;\n  text-align: center;\n  user-select: all;\n  vertical-align: text-bottom;\n  white-space: nowrap;\n\n  '&.ProseMirror-selectednode' {\n    background: ", ";\n    outline: none;\n  }\n"], ["\n  align-items: center;\n  background: ", ";\n  border: 1px dashed ", ";\n  border-radius: ", "px;\n  box-sizing: border-box;\n  cursor: default;\n  display: block;\n  font-size: 13px;\n  margin: 10px 0;\n  min-height: 24px;\n  padding: 10px;\n  text-align: center;\n  user-select: all;\n  vertical-align: text-bottom;\n  white-space: nowrap;\n\n  '&.ProseMirror-selectednode' {\n    background: ", ";\n    outline: none;\n  }\n"])), theme_1.colors.N30, theme_1.colors.N50, theme_1.borderRadius(), theme_1.colors.N50);
var UnsupportedBlockNode = /** @class */ (function (_super) {
    tslib_1.__extends(UnsupportedBlockNode, _super);
    function UnsupportedBlockNode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UnsupportedBlockNode.prototype.render = function () {
        return React.createElement(BlockNode, null, "Unsupported content");
    };
    return UnsupportedBlockNode;
}(react_1.Component));
exports.default = UnsupportedBlockNode;
var templateObject_1;
//# sourceMappingURL=index.js.map