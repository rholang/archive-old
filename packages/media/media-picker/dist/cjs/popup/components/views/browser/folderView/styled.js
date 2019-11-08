"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var colors = tslib_1.__importStar(require("@atlaskit/theme/colors"));
exports.FolderViewerWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n\n  height: 100%;\n"], ["\n  display: flex;\n  flex-direction: column;\n\n  height: 100%;\n"])));
exports.SpinnerWrapper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  /* Take up all of the available space between header and footer */\n  flex: 1;\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  /* Take up all of the available space between header and footer */\n  flex: 1;\n"])));
exports.FolderViewerContent = styled_components_1.default.ul(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  /* Take up all of the available space between header and footer */\n  flex: 1;\n\n  /* Ensure navigation header is pinned to top */\n  overflow: auto;\n\n  list-style: none;\n\n  /* Override default list styles */\n  margin-top: 0;\n  padding-left: 0;\n"], ["\n  /* Take up all of the available space between header and footer */\n  flex: 1;\n\n  /* Ensure navigation header is pinned to top */\n  overflow: auto;\n\n  list-style: none;\n\n  /* Override default list styles */\n  margin-top: 0;\n  padding-left: 0;\n"])));
exports.FolderViewerRow = styled_components_1.default.li(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  box-sizing: border-box;\n\n  width: 100%;\n  height: 48px;\n\n  margin-top: 0;\n  padding: 8px 28px 8px 28px;\n\n  cursor: pointer;\n\n  ", " &:hover {\n    ", ";\n  }\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  box-sizing: border-box;\n\n  width: 100%;\n  height: 48px;\n\n  margin-top: 0;\n  padding: 8px 28px 8px 28px;\n\n  cursor: pointer;\n\n  ",
    " &:hover {\n    ",
    ";\n  }\n"])), function (_a) {
    var isSelected = _a.isSelected;
    return isSelected
        ? "background-color: " + colors.B200 + ";"
        : 'background-color: white;';
}, function (_a) {
    var isSelected = _a.isSelected;
    return isSelected
        ? "background-color: " + colors.B200 + ";"
        : "background-color: " + colors.N30 + ";";
});
exports.FolderViewerRow.displayName = 'FolderViewerRow';
exports.FileMetadataGroup = styled_components_1.default.div(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  align-items: center;\n"], ["\n  display: flex;\n  align-items: center;\n"])));
exports.FileIcon = styled_components_1.default.div(templateObject_6 || (templateObject_6 = tslib_1.__makeTemplateObject(["\n  /* vertically center icon */\n  display: flex;\n  align-items: center;\n\n  width: 32px;\n  height: 32px;\n"], ["\n  /* vertically center icon */\n  display: flex;\n  align-items: center;\n\n  width: 32px;\n  height: 32px;\n"])));
exports.FileName = styled_components_1.default.div(templateObject_7 || (templateObject_7 = tslib_1.__makeTemplateObject(["\n  padding-left: 17px;\n  vertical-align: middle;\n  overflow: hidden;\n  text-overflow: ellipsis;\n\n  ", ";\n"], ["\n  padding-left: 17px;\n  vertical-align: middle;\n  overflow: hidden;\n  text-overflow: ellipsis;\n\n  ",
    ";\n"])), function (_a) {
    var isSelected = _a.isSelected;
    return isSelected ? 'color: white;' : "color: " + colors.N900;
});
exports.FileCreateDate = styled_components_1.default.div(templateObject_8 || (templateObject_8 = tslib_1.__makeTemplateObject(["\n  color: ", ";\n  text-align: right;\n  padding: 0 10px 0 10px;\n"], ["\n  color: ", ";\n  text-align: right;\n  padding: 0 10px 0 10px;\n"])), colors.N90);
exports.FileSize = styled_components_1.default.div(templateObject_9 || (templateObject_9 = tslib_1.__makeTemplateObject(["\n  color: ", ";\n  min-width: 70px;\n  text-align: right;\n  padding: 0 0 0 10px;\n"], ["\n  color: ", ";\n  min-width: 70px;\n  text-align: right;\n  padding: 0 0 0 10px;\n"])), colors.N90);
exports.SelectedFileIconWrapper = styled_components_1.default.div(templateObject_10 || (templateObject_10 = tslib_1.__makeTemplateObject(["\n  color: ", " !important;\n  right: 23px;\n  top: 12px;\n"], ["\n  color: ", " !important;\n  right: 23px;\n  top: 12px;\n"])), colors.B400);
exports.MoreBtnWrapper = styled_components_1.default.div(templateObject_11 || (templateObject_11 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n\n  margin-top: 10px;\n"], ["\n  display: flex;\n  justify-content: center;\n\n  margin-top: 10px;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11;
//# sourceMappingURL=styled.js.map