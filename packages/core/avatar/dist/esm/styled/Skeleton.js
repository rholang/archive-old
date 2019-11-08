import { __makeTemplateObject } from "tslib";
import styled from 'styled-components';
import { AVATAR_SIZES, AVATAR_RADIUS, BORDER_WIDTH } from './constants';
var Skeleton = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: ", "px;\n  height: ", "px;\n  display: inline-block;\n  border-radius: ", ";\n  background-color: ", ";\n  border: ", "px solid transparent;\n  opacity: ", ";\n"], ["\n  width: ", "px;\n  height: ", "px;\n  display: inline-block;\n  border-radius: ",
    ";\n  background-color: ", ";\n  border: ", "px solid transparent;\n  opacity: ", ";\n"])), function (_a) {
    var size = _a.size;
    return AVATAR_SIZES[size || 'small'];
}, function (_a) {
    var size = _a.size;
    return AVATAR_SIZES[size || 'small'];
}, function (props) {
    return props.size && props.appearance === 'square'
        ? AVATAR_RADIUS[props.size] + "px"
        : '50%';
}, function (_a) {
    var color = _a.color;
    return color || 'currentColor';
}, function (_a) {
    var size = _a.size;
    return BORDER_WIDTH[size || 'small'];
}, function (_a) {
    var weight = _a.weight;
    return (weight === 'strong' ? 0.3 : 0.15);
});
export default Skeleton;
var templateObject_1;
//# sourceMappingURL=Skeleton.js.map