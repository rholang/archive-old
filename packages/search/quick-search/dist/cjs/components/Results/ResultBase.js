"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var constants_1 = require("../constants");
var ResultItem_1 = tslib_1.__importDefault(require("../ResultItem/ResultItem"));
var context_1 = require("../context");
var ResultBase = /** @class */ (function (_super) {
    tslib_1.__extends(ResultBase, _super);
    function ResultBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { isMouseSelected: false };
        _this.handleClick = function (e) {
            var _a = _this.props, onClick = _a.onClick, resultId = _a.resultId, type = _a.type, context = _a.context;
            if (context.sendAnalytics) {
                context.sendAnalytics(constants_1.QS_ANALYTICS_EV_SUBMIT, tslib_1.__assign(tslib_1.__assign({}, _this.getAnalyticsData()), { method: 'click', newTab: e && (e.metaKey || e.shiftKey || e.ctrlKey) }));
            }
            if (onClick) {
                onClick({ resultId: resultId, type: type, event: e });
            }
        };
        _this.handleMouseEnter = function (event) {
            _this.props.context.onMouseEnter({
                resultId: _this.props.resultId,
                type: _this.props.type,
                event: event,
            });
            _this.setState({ isMouseSelected: true });
        };
        _this.handleMouseLeave = function () {
            _this.props.context.onMouseLeave();
            _this.setState({ isMouseSelected: false });
        };
        return _this;
    }
    ResultBase.prototype.registerResult = function () {
        var context = this.props.context;
        context.registerResult(this);
    };
    ResultBase.prototype.componentDidMount = function () {
        this.registerResult();
    };
    ResultBase.prototype.componentDidUpdate = function () {
        this.registerResult();
    };
    ResultBase.prototype.componentWillUnmount = function () {
        var context = this.props.context;
        context.unregisterResult(this);
    };
    ResultBase.prototype.getAnalyticsData = function () {
        var _a = this.props, resultId = _a.resultId, analyticsData = _a.analyticsData, type = _a.type, context = _a.context;
        return tslib_1.__assign({ index: context.getIndex(resultId), type: type,
            resultId: resultId }, (analyticsData instanceof Function ? analyticsData() : analyticsData));
    };
    ResultBase.prototype.render = function () {
        var _this = this;
        var _a = this.props, caption = _a.caption, elemAfter = _a.elemAfter, selectedIcon = _a.selectedIcon, href = _a.href, target = _a.target, icon = _a.icon, isCompact = _a.isCompact, subText = _a.subText, text = _a.text, resultId = _a.resultId, context = _a.context;
        var isMouseSelected = this.state.isMouseSelected;
        return (React.createElement(context_1.SelectedResultIdContext.Consumer, null, function (selectedResultId) { return (React.createElement(ResultItem_1.default, { caption: caption, href: href, target: target, icon: icon, isCompact: isCompact, isSelected: resultId === selectedResultId, onClick: _this.handleClick, onMouseEnter: _this.handleMouseEnter, onMouseLeave: _this.handleMouseLeave, isMouseSelected: isMouseSelected, subText: subText, text: text, textAfter: elemAfter, selectedIcon: selectedIcon, linkComponent: context.linkComponent })); }));
    };
    ResultBase.defaultProps = {
        type: 'base',
        context: {
            registerResult: function (result) { },
            unregisterResult: function (result) { },
            onMouseEnter: function (resultData) { },
            onMouseLeave: function () { },
            // @ts-ignore
            sendAnalytics: function (string, data) { },
            getIndex: function () { return null; },
        },
        analyticsData: {},
    };
    return ResultBase;
}(React.PureComponent));
exports.ResultBase = ResultBase;
exports.default = (function (props) { return (React.createElement(context_1.ResultContext.Consumer, null, function (context) { return React.createElement(ResultBase, tslib_1.__assign({ context: context }, props)); })); });
//# sourceMappingURL=ResultBase.js.map