"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var button_1 = tslib_1.__importDefault(require("@atlaskit/button"));
var colors_1 = require("@atlaskit/theme/colors");
var lock_filled_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/lock-filled"));
var CollapsedFrame_1 = require("../CollapsedFrame");
var dimensions_1 = require("../dimensions");
var CollapsedIconTitleDescriptionLayout_1 = require("../CollapsedIconTitleDescriptionLayout");
var styled_1 = require("./styled");
var messages_1 = require("../../messages");
var react_intl_1 = require("react-intl");
var BlockCardForbiddenView = /** @class */ (function (_super) {
    tslib_1.__extends(BlockCardForbiddenView, _super);
    function BlockCardForbiddenView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleAuthorise = function (event) {
            var onAuthorise = _this.props.onAuthorise;
            if (onAuthorise) {
                event.preventDefault();
                event.stopPropagation();
                onAuthorise();
            }
        };
        return _this;
    }
    BlockCardForbiddenView.prototype.render = function () {
        var _a = this.props, url = _a.url, onClick = _a.onClick, onAuthorise = _a.onAuthorise, isSelected = _a.isSelected;
        return (React.createElement(CollapsedFrame_1.CollapsedFrame, { isSelected: isSelected, minWidth: dimensions_1.minWidth, maxWidth: dimensions_1.maxWidth, onClick: onClick },
            React.createElement(CollapsedIconTitleDescriptionLayout_1.CollapsedIconTitleDescriptionLayout, { icon: React.createElement(styled_1.IconBackground, null,
                    React.createElement(lock_filled_1.default, { label: "forbidden", size: "medium", primaryColor: colors_1.N0 })), title: url, description: React.createElement(React.Fragment, null,
                    React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, messages_1.messages.invalid_permissions)),
                    ' ',
                    onAuthorise && (React.createElement(button_1.default, { appearance: "link", spacing: "none", onClick: this.handleAuthorise },
                        React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, messages_1.messages.try_another_account))))) })));
    };
    return BlockCardForbiddenView;
}(React.Component));
exports.BlockCardForbiddenView = BlockCardForbiddenView;
//# sourceMappingURL=index.js.map