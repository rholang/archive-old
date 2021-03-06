import { __awaiter, __extends, __generator, __makeTemplateObject } from "tslib";
import * as React from 'react';
import CrossCircleIcon from '@atlaskit/icon/glyph/cross-circle';
import EditorAlignLeftIcon from '@atlaskit/icon/glyph/editor/align-left';
import LinkIcon from '@atlaskit/icon/glyph/link';
import { colors } from '@atlaskit/theme';
import Tooltip from '@atlaskit/tooltip';
import { PureComponent } from 'react';
import { defineMessages, injectIntl } from 'react-intl';
import styled from 'styled-components';
import { analyticsService } from '../../../../analytics';
import { linkToolbarMessages as linkToolbarCommonMessages } from '../../../../messages';
import PanelTextInput from '../../../../ui/PanelTextInput';
import RecentList from '../../../../ui/RecentSearch/RecentList';
import { Container, InputWrapper, UrlInputWrapper, } from '../../../../ui/RecentSearch/ToolbarComponents';
import { INPUT_METHOD } from '../../../analytics';
import { normalizeUrl } from '../../utils';
var ClearText = styled.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  cursor: pointer;\n  padding-right: 8px;\n  color: ", ";\n"], ["\n  cursor: pointer;\n  padding-right: 8px;\n  color: ", ";\n"])), colors.N80);
var TextInputWrapper = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n  border-top: 1px solid ", ";\n"], ["\n  ", "\n  border-top: 1px solid ", ";\n"])), InputWrapper, colors.N30);
var IconWrapper = styled.span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  padding: 10px;\n  color: ", ";\n  padding: 4px 8px;\n  width: 18px;\n"], ["\n  padding: 10px;\n  color: ", ";\n  padding: 4px 8px;\n  width: 18px;\n"])), colors.N80);
export var messages = defineMessages({
    displayText: {
        id: 'fabric.editor.displayText',
        defaultMessage: 'Text to display',
        description: 'Text to display',
    },
    clearText: {
        id: 'fabric.editor.clearLinkText',
        defaultMessage: 'Clear text',
        description: 'Clears text on the link toolbar',
    },
    clearLink: {
        id: 'fabric.editor.clearLink',
        defaultMessage: 'Clear link',
        description: 'Clears link in the link toolbar',
    },
});
var LinkAddToolbar = /** @class */ (function (_super) {
    __extends(LinkAddToolbar, _super);
    function LinkAddToolbar(props) {
        var _this = _super.call(this, props) || this;
        /* To not fire on-blur on tab-press */
        _this.isTabPressed = false;
        /* To prevent firing blur callback on submit */
        _this.submitted = false;
        _this.urlInputContainer = null;
        _this.displayTextInputContainer = null;
        _this.updateInput = function (input) { return __awaiter(_this, void 0, void 0, function () {
            var _a, _b, _c, _d, _e, _f;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        this.setState({ text: input });
                        if (!this.state.provider) return [3 /*break*/, 4];
                        if (!(input.length === 0)) return [3 /*break*/, 2];
                        _a = this.setState;
                        _b = {};
                        _c = limit;
                        return [4 /*yield*/, this.state.provider.getRecentItems()];
                    case 1:
                        _a.apply(this, [(_b.items = _c.apply(void 0, [_g.sent()]),
                                _b.selectedIndex = -1,
                                _b)]);
                        return [3 /*break*/, 4];
                    case 2:
                        _d = this.setState;
                        _e = {};
                        _f = limit;
                        return [4 /*yield*/, this.state.provider.searchRecent(input)];
                    case 3:
                        _d.apply(this, [(_e.items = _f.apply(void 0, [_g.sent()]),
                                _e.selectedIndex = 0,
                                _e)]);
                        _g.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        _this.createClearHandler = function (field) {
            return function () {
                var _a;
                _this.setState((_a = {},
                    _a[field] = '',
                    _a));
                switch (field) {
                    case 'text': {
                        if (_this.urlInputContainer) {
                            _this.urlInputContainer.focus();
                        }
                        break;
                    }
                    case 'displayText': {
                        if (_this.displayTextInputContainer) {
                            _this.displayTextInputContainer.focus();
                        }
                    }
                }
            };
        };
        _this.handleSelected = function (href, text) {
            _this.setState({
                displayText: text,
            }, function () {
                if (_this.props.onSubmit) {
                    _this.props.onSubmit(href, _this.state.displayText || text, INPUT_METHOD.TYPEAHEAD);
                    _this.trackAutoCompleteAnalyticsEvent('atlassian.editor.format.hyperlink.autocomplete.click');
                }
            });
        };
        _this.handleMouseMove = function (objectId) {
            var items = _this.state.items;
            if (items) {
                var index = findIndex(items, function (item) { return item.objectId === objectId; });
                _this.setState({
                    selectedIndex: index,
                });
            }
        };
        _this.handleSubmit = function () {
            var _a = _this.state, items = _a.items, text = _a.text, selectedIndex = _a.selectedIndex;
            // add the link selected in the dropdown if there is one, otherwise submit the value of the input field
            if (items && items.length > 0 && selectedIndex > -1) {
                var item = items[selectedIndex];
                var url = normalizeUrl(item.url);
                if (_this.props.onSubmit) {
                    _this.props.onSubmit(url, _this.state.displayText || item.name, INPUT_METHOD.TYPEAHEAD);
                    _this.trackAutoCompleteAnalyticsEvent('atlassian.editor.format.hyperlink.autocomplete.keyboard');
                }
            }
            else if (text && text.length > 0) {
                var url = normalizeUrl(text);
                if (_this.props.onSubmit && url) {
                    _this.submitted = true;
                    _this.props.onSubmit(url, _this.state.displayText || text, INPUT_METHOD.MANUAL);
                    _this.trackAutoCompleteAnalyticsEvent('atlassian.editor.format.hyperlink.autocomplete.notselected');
                }
            }
        };
        _this.handleKeyDown = function (e) {
            var _a = _this.state, items = _a.items, selectedIndex = _a.selectedIndex;
            _this.submitted = false;
            _this.isTabPressed = e.keyCode === 9;
            if (!items || !items.length) {
                return;
            }
            if (e.keyCode === 40) {
                // down
                e.preventDefault();
                _this.setState({
                    selectedIndex: (selectedIndex + 1) % items.length,
                });
            }
            else if (e.keyCode === 38) {
                // up
                e.preventDefault();
                _this.setState({
                    selectedIndex: selectedIndex > 0 ? selectedIndex - 1 : items.length - 1,
                });
            }
        };
        _this.handleTextKeyDown = function (displayText) {
            _this.setState({
                displayText: displayText,
            });
        };
        _this.handleBlur = function (type) {
            var url = normalizeUrl(_this.state.text);
            if (_this.props.onBlur && !_this.submitted && url) {
                _this.props.onBlur(type, url, _this.state.displayText || _this.state.text, _this.isTabPressed);
            }
        };
        _this.state = {
            selectedIndex: -1,
            isLoading: false,
            text: props.displayUrl || '',
            displayText: props.displayText || '',
            items: [],
        };
        /* Cache functions */
        _this.urlBlur = _this.handleBlur.bind(_this, 'url');
        _this.textBlur = _this.handleBlur.bind(_this, 'text');
        _this.handleClearText = _this.createClearHandler('text');
        _this.handleClearDisplayText = _this.createClearHandler('displayText');
        return _this;
    }
    LinkAddToolbar.prototype.resolveProvider = function () {
        return __awaiter(this, void 0, void 0, function () {
            var provider;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.props.provider];
                    case 1:
                        provider = _a.sent();
                        this.setState({ provider: provider });
                        return [2 /*return*/, provider];
                }
            });
        });
    };
    LinkAddToolbar.prototype.componentDidMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var activityProvider;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.props.provider) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.resolveProvider()];
                    case 1:
                        activityProvider = _a.sent();
                        this.loadRecentItems(activityProvider);
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    LinkAddToolbar.prototype.loadRecentItems = function (activityProvider) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, , 3, 4]);
                        if (!!this.state.text) return [3 /*break*/, 2];
                        _a = this.setState;
                        _b = {
                            isLoading: true
                        };
                        _c = limit;
                        return [4 /*yield*/, activityProvider.getRecentItems()];
                    case 1:
                        _a.apply(this, [(_b.items = _c.apply(void 0, [_d.sent()]),
                                _b)]);
                        _d.label = 2;
                    case 2: return [3 /*break*/, 4];
                    case 3:
                        this.setState({ isLoading: false });
                        return [7 /*endfinally*/];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    LinkAddToolbar.prototype.render = function () {
        var _this = this;
        var _a = this.state, items = _a.items, isLoading = _a.isLoading, selectedIndex = _a.selectedIndex, text = _a.text, displayText = _a.displayText;
        var _b = this.props, formatMessage = _b.intl.formatMessage, provider = _b.provider;
        var placeholder = formatMessage(provider
            ? linkToolbarCommonMessages.placeholder
            : linkToolbarCommonMessages.linkPlaceholder);
        var formatLinkAddressText = formatMessage(linkToolbarCommonMessages.linkAddress);
        var formatClearLinkText = formatMessage(messages.clearLink);
        var formatDisplayText = formatMessage(messages.displayText);
        return (React.createElement("div", { className: "recent-list" },
            React.createElement(Container, { provider: !!provider },
                React.createElement(UrlInputWrapper, null,
                    React.createElement(IconWrapper, null,
                        React.createElement(Tooltip, { content: formatLinkAddressText },
                            React.createElement(LinkIcon, { label: formatLinkAddressText }))),
                    React.createElement(PanelTextInput, { ref: function (ele) { return (_this.urlInputContainer = ele); }, placeholder: placeholder, onSubmit: this.handleSubmit, onChange: this.updateInput, autoFocus: true, onCancel: this.urlBlur, onBlur: this.urlBlur, defaultValue: text, onKeyDown: this.handleKeyDown }),
                    text && (React.createElement(Tooltip, { content: formatClearLinkText },
                        React.createElement(ClearText, { onClick: this.handleClearText },
                            React.createElement(CrossCircleIcon, { label: formatClearLinkText }))))),
                React.createElement(RecentList, { items: items, isLoading: isLoading, selectedIndex: selectedIndex, onSelect: this.handleSelected, onMouseMove: this.handleMouseMove }),
                React.createElement(TextInputWrapper, null,
                    React.createElement(IconWrapper, null,
                        React.createElement(Tooltip, { content: formatDisplayText },
                            React.createElement(EditorAlignLeftIcon, { label: formatDisplayText }))),
                    React.createElement(PanelTextInput, { ref: function (ele) { return (_this.displayTextInputContainer = ele); }, placeholder: formatDisplayText, onChange: this.handleTextKeyDown, onCancel: this.textBlur, onBlur: this.textBlur, defaultValue: displayText, onSubmit: this.handleSubmit }),
                    displayText && (React.createElement(Tooltip, { content: formatMessage(messages.clearText) },
                        React.createElement(ClearText, { onClick: this.handleClearDisplayText },
                            React.createElement(CrossCircleIcon, { label: formatMessage(messages.clearText) }))))))));
    };
    LinkAddToolbar.prototype.trackAutoCompleteAnalyticsEvent = function (name) {
        var numChars = this.state.text ? this.state.text.length : 0;
        analyticsService.trackEvent(name, { numChars: numChars });
    };
    return LinkAddToolbar;
}(PureComponent));
var findIndex = function (array, predicate) {
    var index = -1;
    array.some(function (item, i) {
        if (predicate(item)) {
            index = i;
            return true;
        }
        return false;
    });
    return index;
};
var limit = function (items) {
    return items.slice(0, 5);
};
export default injectIntl(LinkAddToolbar);
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=HyperlinkAddToolbar.js.map