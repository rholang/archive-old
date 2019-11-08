"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_loadable_1 = tslib_1.__importDefault(require("react-loadable"));
var analytics_next_1 = require("@atlaskit/analytics-next");
var button_1 = tslib_1.__importDefault(require("@atlaskit/button"));
var check_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/check"));
var cross_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/cross"));
var form_1 = tslib_1.__importStar(require("@atlaskit/form"));
var ButtonsWrapper_1 = tslib_1.__importDefault(require("../styled/ButtonsWrapper"));
var ButtonWrapper_1 = tslib_1.__importDefault(require("../styled/ButtonWrapper"));
var ReadViewContentWrapper_1 = tslib_1.__importDefault(require("../styled/ReadViewContentWrapper"));
var ContentWrapper_1 = tslib_1.__importDefault(require("../styled/ContentWrapper"));
var EditButton_1 = tslib_1.__importDefault(require("../styled/EditButton"));
var ReadViewWrapper_1 = tslib_1.__importDefault(require("../styled/ReadViewWrapper"));
var InlineDialogChild_1 = tslib_1.__importDefault(require("../styled/InlineDialogChild"));
var HiddenButton_1 = tslib_1.__importDefault(require("../styled/HiddenButton"));
var version_json_1 = require("../version.json");
var DRAG_THRESHOLD = 5;
/** This means that InlineDialog is only loaded if necessary */
// @ts-ignore
var InlineDialog = react_loadable_1.default({
    loader: function () { return Promise.resolve().then(function () { return tslib_1.__importStar(require('@atlaskit/inline-dialog')); }); },
    loading: function () { return null; },
});
var InlineEditUncontrolled = /** @class */ (function (_super) {
    tslib_1.__extends(InlineEditUncontrolled, _super);
    function InlineEditUncontrolled() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.startX = 0;
        _this.startY = 0;
        _this.state = {
            onReadViewHover: false,
            wasFocusReceivedSinceLastBlur: false,
            preventFocusOnEditButton: false,
        };
        _this.onCancelClick = function (event) {
            event.preventDefault();
            _this.props.onCancel();
        };
        _this.onReadViewClick = function (event) {
            var element = event.target;
            /** If a link is clicked in the read view, default action should be taken */
            if (element.tagName.toLowerCase() !== 'a' && !_this.mouseHasMoved(event)) {
                event.preventDefault();
                _this.props.onEditRequested();
                _this.setState({ preventFocusOnEditButton: true });
            }
        };
        _this.mouseHasMoved = function (event) {
            return (Math.abs(_this.startX - event.clientX) >= DRAG_THRESHOLD ||
                Math.abs(_this.startY - event.clientY) >= DRAG_THRESHOLD);
        };
        /** Unless keepEditViewOpenOnBlur prop is true, will call confirmIfUnfocused() which
         *  confirms the value, unless the focus is transferred to the buttons
         */
        _this.onWrapperBlur = function (isInvalid, onSubmit, formRef) {
            if (!_this.props.keepEditViewOpenOnBlur) {
                _this.setState({ wasFocusReceivedSinceLastBlur: false });
                /**
                 * This ensures that clicking on one of the action buttons will call
                 * onWrapperFocus before confirmIfUnfocused is called
                 */
                _this.confirmationTimeoutId = window.setTimeout(function () {
                    return _this.confirmIfUnfocused(isInvalid, onSubmit, formRef);
                });
            }
        };
        /** Gets called when focus is transferred to the editView, or action buttons */
        _this.onWrapperFocus = function () {
            _this.setState({ wasFocusReceivedSinceLastBlur: true });
        };
        _this.confirmIfUnfocused = function (isInvalid, onSubmit, formRef) {
            if (!isInvalid &&
                !_this.state.wasFocusReceivedSinceLastBlur &&
                formRef.current) {
                _this.setState({ preventFocusOnEditButton: true });
                if (formRef.current.checkValidity()) {
                    onSubmit({});
                }
            }
        };
        _this.renderReadView = function () {
            var _a = _this.props, editButtonLabel = _a.editButtonLabel, readView = _a.readView, readViewFitContainerWidth = _a.readViewFitContainerWidth;
            return (react_1.default.createElement(ReadViewWrapper_1.default, null,
                react_1.default.createElement(EditButton_1.default, { "aria-label": editButtonLabel, type: "button", onClick: _this.props.onEditRequested, innerRef: function (ref) {
                        _this.editButtonRef = ref;
                    } }),
                react_1.default.createElement(ReadViewContentWrapper_1.default, { onMouseEnter: function () { return _this.setState({ onReadViewHover: true }); }, onMouseLeave: function () { return _this.setState({ onReadViewHover: false }); }, onClick: _this.onReadViewClick, onMouseDown: function (e) {
                        _this.startX = e.clientX;
                        _this.startY = e.clientY;
                    }, readViewFitContainerWidth: readViewFitContainerWidth }, readView())));
        };
        _this.renderActionButtons = function () {
            var _a = _this.props, confirmButtonLabel = _a.confirmButtonLabel, cancelButtonLabel = _a.cancelButtonLabel;
            return (react_1.default.createElement(ButtonsWrapper_1.default, null,
                react_1.default.createElement(ButtonWrapper_1.default, null,
                    react_1.default.createElement(button_1.default, { "aria-label": confirmButtonLabel, type: "submit", iconBefore: react_1.default.createElement(check_1.default, { label: "Confirm", size: "small" }), shouldFitContainer: true, onMouseDown: function () {
                            /** Prevents focus on edit button only if mouse is used to click button */
                            _this.setState({ preventFocusOnEditButton: true });
                        } })),
                react_1.default.createElement(ButtonWrapper_1.default, null,
                    react_1.default.createElement(button_1.default, { "aria-label": cancelButtonLabel, iconBefore: react_1.default.createElement(cross_1.default, { label: "Cancel", size: "small" }), onClick: _this.onCancelClick, onMouseDown: function () {
                            /** Prevents focus on edit button only if mouse is used to click button */
                            _this.setState({ preventFocusOnEditButton: true });
                        }, shouldFitContainer: true }))));
        };
        return _this;
    }
    InlineEditUncontrolled.prototype.componentDidUpdate = function (prevProps) {
        /**
         * This logic puts the focus on the edit button after confirming using
         * the confirm button or using the keyboard to confirm, but not when
         * it is confirmed by wrapper blur
         */
        if (prevProps.isEditing && !this.props.isEditing) {
            if (this.state.preventFocusOnEditButton) {
                this.setState({ preventFocusOnEditButton: false });
            }
            else if (this.editButtonRef) {
                this.editButtonRef.focus();
            }
        }
    };
    InlineEditUncontrolled.prototype.componentWillUnmount = function () {
        window.clearTimeout(this.confirmationTimeoutId);
    };
    InlineEditUncontrolled.prototype.render = function () {
        var _this = this;
        var _a = this.props, defaultValue = _a.defaultValue, hideActionButtons = _a.hideActionButtons, isEditing = _a.isEditing, isRequired = _a.isRequired, label = _a.label, validate = _a.validate;
        return (react_1.default.createElement(form_1.default, { onSubmit: function (data) {
                // @ts-ignore - HOC passes analytics event
                return _this.props.onConfirm(data.inlineEdit);
            } }, function (_a) {
            var _b = _a.formProps, onKeyDown = _b.onKeyDown, onSubmit = _b.onSubmit, formRef = _b.ref;
            return (react_1.default.createElement("form", { onKeyDown: function (e) {
                    onKeyDown(e);
                    if (e.key === 'Esc' || e.key === 'Escape') {
                        _this.props.onCancel();
                    }
                }, onSubmit: onSubmit, ref: formRef }, isEditing ? (react_1.default.createElement(form_1.Field, { name: "inlineEdit", label: label, defaultValue: defaultValue, validate: validate, isRequired: isRequired, 
                /**
                 * This key is required so that value is reset when edit is
                 * cancelled and defaultValue is ""
                 */
                key: "edit-view" }, function (_a) {
                var fieldProps = _a.fieldProps, error = _a.error;
                return (react_1.default.createElement(ContentWrapper_1.default, { onBlur: function () {
                        return _this.onWrapperBlur(fieldProps.isInvalid, onSubmit, formRef);
                    }, onFocus: _this.onWrapperFocus },
                    validate && (react_1.default.createElement(InlineDialog, { isOpen: fieldProps.isInvalid, content: react_1.default.createElement("div", { id: "error-message" }, error), placement: "right" },
                        react_1.default.createElement(InlineDialogChild_1.default, null))),
                    _this.props.editView(fieldProps),
                    !hideActionButtons ? (_this.renderActionButtons()) : (
                    /** This is to allow Ctrl + Enter to submit without action buttons */
                    react_1.default.createElement(HiddenButton_1.default, { type: "submit" }))));
            })) : (
            /** Field is used here only for the label */
            react_1.default.createElement(form_1.Field, { name: "inlineEdit", label: label, defaultValue: "", isRequired: isRequired, 
                /**
                 * This key is required so that value is reset when edit is
                 * cancelled and defaultValue is ""
                 */
                key: "read-view" }, function () { return _this.renderReadView(); }))));
        }));
    };
    InlineEditUncontrolled.defaultProps = {
        keepEditViewOpenOnBlur: false,
        hideActionButtons: false,
        isRequired: false,
        readViewFitContainerWidth: false,
        editButtonLabel: 'Edit',
        confirmButtonLabel: 'Confirm',
        cancelButtonLabel: 'Cancel',
    };
    return InlineEditUncontrolled;
}(react_1.default.Component));
var createAndFireEventOnAtlaskit = analytics_next_1.createAndFireEvent('atlaskit');
exports.default = analytics_next_1.withAnalyticsContext({
    componentName: 'inlineEdit',
    packageName: version_json_1.name,
    packageVersion: version_json_1.version,
})(analytics_next_1.withAnalyticsEvents({
    onConfirm: createAndFireEventOnAtlaskit({
        action: 'confirmed',
        actionSubject: 'inlineEdit',
        attributes: {
            componentName: 'inlineEdit',
            packageName: version_json_1.name,
            packageVersion: version_json_1.version,
        },
    }),
})(InlineEditUncontrolled));
//# sourceMappingURL=InlineEditUncontrolled.js.map