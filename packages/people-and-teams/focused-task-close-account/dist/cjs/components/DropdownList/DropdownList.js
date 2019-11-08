"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_intl_1 = require("react-intl");
var button_1 = tslib_1.__importDefault(require("@atlaskit/button"));
var Styled = tslib_1.__importStar(require("./styled"));
var messages_1 = require("../../messages");
var COLLAPSED_LIST_SITE_COUNT = 3;
var DropdownList = /** @class */ (function (_super) {
    tslib_1.__extends(DropdownList, _super);
    function DropdownList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isExpanded: false,
        };
        _this.showDropdownList = function () {
            _this.setState({ isExpanded: true });
        };
        _this.hideDropdownList = function () {
            _this.setState({ isExpanded: false });
        };
        _this.getVisibleSites = function () {
            return _this.state.isExpanded
                ? _this.props.accessibleSites
                : _this.props.accessibleSites.slice(0, COLLAPSED_LIST_SITE_COUNT);
        };
        return _this;
    }
    DropdownList.prototype.render = function () {
        var accessibleSites = this.props.accessibleSites;
        var isExpanded = this.state.isExpanded;
        var visibleSites = this.getVisibleSites();
        var footNote = visibleSites.length === accessibleSites.length && (React.createElement(Styled.AccessibleSitesListFootnote, null,
            React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, messages_1.overviewMessages.paragraphLoseAccessFootnote))));
        var toggleExpand = accessibleSites.length > COLLAPSED_LIST_SITE_COUNT && (React.createElement(Styled.ButtonWrapper, null,
            React.createElement(button_1.default, { onClick: isExpanded ? this.hideDropdownList : this.showDropdownList, appearance: "link", spacing: "none" }, isExpanded ? (React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, messages_1.dropDownListMessages.collapseButton))) : (React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, messages_1.dropDownListMessages.expandButton, { values: { num: accessibleSites.length - 3 } }))))));
        return (React.createElement(React.Fragment, null,
            React.createElement(Styled.AccessibleSitesList, null, visibleSites.map(function (url, idx) { return (React.createElement("li", { key: idx }, url)); })),
            footNote,
            toggleExpand));
    };
    return DropdownList;
}(React.Component));
exports.DropdownList = DropdownList;
exports.default = DropdownList;
//# sourceMappingURL=DropdownList.js.map