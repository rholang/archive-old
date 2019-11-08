"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var button_1 = tslib_1.__importDefault(require("@atlaskit/button"));
var Content_1 = require("../styled/Content");
var JustifyShim = function (props) { return react_1.default.createElement("span", tslib_1.__assign({}, props)); };
var ModalFooter = /** @class */ (function (_super) {
    tslib_1.__extends(ModalFooter, _super);
    function ModalFooter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalFooter.prototype.render = function () {
        var _a = this.props, actions = _a.actions, appearance = _a.appearance, component = _a.component, onClose = _a.onClose, showKeyline = _a.showKeyline;
        var warning = 'You can provide `component` OR `actions`, not both.';
        if (!component && !actions)
            return null;
        if (component && actions) {
            console.warn(warning); // eslint-disable-line no-console
            return null;
        }
        if (component) {
            return react_1.default.createElement(component, {
                appearance: appearance,
                onClose: onClose,
                showKeyline: showKeyline,
            });
        }
        return (react_1.default.createElement(Content_1.Footer, { showKeyline: showKeyline },
            react_1.default.createElement(JustifyShim, null),
            react_1.default.createElement(Content_1.Actions, null, actions
                ? actions.map(function (_a, idx) {
                    var text = _a.text, testId = _a.testId, rest = tslib_1.__rest(_a, ["text", "testId"]);
                    var variant = idx !== 0 ? 'subtle' : appearance || 'primary';
                    return (react_1.default.createElement(Content_1.ActionItem, { key: text || idx },
                        react_1.default.createElement(button_1.default, tslib_1.__assign({ appearance: variant, testId: testId }, rest), text)));
                })
                : null)));
    };
    return ModalFooter;
}(react_1.default.Component));
exports.default = ModalFooter;
//# sourceMappingURL=Footer.js.map