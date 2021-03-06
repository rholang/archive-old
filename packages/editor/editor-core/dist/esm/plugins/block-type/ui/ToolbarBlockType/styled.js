import { __makeTemplateObject } from "tslib";
import { colors } from '@atlaskit/theme';
import styled from 'styled-components';
import { headingsSharedStyles } from '@atlaskit/editor-common';
import { Shortcut } from '../../../../ui/styles';
export var BlockTypeMenuItem = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", ";\n  > {\n    h1,\n    h2,\n    h3,\n    h4,\n    h5,\n    h6 {\n      margin-top: 0;\n    }\n  }\n  ", ";\n"], ["\n  ", ";\n  > {\n    h1,\n    h2,\n    h3,\n    h4,\n    h5,\n    h6 {\n      margin-top: 0;\n    }\n  }\n  ", ";\n"])), headingsSharedStyles, function (props) { return (props.selected ? props.tagName + " { color: white }" : ''); });
export var KeyboardShortcut = styled(Shortcut)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n  margin-left: 16px;\n"], ["\n  ",
    "\n  margin-left: 16px;\n"])), function (props) {
    return props.selected ? "color: " + colors.N400 + ";" : '';
});
var templateObject_1, templateObject_2;
//# sourceMappingURL=styled.js.map