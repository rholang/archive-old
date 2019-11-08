import { __makeTemplateObject } from "tslib";
import styled from 'styled-components';
import { hideControlsClassName } from '..';
var handleControlsVisibility = function (_a) {
    var controlsAreVisible = _a.controlsAreVisible;
    return "\n  transition: opacity .3s;\n  opacity: " + (controlsAreVisible ? '1' : '0') + ";\n";
};
export var InactivityDetectorWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  overflow: auto;\n  align-items: center;\n  justify-content: center;\n\n  .", " {\n    ", ";\n  }\n"], ["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  overflow: auto;\n  align-items: center;\n  justify-content: center;\n\n  .", " {\n    ", ";\n  }\n"])), hideControlsClassName, handleControlsVisibility);
InactivityDetectorWrapper.displayName = 'InactivityDetectorWrapper';
var templateObject_1;
//# sourceMappingURL=styled.js.map