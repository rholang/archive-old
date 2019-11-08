"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var MentionResource_1 = require("../../api/MentionResource");
var types_1 = require("../../types");
var _1 = tslib_1.__importStar(require("./"));
var ResourcedMention = /** @class */ (function (_super) {
    tslib_1.__extends(ResourcedMention, _super);
    function ResourcedMention(props) {
        var _this = _super.call(this, props) || this;
        _this.handleMentionProvider = function (props) {
            var id = props.id, mentionProvider = props.mentionProvider, text = props.text;
            if (mentionProvider) {
                mentionProvider
                    .then(function (provider) {
                    var newState = {
                        isHighlighted: provider.shouldHighlightMention({ id: id }),
                    };
                    if (!text && MentionResource_1.isResolvingMentionProvider(provider)) {
                        var nameDetail = provider.resolveMentionName(id);
                        if (types_1.isPromise(nameDetail)) {
                            nameDetail.then(function (nameDetailResult) {
                                _this.setState({
                                    resolvedMentionName: _this.processName(nameDetailResult),
                                });
                            });
                        }
                        else {
                            newState.resolvedMentionName = _this.processName(nameDetail);
                        }
                    }
                    _this.setState(newState);
                })
                    .catch(function () {
                    _this.setState({
                        isHighlighted: false,
                    });
                });
            }
            else {
                _this.setState({
                    isHighlighted: false,
                });
            }
        };
        _this.state = {
            isHighlighted: false,
        };
        return _this;
    }
    ResourcedMention.prototype.componentDidMount = function () {
        this.handleMentionProvider(this.props);
    };
    ResourcedMention.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        var props = this.props;
        if (props.id !== nextProps.id ||
            props.mentionProvider !== nextProps.mentionProvider) {
            this.handleMentionProvider(nextProps);
        }
    };
    ResourcedMention.prototype.processName = function (name) {
        var mentionName;
        switch (name.status) {
            case types_1.MentionNameStatus.OK:
                mentionName = name.name || '';
                break;
            case types_1.MentionNameStatus.SERVICE_ERROR:
            case types_1.MentionNameStatus.UNKNOWN:
            default:
                mentionName = _1.UNKNOWN_USER_ID;
                break;
        }
        return "@" + mentionName;
    };
    ResourcedMention.prototype.render = function () {
        var _a = this, props = _a.props, state = _a.state;
        return (React.createElement(_1.default, { id: props.id, text: state.resolvedMentionName || props.text, isHighlighted: state.isHighlighted, accessLevel: props.accessLevel, onClick: props.onClick, onMouseEnter: props.onMouseEnter, onMouseLeave: props.onMouseLeave }));
    };
    return ResourcedMention;
}(React.PureComponent));
exports.default = ResourcedMention;
//# sourceMappingURL=ResourcedMention.js.map