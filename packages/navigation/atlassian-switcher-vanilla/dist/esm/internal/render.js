import { __assign } from "tslib";
import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import { AnalyticsListener } from '@atlaskit/analytics-next';
import AtlassianSwitcher from '@atlaskit/atlassian-switcher';
export var render = function (switcherProps, analyticsListener, container) {
    ReactDOM.render(React.createElement(IntlProvider, null,
        React.createElement(AnalyticsListener, { channel: "*", onEvent: analyticsListener },
            React.createElement(AtlassianSwitcher, __assign({}, switcherProps)))), container);
    return {
        destroy: function () {
            ReactDOM.unmountComponentAtNode(container);
        },
    };
};
//# sourceMappingURL=render.js.map