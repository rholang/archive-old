"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var HelpContext_1 = require("./HelpContext");
var Header_1 = tslib_1.__importDefault(require("./Header"));
var Search_1 = tslib_1.__importDefault(require("./Search"));
var Article_1 = tslib_1.__importDefault(require("./Article"));
var styled_1 = require("./styled");
exports.HelpContent = function (props) {
    var help = props.help;
    return (React.createElement(React.Fragment, null,
        React.createElement(styled_1.Container, null,
            React.createElement(styled_1.Section, null,
                React.createElement(Header_1.default, null),
                React.createElement(styled_1.HelpBody, null,
                    help.isSearchVisible() && React.createElement(Search_1.default, null),
                    React.createElement(Article_1.default, null),
                    React.createElement(styled_1.DefaultContent, { isArticleVisible: help.isArticleVisible() }, help.defaultContent)),
                help.isFooter() ? React.createElement(styled_1.HelpFooter, null, help.footer) : null))));
};
exports.default = HelpContext_1.withHelp(exports.HelpContent);
//# sourceMappingURL=HelpContent.js.map