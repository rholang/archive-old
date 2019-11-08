"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var element_1 = require("@atlaskit/mention/element");
var mention_with_profilecard_1 = tslib_1.__importDefault(require("./mention-with-profilecard"));
var GENERIC_USER_IDS = ['HipChat', 'all', 'here'];
var noop = function () { };
var MentionWithProviders = /** @class */ (function (_super) {
    tslib_1.__extends(MentionWithProviders, _super);
    function MentionWithProviders() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { profilecardProvider: null };
        return _this;
    }
    MentionWithProviders.prototype.UNSAFE_componentWillMount = function () {
        this.updateProfilecardProvider(this.props);
    };
    MentionWithProviders.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        if (nextProps.profilecardProvider !== this.props.profilecardProvider) {
            this.updateProfilecardProvider(nextProps);
        }
    };
    MentionWithProviders.prototype.updateProfilecardProvider = function (props) {
        var _this = this;
        // We are not using async/await here to avoid having an intermediate Promise
        // introduced by the transpiler.
        // This will allow consumer to use a SynchronousPromise.resolve and avoid useless
        // rerendering
        if (props.profilecardProvider) {
            props.profilecardProvider
                .then(function (profilecardProvider) {
                _this.setState({ profilecardProvider: profilecardProvider });
            })
                .catch(function () {
                _this.setState({ profilecardProvider: null });
            });
        }
        else {
            this.setState({ profilecardProvider: null });
        }
    };
    MentionWithProviders.prototype.render = function () {
        var _a = this.props, accessLevel = _a.accessLevel, userType = _a.userType, eventHandlers = _a.eventHandlers, id = _a.id, mentionProvider = _a.mentionProvider, portal = _a.portal, text = _a.text;
        var profilecardProvider = this.state.profilecardProvider;
        var actionHandlers = {};
        ['onClick', 'onMouseEnter', 'onMouseLeave'].forEach(function (handler) {
            actionHandlers[handler] =
                (eventHandlers && eventHandlers[handler]) || noop;
        });
        var MentionComponent = profilecardProvider && GENERIC_USER_IDS.indexOf(id) === -1
            ? mention_with_profilecard_1.default
            : element_1.ResourcedMention;
        return (React.createElement(MentionComponent, tslib_1.__assign({ id: id, text: text, accessLevel: accessLevel, userType: userType, mentionProvider: mentionProvider, profilecardProvider: profilecardProvider, portal: portal }, actionHandlers)));
    };
    return MentionWithProviders;
}(react_1.PureComponent));
exports.default = MentionWithProviders;
//# sourceMappingURL=mention-with-providers.js.map