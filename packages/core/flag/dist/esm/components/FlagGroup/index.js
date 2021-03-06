import { __extends, __read, __spread } from "tslib";
import React, { Children, cloneElement, Component } from 'react';
import { Transition } from 'react-transition-group';
import Portal from '@atlaskit/portal';
import { layers } from '@atlaskit/theme/constants';
import Wrapper, { flagAnimationTime } from '../../styled/Wrapper';
import Group, { SROnly, Inner } from './styledFlagGroup';
var FlagGroup = /** @class */ (function (_super) {
    __extends(FlagGroup, _super);
    function FlagGroup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderChildren = function () {
            var _a = _this.props, children = _a.children, onDismissed = _a.onDismissed;
            return Children.map(children, function (flag, index) {
                var isDismissAllowed = index === 0;
                var id = flag.props.id;
                return (
                // @ts-ignore: Bug in types - 'timeout' prop should not be required when addEndListener is provided
                React.createElement(Transition, { key: id, addEndListener: function (node, done) {
                        if (index > 0) {
                            done();
                            return;
                        }
                        node.addEventListener('animationstart', function () {
                            var args = [];
                            for (var _i = 0; _i < arguments.length; _i++) {
                                args[_i] = arguments[_i];
                            }
                            _this.animationTimeoutId = window.setTimeout(function () { return done.apply(void 0, __spread(args)); }, flagAnimationTime);
                        });
                        node.addEventListener('animationend', done);
                    } }, function (transitionState) { return (React.createElement(Wrapper, { transitionState: transitionState }, cloneElement(flag, { onDismissed: onDismissed, isDismissAllowed: isDismissAllowed }))); }));
            });
        };
        return _this;
    }
    FlagGroup.prototype.componentWillUnmount = function () {
        window.clearTimeout(this.animationTimeoutId);
    };
    FlagGroup.prototype.render = function () {
        return (React.createElement(Portal, { zIndex: layers.flag() },
            React.createElement(Group, null,
                React.createElement(SROnly, null, "Flag notifications"),
                React.createElement(Inner, { component: "div" }, this.renderChildren()))));
    };
    return FlagGroup;
}(Component));
export default FlagGroup;
//# sourceMappingURL=index.js.map