import { __assign, __extends, __rest } from "tslib";
import * as React from 'react';
import { withAnalyticsEvents, withAnalyticsContext, } from '@atlaskit/analytics-next';
import { defaultAnalyticsAttributes } from '../analytics';
import { HelpContextProvider } from './HelpContext';
import MessagesIntlProvider from './MessagesIntlProvider';
import HelpContent from './HelpContent';
var Help = /** @class */ (function (_super) {
    __extends(Help, _super);
    function Help() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Help.prototype.render = function () {
        var _a = this.props, children = _a.children, footer = _a.footer, rest = __rest(_a, ["children", "footer"]);
        return (React.createElement(HelpContextProvider, __assign({}, rest, { defaultContent: children, footer: footer }),
            React.createElement(MessagesIntlProvider, null,
                React.createElement(HelpContent, null))));
    };
    return Help;
}(React.Component));
export { Help };
export default withAnalyticsContext(defaultAnalyticsAttributes)(withAnalyticsEvents()(Help));
//# sourceMappingURL=Help.js.map