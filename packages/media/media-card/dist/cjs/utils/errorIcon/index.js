"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var warning_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/editor/warning"));
var styled_1 = require("./styled");
var ErrorIcon = /** @class */ (function (_super) {
    tslib_1.__extends(ErrorIcon, _super);
    function ErrorIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ErrorIcon.prototype.render = function () {
        var size = this.props.size;
        return (React.createElement(styled_1.ErrorIconWrapper, null,
            React.createElement(warning_1.default, { label: "Error", size: size })));
    };
    ErrorIcon.defaultProps = {
        size: 'small',
    };
    return ErrorIcon;
}(react_1.Component));
exports.ErrorIcon = ErrorIcon;
//# sourceMappingURL=index.js.map