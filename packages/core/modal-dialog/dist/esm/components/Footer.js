import { __assign, __extends, __rest } from "tslib";
import React from 'react';
import Button from '@atlaskit/button';
import { Actions, ActionItem, Footer } from '../styled/Content';
var JustifyShim = function (props) { return React.createElement("span", __assign({}, props)); };
var ModalFooter = /** @class */ (function (_super) {
    __extends(ModalFooter, _super);
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
            return React.createElement(component, {
                appearance: appearance,
                onClose: onClose,
                showKeyline: showKeyline,
            });
        }
        return (React.createElement(Footer, { showKeyline: showKeyline },
            React.createElement(JustifyShim, null),
            React.createElement(Actions, null, actions
                ? actions.map(function (_a, idx) {
                    var text = _a.text, testId = _a.testId, rest = __rest(_a, ["text", "testId"]);
                    var variant = idx !== 0 ? 'subtle' : appearance || 'primary';
                    return (React.createElement(ActionItem, { key: text || idx },
                        React.createElement(Button, __assign({ appearance: variant, testId: testId }, rest), text)));
                })
                : null)));
    };
    return ModalFooter;
}(React.Component));
export default ModalFooter;
//# sourceMappingURL=Footer.js.map