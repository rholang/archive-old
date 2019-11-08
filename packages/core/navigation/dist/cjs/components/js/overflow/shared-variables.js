"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isArrayFilled = exports.reservedGapHeight = exports.dropdownHeight = exports.overflowGroupNamespace = exports.overflowManagerNamespace = exports.reportItemHeightToGroup = exports.shouldReportItemHeight = void 0;

var _sharedVariables = require("../../../shared-variables");

var prefix = function prefix(name) {
  return "__ak_nav_collapsed_overflow_".concat(name);
};

var shouldReportItemHeight = prefix('shouldReportItemHeight');
exports.shouldReportItemHeight = shouldReportItemHeight;
var reportItemHeightToGroup = prefix('reportItemHeight');
exports.reportItemHeightToGroup = reportItemHeightToGroup;
var overflowManagerNamespace = prefix('manager_ns');
exports.overflowManagerNamespace = overflowManagerNamespace;
var overflowGroupNamespace = prefix('group_ns');
exports.overflowGroupNamespace = overflowGroupNamespace;
var dropdownHeight = _sharedVariables.gridSize * 5;
exports.dropdownHeight = dropdownHeight;
var reservedGapHeight = _sharedVariables.gridSize * 4;
exports.reservedGapHeight = reservedGapHeight;

var isArrayFilled = function isArrayFilled(testArray) {
  // Note: we can't use a simple testArray.length check here because it is a set-length
  // array; We also can't use .filter(Boolean).length because that skips any undefined items.
  for (var i = 0; i < testArray.length; i++) {
    if (typeof testArray[i] === 'undefined') {
      return false;
    }
  }

  return true;
};

exports.isArrayFilled = isArrayFilled;