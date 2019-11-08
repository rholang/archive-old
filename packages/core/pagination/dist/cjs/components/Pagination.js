"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var analytics_next_1 = require("@atlaskit/analytics-next");
var Page_1 = tslib_1.__importDefault(require("./Page"));
var Navigators_1 = require("./Navigators");
var renderEllipsis_1 = tslib_1.__importDefault(require("./renderEllipsis"));
var collapseRange_1 = tslib_1.__importDefault(require("../util/collapseRange"));
var version_json_1 = require("../version.json");
var Pagination = /** @class */ (function (_super) {
    tslib_1.__extends(Pagination, _super);
    function Pagination() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            selectedIndex: _this.props.defaultSelectedIndex || 0,
        };
        _this.createAndFireEventOnAtlaskit = analytics_next_1.createAndFireEvent('atlaskit');
        _this.onChangeAnalyticsCaller = function () {
            var createAnalyticsEvent = _this.props.createAnalyticsEvent;
            if (createAnalyticsEvent) {
                return _this.createAndFireEventOnAtlaskit({
                    action: 'changed',
                    actionSubject: 'pageNumber',
                    attributes: {
                        componentName: 'pagination',
                        packageName: version_json_1.name,
                        packageVersion: version_json_1.version,
                    },
                })(createAnalyticsEvent);
            }
            return undefined;
        };
        _this.onChange = function (event, newSelectedPage) {
            if (_this.props.selectedIndex === undefined) {
                _this.setState({
                    selectedIndex: newSelectedPage,
                });
            }
            var analyticsEvent = _this.onChangeAnalyticsCaller();
            if (_this.props.onChange) {
                _this.props.onChange(event, _this.props.pages[newSelectedPage], analyticsEvent);
            }
        };
        _this.pagesToComponents = function (pages) {
            var selectedIndex = _this.state.selectedIndex;
            var _a = _this.props, components = _a.components, getPageLabel = _a.getPageLabel;
            return pages.map(function (page, index) {
                return (react_1.default.createElement(Page_1.default, { key: "page-" + (getPageLabel ? getPageLabel(page, index) : index), component: components.Page, onClick: function (event) { return _this.onChange(event, index); }, isSelected: selectedIndex === index, page: page }, getPageLabel ? getPageLabel(page, index) : page));
            });
        };
        _this.renderPages = function () {
            var selectedIndex = _this.state.selectedIndex;
            var _a = _this.props, pages = _a.pages, max = _a.max, collapseRange = _a.collapseRange, renderEllipsis = _a.renderEllipsis;
            var pagesComponents = _this.pagesToComponents(pages);
            // @ts-ignore
            return collapseRange(pagesComponents, selectedIndex, {
                max: max,
                ellipsis: renderEllipsis,
            });
        };
        _this.renderLeftNavigator = function () {
            var _a = _this.props, components = _a.components, pages = _a.pages, i18n = _a.i18n;
            var selectedIndex = _this.state.selectedIndex;
            var props = {
                'aria-label': i18n.prev,
                pages: pages,
            };
            return (react_1.default.createElement(Navigators_1.LeftNavigator, tslib_1.__assign({ key: "left-navigator", component: components.Previous, onClick: function (event) { return _this.onChange(event, selectedIndex - 1); }, isDisabled: selectedIndex === 0 }, props)));
        };
        _this.renderRightNavigator = function () {
            var _a = _this.props, components = _a.components, pages = _a.pages, i18n = _a.i18n;
            var selectedIndex = _this.state.selectedIndex;
            var props = {
                'aria-label': i18n.next,
                pages: pages,
            };
            return (react_1.default.createElement(Navigators_1.RightNavigator, tslib_1.__assign({ key: "right-navigator", component: components.Next, onClick: function (event) { return _this.onChange(event, selectedIndex + 1); }, isDisabled: selectedIndex === pages.length - 1 }, props)));
        };
        return _this;
    }
    Pagination.getDerivedStateFromProps = function (props) {
        // selectedIndex is controlled
        if (props.selectedIndex != null) {
            return {
                selectedIndex: props.selectedIndex,
            };
        }
        return null;
    };
    Pagination.prototype.render = function () {
        var innerStyles = this.props.innerStyles;
        return (react_1.default.createElement("div", { style: tslib_1.__assign({ display: 'flex' }, innerStyles) },
            react_1.default.createElement(react_1.Fragment, null,
                this.renderLeftNavigator(),
                this.renderPages(),
                this.renderRightNavigator())));
    };
    Pagination.defaultProps = {
        collapseRange: collapseRange_1.default,
        components: {},
        defaultSelectedIndex: 0,
        i18n: {
            prev: 'previous',
            next: 'next',
        },
        innerStyles: {},
        max: 7,
        onChange: function () { },
        renderEllipsis: renderEllipsis_1.default,
    };
    return Pagination;
}(react_1.Component));
exports.default = analytics_next_1.withAnalyticsContext({
    componentName: 'pagination',
    packageName: version_json_1.name,
    packageVersion: version_json_1.version,
})(analytics_next_1.withAnalyticsEvents()(Pagination));
//# sourceMappingURL=Pagination.js.map