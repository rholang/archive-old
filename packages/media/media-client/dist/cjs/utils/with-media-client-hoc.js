"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var media_client_1 = require("../client/media-client");
var mediaClientsMap = new Map();
exports.getMediaClient = function (mediaClientConfig) {
    var mediaClient = mediaClientsMap.get(mediaClientConfig);
    if (!mediaClient) {
        mediaClient = new media_client_1.MediaClient(mediaClientConfig);
        mediaClientsMap.set(mediaClientConfig, mediaClient);
    }
    return mediaClient;
};
exports.withMediaClient = function (Component) {
    return /** @class */ (function (_super) {
        tslib_1.__extends(class_1, _super);
        function class_1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        class_1.prototype.render = function () {
            var props = this.props;
            return (React.createElement(Component, tslib_1.__assign({}, props, { mediaClient: exports.getMediaClient(this.props.mediaClientConfig) })));
        };
        return class_1;
    }(React.Component));
};
//# sourceMappingURL=with-media-client-hoc.js.map