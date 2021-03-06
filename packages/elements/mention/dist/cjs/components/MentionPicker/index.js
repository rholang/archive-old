"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var analytics_next_1 = require("@atlaskit/analytics-next");
var React = tslib_1.__importStar(require("react"));
var UtilAnalytics = tslib_1.__importStar(require("../../util/analytics"));
var id_1 = tslib_1.__importDefault(require("../../util/id"));
var logger_1 = tslib_1.__importDefault(require("../../util/logger"));
var Popup_1 = tslib_1.__importDefault(require("../Popup"));
var ResourcedMentionList_1 = tslib_1.__importDefault(require("../ResourcedMentionList"));
var styles_1 = require("./styles");
/**
 * @class MentionPicker
 */
var MentionPicker = /** @class */ (function (_super) {
    tslib_1.__extends(MentionPicker, _super);
    function MentionPicker(props) {
        var _this = _super.call(this, props) || this;
        _this.selectNext = function () {
            if (_this.mentionListRef) {
                _this.mentionListRef.selectNext();
            }
        };
        _this.selectPrevious = function () {
            if (_this.mentionListRef) {
                _this.mentionListRef.selectPrevious();
            }
        };
        _this.selectIndex = function (index, callback) {
            if (_this.mentionListRef) {
                _this.mentionListRef.selectIndex(index, callback);
            }
        };
        _this.selectId = function (id, callback) {
            if (_this.mentionListRef) {
                _this.mentionListRef.selectId(id, callback);
            }
        };
        _this.chooseCurrentSelection = function () {
            if (_this.mentionListRef) {
                _this.mentionListRef.chooseCurrentSelection();
            }
        };
        _this.mentionsCount = function () {
            if (_this.mentionListRef) {
                return _this.mentionListRef.mentionsCount();
            }
            return 0;
        };
        /**
         * Called after the 'visible' state is changed to decide whether the onOpen or onClose
         * handlers should be called.
         *
         * It should be noted that the visible state of the component is not considered in
         * this function. Instead the old state and new state should be passed as parameters.
         */
        _this.onFilterVisibilityChange = function (oldVisibility, newVisibility) {
            if (oldVisibility !== newVisibility) {
                if (newVisibility) {
                    if (_this.props.onOpen) {
                        _this.props.onOpen();
                    }
                }
                else {
                    if (_this.props.onClose) {
                        _this.props.onClose();
                    }
                }
            }
        };
        // internal, used for callbacks
        _this.filterChange = function (mentions, query, stats) {
            logger_1.default('ak-mention-picker.filterChange', mentions.length);
            var wasVisible = _this.state.visible;
            var visible = mentions.length > 0;
            _this.setState({
                visible: visible,
            });
            _this.onFilterVisibilityChange(wasVisible, visible);
            UtilAnalytics.fireAnalyticsMentionTypeaheadEvent(_this.props)('rendered', stats && stats.duration, mentions.map(function (mention) { return mention.id; }), query);
        };
        _this.filterError = function (error) {
            logger_1.default('ak-mention-picker.filterError', error);
            var wasVisible = _this.state.visible;
            _this.setState({
                visible: true,
                info: undefined,
            });
            _this.onFilterVisibilityChange(wasVisible, true);
        };
        _this.filterInfo = function (info) {
            logger_1.default('ak-mention-picker.filterInfo', info);
            _this.setState({
                info: info,
            });
        };
        _this.handleMentionListRef = function (ref) {
            _this.mentionListRef = ref;
        };
        _this.subscriberKey = id_1.default('ak-mention-picker');
        _this.state = {
            visible: false,
        };
        _this.applyPropChanges({}, props);
        return _this;
    }
    MentionPicker.prototype.componentDidMount = function () {
        this.subscribeResourceProvider(this.props.resourceProvider);
    };
    MentionPicker.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        this.applyPropChanges(this.props, nextProps);
    };
    MentionPicker.prototype.componentWillUnmount = function () {
        this.unsubscribeResourceProvider(this.props.resourceProvider);
    };
    // Internal
    MentionPicker.prototype.applyPropChanges = function (prevProps, nextProps) {
        var oldResourceProvider = prevProps.resourceProvider;
        var newResourceProvider = nextProps.resourceProvider;
        var resourceProviderChanged = oldResourceProvider !== newResourceProvider;
        // resource provider
        if (resourceProviderChanged) {
            this.unsubscribeResourceProvider(oldResourceProvider);
            this.subscribeResourceProvider(newResourceProvider);
        }
    };
    MentionPicker.prototype.subscribeResourceProvider = function (resourceProvider) {
        if (resourceProvider) {
            resourceProvider.subscribe(this.subscriberKey, this.filterChange, this.filterError, this.filterInfo);
        }
    };
    MentionPicker.prototype.unsubscribeResourceProvider = function (resourceProvider) {
        if (resourceProvider) {
            resourceProvider.unsubscribe(this.subscriberKey);
        }
    };
    MentionPicker.prototype.render = function () {
        var _a = this.props, createTeamPath = _a.createTeamPath, resourceProvider = _a.resourceProvider, presenceProvider = _a.presenceProvider, onSelection = _a.onSelection, query = _a.query, target = _a.target, position = _a.position, zIndex = _a.zIndex, offsetX = _a.offsetX, offsetY = _a.offsetY, showTeamMentionsHighlight = _a.showTeamMentionsHighlight;
        var _b = this.state, visible = _b.visible, info = _b.info;
        var resourceMentionList = (React.createElement(ResourcedMentionList_1.default, { resourceProvider: resourceProvider, presenceProvider: presenceProvider, onSelection: onSelection, query: query, ref: this.handleMentionListRef, isTeamMentionHighlightEnabled: !!showTeamMentionsHighlight, createTeamPath: createTeamPath }));
        var infoContent = info && !visible ? (React.createElement(styles_1.MentionPickerInfoStyle, null,
            React.createElement("p", null, info))) : null;
        var content;
        if (position) {
            logger_1.default('target, position', target, position);
            if (target) {
                content = (React.createElement(Popup_1.default, { target: target, relativePosition: position, zIndex: zIndex, offsetX: offsetX, offsetY: offsetY },
                    React.createElement("div", null,
                        resourceMentionList,
                        infoContent)));
            }
            else {
                // don't show if we have a position, but no target yet
                content = null;
            }
        }
        else {
            content = (React.createElement("div", null,
                resourceMentionList,
                infoContent));
        }
        return (
        /* old classnames are essential for Confluence tests */
        React.createElement(styles_1.MentionPickerStyle, { className: "ak-mention-picker", visible: visible || info }, content));
    };
    MentionPicker.defaultProps = {
        onSelection: function () { },
        onOpen: function () { },
        onClose: function () { },
    };
    return MentionPicker;
}(React.PureComponent));
exports.MentionPicker = MentionPicker;
exports.MentionPickerWithAnalytics = analytics_next_1.withAnalyticsEvents({})(MentionPicker);
exports.default = exports.MentionPickerWithAnalytics;
//# sourceMappingURL=index.js.map