"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var theme_1 = require("@atlaskit/theme");
var ColorCard_1 = tslib_1.__importDefault(require("./ColorCard"));
var constants_1 = require("../constants");
var ColorPalette_1 = require("../styled/ColorPalette");
var EmptyComponent = function () { return null; };
exports.MenuList = function (props) {
    var cx = props.cx, cols = props.selectProps.cols, rest = tslib_1.__rest(props, ["cx", "selectProps"]);
    return (React.createElement(ColorPalette_1.ColorPaletteContainer, tslib_1.__assign({ style: {
            maxWidth: cols ? cols * (constants_1.COLOR_CARD_SIZE + 2) + theme_1.gridSize() : undefined,
        } }, rest)));
};
exports.Option = function (props) {
    var _a = props.data, value = _a.value, label = _a.label, checkMarkColor = props.selectProps.checkMarkColor, isFocused = props.isFocused, isSelected = props.isSelected;
    return (React.createElement(ColorPalette_1.ColorCardWrapper, tslib_1.__assign({}, props.innerProps),
        React.createElement(ColorCard_1.default, { label: label, value: value, checkMarkColor: checkMarkColor, isOption: true, focused: isFocused, selected: isSelected })));
};
exports.DropdownIndicator = EmptyComponent;
exports.Placeholder = EmptyComponent;
//# sourceMappingURL=components.js.map