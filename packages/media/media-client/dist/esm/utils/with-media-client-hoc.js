import { __assign, __extends } from "tslib";
import * as React from 'react';
import { MediaClient } from '../client/media-client';
var mediaClientsMap = new Map();
export var getMediaClient = function (mediaClientConfig) {
    var mediaClient = mediaClientsMap.get(mediaClientConfig);
    if (!mediaClient) {
        mediaClient = new MediaClient(mediaClientConfig);
        mediaClientsMap.set(mediaClientConfig, mediaClient);
    }
    return mediaClient;
};
export var withMediaClient = function (Component) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        class_1.prototype.render = function () {
            var props = this.props;
            return (React.createElement(Component, __assign({}, props, { mediaClient: getMediaClient(this.props.mediaClientConfig) })));
        };
        return class_1;
    }(React.Component));
};
//# sourceMappingURL=with-media-client-hoc.js.map