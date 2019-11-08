"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var analytics_1 = require("@atlaskit/analytics");
var avatar_1 = tslib_1.__importDefault(require("@atlaskit/avatar"));
var Checkbox_1 = tslib_1.__importDefault(require("@atlaskit/checkbox/Checkbox"));
var item_1 = tslib_1.__importStar(require("@atlaskit/item"));
var React = tslib_1.__importStar(require("react"));
var CrossProductSearchClient_1 = require("../../api/CrossProductSearchClient");
var analytics_event_helper_1 = require("../../util/analytics-event-helper");
var Item = item_1.withItemFocus(item_1.default);
var ConfluenceSpaceFilter = /** @class */ (function (_super) {
    tslib_1.__extends(ConfluenceSpaceFilter, _super);
    function ConfluenceSpaceFilter() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isChecked: false,
        };
        _this.generateFilter = function () {
            var isChecked = _this.state.isChecked;
            var _a = _this.props, spaceAvatar = _a.spaceAvatar, spaceTitle = _a.spaceTitle, spaceKey = _a.spaceKey;
            return isChecked
                ? []
                : [
                    {
                        filter: {
                            '@type': CrossProductSearchClient_1.FilterType.Spaces,
                            spaceKeys: [spaceKey],
                        },
                        metadata: {
                            spaceTitle: spaceTitle,
                            spaceAvatar: spaceAvatar,
                        },
                    },
                ];
        };
        _this.toggleCheckbox = function () {
            var isChecked = _this.state.isChecked;
            var filter = _this.generateFilter();
            _this.props.onFilterChanged(filter);
            _this.setState({
                isChecked: !isChecked,
            });
        };
        _this.handleKeyDown = function (event) {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                _this.toggleCheckbox();
            }
        };
        return _this;
    }
    ConfluenceSpaceFilter.prototype.componentDidMount = function () {
        analytics_event_helper_1.fireSpaceFilterShownEvent(this.props.searchSessionId, this.props.createAnalyticsEvent);
    };
    ConfluenceSpaceFilter.prototype.getIcons = function () {
        var _a = this.props, isDisabled = _a.isDisabled, spaceAvatar = _a.spaceAvatar;
        return (React.createElement(React.Fragment, null,
            React.createElement(Checkbox_1.default, { isChecked: this.state.isChecked, isDisabled: isDisabled }),
            React.createElement(avatar_1.default, { borderColor: "transparent", src: spaceAvatar, appearance: "square", size: "small", isDisabled: isDisabled })));
    };
    ConfluenceSpaceFilter.getDerivedStateFromProps = function (props, state) {
        if (state.isChecked !== props.isFilterOn) {
            return { isChecked: props.isFilterOn };
        }
        return null;
    };
    ConfluenceSpaceFilter.prototype.render = function () {
        var _a = this.props, isDisabled = _a.isDisabled, spaceTitle = _a.spaceTitle;
        return (React.createElement(Item, { onClick: this.toggleCheckbox, onKeyDown: this.handleKeyDown, elemBefore: this.getIcons(), isCompact: true, isDisabled: isDisabled }, spaceTitle));
    };
    return ConfluenceSpaceFilter;
}(React.Component));
exports.ConfluenceSpaceFilter = ConfluenceSpaceFilter;
exports.default = analytics_1.withAnalytics(ConfluenceSpaceFilter, {}, {});
//# sourceMappingURL=SpaceFilter.js.map