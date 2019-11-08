"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var page_1 = require("@atlaskit/page");
var styled_components_1 = require("styled-components");
var ProgressTrackerStage_1 = tslib_1.__importDefault(require("../ProgressTrackerStage"));
var styled_1 = require("./styled");
var ProgressTrackerLink_1 = tslib_1.__importDefault(require("../ProgressTrackerLink"));
var TRANSITION_SPEED = 300;
var LINEAR_TRANSITION_SPEED = 50;
var easeOut = 'cubic-bezier(0.15,1,0.3,1)';
var ProgressTracker = /** @class */ (function (_super) {
    tslib_1.__extends(ProgressTracker, _super);
    function ProgressTracker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.createTheme = function () { return ({
            spacing: _this.props.spacing,
            columns: _this.props.items.length * 2,
        }); };
        return _this;
    }
    ProgressTracker.prototype.UNSAFE_componentWillMount = function () {
        this.setState({
            prevStages: this.props.items.map(function (stage) { return (tslib_1.__assign(tslib_1.__assign({}, stage), { percentageComplete: 0 })); }),
        });
    };
    ProgressTracker.prototype.UNSAFE_componentWillReceiveProps = function () {
        this.setState({
            prevStages: this.props.items,
        });
    };
    ProgressTracker.prototype.render = function () {
        var _this = this;
        var progressChanges = this.props.items.filter(function (stage, index) {
            return stage.percentageComplete !==
                _this.state.prevStages[index].percentageComplete;
        }).length;
        var totalStepsForward = this.props.items.filter(function (stage, index) {
            return stage.percentageComplete >
                _this.state.prevStages[index].percentageComplete;
        }).length;
        var totalStepsBack = this.props.items.filter(function (stage, index) {
            return stage.percentageComplete <
                _this.state.prevStages[index].percentageComplete;
        }).length;
        var stepsForward = totalStepsForward;
        var stepsBack = totalStepsBack;
        var items = this.props.items.map(function (stage, index) {
            var transitionSpeed = 0;
            var transitionDelay = 0;
            var transitionEasing = progressChanges > 1 ? 'linear' : easeOut;
            if (_this.props.animated) {
                transitionSpeed =
                    progressChanges > 1 ? LINEAR_TRANSITION_SPEED : TRANSITION_SPEED;
                if (stage.percentageComplete <
                    _this.state.prevStages[index].percentageComplete) {
                    /** load each transition sequentially in reverse */
                    transitionDelay = (stepsBack - 1) * transitionSpeed;
                    stepsBack -= 1;
                }
                else if (stage.percentageComplete >
                    _this.state.prevStages[index].percentageComplete) {
                    /** load each transition sequentially */
                    transitionDelay =
                        (totalStepsForward - stepsForward) * transitionSpeed;
                    stepsForward -= 1;
                }
            }
            return (react_1.default.createElement(ProgressTrackerStage_1.default, { key: stage.id, item: stage, render: _this.props.render, transitionSpeed: transitionSpeed, transitionDelay: transitionDelay, transitionEasing: transitionEasing }));
        });
        return (react_1.default.createElement(styled_components_1.ThemeProvider, { theme: this.createTheme() },
            react_1.default.createElement(page_1.Grid, null,
                react_1.default.createElement(styled_1.ProgressTrackerContainer, null, items))));
    };
    ProgressTracker.defaultProps = {
        items: [],
        spacing: 'cosy',
        render: {
            link: function (props) { return react_1.default.createElement(ProgressTrackerLink_1.default, tslib_1.__assign({}, props)); },
        },
        animated: true,
    };
    return ProgressTracker;
}(react_1.PureComponent));
exports.default = ProgressTracker;
//# sourceMappingURL=index.js.map