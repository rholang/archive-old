import { __assign } from "tslib";
import * as React from 'react';
import { Card } from '@atlaskit/smart-card';
import { UnsupportedInline } from '@atlaskit/editor-common';
import { getEventHandler } from '../../utils';
import { CardErrorBoundary } from './fallback';
import { withSmartCardStorage, } from '../../ui/SmartCardStorage';
var InlineCard = function (props) {
    var url = props.url, data = props.data, eventHandlers = props.eventHandlers, portal = props.portal;
    var handler = getEventHandler(eventHandlers, 'smartCard');
    var onClick = url && handler
        ? function (e) { return handler(e, url); }
        : undefined;
    var cardProps = { url: url, data: data, onClick: onClick, container: portal };
    return (React.createElement("span", { "data-inline-card": true, "data-card-data": data ? JSON.stringify(data) : undefined, "data-card-url": url },
        React.createElement(CardErrorBoundary, __assign({ unsupportedComponent: UnsupportedInline }, cardProps),
            React.createElement(Card, __assign({ appearance: "inline" }, cardProps, { onResolve: function (data) {
                    if (!data.url || !data.title) {
                        return;
                    }
                    props.smartCardStorage.set(data.url, data.title);
                } })))));
};
export default withSmartCardStorage(InlineCard);
//# sourceMappingURL=inlineCard.js.map