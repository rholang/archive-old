import { __assign, __extends } from "tslib";
import * as React from 'react';
import { BlockCardResolvedView, InlineCardResolvedView, } from '@atlaskit/media-ui';
import { extractInlinePropsFromJSONLD } from '../../extractors/inline';
import { extractBlockPropsFromJSONLD } from '../../extractors/block';
var CardWithDataContent = /** @class */ (function (_super) {
    __extends(CardWithDataContent, _super);
    function CardWithDataContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardWithDataContent.prototype.render = function () {
        var _a = this.props, details = _a.data, isSelected = _a.isSelected, appearance = _a.appearance, onClick = _a.onClick, onResolve = _a.onResolve;
        if (appearance === 'inline') {
            var props = extractInlinePropsFromJSONLD(details || {});
            if (onResolve) {
                onResolve({ title: props.title });
            }
            return (React.createElement(InlineCardResolvedView, __assign({}, props, { isSelected: isSelected, onClick: onClick })));
        }
        else {
            var props = extractBlockPropsFromJSONLD(details || {});
            if (onResolve) {
                onResolve({ title: props.title && props.title.text });
            }
            return (React.createElement(BlockCardResolvedView, __assign({}, props, { isSelected: isSelected, onClick: onClick })));
        }
    };
    return CardWithDataContent;
}(React.Component));
export { CardWithDataContent };
//# sourceMappingURL=component.js.map