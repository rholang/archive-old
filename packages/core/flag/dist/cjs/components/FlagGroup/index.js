"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var react_transition_group_1 = require("react-transition-group");
var portal_1 = tslib_1.__importDefault(require("@atlaskit/portal"));
var constants_1 = require("@atlaskit/theme/constants");
var Wrapper_1 = tslib_1.__importStar(require("../../styled/Wrapper"));
var styledFlagGroup_1 = tslib_1.__importStar(require("./styledFlagGroup"));
var FlagGroup = /** @class */ (function (_super) {
    tslib_1.__extends(FlagGroup, _super);
    function FlagGroup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderChildren = function () {
            var _a = _this.props, children = _a.children, onDismissed = _a.onDismissed;
            return react_1.Children.map(children, function (flag, index) {
                var isDismissAllowed = index === 0;
                var id = flag.props.id;
                return (
                // @ts-ignore: Bug in types - 'timeout' prop should not be required when addEndListener is provided
                react_1.default.createElement(react_transition_group_1.Transition, { key: id, addEndListener: function (node, done) {
                        if (index > 0) {
                            done();
                            return;
                        }
                        node.addEventListener('animationstart', function () {
                            var args = [];
                            for (var _i = 0; _i < arguments.length; _i++) {
                                args[_i] = arguments[_i];
                            }
                            _this.animationTimeoutId = window.setTimeout(function () { return done.apply(void 0, tslib_1.__spread(args)); }, Wrapper_1.flagAnimationTime);
                        });
                        node.addEventListener('animationend', done);
                    } }, function (transitionState) { return (react_1.default.createElement(Wrapper_1.default, { transitionState: transitionState }, react_1.cloneElement(flag, { onDismissed: onDismissed, isDismissAllowed: isDismissAllowed }))); }));
            });
        };
        return _this;
    }
    FlagGroup.prototype.componentWillUnmount = function () {
        window.clearTimeout(this.animationTimeoutId);
    };
    FlagGroup.prototype.render = function () {
        return (react_1.default.createElement(portal_1.default, { zIndex: constants_1.layers.flag() },
            react_1.default.createElement(styledFlagGroup_1.default, null,
                react_1.default.createElement(styledFlagGroup_1.SROnly, null, "Flag notifications"),
                react_1.default.createElement(styledFlagGroup_1.Inner, { component: "div" }, this.renderChildren()))));
    };
    return FlagGroup;
}(react_1.Component));
exports.default = FlagGroup;
//# sourceMappingURL=index.js.map