"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = require("..");
var extractPropsFromObject_1 = require("./extractPropsFromObject");
var extractPropsFromTask_1 = require("./extractPropsFromTask");
var extractPropsFromTextDocument_1 = require("./extractPropsFromTextDocument");
var extractPropsFromBlogPost_1 = require("./extractPropsFromBlogPost");
var extractPropsFromDocument_1 = require("./extractPropsFromDocument");
var extractPropsFromProject_1 = require("./extractPropsFromProject");
var extractPropsFromTemplate_1 = require("./extractPropsFromTemplate");
var extractPropsFromSourceCodeRepository_1 = require("./extractPropsFromSourceCodeRepository");
var extractPropsFromSourceCodePullRequest_1 = require("./extractPropsFromSourceCodePullRequest");
var extractPropsFromSourceCodeReference_1 = require("./extractPropsFromSourceCodeReference");
var extractPropsFromDigitalDocument_1 = require("./extractPropsFromDigitalDocument");
var extractPropsFromSourceCodeCommit_1 = require("./extractPropsFromSourceCodeCommit");
var extractorPrioritiesByType = {
    Object: 0,
    Document: 5,
    'schema:TextDigitalDocument': 10,
    'schema:DigitalDocument': 10,
    'schema:BlogPosting': 10,
    'atlassian:Task': 10,
    'atlassian:Project': 10,
    'atlassian:Template': 10,
    'atlassian:SourceCodeCommit': 10,
    'atlassian:SourceCodeRepository': 10,
    'atlassian:SourceCodePullRequest': 10,
    'atlassian:SourceCodeReference': 10,
};
var extractorFunctionsByType = {
    Object: extractPropsFromObject_1.extractInlineViewPropsFromObject,
    Document: extractPropsFromDocument_1.extractInlineViewPropsFromDocument,
    'schema:TextDigitalDocument': extractPropsFromTextDocument_1.extractInlineViewPropsFromTextDocument,
    'schema:DigitalDocument': extractPropsFromDigitalDocument_1.extractInlineViewPropsFromDigitalDocument,
    'schema:BlogPosting': extractPropsFromBlogPost_1.extractInlineViewPropsFromBlogPost,
    'atlassian:Task': extractPropsFromTask_1.extractInlineViewPropsFromTask,
    'atlassian:Project': extractPropsFromProject_1.extractInlineViewPropsFromProject,
    'atlassian:Template': extractPropsFromTemplate_1.extractInlineViewPropsFromTemplate,
    'atlassian:SourceCodeCommit': extractPropsFromSourceCodeCommit_1.extractInlineViewPropsFromSourceCodeCommit,
    'atlassian:SourceCodeRepository': extractPropsFromSourceCodeRepository_1.extractInlineViewPropsFromSourceCodeRepository,
    'atlassian:SourceCodePullRequest': extractPropsFromSourceCodePullRequest_1.extractInlineViewPropsFromSourceCodePullRequest,
    'atlassian:SourceCodeReference': extractPropsFromSourceCodeReference_1.extractInlineViewPropsFromSourceCodeReference,
};
function extractInlinePropsFromJSONLD(json) {
    return __1.genericExtractPropsFromJSONLD({
        extractorPrioritiesByType: extractorPrioritiesByType,
        extractorFunctionsByType: extractorFunctionsByType,
        defaultExtractorFunction: extractPropsFromObject_1.extractInlineViewPropsFromObject,
        json: json,
    });
}
exports.extractInlinePropsFromJSONLD = extractInlinePropsFromJSONLD;
//# sourceMappingURL=index.js.map