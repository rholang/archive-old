import { __extends } from "tslib";
import * as React from 'react';
import { isResolvingMentionProvider, } from '../../api/MentionResource';
import { isPromise, MentionNameStatus, } from '../../types';
import Mention, { UNKNOWN_USER_ID } from './';
var ResourcedMention = /** @class */ (function (_super) {
    __extends(ResourcedMention, _super);
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
                    if (!text && isResolvingMentionProvider(provider)) {
                        var nameDetail = provider.resolveMentionName(id);
                        if (isPromise(nameDetail)) {
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
            case MentionNameStatus.OK:
                mentionName = name.name || '';
                break;
            case MentionNameStatus.SERVICE_ERROR:
            case MentionNameStatus.UNKNOWN:
            default:
                mentionName = UNKNOWN_USER_ID;
                break;
        }
        return "@" + mentionName;
    };
    ResourcedMention.prototype.render = function () {
        var _a = this, props = _a.props, state = _a.state;
        return (React.createElement(Mention, { id: props.id, text: state.resolvedMentionName || props.text, isHighlighted: state.isHighlighted, accessLevel: props.accessLevel, onClick: props.onClick, onMouseEnter: props.onMouseEnter, onMouseLeave: props.onMouseLeave }));
    };
    return ResourcedMention;
}(React.PureComponent));
export default ResourcedMention;
//# sourceMappingURL=ResourcedMention.js.map