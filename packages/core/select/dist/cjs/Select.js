"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SelectWithoutAnalytics = void 0;

var _reactSelect = _interopRequireDefault(require("react-select"));

var _analyticsNext = require("@atlaskit/analytics-next");

var _version = require("./version.json");

var _createSelect = _interopRequireDefault(require("./createSelect"));

var SelectWithoutAnalytics = (0, _createSelect.default)(_reactSelect.default);
exports.SelectWithoutAnalytics = SelectWithoutAnalytics;
var createAndFireEventOnAtlaskit = (0, _analyticsNext.createAndFireEvent)('atlaskit');

var _default = (0, _analyticsNext.withAnalyticsContext)({
  componentName: 'select',
  packageName: _version.name,
  packageVersion: _version.version
})((0, _analyticsNext.withAnalyticsEvents)({
  onChange: createAndFireEventOnAtlaskit({
    action: 'changed',
    actionSubject: 'option',
    attributes: {
      componentName: 'select',
      packageName: _version.name,
      packageVersion: _version.version
    }
  })
})(SelectWithoutAnalytics));

exports.default = _default;