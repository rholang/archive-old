"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var media_card_1 = require("@atlaskit/media-card");
var filmstripView_1 = require("./filmstripView");
var generateIdentifierKey_1 = require("./utils/generateIdentifierKey");
var Filmstrip = /** @class */ (function (_super) {
    tslib_1.__extends(Filmstrip, _super);
    function Filmstrip() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            animate: false,
            offset: 0,
        };
        _this.handleSize = function (_a) {
            var offset = _a.offset;
            return _this.setState({ offset: offset });
        };
        _this.handleScroll = function (_a) {
            var animate = _a.animate, offset = _a.offset;
            return _this.setState({ animate: animate, offset: offset });
        };
        return _this;
    }
    Filmstrip.prototype.renderCards = function () {
        var _a = this.props, items = _a.items, mediaClientConfig = _a.mediaClientConfig, shouldOpenMediaViewer = _a.shouldOpenMediaViewer;
        var mediaViewerDataSource = shouldOpenMediaViewer
            ? { list: items.map(function (item) { return item.identifier; }) }
            : undefined;
        return items.map(function (item) {
            var key = generateIdentifierKey_1.generateIdentifierKey(item.identifier);
            if (!mediaClientConfig) {
                return (React.createElement(media_card_1.CardLoading, { key: key, dimensions: media_card_1.defaultImageCardDimensions }));
            }
            return (React.createElement(media_card_1.Card, tslib_1.__assign({ key: key, mediaClientConfig: mediaClientConfig, dimensions: media_card_1.defaultImageCardDimensions, useInlinePlayer: false, shouldOpenMediaViewer: shouldOpenMediaViewer, mediaViewerDataSource: mediaViewerDataSource }, item)));
        });
    };
    Filmstrip.prototype.render = function () {
        var _a = this.state, animate = _a.animate, offset = _a.offset;
        return (React.createElement(filmstripView_1.FilmstripView, { animate: animate, offset: offset, onSize: this.handleSize, onScroll: this.handleScroll }, this.renderCards()));
    };
    return Filmstrip;
}(react_1.Component));
exports.Filmstrip = Filmstrip;
//# sourceMappingURL=filmstrip.js.map