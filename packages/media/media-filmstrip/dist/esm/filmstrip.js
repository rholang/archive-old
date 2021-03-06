import { __assign, __extends } from "tslib";
import * as React from 'react';
import { Component } from 'react';
import { Card, defaultImageCardDimensions, CardLoading, } from '@atlaskit/media-card';
import { FilmstripView } from './filmstripView';
import { generateIdentifierKey } from './utils/generateIdentifierKey';
var Filmstrip = /** @class */ (function (_super) {
    __extends(Filmstrip, _super);
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
            var key = generateIdentifierKey(item.identifier);
            if (!mediaClientConfig) {
                return (React.createElement(CardLoading, { key: key, dimensions: defaultImageCardDimensions }));
            }
            return (React.createElement(Card, __assign({ key: key, mediaClientConfig: mediaClientConfig, dimensions: defaultImageCardDimensions, useInlinePlayer: false, shouldOpenMediaViewer: shouldOpenMediaViewer, mediaViewerDataSource: mediaViewerDataSource }, item)));
        });
    };
    Filmstrip.prototype.render = function () {
        var _a = this.state, animate = _a.animate, offset = _a.offset;
        return (React.createElement(FilmstripView, { animate: animate, offset: offset, onSize: this.handleSize, onScroll: this.handleScroll }, this.renderCards()));
    };
    return Filmstrip;
}(Component));
export { Filmstrip };
//# sourceMappingURL=filmstrip.js.map