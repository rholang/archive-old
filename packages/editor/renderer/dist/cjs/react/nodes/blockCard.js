"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var smart_card_1 = require("@atlaskit/smart-card");
var editor_common_1 = require("@atlaskit/editor-common");
var utils_1 = require("../../utils");
var fallback_1 = require("./fallback");
function BlockCard(props) {
    var url = props.url, data = props.data, eventHandlers = props.eventHandlers, portal = props.portal;
    var handler = utils_1.getEventHandler(eventHandlers, 'smartCard');
    var onClick = url && handler
        ? function (e) { return handler(e, url); }
        : undefined;
    var cardProps = { url: url, data: data, onClick: onClick, container: portal };
    return (React.createElement("div", { "data-block-card": true, "data-card-data": data ? JSON.stringify(data) : undefined, "data-card-url": url },
        React.createElement(fallback_1.CardErrorBoundary, tslib_1.__assign({ unsupportedComponent: editor_common_1.UnsupportedBlock }, cardProps),
            React.createElement(smart_card_1.Card, tslib_1.__assign({ appearance: "block" }, cardProps)))));
}
exports.default = BlockCard;
//# sourceMappingURL=blockCard.js.map