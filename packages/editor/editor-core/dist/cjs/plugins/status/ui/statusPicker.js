"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var editor_common_1 = require("@atlaskit/editor-common");
var theme_1 = require("@atlaskit/theme");
var picker_1 = require("@atlaskit/status/picker");
var styles_1 = require("../../../ui/styles");
var with_outer_listeners_1 = tslib_1.__importDefault(require("../../../ui/with-outer-listeners"));
var actions_1 = require("../actions");
var analytics_next_1 = require("@atlaskit/analytics-next");
var analytics_1 = require("../analytics");
var PopupWithListeners = with_outer_listeners_1.default(editor_common_1.Popup);
var InputMethod;
(function (InputMethod) {
    InputMethod["blur"] = "blur";
    InputMethod["escKey"] = "escKey";
    InputMethod["enterKey"] = "enterKey";
})(InputMethod = exports.InputMethod || (exports.InputMethod = {}));
var PickerContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  background: ", ";\n  padding: ", "px 0;\n  border-radius: ", "px;\n  ", ";\n"], ["\n  background: ", ";\n  padding: ", "px 0;\n  border-radius: ", "px;\n  ", ";\n"])), theme_1.colors.N0, theme_1.gridSize(), theme_1.borderRadius(), styles_1.dropShadow);
var StatusPickerWithoutAnalytcs = /** @class */ (function (_super) {
    tslib_1.__extends(StatusPickerWithoutAnalytcs, _super);
    function StatusPickerWithoutAnalytcs(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClickOutside = function (event) {
            event.preventDefault();
            _this.inputMethod = InputMethod.blur;
            _this.props.closeStatusPicker();
        };
        _this.handleEscapeKeydown = function (event) {
            event.preventDefault();
            _this.inputMethod = InputMethod.escKey;
            _this.props.onEnter(_this.state);
        };
        _this.onColorHover = function (color) {
            _this.createStatusAnalyticsAndFireFunc({
                action: 'hovered',
                actionSubject: 'statusColorPicker',
                attributes: {
                    color: color,
                    localId: _this.state.localId,
                    state: analytics_1.analyticsState(_this.props.isNew),
                },
            });
        };
        _this.onColorClick = function (color) {
            var _a = _this.state, text = _a.text, localId = _a.localId;
            _this.setState({ color: color });
            _this.props.onSelect({
                text: text,
                color: color,
                localId: localId,
            });
            _this.createStatusAnalyticsAndFireFunc({
                action: 'clicked',
                actionSubject: 'statusColorPicker',
                attributes: {
                    color: color,
                    localId: localId,
                    state: analytics_1.analyticsState(_this.props.isNew),
                },
            });
        };
        _this.onTextChanged = function (text) {
            var _a = _this.state, color = _a.color, localId = _a.localId;
            _this.setState({ text: text });
            _this.props.onTextChanged({
                text: text,
                color: color,
                localId: localId,
            }, !!_this.props.isNew);
        };
        _this.onEnter = function () {
            _this.inputMethod = InputMethod.enterKey;
            _this.props.onEnter(_this.state);
        };
        // cancel bubbling to fix clickOutside logic:
        // popup re-renders its content before the click event bubbles up to the document
        // therefore click target element would be different from the popup content
        _this.handlePopupClick = function (event) {
            return event.nativeEvent.stopImmediatePropagation();
        };
        _this.state = _this.extractStateFromProps(props);
        _this.createStatusAnalyticsAndFireFunc = analytics_1.createStatusAnalyticsAndFire(props.createAnalyticsEvent);
        return _this;
    }
    StatusPickerWithoutAnalytcs.prototype.fireStatusPopupOpenedAnalytics = function (state) {
        var color = state.color, text = state.text, localId = state.localId, isNew = state.isNew;
        this.startTime = Date.now();
        this.createStatusAnalyticsAndFireFunc({
            action: 'opened',
            actionSubject: 'statusPopup',
            attributes: {
                textLength: text ? text.length : 0,
                selectedColor: color,
                localId: localId,
                state: analytics_1.analyticsState(isNew),
            },
        });
    };
    StatusPickerWithoutAnalytcs.prototype.fireStatusPopupClosedAnalytics = function (state) {
        var color = state.color, text = state.text, localId = state.localId, isNew = state.isNew;
        this.createStatusAnalyticsAndFireFunc({
            action: 'closed',
            actionSubject: 'statusPopup',
            attributes: {
                inputMethod: this.inputMethod,
                duration: Date.now() - this.startTime,
                textLength: text ? text.length : 0,
                selectedColor: color,
                localId: localId,
                state: analytics_1.analyticsState(isNew),
            },
        });
    };
    StatusPickerWithoutAnalytcs.prototype.reset = function () {
        this.startTime = Date.now();
        this.inputMethod = InputMethod.blur;
    };
    StatusPickerWithoutAnalytcs.prototype.componentDidMount = function () {
        this.reset();
        this.fireStatusPopupOpenedAnalytics(this.state);
    };
    StatusPickerWithoutAnalytcs.prototype.componentWillUnmount = function () {
        this.fireStatusPopupClosedAnalytics(this.state);
        this.startTime = 0;
    };
    StatusPickerWithoutAnalytcs.prototype.componentDidUpdate = function (prevProps, prevState, _snapshot) {
        var element = this.props.target;
        if (prevProps.target !== element) {
            var newState = this.extractStateFromProps(this.props);
            this.setState(newState);
            this.fireStatusPopupClosedAnalytics(prevState);
            this.reset();
            this.fireStatusPopupOpenedAnalytics(newState);
        }
    };
    StatusPickerWithoutAnalytcs.prototype.extractStateFromProps = function (props) {
        var defaultColor = props.defaultColor, defaultText = props.defaultText, defaultLocalId = props.defaultLocalId, isNew = props.isNew;
        return {
            color: defaultColor || actions_1.DEFAULT_STATUS.color,
            text: defaultText || actions_1.DEFAULT_STATUS.text,
            localId: defaultLocalId,
            isNew: isNew,
        };
    };
    StatusPickerWithoutAnalytcs.prototype.render = function () {
        var _a = this.props, isNew = _a.isNew, target = _a.target;
        var _b = this.state, color = _b.color, text = _b.text;
        return (target && (React.createElement(PopupWithListeners, { target: target, offset: [0, 8], handleClickOutside: this.handleClickOutside, handleEscapeKeydown: this.handleEscapeKeydown, zIndex: editor_common_1.akEditorFloatingDialogZIndex, fitHeight: 40 },
            React.createElement(PickerContainer, { onClick: this.handlePopupClick },
                React.createElement(picker_1.StatusPicker, { autoFocus: isNew, selectedColor: color, text: text, onColorClick: this.onColorClick, onColorHover: this.onColorHover, onTextChanged: this.onTextChanged, onEnter: this.onEnter })))));
    };
    return StatusPickerWithoutAnalytcs;
}(React.Component));
exports.StatusPickerWithoutAnalytcs = StatusPickerWithoutAnalytcs;
exports.default = analytics_next_1.withAnalyticsEvents()(StatusPickerWithoutAnalytcs);
var templateObject_1;
//# sourceMappingURL=statusPicker.js.map