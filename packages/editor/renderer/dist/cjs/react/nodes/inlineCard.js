"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var smart_card_1 = require("@atlaskit/smart-card");
var editor_common_1 = require("@atlaskit/editor-common");
var utils_1 = require("../../utils");
var fallback_1 = require("./fallback");
var SmartCardStorage_1 = require("../../ui/SmartCardStorage");
var InlineCard = function (props) {
    var url = props.url, data = props.data, eventHandlers = props.eventHandlers, portal = props.portal;
    var handler = utils_1.getEventHandler(eventHandlers, 'smartCard');
    var onClick = url && handler
        ? function (e) { return handler(e, url); }
        : undefined;
    var cardProps = { url: url, data: data, onClick: onClick, container: portal };
    return (React.createElement("span", { "data-inline-card": true, "data-card-data": data ? JSON.stringify(data) : undefined, "data-card-url": url },
        React.createElement(fallback_1.CardErrorBoundary, tslib_1.__assign({ unsupportedComponent: editor_common_1.UnsupportedInline }, cardProps),
            React.createElement(smart_card_1.Card, tslib_1.__assign({ appearance: "inline" }, cardProps, { onResolve: function (data) {
                    if (!data.url || !data.title) {
                        return;
                    }
                    props.smartCardStorage.set(data.url, data.title);
                } })))));
};
exports.default = SmartCardStorage_1.withSmartCardStorage(InlineCard);
//# sourceMappingURL=inlineCard.js.map