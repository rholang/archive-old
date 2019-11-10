"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var settings_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/settings"));
var IconButton_1 = require("../IconButton");
exports.Settings = function (props) {
    var tooltip = props.tooltip, iconButtonProps = tslib_1.__rest(props, ["tooltip"]);
    return (react_1.default.createElement(IconButton_1.IconButton, tslib_1.__assign({ icon: react_1.default.createElement(settings_1.default, { label: tooltip }), tooltip: tooltip }, iconButtonProps)));
};
//# sourceMappingURL=index.js.map