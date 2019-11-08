"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = require("..");
var extractPropsFromObject_1 = require("./extractPropsFromObject");
var extractPropsFromDocument_1 = require("./extractPropsFromDocument");
var extractPropsFromSpreadsheet_1 = require("./extractPropsFromSpreadsheet");
var extractPropsFromTask_1 = require("./extractPropsFromTask");
var extractPropsFromPresentation_1 = require("./extractPropsFromPresentation");
var extractPropsFromTextDocument_1 = require("./extractPropsFromTextDocument");
var extractPropsFromProject_1 = require("./extractPropsFromProject");
var extractPropsFromSourceCodeRepository_1 = require("./extractPropsFromSourceCodeRepository");
var extractorPrioritiesByType = {
    Object: 0,
    Document: 5,
    'schema:TextDigitalDocument': 10,
    'schema:SpreadsheetDigitalDocument': 10,
    'schema:PresentationDigitalDocument': 10,
    Spreadsheet: 10,
    'atlassian:Task': 10,
    'atlassian:Project': 10,
    'atlassian:SourceCodeRepository': 10,
};
var extractorFunctionsByType = {
    Object: extractPropsFromObject_1.extractPropsFromObject,
    'schema:TextDigitalDocument': extractPropsFromTextDocument_1.extractPropsFromTextDocument,
    'schema:SpreadsheetDigitalDocument': extractPropsFromSpreadsheet_1.extractPropsFromSpreadsheet,
    'schema:PresentationDigitalDocument': extractPropsFromPresentation_1.extractPropsFromPresentation,
    Document: extractPropsFromDocument_1.extractPropsFromDocument,
    Spreadsheet: extractPropsFromSpreadsheet_1.extractPropsFromSpreadsheet,
    Presentation: extractPropsFromPresentation_1.extractPropsFromPresentation,
    'atlassian:Task': extractPropsFromTask_1.extractBlockViewPropsFromTask,
    'atlassian:Project': extractPropsFromProject_1.extractBlockViewPropsFromProject,
    'atlassian:SourceCodeRepository': extractPropsFromSourceCodeRepository_1.extractPropsFromSourceCodeRepository,
};
function extractBlockPropsFromJSONLD(json) {
    return __1.genericExtractPropsFromJSONLD({
        extractorPrioritiesByType: extractorPrioritiesByType,
        extractorFunctionsByType: extractorFunctionsByType,
        defaultExtractorFunction: extractPropsFromObject_1.extractPropsFromObject,
        json: json,
    });
}
exports.extractBlockPropsFromJSONLD = extractBlockPropsFromJSONLD;
//# sourceMappingURL=index.js.map