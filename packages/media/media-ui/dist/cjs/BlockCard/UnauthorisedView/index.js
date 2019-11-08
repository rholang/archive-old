"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var button_1 = tslib_1.__importDefault(require("@atlaskit/button"));
var CollapsedFrame_1 = require("../CollapsedFrame");
var dimensions_1 = require("../dimensions");
var CollapsedIconTitleDescriptionLayout_1 = require("../CollapsedIconTitleDescriptionLayout");
var ImageIcon_1 = require("../ImageIcon");
var messages_1 = require("../../messages");
var react_intl_1 = require("react-intl");
var BlockCardUnauthorisedView = /** @class */ (function (_super) {
    tslib_1.__extends(BlockCardUnauthorisedView, _super);
    function BlockCardUnauthorisedView() {
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
    BlockCardUnauthorisedView.prototype.render = function () {
        var _a = this.props, icon = _a.icon, url = _a.url, onClick = _a.onClick, onAuthorise = _a.onAuthorise, isSelected = _a.isSelected;
        return (React.createElement(CollapsedFrame_1.CollapsedFrame, { isSelected: isSelected, minWidth: dimensions_1.minWidth, maxWidth: dimensions_1.maxWidth, onClick: onClick },
            React.createElement(CollapsedIconTitleDescriptionLayout_1.CollapsedIconTitleDescriptionLayout, { icon: React.createElement(ImageIcon_1.ImageIcon, { src: icon, size: 24 }), title: url, description: React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, messages_1.messages.connect_link_account)), other: onAuthorise && (React.createElement(button_1.default, { appearance: "subtle", spacing: "compact", onClick: this.handleAuthorise }, "Connect")) })));
    };
    return BlockCardUnauthorisedView;
}(React.Component));
exports.BlockCardUnauthorisedView = BlockCardUnauthorisedView;
//# sourceMappingURL=index.js.map