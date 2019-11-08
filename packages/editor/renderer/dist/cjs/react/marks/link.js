"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var theme_1 = require("@atlaskit/theme");
var editor_common_1 = require("@atlaskit/editor-common");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var utils_1 = require("../../utils");
exports.defaultMediaLinkOpacity = '0.8';
var StyledAnchor = styled_components_1.default.a(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  color: ", ";\n\n  & > .", " {\n    opacity: 1;\n    transition: opacity 0.2s ease-in-out;\n  }\n\n  &:hover {\n    & > .", " {\n      opacity: ", ";\n    }\n\n    color: ", ";\n    text-decoration: underline;\n  }\n"], ["\n  color: ", ";\n\n  & > .", " {\n    opacity: 1;\n    transition: opacity 0.2s ease-in-out;\n  }\n\n  &:hover {\n    & > .", " {\n      opacity: ", ";\n    }\n\n    color: ", ";\n    text-decoration: underline;\n  }\n"])), theme_1.colors.B400, editor_common_1.mediaSingleClassName, editor_common_1.mediaSingleClassName, exports.defaultMediaLinkOpacity, theme_1.colors.B300);
function Link(props) {
    var href = props.href, target = props.target, eventHandlers = props.eventHandlers;
    var anchorProps = {
        href: href,
        target: target,
        title: href,
    };
    if (target === '_blank') {
        anchorProps.rel = 'noreferrer noopener';
    }
    var handler = utils_1.getEventHandler(eventHandlers, 'link');
    return (React.createElement(StyledAnchor, tslib_1.__assign({ onClick: function (e) {
            if (handler) {
                handler(e, href);
            }
        } }, anchorProps), props.children));
}
exports.default = Link;
var templateObject_1;
//# sourceMappingURL=link.js.map