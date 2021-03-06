import { __extends } from "tslib";
import * as React from 'react';
import { Component } from 'react';
import WarningIcon from '@atlaskit/icon/glyph/editor/warning';
import { ErrorIconWrapper } from './styled';
var ErrorIcon = /** @class */ (function (_super) {
    __extends(ErrorIcon, _super);
    function ErrorIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ErrorIcon.prototype.render = function () {
        var size = this.props.size;
        return (React.createElement(ErrorIconWrapper, null,
            React.createElement(WarningIcon, { label: "Error", size: size })));
    };
    ErrorIcon.defaultProps = {
        size: 'small',
    };
    return ErrorIcon;
}(Component));
export { ErrorIcon };
//# sourceMappingURL=index.js.map