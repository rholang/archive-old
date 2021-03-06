import { __assign, __extends, __rest } from "tslib";
import React, { Component } from 'react';
import FocusLock from 'react-focus-lock';
import { withAnalyticsEvents, withAnalyticsContext, createAndFireEvent, } from '@atlaskit/analytics-next';
import { Popper } from '@atlaskit/popper';
import { name as packageName, version as packageVersion, } from '../version.json';
import { Image } from '../styled/Dialog';
import SpotlightCard from './SpotlightCard';
import ValueChanged from './ValueChanged';
var SpotlightDialog = /** @class */ (function (_super) {
    __extends(SpotlightDialog, _super);
    function SpotlightDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            focusLockDisabled: true,
        };
        return _this;
    }
    SpotlightDialog.prototype.componentDidMount = function () {
        var _this = this;
        this.focusLockTimeoutId = window.setTimeout(function () {
            // we delay the enabling of the focus lock to avoid the scroll position
            // jumping around in some situations
            _this.setState({ focusLockDisabled: false });
        }, 200);
    };
    SpotlightDialog.prototype.componentWillUnmount = function () {
        window.clearTimeout(this.focusLockTimeoutId);
    };
    SpotlightDialog.prototype.render = function () {
        var _a = this.props, actions = _a.actions, actionsBeforeElement = _a.actionsBeforeElement, animationStyles = _a.animationStyles, children = _a.children, dialogPlacement = _a.dialogPlacement, dialogWidth = _a.dialogWidth, footer = _a.footer, header = _a.header, heading = _a.heading, image = _a.image, targetNode = _a.targetNode;
        var focusLockDisabled = this.state.focusLockDisabled;
        var translatedPlacement = dialogPlacement
            ? {
                'top left': 'top-start',
                'top center': 'top',
                'top right': 'top-end',
                'right top': 'right-start',
                'right middle': 'right',
                'right bottom': 'right-end',
                'bottom left': 'bottom-start',
                'bottom center': 'bottom',
                'bottom right': 'bottom-end',
                'left top': 'left-start',
                'left middle': 'left',
                'left bottom': 'left-end',
            }[dialogPlacement]
            : undefined;
        return (React.createElement(Popper, { referenceElement: targetNode, placement: translatedPlacement }, function (_a) {
            var ref = _a.ref, style = _a.style, scheduleUpdate = _a.scheduleUpdate;
            return (React.createElement(ValueChanged, { value: dialogWidth, onChange: scheduleUpdate },
                React.createElement(FocusLock, { disabled: focusLockDisabled, returnFocus: false, autoFocus: true },
                    React.createElement(SpotlightCard, { ref: ref, theme: function (parent) {
                            var _a = parent({}), container = _a.container, others = __rest(_a, ["container"]);
                            return __assign(__assign({}, others), { container: __assign(__assign(__assign({}, container), style), animationStyles) });
                        }, width: dialogWidth, actions: actions, actionsBeforeElement: actionsBeforeElement, image: image && React.createElement(Image, { alt: heading, src: image }), components: {
                            Header: header,
                            Footer: footer,
                        }, heading: heading }, children))));
        }));
    };
    return SpotlightDialog;
}(Component));
var createAndFireEventOnAtlaskit = createAndFireEvent('atlaskit');
export default withAnalyticsContext({
    componentName: 'spotlight',
    packageName: packageName,
    packageVersion: packageVersion,
})(withAnalyticsEvents({
    targetOnClick: createAndFireEventOnAtlaskit({
        action: 'clicked',
        actionSubject: 'spotlight',
        attributes: {
            componentName: 'spotlight',
            packageName: packageName,
            packageVersion: packageVersion,
        },
    }),
})(SpotlightDialog));
//# sourceMappingURL=SpotlightDialog.js.map