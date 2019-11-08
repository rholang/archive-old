import { __assign, __extends, __makeTemplateObject } from "tslib";
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { colors } from '@atlaskit/theme';
import PeopleIcon from '@atlaskit/icon/glyph/people';
import { AvatarItemOption, TextWrapper } from './AvatarItemOption';
import { messages } from './i18n';
import { HighlightText } from './HighlightText';
export var GroupOptionIconWrapper = styled.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 2px;\n\n  > span {\n    background-color: ", ";\n    border-radius: 50%;\n    padding: 4px;\n  }\n"], ["\n  padding: 2px;\n\n  > span {\n    background-color: ", ";\n    border-radius: 50%;\n    padding: 4px;\n  }\n"])), colors.N20);
var GroupOption = /** @class */ (function (_super) {
    __extends(GroupOption, _super);
    function GroupOption() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getPrimaryText = function () {
            var _a = _this.props, isSelected = _a.isSelected, _b = _a.group, name = _b.name, highlight = _b.highlight;
            return [
                React.createElement(TextWrapper, { key: "name", color: isSelected ? colors.N0 : colors.N800 },
                    React.createElement(HighlightText, { highlights: highlight && highlight.name }, name)),
            ];
        };
        _this.renderAvatar = function () { return (React.createElement(GroupOptionIconWrapper, null,
            React.createElement(PeopleIcon, { label: "group-icon", size: "medium" }))); };
        _this.renderByline = function () {
            var isSelected = _this.props.isSelected;
            return (React.createElement(TextWrapper, { color: isSelected ? colors.N50 : colors.N200 },
                React.createElement(FormattedMessage, __assign({}, messages.groupByline))));
        };
        return _this;
    }
    GroupOption.prototype.render = function () {
        return (React.createElement(AvatarItemOption, { avatar: this.renderAvatar(), secondaryText: this.renderByline(), primaryText: this.getPrimaryText() }));
    };
    return GroupOption;
}(React.PureComponent));
export { GroupOption };
var templateObject_1;
//# sourceMappingURL=GroupOption.js.map