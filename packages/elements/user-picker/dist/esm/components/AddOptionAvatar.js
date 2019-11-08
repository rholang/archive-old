import { __makeTemplateObject } from "tslib";
import InviteTeamIcon from '@atlaskit/icon/glyph/invite-team';
import { colors } from '@atlaskit/theme';
import * as React from 'react';
import styled from 'styled-components';
var AddOptionAvatarWrapper = styled.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: black;\n  padding: 2px;\n\n  > span[class^='Icon__IconWrapper'] {\n    background-color: ", ";\n    border-radius: 50%;\n  }\n"], ["\n  color: black;\n  padding: 2px;\n\n  > span[class^='Icon__IconWrapper'] {\n    background-color: ", ";\n    border-radius: 50%;\n  }\n"])), colors.N50);
export var AddOptionAvatar = function (_a) {
    var size = _a.size, label = _a.label;
    return (React.createElement(AddOptionAvatarWrapper, null,
        React.createElement(InviteTeamIcon, { label: label, size: size, primaryColor: "white" })));
};
AddOptionAvatar.defaultProps = {
    size: 'large',
};
var templateObject_1;
//# sourceMappingURL=AddOptionAvatar.js.map