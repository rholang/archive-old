"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var resultTypes = tslib_1.__importStar(require("./components/Results"));
exports.quickSearchResultTypes = resultTypes;
/*
 This component is exported in two different ways.

 v0: A legacy, backwards compatible API from when quick-search was living inside @atlaskit/navigation. This API
 is deprecated and will be removed in the next major version.

 v1: An API tailored to a stand-alone quick-search component.
*/
// API v0 Exports:
var ResultItemGroup_1 = require("./components/ResultItem/ResultItemGroup");
exports.AkNavigationItemGroup = ResultItemGroup_1.default;
var ResultItem_1 = require("./components/ResultItem/ResultItem");
exports.AkNavigationItem = ResultItem_1.default;
var QuickSearch_1 = require("./components/QuickSearch");
exports.AkQuickSearch = QuickSearch_1.default;
var Search_1 = require("./components/Search/Search");
exports.AkSearch = Search_1.default;
// API v1 Exports:
var QuickSearch_2 = require("./components/QuickSearch");
exports.QuickSearch = QuickSearch_2.default;
var ResultItemGroup_2 = require("./components/ResultItem/ResultItemGroup");
exports.ResultItemGroup = ResultItemGroup_2.default;
var ObjectResult_1 = require("./components/Results/ObjectResult");
exports.ObjectResult = ObjectResult_1.default;
var PersonResult_1 = require("./components/Results/PersonResult");
exports.PersonResult = PersonResult_1.default;
var ContainerResult_1 = require("./components/Results/ContainerResult");
exports.ContainerResult = ContainerResult_1.default;
var ResultBase_1 = require("./components/Results/ResultBase");
exports.ResultBase = ResultBase_1.default;
//# sourceMappingURL=index.js.map