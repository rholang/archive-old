import { __extends } from "tslib";
import { withAnalytics } from '@atlaskit/analytics';
import Avatar from '@atlaskit/avatar';
import Checkbox from '@atlaskit/checkbox/Checkbox';
import baseItem, { withItemFocus } from '@atlaskit/item';
import * as React from 'react';
import { FilterType, } from '../../api/CrossProductSearchClient';
import { fireSpaceFilterShownEvent } from '../../util/analytics-event-helper';
var Item = withItemFocus(baseItem);
var ConfluenceSpaceFilter = /** @class */ (function (_super) {
    __extends(ConfluenceSpaceFilter, _super);
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
                            '@type': FilterType.Spaces,
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
        fireSpaceFilterShownEvent(this.props.searchSessionId, this.props.createAnalyticsEvent);
    };
    ConfluenceSpaceFilter.prototype.getIcons = function () {
        var _a = this.props, isDisabled = _a.isDisabled, spaceAvatar = _a.spaceAvatar;
        return (React.createElement(React.Fragment, null,
            React.createElement(Checkbox, { isChecked: this.state.isChecked, isDisabled: isDisabled }),
            React.createElement(Avatar, { borderColor: "transparent", src: spaceAvatar, appearance: "square", size: "small", isDisabled: isDisabled })));
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
export { ConfluenceSpaceFilter };
export default withAnalytics(ConfluenceSpaceFilter, {}, {});
//# sourceMappingURL=SpaceFilter.js.map