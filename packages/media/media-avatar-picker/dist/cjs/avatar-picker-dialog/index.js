"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var modal_dialog_1 = tslib_1.__importStar(require("@atlaskit/modal-dialog"));
var button_1 = tslib_1.__importDefault(require("@atlaskit/button"));
var react_intl_1 = require("react-intl");
var media_ui_1 = require("@atlaskit/media-ui");
var image_navigator_1 = tslib_1.__importDefault(require("../image-navigator"));
var predefined_avatar_list_1 = require("../predefined-avatar-list");
var styled_1 = require("./styled");
var predefined_avatar_view_1 = require("../predefined-avatar-view");
var layout_const_1 = require("./layout-const");
var layout_const_2 = require("./layout-const");
var types_1 = require("./types");
exports.MAX_SIZE_MB = 10;
exports.ERROR = {
    URL: media_ui_1.messages.image_url_invalid_error,
    FORMAT: media_ui_1.messages.image_format_invalid_error,
    SIZE: media_ui_1.messages.image_size_too_large_error,
};
exports.ACCEPT = ['image/gif', 'image/jpeg', 'image/png'];
exports.fixedCrop = {
    x: 0,
    y: 0,
    size: layout_const_2.CONTAINER_INNER_SIZE,
};
var AvatarPickerDialog = /** @class */ (function (_super) {
    tslib_1.__extends(AvatarPickerDialog, _super);
    function AvatarPickerDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            mode: types_1.Mode.Cropping,
            selectedAvatar: _this.props.defaultSelectedAvatar,
            selectedImageSource: _this.props.errorMessage
                ? undefined
                : _this.props.imageSource,
            selectedImage: undefined,
            errorMessage: _this.props.errorMessage,
        };
        _this.setSelectedImageState = function (selectedImage) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var dataURI, e_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.setState({ selectedImage: selectedImage });
                        return [4 /*yield*/, media_ui_1.fileToDataURI(selectedImage)];
                    case 1:
                        dataURI = _a.sent();
                        this.setState({ selectedImageSource: dataURI });
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        _this.setSelectedAvatarState = function (avatar) {
            _this.setState({
                selectedAvatar: avatar,
            });
        };
        _this.onImageNavigatorLoad = function (loadParams) {
            _this.exportCroppedImage = loadParams.export;
        };
        /**
         * Initialised with no-op function.  Is assigned cropped image exporting
         * function when internal ImageCropper mounts via this.onImageNavigatorLoad
         */
        _this.exportCroppedImage = function () { return ''; };
        _this.onSaveClick = function () {
            var _a = _this.props, onImagePicked = _a.onImagePicked, onImagePickedDataURI = _a.onImagePickedDataURI, onAvatarPicked = _a.onAvatarPicked;
            var _b = _this.state, selectedImage = _b.selectedImage, selectedAvatar = _b.selectedAvatar;
            if (selectedImage) {
                var exportedCroppedImageURI = _this.exportCroppedImage();
                if (onImagePicked) {
                    onImagePicked(media_ui_1.dataURItoFile(exportedCroppedImageURI), exports.fixedCrop);
                }
                if (onImagePickedDataURI) {
                    onImagePickedDataURI(exportedCroppedImageURI);
                }
            }
            else if (selectedAvatar) {
                onAvatarPicked(selectedAvatar);
            }
        };
        _this.onShowMore = function () {
            _this.setState({ mode: types_1.Mode.PredefinedAvatars });
        };
        _this.onGoBack = function () {
            _this.clearErrorState();
        };
        _this.onRemoveImage = function () {
            _this.setState({
                selectedImageSource: undefined,
                selectedImage: undefined,
                mode: types_1.Mode.Cropping,
            });
        };
        _this.clearErrorState = function () {
            _this.setState({
                mode: types_1.Mode.Cropping,
                errorMessage: undefined,
            });
        };
        _this.setErrorState = function (errorMessage) {
            _this.setState({
                mode: types_1.Mode.Cropping,
                errorMessage: errorMessage,
            });
        };
        _this.onImageUploaded = function () {
            _this.clearErrorState();
        };
        _this.onImageError = function (errorMessage) {
            _this.setErrorState(errorMessage);
        };
        _this.headerContent = function () {
            var title = _this.props.title;
            return (React.createElement(styled_1.ModalHeader, null, title || React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, media_ui_1.messages.upload_an_avatar))));
        };
        _this.footerContent = function () {
            var _a = _this.props, primaryButtonText = _a.primaryButtonText, onCancel = _a.onCancel;
            var _b = _this, onSaveClick = _b.onSaveClick, isDisabled = _b.isDisabled;
            return (React.createElement(modal_dialog_1.ModalFooter, null,
                React.createElement(styled_1.ModalFooterButtons, null,
                    React.createElement(button_1.default, { appearance: "primary", onClick: onSaveClick, isDisabled: isDisabled }, primaryButtonText || React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, media_ui_1.messages.save))),
                    React.createElement(button_1.default, { appearance: "default", onClick: onCancel },
                        React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, media_ui_1.messages.cancel))))));
        };
        return _this;
    }
    AvatarPickerDialog.prototype.render = function () {
        var content = (React.createElement(modal_dialog_1.default, { height: layout_const_2.AVATAR_DIALOG_HEIGHT + "px", width: layout_const_2.AVATAR_DIALOG_WIDTH + "px", components: {
                Header: this.headerContent,
                Footer: this.footerContent,
            }, onClose: this.props.onCancel },
            React.createElement(styled_1.AvatarPickerViewWrapper, null, this.renderBody())));
        return this.context.intl ? (content) : (React.createElement(react_intl_1.IntlProvider, { locale: "en" }, content));
    };
    Object.defineProperty(AvatarPickerDialog.prototype, "isDisabled", {
        get: function () {
            var _a = this.state, selectedImage = _a.selectedImage, selectedAvatar = _a.selectedAvatar;
            var _b = this.props, imageSource = _b.imageSource, isLoading = _b.isLoading;
            return isLoading || !(imageSource || selectedImage || selectedAvatar);
        },
        enumerable: true,
        configurable: true
    });
    AvatarPickerDialog.prototype.getPredefinedAvatars = function () {
        var avatars = this.props.avatars;
        var selectedAvatar = this.state.selectedAvatar;
        var avatarsSubset = avatars.slice(0, layout_const_1.DEFAULT_VISIBLE_PREDEFINED_AVATARS);
        if (selectedAvatar &&
            avatars.indexOf(selectedAvatar) >= layout_const_1.DEFAULT_VISIBLE_PREDEFINED_AVATARS) {
            avatarsSubset[avatarsSubset.length - 1] = selectedAvatar;
        }
        return avatarsSubset;
    };
    AvatarPickerDialog.prototype.renderPredefinedAvatarList = function () {
        var isLoading = this.props.isLoading;
        var _a = this.state, selectedAvatar = _a.selectedAvatar, selectedImage = _a.selectedImage, selectedImageSource = _a.selectedImageSource;
        var avatars = this.getPredefinedAvatars();
        if (isLoading ||
            selectedImage ||
            selectedImageSource ||
            avatars.length === 0) {
            return null;
        }
        return (React.createElement(predefined_avatar_list_1.PredefinedAvatarList, { selectedAvatar: selectedAvatar, avatars: avatars, onAvatarSelected: this.setSelectedAvatarState, onShowMore: this.onShowMore }));
    };
    AvatarPickerDialog.prototype.renderBody = function () {
        var _a = this.props, avatars = _a.avatars, isLoading = _a.isLoading, predefinedAvatarsText = _a.predefinedAvatarsText;
        var _b = this.state, mode = _b.mode, selectedImageSource = _b.selectedImageSource, selectedAvatar = _b.selectedAvatar, errorMessage = _b.errorMessage;
        switch (mode) {
            case types_1.Mode.Cropping:
                return (React.createElement(styled_1.CroppingWrapper, null,
                    React.createElement(image_navigator_1.default, { imageSource: selectedImageSource, errorMessage: errorMessage, onImageLoaded: this.setSelectedImageState, onLoad: this.onImageNavigatorLoad, onRemoveImage: this.onRemoveImage, onImageUploaded: this.onImageUploaded, onImageError: this.onImageError, isLoading: isLoading }),
                    this.renderPredefinedAvatarList()));
            case types_1.Mode.PredefinedAvatars:
                return (React.createElement("div", null,
                    React.createElement(predefined_avatar_view_1.PredefinedAvatarView, { avatars: avatars, onAvatarSelected: this.setSelectedAvatarState, onGoBack: this.onGoBack, selectedAvatar: selectedAvatar, predefinedAvatarsText: predefinedAvatarsText })));
        }
    };
    AvatarPickerDialog.defaultProps = {
        avatars: [],
    };
    AvatarPickerDialog.contextTypes = {
        intl: react_intl_1.intlShape,
    };
    return AvatarPickerDialog;
}(react_1.PureComponent));
exports.AvatarPickerDialog = AvatarPickerDialog;
//# sourceMappingURL=index.js.map