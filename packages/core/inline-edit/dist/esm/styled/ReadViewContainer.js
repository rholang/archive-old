import { __makeTemplateObject } from "tslib";
import styled from 'styled-components';
import { fontSize, gridSize } from '@atlaskit/theme/constants';
var ReadViewContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  font-size: ", "px;\n  line-height: ", ";\n  max-width: 100%;\n  min-height: ", "em;\n  padding: ", "px\n    ", "px;\n  word-break: break-word;\n"], ["\n  display: flex;\n  font-size: ", "px;\n  line-height: ", ";\n  max-width: 100%;\n  min-height: ", "em;\n  padding: ", "px\n    ", "px;\n  word-break: break-word;\n"])), fontSize(), (gridSize() * 2.5) / fontSize(), (gridSize() * 2.5) / fontSize(), function (props) { return (props.isCompact ? gridSize() / 2 : gridSize()); }, gridSize() - 2);
ReadViewContainer.displayName = 'ReadViewContainer';
export default ReadViewContainer;
var templateObject_1;
//# sourceMappingURL=ReadViewContainer.js.map