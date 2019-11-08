import { __extends } from "tslib";
import React, { Component } from 'react';
import { withAnalyticsEvents, withAnalyticsContext, createAndFireEvent, } from '@atlaskit/analytics-next';
import { name as packageName, version as packageVersion, } from '../version.json';
import EditedStyles from '../styled/EditedStyles';
var Edited = /** @class */ (function (_super) {
    __extends(Edited, _super);
    function Edited() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Edited.prototype.render = function () {
        var _a = this.props, children = _a.children, onFocus = _a.onFocus, onMouseOver = _a.onMouseOver;
        return (React.createElement(EditedStyles, { onFocus: onFocus, onMouseOver: onMouseOver }, children));
    };
    return Edited;
}(Component));
export { Edited as CommentEditedWithoutAnalytics };
var createAndFireEventOnAtlaskit = createAndFireEvent('atlaskit');
export default withAnalyticsContext({
    componentName: 'commentEdited',
    packageName: packageName,
    packageVersion: packageVersion,
})(withAnalyticsEvents({
    onClick: createAndFireEventOnAtlaskit({
        action: 'clicked',
        actionSubject: 'commentEdited',
        attributes: {
            componentName: 'commentEdited',
            packageName: packageName,
            packageVersion: packageVersion,
        },
    }),
})(Edited));
//# sourceMappingURL=Edited.js.map