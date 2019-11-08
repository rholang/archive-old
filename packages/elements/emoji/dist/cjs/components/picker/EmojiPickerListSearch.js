"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var field_base_1 = tslib_1.__importDefault(require("@atlaskit/field-base"));
var search_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/search"));
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var react_intl_1 = require("react-intl");
var i18n_1 = require("../i18n");
var styles = tslib_1.__importStar(require("./styles"));
var EmojiPickerListSearch = /** @class */ (function (_super) {
    tslib_1.__extends(EmojiPickerListSearch, _super);
    function EmojiPickerListSearch() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onBlur = function () {
            var activeElement = document.activeElement;
            // Input lost focus to emoji picker container (happens in IE11 when updating search results)
            // See FS-2111
            if (activeElement instanceof HTMLElement &&
                activeElement.getAttribute('data-emoji-picker-container')) {
                _this.restoreInputFocus();
            }
        };
        _this.onChange = function (e) {
            _this.saveInputSelection();
            _this.props.onChange(e);
        };
        _this.focusInput = function () {
            if (_this.inputRef) {
                _this.inputRef.focus();
            }
        };
        _this.handleInputRef = function (input) {
            if (input) {
                // Defer focus so it give some time to position the popup before
                // setting the focus to search input.
                // see FS-2056
                _this.inputRef = input;
                window.setTimeout(_this.focusInput);
            }
        };
        return _this;
    }
    EmojiPickerListSearch.prototype.saveInputSelection = function () {
        this.inputSelection = undefined;
        if (this.inputRef) {
            var _a = this.inputRef, selectionStart = _a.selectionStart, selectionEnd = _a.selectionEnd, selectionDirection = _a.selectionDirection;
            if (selectionStart && selectionEnd && selectionDirection) {
                this.inputSelection = {
                    selectionStart: selectionStart,
                    selectionEnd: selectionEnd,
                    selectionDirection: selectionDirection,
                };
            }
        }
    };
    EmojiPickerListSearch.prototype.restoreInputFocus = function () {
        this.focusInput();
        if (this.inputSelection &&
            this.inputRef &&
            this.inputRef.setSelectionRange) {
            var _a = this.inputSelection, selectionStart = _a.selectionStart, selectionEnd = _a.selectionEnd, selectionDirection = _a.selectionDirection;
            this.inputRef.setSelectionRange(selectionStart, selectionEnd, selectionDirection);
        }
    };
    EmojiPickerListSearch.prototype.render = function () {
        var _this = this;
        var _a = this.props, style = _a.style, query = _a.query;
        return (React.createElement("div", { className: styles.pickerSearch, style: style },
            React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, i18n_1.messages.searchLabel), function (searchLabel) { return (React.createElement(field_base_1.default, { appearance: "standard", isCompact: true, isFitContainerWidthEnabled: true },
                React.createElement("span", { className: styles.searchIcon },
                    React.createElement(search_1.default, { label: searchLabel })),
                React.createElement("input", { className: styles.input, autoComplete: "off", disabled: false, name: "search", placeholder: searchLabel + "...", required: false, onChange: _this.onChange, value: query || '', ref: _this.handleInputRef, onBlur: _this.onBlur }))); })));
    };
    EmojiPickerListSearch.defaultProps = {
        style: {},
    };
    return EmojiPickerListSearch;
}(react_1.PureComponent));
exports.default = EmojiPickerListSearch;
//# sourceMappingURL=EmojiPickerListSearch.js.map