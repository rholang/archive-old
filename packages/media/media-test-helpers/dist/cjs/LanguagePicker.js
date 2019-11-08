"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var dropdown_menu_1 = tslib_1.__importStar(require("@atlaskit/dropdown-menu"));
var world_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/world"));
var chevron_down_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/chevron-down"));
var DropdownContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  margin: 8px;\n  width: 200px;\n"], ["\n  margin: 8px;\n  width: 200px;\n"])));
var LanguagePicker = /** @class */ (function (_super) {
    tslib_1.__extends(LanguagePicker, _super);
    function LanguagePicker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClick = function (locale) {
            _this.props.onChange(locale);
        };
        return _this;
    }
    LanguagePicker.prototype.render = function () {
        var _this = this;
        var _a = this.props, languages = _a.languages, locale = _a.locale;
        return (React.createElement(DropdownContainer, null,
            React.createElement(dropdown_menu_1.default, { trigger: languages[locale], triggerType: "button", boundariesElement: "scrollParent", triggerButtonProps: {
                    iconBefore: React.createElement(world_1.default, { label: "Language Picker" }),
                    iconAfter: React.createElement(chevron_down_1.default, { label: "Language Picker" }),
                    shouldFitContainer: true,
                }, shouldFitContainer: true },
                React.createElement(dropdown_menu_1.DropdownItemGroup, null, Object.keys(languages).map(function (l) { return (React.createElement(dropdown_menu_1.DropdownItem, { key: l, onClick: function () { return _this.handleClick(l); } }, languages[l])); })))));
    };
    return LanguagePicker;
}(react_1.Component));
exports.default = LanguagePicker;
var templateObject_1;
//# sourceMappingURL=LanguagePicker.js.map