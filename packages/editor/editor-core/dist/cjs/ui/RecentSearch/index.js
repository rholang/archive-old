"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var RecentList_1 = tslib_1.__importDefault(require("./RecentList"));
var react_intl_1 = require("react-intl");
var withActivityProvider_1 = tslib_1.__importDefault(require("./withActivityProvider"));
var analytics_1 = require("../../plugins/analytics");
var DEFAULT_ITEMS_LIMIT = 5;
var limit = function (items, max) {
    return items.slice(0, max);
};
var RecentLink = /** @class */ (function (_super) {
    tslib_1.__extends(RecentLink, _super);
    function RecentLink(props) {
        var _this = _super.call(this, props) || this;
        _this.activityProvider = null;
        _this.handleSubmit = function () {
            var _a = _this.state, items = _a.items, url = _a.url, selectedIndex = _a.selectedIndex;
            var inputMethod = _this.getCurrentInputMethod();
            if (!inputMethod) {
                return; // No call submit, if there is nothing to submit
            }
            switch (inputMethod) {
                case analytics_1.INPUT_METHOD.MANUAL: {
                    _this.props.onSubmit({
                        url: url,
                        text: url,
                        inputMethod: analytics_1.INPUT_METHOD.MANUAL,
                    });
                    break;
                }
                case analytics_1.INPUT_METHOD.TYPEAHEAD: {
                    var item_1 = items[selectedIndex];
                    _this.setState(function () { return ({
                        url: item_1.url,
                    }); });
                    if (_this.props.onSubmit) {
                        _this.props.onSubmit({
                            url: item_1.url,
                            text: item_1.name,
                            inputMethod: analytics_1.INPUT_METHOD.TYPEAHEAD,
                        });
                    }
                    break;
                }
            }
        };
        _this.handleSelected = function (href, text) {
            if (_this.props.onSubmit) {
                _this.setState(function () { return ({
                    url: href,
                }); });
                _this.props.onSubmit({
                    text: text,
                    url: href,
                    inputMethod: analytics_1.INPUT_METHOD.TYPEAHEAD,
                });
            }
        };
        _this.handleChange = function (input) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var _a, _b, _c, _d, _e, _f;
            return tslib_1.__generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        this.setState({ url: input });
                        if (!this.activityProvider) return [3 /*break*/, 4];
                        if (!(input.length === 0)) return [3 /*break*/, 2];
                        _a = this.setState;
                        _b = {};
                        _c = limit;
                        return [4 /*yield*/, this.activityProvider.getRecentItems()];
                    case 1:
                        _a.apply(this, [(_b.items = _c.apply(void 0, [_g.sent(),
                                this.props.limit]),
                                _b.selectedIndex = -1,
                                _b)]);
                        return [3 /*break*/, 4];
                    case 2:
                        _d = this.setState;
                        _e = {};
                        _f = limit;
                        return [4 /*yield*/, this.activityProvider.searchRecent(input)];
                    case 3:
                        _d.apply(this, [(_e.items = _f.apply(void 0, [_g.sent(),
                                this.props.limit]),
                                _e.selectedIndex = 0,
                                _e)]);
                        _g.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        _this.handleKeyDown = function (e) {
            var _a = _this.state, items = _a.items, selectedIndex = _a.selectedIndex;
            if (!items || !items.length) {
                return;
            }
            if (e.key === 'ArrowDown') {
                // down
                e.preventDefault();
                _this.setState({
                    selectedIndex: (selectedIndex + 1) % items.length,
                });
            }
            else if (e.key === 'ArrowUp') {
                // up
                e.preventDefault();
                _this.setState({
                    selectedIndex: selectedIndex > 0 ? selectedIndex - 1 : items.length - 1,
                });
            }
        };
        _this.handleMouseMove = function (objectId) {
            var items = _this.state.items;
            if (items) {
                var index = items.findIndex(function (item) { return item.objectId === objectId; });
                _this.setState({
                    selectedIndex: index,
                });
            }
        };
        _this.renderRecentList = function () {
            var _a = _this.state, items = _a.items, isLoading = _a.isLoading, selectedIndex = _a.selectedIndex;
            return (React.createElement(RecentList_1.default, { items: items, isLoading: isLoading, selectedIndex: selectedIndex, onSelect: _this.handleSelected, onMouseMove: _this.handleMouseMove }));
        };
        _this.clearValue = function () {
            _this.setState({
                url: '',
            });
        };
        _this.state = {
            selectedIndex: -1,
            isLoading: false,
            items: [],
            url: props.defaultUrl || '',
        };
        return _this;
    }
    RecentLink.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        if (this.props.defaultUrl !== nextProps.defaultUrl) {
            this.setState(function (state) {
                if (state.url !== nextProps.defaultUrl) {
                    return {
                        items: [],
                        selectedIndex: -1,
                        url: nextProps.defaultUrl || '',
                    };
                }
                return null;
            });
        }
    };
    RecentLink.prototype.componentDidMount = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.props.activityProvider) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.props.activityProvider];
                    case 1:
                        _a.activityProvider = _b.sent();
                        this.loadRecentItems(this.activityProvider);
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    RecentLink.prototype.loadRecentItems = function (activityProvider) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            return tslib_1.__generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, , 3, 4]);
                        if (!!this.state.url) return [3 /*break*/, 2];
                        _a = this.setState;
                        _b = {
                            isLoading: true
                        };
                        _c = limit;
                        return [4 /*yield*/, activityProvider.getRecentItems()];
                    case 1:
                        _a.apply(this, [(_b.items = _c.apply(void 0, [_d.sent(),
                                this.props.limit]),
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
    RecentLink.prototype.getCurrentInputMethod = function () {
        var _a = this.state, items = _a.items, url = _a.url, selectedIndex = _a.selectedIndex;
        if (items && items.length > 0 && selectedIndex > -1) {
            return analytics_1.INPUT_METHOD.TYPEAHEAD;
        }
        else if (url && url.length > 0) {
            return analytics_1.INPUT_METHOD.MANUAL;
        }
        return;
    };
    RecentLink.prototype.render = function () {
        var render = this.props.render;
        var url = this.state.url;
        return render({
            activityProvider: this.activityProvider,
            inputProps: {
                onChange: this.handleChange,
                onKeyDown: this.handleKeyDown,
                onSubmit: this.handleSubmit,
                value: url,
            },
            clearValue: this.clearValue,
            currentInputMethod: this.getCurrentInputMethod(),
            renderRecentList: this.renderRecentList,
        });
    };
    RecentLink.defaultProps = {
        limit: DEFAULT_ITEMS_LIMIT,
    };
    return RecentLink;
}(React.Component));
exports.default = withActivityProvider_1.default(react_intl_1.injectIntl(RecentLink));
//# sourceMappingURL=index.js.map