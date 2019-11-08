import { __extends } from "tslib";
import React from 'react';
import Loadable from 'react-loadable';
import { withAnalyticsEvents, withAnalyticsContext, createAndFireEvent, } from '@atlaskit/analytics-next';
import Button from '@atlaskit/button';
import ConfirmIcon from '@atlaskit/icon/glyph/check';
import CancelIcon from '@atlaskit/icon/glyph/cross';
import Form, { Field } from '@atlaskit/form';
import ButtonsWrapper from '../styled/ButtonsWrapper';
import ButtonWrapper from '../styled/ButtonWrapper';
import ReadViewContentWrapper from '../styled/ReadViewContentWrapper';
import ContentWrapper from '../styled/ContentWrapper';
import EditButton from '../styled/EditButton';
import ReadViewWrapper from '../styled/ReadViewWrapper';
import InlineDialogChild from '../styled/InlineDialogChild';
import HiddenButton from '../styled/HiddenButton';
import { name as packageName, version as packageVersion, } from '../version.json';
var DRAG_THRESHOLD = 5;
/** This means that InlineDialog is only loaded if necessary */
// @ts-ignore
var InlineDialog = Loadable({
    loader: function () { return import('@atlaskit/inline-dialog'); },
    loading: function () { return null; },
});
var InlineEditUncontrolled = /** @class */ (function (_super) {
    __extends(InlineEditUncontrolled, _super);
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
            return (React.createElement(ReadViewWrapper, null,
                React.createElement(EditButton, { "aria-label": editButtonLabel, type: "button", onClick: _this.props.onEditRequested, innerRef: function (ref) {
                        _this.editButtonRef = ref;
                    } }),
                React.createElement(ReadViewContentWrapper, { onMouseEnter: function () { return _this.setState({ onReadViewHover: true }); }, onMouseLeave: function () { return _this.setState({ onReadViewHover: false }); }, onClick: _this.onReadViewClick, onMouseDown: function (e) {
                        _this.startX = e.clientX;
                        _this.startY = e.clientY;
                    }, readViewFitContainerWidth: readViewFitContainerWidth }, readView())));
        };
        _this.renderActionButtons = function () {
            var _a = _this.props, confirmButtonLabel = _a.confirmButtonLabel, cancelButtonLabel = _a.cancelButtonLabel;
            return (React.createElement(ButtonsWrapper, null,
                React.createElement(ButtonWrapper, null,
                    React.createElement(Button, { "aria-label": confirmButtonLabel, type: "submit", iconBefore: React.createElement(ConfirmIcon, { label: "Confirm", size: "small" }), shouldFitContainer: true, onMouseDown: function () {
                            /** Prevents focus on edit button only if mouse is used to click button */
                            _this.setState({ preventFocusOnEditButton: true });
                        } })),
                React.createElement(ButtonWrapper, null,
                    React.createElement(Button, { "aria-label": cancelButtonLabel, iconBefore: React.createElement(CancelIcon, { label: "Cancel", size: "small" }), onClick: _this.onCancelClick, onMouseDown: function () {
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
        return (React.createElement(Form, { onSubmit: function (data) {
                // @ts-ignore - HOC passes analytics event
                return _this.props.onConfirm(data.inlineEdit);
            } }, function (_a) {
            var _b = _a.formProps, onKeyDown = _b.onKeyDown, onSubmit = _b.onSubmit, formRef = _b.ref;
            return (React.createElement("form", { onKeyDown: function (e) {
                    onKeyDown(e);
                    if (e.key === 'Esc' || e.key === 'Escape') {
                        _this.props.onCancel();
                    }
                }, onSubmit: onSubmit, ref: formRef }, isEditing ? (React.createElement(Field, { name: "inlineEdit", label: label, defaultValue: defaultValue, validate: validate, isRequired: isRequired, 
                /**
                 * This key is required so that value is reset when edit is
                 * cancelled and defaultValue is ""
                 */
                key: "edit-view" }, function (_a) {
                var fieldProps = _a.fieldProps, error = _a.error;
                return (React.createElement(ContentWrapper, { onBlur: function () {
                        return _this.onWrapperBlur(fieldProps.isInvalid, onSubmit, formRef);
                    }, onFocus: _this.onWrapperFocus },
                    validate && (React.createElement(InlineDialog, { isOpen: fieldProps.isInvalid, content: React.createElement("div", { id: "error-message" }, error), placement: "right" },
                        React.createElement(InlineDialogChild, null))),
                    _this.props.editView(fieldProps),
                    !hideActionButtons ? (_this.renderActionButtons()) : (
                    /** This is to allow Ctrl + Enter to submit without action buttons */
                    React.createElement(HiddenButton, { type: "submit" }))));
            })) : (
            /** Field is used here only for the label */
            React.createElement(Field, { name: "inlineEdit", label: label, defaultValue: "", isRequired: isRequired, 
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
}(React.Component));
var createAndFireEventOnAtlaskit = createAndFireEvent('atlaskit');
export default withAnalyticsContext({
    componentName: 'inlineEdit',
    packageName: packageName,
    packageVersion: packageVersion,
})(withAnalyticsEvents({
    onConfirm: createAndFireEventOnAtlaskit({
        action: 'confirmed',
        actionSubject: 'inlineEdit',
        attributes: {
            componentName: 'inlineEdit',
            packageName: packageName,
            packageVersion: packageVersion,
        },
    }),
})(InlineEditUncontrolled));
//# sourceMappingURL=InlineEditUncontrolled.js.map