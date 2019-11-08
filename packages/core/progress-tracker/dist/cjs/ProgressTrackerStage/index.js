"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var react_transition_group_1 = require("react-transition-group");
var colors = tslib_1.__importStar(require("@atlaskit/theme/colors"));
var page_1 = require("@atlaskit/page");
var styled_1 = require("./styled");
var semibold = '600';
var regular = '400';
var getMarkerColor = function (status) {
    switch (status) {
        case 'unvisited':
            return colors.N70;
        case 'current':
        case 'visited':
        case 'disabled':
            return colors.B300;
        default:
            return;
    }
};
var getTextColor = function (status) {
    switch (status) {
        case 'unvisited':
            return colors.N300;
        case 'current':
            return colors.B300;
        case 'visited':
            return colors.N800;
        case 'disabled':
            return colors.N70;
        default:
            return;
    }
};
var getFontWeight = function (status) {
    switch (status) {
        case 'unvisited':
            return regular;
        case 'current':
        case 'visited':
        case 'disabled':
            return semibold;
        default:
            return;
    }
};
var ProgressTrackerStage = /** @class */ (function (_super) {
    tslib_1.__extends(ProgressTrackerStage, _super);
    function ProgressTrackerStage(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            transitioning: false,
            oldMarkerColor: getMarkerColor(_this.props.item.status),
            oldPercentageComplete: 0,
        };
        return _this;
    }
    ProgressTrackerStage.prototype.UNSAFE_componentWillMount = function () {
        this.setState(tslib_1.__assign(tslib_1.__assign({}, this.state), { transitioning: true }));
    };
    ProgressTrackerStage.prototype.UNSAFE_componentWillReceiveProps = function () {
        this.setState(tslib_1.__assign(tslib_1.__assign({}, this.state), { transitioning: true }));
    };
    ProgressTrackerStage.prototype.shouldShowLink = function () {
        return this.props.item.status === 'visited' && !this.props.item.noLink;
    };
    ProgressTrackerStage.prototype.render = function () {
        var _this = this;
        var _a = this.props, item = _a.item, render = _a.render, transitionDelay = _a.transitionDelay, transitionSpeed = _a.transitionSpeed, transitionEasing = _a.transitionEasing;
        var onEntered = function () {
            _this.setState({
                transitioning: false,
                oldMarkerColor: getMarkerColor(item.status),
                oldPercentageComplete: item.percentageComplete,
            });
        };
        return (react_1.default.createElement(page_1.GridColumn, { medium: 2 },
            react_1.default.createElement(styled_1.ProgressTrackerStageContainer, null,
                react_1.default.createElement(react_transition_group_1.CSSTransition, { appear: true, in: this.state.transitioning, onEntered: onEntered, timeout: transitionDelay + transitionSpeed, classNames: "CSSTransition" },
                    react_1.default.createElement(styled_1.ProgressTrackerStageMarker, { oldMarkerColor: this.state.oldMarkerColor, color: getMarkerColor(item.status), transitionSpeed: transitionSpeed, transitionDelay: transitionDelay, transitionEasing: transitionEasing })),
                react_1.default.createElement(react_transition_group_1.CSSTransition, { appear: true, in: this.state.transitioning, onEntered: onEntered, timeout: transitionDelay + transitionSpeed, classNames: "CSSTransition" },
                    react_1.default.createElement(styled_1.ProgressTrackerStageBar, { oldPercentageComplete: this.state.oldPercentageComplete, percentageComplete: item.percentageComplete, transitionSpeed: transitionSpeed, transitionDelay: transitionDelay, transitionEasing: transitionEasing })),
                react_1.default.createElement(react_transition_group_1.CSSTransition, { appear: true, in: this.state.transitioning, onEntered: onEntered, timeout: transitionDelay + transitionSpeed, classNames: "CSSTransition" },
                    react_1.default.createElement(styled_1.ProgressTrackerStageTitle, { color: getTextColor(item.status), fontweight: getFontWeight(item.status), transitionSpeed: transitionSpeed, transitionDelay: transitionDelay }, this.shouldShowLink() ? render.link({ item: item }) : item.label)))));
    };
    return ProgressTrackerStage;
}(react_1.PureComponent));
exports.default = ProgressTrackerStage;
//# sourceMappingURL=index.js.map