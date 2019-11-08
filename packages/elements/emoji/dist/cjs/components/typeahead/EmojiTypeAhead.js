"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var logger_1 = tslib_1.__importDefault(require("../../util/logger"));
var LoadingEmojiComponent_1 = tslib_1.__importDefault(require("../common/LoadingEmojiComponent"));
var Popup_1 = tslib_1.__importDefault(require("../common/Popup"));
var emojiTypeAheadModuleLoader = function () {
    return Promise.resolve().then(function () { return tslib_1.__importStar(require(/* webpackChunkName:"@atlaskit-internal_emojiTypeAheadComponent" */ './EmojiTypeAheadComponent')); });
};
var emojiTypeAheadComponentLoader = function () { return emojiTypeAheadModuleLoader().then(function (module) { return module.default; }); };
var EmojiTypeahead = /** @class */ (function (_super) {
    tslib_1.__extends(EmojiTypeahead, _super);
    function EmojiTypeahead(props) {
        var _this = _super.call(this, props, {}) || this;
        _this.state = {
            asyncLoadedComponent: EmojiTypeahead.AsyncLoadedComponent,
        };
        _this.selectNext = function () {
            if (_this.refs.typeAhead) {
                _this.refs.typeAhead.selectNext();
            }
        };
        _this.selectPrevious = function () {
            if (_this.refs.typeAhead) {
                _this.refs.typeAhead.selectPrevious();
            }
        };
        _this.chooseCurrentSelection = function () {
            if (_this.refs.typeAhead) {
                _this.refs.typeAhead.chooseCurrentSelection();
            }
        };
        _this.count = function () {
            if (_this.refs.typeAhead) {
                return _this.refs.typeAhead.count();
            }
            return 0;
        };
        return _this;
    }
    EmojiTypeahead.prototype.asyncLoadComponent = function () {
        var _this = this;
        emojiTypeAheadComponentLoader().then(function (component) {
            EmojiTypeahead.AsyncLoadedComponent = component;
            _this.setAsyncState(component);
        });
    };
    EmojiTypeahead.prototype.renderLoaded = function (loadedEmojiProvider, EmojiTypeAheadComponent) {
        var _a = this.props, emojiProvider = _a.emojiProvider, target = _a.target, position = _a.position, zIndex = _a.zIndex, offsetX = _a.offsetX, offsetY = _a.offsetY, otherProps = tslib_1.__rest(_a, ["emojiProvider", "target", "position", "zIndex", "offsetX", "offsetY"]);
        var typeAhead = (React.createElement(EmojiTypeAheadComponent, tslib_1.__assign({}, otherProps, { emojiProvider: loadedEmojiProvider, ref: "typeAhead" })));
        if (position) {
            logger_1.default('target, position', target, position);
            if (target) {
                return (React.createElement(Popup_1.default, { target: target, relativePosition: position, zIndex: zIndex, offsetX: offsetX, offsetY: offsetY, children: typeAhead }));
            }
            // don't show if we have a position, but no target yet
            return null;
        }
        return typeAhead;
    };
    return EmojiTypeahead;
}(LoadingEmojiComponent_1.default));
exports.default = EmojiTypeahead;
//# sourceMappingURL=EmojiTypeAhead.js.map