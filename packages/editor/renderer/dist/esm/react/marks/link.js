import { __assign, __makeTemplateObject } from "tslib";
import * as React from 'react';
import { colors } from '@atlaskit/theme';
import { mediaSingleClassName } from '@atlaskit/editor-common';
import styled from 'styled-components';
import { getEventHandler } from '../../utils';
export var defaultMediaLinkOpacity = '0.8';
var StyledAnchor = styled.a(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: ", ";\n\n  & > .", " {\n    opacity: 1;\n    transition: opacity 0.2s ease-in-out;\n  }\n\n  &:hover {\n    & > .", " {\n      opacity: ", ";\n    }\n\n    color: ", ";\n    text-decoration: underline;\n  }\n"], ["\n  color: ", ";\n\n  & > .", " {\n    opacity: 1;\n    transition: opacity 0.2s ease-in-out;\n  }\n\n  &:hover {\n    & > .", " {\n      opacity: ", ";\n    }\n\n    color: ", ";\n    text-decoration: underline;\n  }\n"])), colors.B400, mediaSingleClassName, mediaSingleClassName, defaultMediaLinkOpacity, colors.B300);
export default function Link(props) {
    var href = props.href, target = props.target, eventHandlers = props.eventHandlers;
    var anchorProps = {
        href: href,
        target: target,
        title: href,
    };
    if (target === '_blank') {
        anchorProps.rel = 'noreferrer noopener';
    }
    var handler = getEventHandler(eventHandlers, 'link');
    return (React.createElement(StyledAnchor, __assign({ onClick: function (e) {
            if (handler) {
                handler(e, href);
            }
        } }, anchorProps), props.children));
}
var templateObject_1;
//# sourceMappingURL=link.js.map