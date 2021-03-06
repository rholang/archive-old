import { __extends, __makeTemplateObject } from "tslib";
import * as React from 'react';
import Spinner from '@atlaskit/spinner';
import styled from 'styled-components';
import { SearchBox, SearchFieldBaseInner, SearchInner, SearchInput, SearchFieldBaseOuter, SearchInputControlsContainer, SearchInputTypeAhead, } from './styled';
export var controlKeys = [
    'ArrowUp',
    'ArrowDown',
    'Enter',
    'Tab',
    'ArrowRight',
];
var SpinnerParent = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 20px;\n  margin-left: 10px;\n  margin-top: 10px;\n"], ["\n  height: 20px;\n  margin-left: 10px;\n  margin-top: 10px;\n"])));
var Search = /** @class */ (function (_super) {
    __extends(Search, _super);
    function Search() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onInputKeyDown = function (event) {
            var onKeyDown = _this.props.onKeyDown;
            if (!controlKeys.includes(event.key)) {
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
            return _this.props.inputControls ? (React.createElement(SearchInputControlsContainer, null, _this.props.inputControls)) : null;
        };
        return _this;
    }
    Search.prototype.render = function () {
        var _a = this.props, children = _a.children, onBlur = _a.onBlur, onInput = _a.onInput, placeholder = _a.placeholder, isLoading = _a.isLoading, value = _a.value, autocomplete = _a.autocompleteText;
        return (React.createElement(SearchInner, null,
            React.createElement(SearchBox, null,
                React.createElement(SearchFieldBaseOuter, null,
                    React.createElement(SearchFieldBaseInner, null,
                        autocomplete && (React.createElement(SearchInputTypeAhead, { spellCheck: false, type: "text", value: "" + autocomplete, readOnly: true, tabIndex: -1 })),
                        React.createElement(SearchInput, { autoFocus: true, innerRef: this.setInputRef, onBlur: onBlur, onInput: onInput, placeholder: placeholder, spellCheck: false, type: "text", value: value, onChange: function () { }, onKeyDown: this.onInputKeyDown }),
                        isLoading && (React.createElement(SpinnerParent, null,
                            React.createElement(Spinner, { size: "small" }))))),
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
export default Search;
var templateObject_1;
//# sourceMappingURL=Search.js.map