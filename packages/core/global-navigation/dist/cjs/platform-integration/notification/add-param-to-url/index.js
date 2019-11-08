"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _urlParse = _interopRequireDefault(require("url-parse"));

// TODO: Check if we really need to use this package below
var _default = function _default(url, key, value) {
  if (!key || !value) {
    return url;
  }

  var parsedUrl = (0, _urlParse.default)(url);
  var seperator = parsedUrl.query.length ? '&' : '?';
  parsedUrl.set('query', "".concat(parsedUrl.query).concat(seperator).concat(key, "=").concat(encodeURIComponent(value)));
  return parsedUrl.href;
};

exports.default = _default;