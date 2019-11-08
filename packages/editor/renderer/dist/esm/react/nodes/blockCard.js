import { __assign } from "tslib";
import * as React from 'react';
import { Card } from '@atlaskit/smart-card';
import { UnsupportedBlock } from '@atlaskit/editor-common';
import { getEventHandler } from '../../utils';
import { CardErrorBoundary } from './fallback';
export default function BlockCard(props) {
    var url = props.url, data = props.data, eventHandlers = props.eventHandlers, portal = props.portal;
    var handler = getEventHandler(eventHandlers, 'smartCard');
    var onClick = url && handler
        ? function (e) { return handler(e, url); }
        : undefined;
    var cardProps = { url: url, data: data, onClick: onClick, container: portal };
    return (React.createElement("div", { "data-block-card": true, "data-card-data": data ? JSON.stringify(data) : undefined, "data-card-url": url },
        React.createElement(CardErrorBoundary, __assign({ unsupportedComponent: UnsupportedBlock }, cardProps),
            React.createElement(Card, __assign({ appearance: "block" }, cardProps)))));
}
//# sourceMappingURL=blockCard.js.map