"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var button_1 = tslib_1.__importStar(require("@atlaskit/button"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var with_document_actions_1 = tslib_1.__importDefault(require("../consumers/with-document-actions"));
var Toolbar = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 0 20px;\n  height: 80px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 0 20px;\n  height: 80px;\n"])));
exports.default = (function (props) {
    var mode = props.mode, editorActions = props.editorActions;
    return (React.createElement(with_document_actions_1.default, { render: function (actions) {
            switch (mode) {
                case 'edit':
                case 'create':
                    return (React.createElement(button_1.ButtonGroup, null,
                        React.createElement(button_1.default, { appearance: "primary", onClick: function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
                                var value, err_1;
                                return tslib_1.__generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, editorActions.getValue()];
                                        case 1:
                                            value = _a.sent();
                                            _a.label = 2;
                                        case 2:
                                            _a.trys.push([2, 4, , 5]);
                                            return [4 /*yield*/, (mode === 'create'
                                                    ? actions.createDocument(value)
                                                    : actions.updateDocument(value))];
                                        case 3:
                                            _a.sent();
                                            return [3 /*break*/, 5];
                                        case 4:
                                            err_1 = _a.sent();
                                            return [3 /*break*/, 5];
                                        case 5: return [2 /*return*/];
                                    }
                                });
                            }); } }, "Publish"),
                        React.createElement(button_1.default, { appearance: "subtle", onClick: function () { return actions.cancelEdit(); } }, "Close")));
                default:
                    return (React.createElement(Toolbar, null,
                        React.createElement(button_1.ButtonGroup, null,
                            React.createElement(button_1.default, { appearance: "primary", onClick: function () { return actions.editDocument(); } }, "Edit"))));
            }
        } }));
});
var templateObject_1;
//# sourceMappingURL=toolbar.js.map