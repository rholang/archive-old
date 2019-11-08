"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var react_focus_lock_1 = tslib_1.__importDefault(require("react-focus-lock"));
var analytics_next_1 = require("@atlaskit/analytics-next");
var popper_1 = require("@atlaskit/popper");
var version_json_1 = require("../version.json");
var Dialog_1 = require("../styled/Dialog");
var SpotlightCard_1 = tslib_1.__importDefault(require("./SpotlightCard"));
var ValueChanged_1 = tslib_1.__importDefault(require("./ValueChanged"));
var SpotlightDialog = /** @class */ (function (_super) {
    tslib_1.__extends(SpotlightDialog, _super);
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
        return (react_1.default.createElement(popper_1.Popper, { referenceElement: targetNode, placement: translatedPlacement }, function (_a) {
            var ref = _a.ref, style = _a.style, scheduleUpdate = _a.scheduleUpdate;
            return (react_1.default.createElement(ValueChanged_1.default, { value: dialogWidth, onChange: scheduleUpdate },
                react_1.default.createElement(react_focus_lock_1.default, { disabled: focusLockDisabled, returnFocus: false, autoFocus: true },
                    react_1.default.createElement(SpotlightCard_1.default, { ref: ref, theme: function (parent) {
                            var _a = parent({}), container = _a.container, others = tslib_1.__rest(_a, ["container"]);
                            return tslib_1.__assign(tslib_1.__assign({}, others), { container: tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, container), style), animationStyles) });
                        }, width: dialogWidth, actions: actions, actionsBeforeElement: actionsBeforeElement, image: image && react_1.default.createElement(Dialog_1.Image, { alt: heading, src: image }), components: {
                            Header: header,
                            Footer: footer,
                        }, heading: heading }, children))));
        }));
    };
    return SpotlightDialog;
}(react_1.Component));
var createAndFireEventOnAtlaskit = analytics_next_1.createAndFireEvent('atlaskit');
exports.default = analytics_next_1.withAnalyticsContext({
    componentName: 'spotlight',
    packageName: version_json_1.name,
    packageVersion: version_json_1.version,
})(analytics_next_1.withAnalyticsEvents({
    targetOnClick: createAndFireEventOnAtlaskit({
        action: 'clicked',
        actionSubject: 'spotlight',
        attributes: {
            componentName: 'spotlight',
            packageName: version_json_1.name,
            packageVersion: version_json_1.version,
        },
    }),
})(SpotlightDialog));
//# sourceMappingURL=SpotlightDialog.js.map