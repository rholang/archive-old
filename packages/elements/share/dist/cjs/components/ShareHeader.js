"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var form_1 = require("@atlaskit/form");
var React = tslib_1.__importStar(require("react"));
var react_intl_1 = require("react-intl");
var i18n_1 = require("../i18n");
exports.ShareHeader = function (_a) {
    var title = _a.title;
    return (React.createElement(form_1.FormHeader, { title: title === undefined ? React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, i18n_1.messages.formTitle)) : title }));
};
//# sourceMappingURL=ShareHeader.js.map