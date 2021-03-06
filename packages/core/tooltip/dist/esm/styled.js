import { __makeTemplateObject } from "tslib";
import styled, { css } from 'styled-components';
import { themed } from '@atlaskit/theme/components';
import { borderRadius, layers } from '@atlaskit/theme/constants';
import { N800, DN0, N0, DN600 } from '@atlaskit/theme/colors';
var backgroundColor = themed({
    light: N800,
    dark: DN0,
});
var textColor = themed({
    light: N0,
    dark: DN600,
});
var truncate = function (p) {
    return p.truncate
        ? css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        max-width: 420px;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n      "], ["\n        max-width: 420px;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n      "]))) : '';
};
export var TooltipPrimitive = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  z-index: ", ";\n  pointer-events: none;\n  position: fixed;\n"], ["\n  z-index: ", ";\n  pointer-events: none;\n  position: fixed;\n"])), layers.tooltip);
export var Tooltip = styled(TooltipPrimitive)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: ", "px;\n  box-sizing: border-box;\n  color: ", ";\n  font-size: 12px;\n  left: 0;\n  line-height: 1.3;\n  max-width: 240px;\n  padding: 2px 6px;\n  top: 0;\n  /* Edge does not support overflow-wrap */\n  word-wrap: break-word;\n  overflow-wrap: break-word;\n  ", ";\n"], ["\n  background-color: ", ";\n  border-radius: ", "px;\n  box-sizing: border-box;\n  color: ", ";\n  font-size: 12px;\n  left: 0;\n  line-height: 1.3;\n  max-width: 240px;\n  padding: 2px 6px;\n  top: 0;\n  /* Edge does not support overflow-wrap */\n  word-wrap: break-word;\n  overflow-wrap: break-word;\n  ", ";\n"])), backgroundColor, borderRadius, textColor, truncate);
// The inline-block here is needed to keep the tooltip appearing in the correct position
// when nested inside a wider parent (see position: relative example).
export var Target = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: inline-block;\n"], ["\n  display: inline-block;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=styled.js.map