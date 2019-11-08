"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var inline_dialog_1 = tslib_1.__importDefault(require("@atlaskit/inline-dialog"));
var button_1 = tslib_1.__importDefault(require("@atlaskit/button"));
var popupStyles_1 = require("./popupStyles");
var toolButton_1 = require("../buttons/toolButton");
var styles_1 = require("../buttons/styles");
exports.shapeTools = ['rectangle', 'oval', 'line'];
var ShapePopup = /** @class */ (function (_super) {
    tslib_1.__extends(ShapePopup, _super);
    function ShapePopup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShapePopup.prototype.render = function () {
        var _a = this.props, isOpen = _a.isOpen, children = _a.children;
        var content = (React.createElement(popupStyles_1.ShapePopupContentWrapper, null, this.renderButtons()));
        return (React.createElement(inline_dialog_1.default, { isOpen: isOpen, placement: "top-start", content: content }, children));
    };
    ShapePopup.prototype.renderButtons = function () {
        var _a = this.props, onPickShape = _a.onPickShape, currentShape = _a.shape;
        return exports.shapeTools.map(function (shape) {
            var isSelected = shape === currentShape;
            var Icon = toolButton_1.toolIcons[shape];
            var icon = React.createElement(Icon, { label: shape });
            var onClick = function () { return onPickShape(shape); };
            return (React.createElement(button_1.default, { appearance: "subtle", key: shape, isSelected: isSelected, shouldFitContainer: true, iconBefore: icon, onClick: onClick },
                React.createElement(styles_1.ShapeTitle, null, shape)));
        });
    };
    return ShapePopup;
}(react_1.Component));
exports.ShapePopup = ShapePopup;
//# sourceMappingURL=shapePopup.js.map