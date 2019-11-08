import { __assign, __extends } from "tslib";
import React, { PureComponent } from 'react';
import { CSSTransition } from 'react-transition-group';
import * as colors from '@atlaskit/theme/colors';
import { GridColumn } from '@atlaskit/page';
import { ProgressTrackerStageContainer, ProgressTrackerStageMarker, ProgressTrackerStageBar, ProgressTrackerStageTitle, } from './styled';
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
    __extends(ProgressTrackerStage, _super);
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
        this.setState(__assign(__assign({}, this.state), { transitioning: true }));
    };
    ProgressTrackerStage.prototype.UNSAFE_componentWillReceiveProps = function () {
        this.setState(__assign(__assign({}, this.state), { transitioning: true }));
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
        return (React.createElement(GridColumn, { medium: 2 },
            React.createElement(ProgressTrackerStageContainer, null,
                React.createElement(CSSTransition, { appear: true, in: this.state.transitioning, onEntered: onEntered, timeout: transitionDelay + transitionSpeed, classNames: "CSSTransition" },
                    React.createElement(ProgressTrackerStageMarker, { oldMarkerColor: this.state.oldMarkerColor, color: getMarkerColor(item.status), transitionSpeed: transitionSpeed, transitionDelay: transitionDelay, transitionEasing: transitionEasing })),
                React.createElement(CSSTransition, { appear: true, in: this.state.transitioning, onEntered: onEntered, timeout: transitionDelay + transitionSpeed, classNames: "CSSTransition" },
                    React.createElement(ProgressTrackerStageBar, { oldPercentageComplete: this.state.oldPercentageComplete, percentageComplete: item.percentageComplete, transitionSpeed: transitionSpeed, transitionDelay: transitionDelay, transitionEasing: transitionEasing })),
                React.createElement(CSSTransition, { appear: true, in: this.state.transitioning, onEntered: onEntered, timeout: transitionDelay + transitionSpeed, classNames: "CSSTransition" },
                    React.createElement(ProgressTrackerStageTitle, { color: getTextColor(item.status), fontweight: getFontWeight(item.status), transitionSpeed: transitionSpeed, transitionDelay: transitionDelay }, this.shouldShowLink() ? render.link({ item: item }) : item.label)))));
    };
    return ProgressTrackerStage;
}(PureComponent));
export default ProgressTrackerStage;
//# sourceMappingURL=index.js.map