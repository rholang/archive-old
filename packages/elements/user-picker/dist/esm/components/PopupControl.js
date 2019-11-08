import { __assign, __extends, __makeTemplateObject } from "tslib";
import * as React from 'react';
import { Label } from '@atlaskit/field-base';
import { components } from '@atlaskit/select';
import styled from 'styled-components';
var ControlWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  padding: 0px 8px 8px;\n"], ["\n  display: flex;\n  flex-direction: column;\n  padding: 0px 8px 8px;\n"])));
var PopupControl = /** @class */ (function (_super) {
    __extends(PopupControl, _super);
    function PopupControl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PopupControl.prototype.render = function () {
        var popupTitle = this.props.selectProps.popupTitle;
        return (React.createElement(ControlWrapper, null,
            React.createElement(Label, { label: popupTitle }),
            React.createElement(components.Control, __assign({}, this.props))));
    };
    return PopupControl;
}(React.PureComponent));
export { PopupControl };
var templateObject_1;
//# sourceMappingURL=PopupControl.js.map