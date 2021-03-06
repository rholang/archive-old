import { __makeTemplateObject } from "tslib";
import styled, { keyframes } from 'styled-components';
import { center, borderRadius } from '@atlaskit/media-ui';
import { themed } from '@atlaskit/theme/components';
import { N20, DN50, N50, DN100 } from '@atlaskit/theme/colors';
export var blinkLoadingAnimation = keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  0%{\n    opacity: 1;\n  }\n\n  50%{\n    opacity: 0.6;\n  }\n\n  100%{\n    opacity: 1;\n  }\n"], ["\n  0%{\n    opacity: 1;\n  }\n\n  50%{\n    opacity: 0.6;\n  }\n\n  100%{\n    opacity: 1;\n  }\n"])));
export var Wrapper = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", " background: ", ";\n  color: ", ";\n  ", "\n  max-height: 100%;\n  max-width: 100%;\n \n  ", "\n  > span {\n    animation: ", " 0.8s infinite;\n  }\n"], ["\n  ", " background: ", ";\n  color: ", ";\n  ", "\n  max-height: 100%;\n  max-width: 100%;\n \n  ",
    "\n  > span {\n    animation: ", " 0.8s infinite;\n  }\n"])), center, themed({ light: N20, dark: DN50 }), themed({ light: N50, dark: DN100 }), borderRadius, function (props) {
    return "\n      width: " + props.dimensions.width + ";\n      height: " + props.dimensions.height + ";\n    ";
}, blinkLoadingAnimation);
var templateObject_1, templateObject_2;
//# sourceMappingURL=styled.js.map