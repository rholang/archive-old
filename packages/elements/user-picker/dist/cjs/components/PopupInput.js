"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var Input_1 = require("./Input");
var PopupInput = /** @class */ (function (_super) {
    tslib_1.__extends(PopupInput, _super);
    function PopupInput() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ref = null;
        _this.handleInnerRef = function (ref) {
            _this.ref = ref;
            if (_this.props.innerRef) {
                _this.props.innerRef(ref);
            }
        };
        return _this;
    }
    PopupInput.prototype.componentDidMount = function () {
        if (this.ref) {
            this.ref.select();
        }
    };
    PopupInput.prototype.render = function () {
        return React.createElement(Input_1.Input, tslib_1.__assign({}, this.props, { innerRef: this.handleInnerRef }));
    };
    return PopupInput;
}(React.Component));
exports.PopupInput = PopupInput;
//# sourceMappingURL=PopupInput.js.map