"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var media_ui_1 = require("@atlaskit/media-ui");
var inline_1 = require("../../extractors/inline");
var block_1 = require("../../extractors/block");
var CardWithDataContent = /** @class */ (function (_super) {
    tslib_1.__extends(CardWithDataContent, _super);
    function CardWithDataContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardWithDataContent.prototype.render = function () {
        var _a = this.props, details = _a.data, isSelected = _a.isSelected, appearance = _a.appearance, onClick = _a.onClick, onResolve = _a.onResolve;
        if (appearance === 'inline') {
            var props = inline_1.extractInlinePropsFromJSONLD(details || {});
            if (onResolve) {
                onResolve({ title: props.title });
            }
            return (React.createElement(media_ui_1.InlineCardResolvedView, tslib_1.__assign({}, props, { isSelected: isSelected, onClick: onClick })));
        }
        else {
            var props = block_1.extractBlockPropsFromJSONLD(details || {});
            if (onResolve) {
                onResolve({ title: props.title && props.title.text });
            }
            return (React.createElement(media_ui_1.BlockCardResolvedView, tslib_1.__assign({}, props, { isSelected: isSelected, onClick: onClick })));
        }
    };
    return CardWithDataContent;
}(React.Component));
exports.CardWithDataContent = CardWithDataContent;
//# sourceMappingURL=component.js.map