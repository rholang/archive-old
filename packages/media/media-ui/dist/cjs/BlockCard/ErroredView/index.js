"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var button_1 = tslib_1.__importDefault(require("@atlaskit/button"));
var warning_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/warning"));
var colors_1 = require("@atlaskit/theme/colors");
var CollapsedFrame_1 = require("../CollapsedFrame");
var dimensions_1 = require("../dimensions");
var CollapsedIconTitleDescriptionLayout_1 = require("../CollapsedIconTitleDescriptionLayout");
var messages_1 = require("../../messages");
var react_intl_1 = require("react-intl");
var BlockCardErroredView = /** @class */ (function (_super) {
    tslib_1.__extends(BlockCardErroredView, _super);
    function BlockCardErroredView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleRetry = function (event) {
            var onRetry = _this.props.onRetry;
            if (onRetry) {
                event.preventDefault();
                event.stopPropagation();
                onRetry();
            }
        };
        return _this;
    }
    BlockCardErroredView.prototype.render = function () {
        var _a = this.props, url = _a.url, message = _a.message, onClick = _a.onClick, onRetry = _a.onRetry, isSelected = _a.isSelected;
        return (React.createElement(CollapsedFrame_1.CollapsedFrame, { isSelected: isSelected, minWidth: dimensions_1.minWidth, maxWidth: dimensions_1.maxWidth, onClick: onClick },
            React.createElement(CollapsedIconTitleDescriptionLayout_1.CollapsedIconTitleDescriptionLayout, { icon: React.createElement(warning_1.default, { label: "error", size: "medium", primaryColor: colors_1.Y300 }), title: url, description: React.createElement(React.Fragment, null,
                    message,
                    ' ',
                    onRetry && (React.createElement(button_1.default, { appearance: "link", spacing: "none", onClick: this.handleRetry },
                        React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, messages_1.messages.try_again))))) })));
    };
    return BlockCardErroredView;
}(React.Component));
exports.BlockCardErroredView = BlockCardErroredView;
//# sourceMappingURL=index.js.map