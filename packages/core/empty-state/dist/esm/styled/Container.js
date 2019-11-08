import { __makeTemplateObject } from "tslib";
import styled from 'styled-components';
import { gridSize } from '@atlaskit/theme/constants';
var verticalMarginSize = gridSize() * 6;
var columnWidth = gridSize() * 8;
var gutter = gridSize() * 2;
var wideContainerWidth = columnWidth * 6 + gutter * 5;
var narrowContainerWidth = columnWidth * 4 + gutter * 3;
var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin: ", "px auto;\n  text-align: center;\n  /* Use max-width so the component can shrink on smaller viewports. */\n  max-width: ", "px;\n"], ["\n  margin: ", "px auto;\n  text-align: center;\n  /* Use max-width so the component can shrink on smaller viewports. */\n  max-width: ",
    "px;\n"])), verticalMarginSize, function (props) {
    return props.size === 'narrow' ? narrowContainerWidth : wideContainerWidth;
});
export default Container;
var templateObject_1;
//# sourceMappingURL=Container.js.map