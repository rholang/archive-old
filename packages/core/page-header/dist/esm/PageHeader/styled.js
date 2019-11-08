import { __makeTemplateObject } from "tslib";
import styled from 'styled-components';
import { gridSize } from '@atlaskit/theme/constants';
import { h700 } from '@atlaskit/theme/typography';
var getTruncationStyles = function (_a) {
    var truncate = _a.truncate;
    return truncate
        ? "\n        overflow-x: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n      "
        : null;
};
export var Outer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin: ", "px 0 ", "px 0;\n"], ["\n  margin: ", "px 0 ", "px 0;\n"])), gridSize() * 3, gridSize() * 2);
export var StyledTitle = styled.h1(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", ";\n  ", " line-height: ", "px;\n  margin-top: 0;\n"], ["\n  ", ";\n  ", " line-height: ", "px;\n  margin-top: 0;\n"])), h700(), getTruncationStyles, gridSize() * 4);
export var TitleWrapper = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  align-items: flex-start;\n  display: flex;\n  ", "\n"], ["\n  align-items: flex-start;\n  display: flex;\n  ",
    "\n"])), function (_a) {
    var truncate = _a.truncate;
    return truncate ? 'flex-wrap: no-wrap;' : 'flex-wrap: wrap;';
});
export var TitleContainer = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  flex: 1 0 auto;\n  ", "\n  margin-bottom: ", "px;\n  max-width: 100%;\n  min-width: 0;\n"], ["\n  flex: 1 0 auto;\n  ", "\n  margin-bottom: ", "px;\n  max-width: 100%;\n  min-width: 0;\n"])), function (_a) {
    var truncate = _a.truncate;
    return (truncate ? 'flex-shrink: 1;' : null);
}, gridSize());
export var ActionsWrapper = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  flex: 0 0 auto;\n  margin-bottom: ", "px;\n  margin-left: auto;\n  max-width: 100%;\n  padding-left: ", "px;\n  white-space: nowrap;\n\n  > {\n    text-align: right;\n  }\n"], ["\n  flex: 0 0 auto;\n  margin-bottom: ", "px;\n  margin-left: auto;\n  max-width: 100%;\n  padding-left: ", "px;\n  white-space: nowrap;\n\n  > {\n    text-align: right;\n  }\n"])), gridSize(), gridSize() * 4);
export var BottomBarWrapper = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  margin-top: ", "px;\n"], ["\n  margin-top: ", "px;\n"])), gridSize() * 2);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=styled.js.map