"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var button_1 = tslib_1.__importDefault(require("@atlaskit/button"));
var FileChooser = /** @class */ (function (_super) {
    tslib_1.__extends(FileChooser, _super);
    function FileChooser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onChooseFile = function () {
            if (_this.props.onClick) {
                _this.props.onClick();
            }
            var chooseFile = _this.refs['chooseFile'];
            if (chooseFile) {
                chooseFile.click();
            }
        };
        return _this;
    }
    FileChooser.prototype.render = function () {
        var _a = this.props, accept = _a.accept, ariaLabel = _a.ariaLabel, isDisabled = _a.isDisabled, label = _a.label, onChange = _a.onChange;
        return (React.createElement("span", null,
            React.createElement(button_1.default, { onClick: this.onChooseFile, isDisabled: isDisabled, "aria-label": ariaLabel || label }, label),
            React.createElement("input", { className: "emojiUploadFileInput", ref: "chooseFile", onChange: onChange, type: "file", accept: accept, style: { display: 'none' } })));
    };
    return FileChooser;
}(react_1.PureComponent));
exports.default = FileChooser;
//# sourceMappingURL=FileChooser.js.map