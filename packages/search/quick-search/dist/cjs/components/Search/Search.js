"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var spinner_1 = tslib_1.__importDefault(require("@atlaskit/spinner"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var styled_1 = require("./styled");
exports.controlKeys = [
    'ArrowUp',
    'ArrowDown',
    'Enter',
    'Tab',
    'ArrowRight',
];
var SpinnerParent = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  height: 20px;\n  margin-left: 10px;\n  margin-top: 10px;\n"], ["\n  height: 20px;\n  margin-left: 10px;\n  margin-top: 10px;\n"])));
var Search = /** @class */ (function (_super) {
    tslib_1.__extends(Search, _super);
    function Search() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onInputKeyDown = function (event) {
            var onKeyDown = _this.props.onKeyDown;
            if (!exports.controlKeys.includes(event.key)) {
                return;
            }
            if (onKeyDown) {
                onKeyDown(event);
            }
            event.stopPropagation();
        };
        _this.setInputRef = function (ref) {
            _this.inputRef = ref;
        };
        _this.renderInputControls = function () {
            return _this.props.inputControls ? (React.createElement(styled_1.SearchInputControlsContainer, null, _this.props.inputControls)) : null;
        };
        return _this;
    }
    Search.prototype.render = function () {
        var _a = this.props, children = _a.children, onBlur = _a.onBlur, onInput = _a.onInput, placeholder = _a.placeholder, isLoading = _a.isLoading, value = _a.value, autocomplete = _a.autocompleteText;
        return (React.createElement(styled_1.SearchInner, null,
            React.createElement(styled_1.SearchBox, null,
                React.createElement(styled_1.SearchFieldBaseOuter, null,
                    React.createElement(styled_1.SearchFieldBaseInner, null,
                        autocomplete && (React.createElement(styled_1.SearchInputTypeAhead, { spellCheck: false, type: "text", value: "" + autocomplete, readOnly: true, tabIndex: -1 })),
                        React.createElement(styled_1.SearchInput, { autoFocus: true, innerRef: this.setInputRef, onBlur: onBlur, onInput: onInput, placeholder: placeholder, spellCheck: false, type: "text", value: value, onChange: function () { }, onKeyDown: this.onInputKeyDown }),
                        isLoading && (React.createElement(SpinnerParent, null,
                            React.createElement(spinner_1.default, { size: "small" }))))),
                this.renderInputControls()),
            children));
    };
    Search.defaultProps = {
        isLoading: false,
        onBlur: function () { },
        placeholder: 'AlgoliaSearch',
    };
    return Search;
}(React.PureComponent));
exports.default = Search;
var templateObject_1;
//# sourceMappingURL=Search.js.map