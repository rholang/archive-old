import { __makeTemplateObject } from "tslib";
import styled from 'styled-components';
import { Y200, P200, B300 } from '@atlaskit/theme/colors';
var typeToColorMap = {
    image: Y200,
    audio: P200,
    video: '#ff7143',
    doc: B300,
    unknown: '#3dc7dc',
};
export var IconWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-flex;\n  color: ", ";\n"], ["\n  display: inline-flex;\n  color: ",
    ";\n"])), function (_a) {
    var type = _a.type;
    return typeToColorMap[type] || typeToColorMap.unknown;
});
var templateObject_1;
//# sourceMappingURL=styled.js.map