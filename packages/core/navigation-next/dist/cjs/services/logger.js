"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

/* eslint-disable no-console */

/**
 * A logger service that logs debug messages to the console if the debug option is set to true
 */
var Logger =
/*#__PURE__*/
function () {
  function Logger(_ref) {
    var debug = _ref.debug,
        prefix = _ref.prefix;
    (0, _classCallCheck2.default)(this, Logger);
    (0, _defineProperty2.default)(this, "debugEnabled", false);
    (0, _defineProperty2.default)(this, "prefix", '');
    (0, _defineProperty2.default)(this, "groupCount", 0);

    if (debug != null) {
      this.debugEnabled = debug;
    }

    if (prefix != null) {
      this.prefix = "".concat(prefix, ":");
    }
  }

  (0, _createClass2.default)(Logger, [{
    key: "setDebug",
    value: function setDebug(enabled) {
      this.debugEnabled = enabled;
    }
  }, {
    key: "processArgs",
    value: function processArgs() {
      if (!this.debugEnabled) {
        return null;
      }

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var logArgs = args;
      var prefix = this.prefix;

      if (prefix && this.groupCount === 0) {
        if (typeof logArgs[0] === 'string') {
          logArgs[0] = "".concat(prefix, " ").concat(logArgs[0]);
        } else {
          logArgs.unshift(prefix);
        }
      }

      return logArgs;
    }
  }, {
    key: "debug",
    value: function debug() {
      var _console;

      var processedArgs = this.processArgs.apply(this, arguments);

      if (!processedArgs) {
        return;
      }

      (_console = console).log.apply(_console, (0, _toConsumableArray2.default)(processedArgs));
    }
  }, {
    key: "debugConditional",
    value: function debugConditional(condition) {
      if (!condition) {
        return;
      }

      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      this.debug.apply(this, args);
    }
  }, {
    key: "debugGroup",
    value: function debugGroup() {
      var _console2;

      var processedArgs = this.processArgs.apply(this, arguments);

      if (!processedArgs) {
        return;
      }

      (_console2 = console).group.apply(_console2, (0, _toConsumableArray2.default)(processedArgs));

      this.groupCount++;
    }
  }, {
    key: "debugGroupCollapsed",
    value: function debugGroupCollapsed() {
      var _console3;

      var processedArgs = this.processArgs.apply(this, arguments);

      if (!processedArgs) {
        return;
      }

      (_console3 = console).groupCollapsed.apply(_console3, (0, _toConsumableArray2.default)(processedArgs));

      this.groupCount++;
    }
  }, {
    key: "debugGroupEnd",
    value: function debugGroupEnd() {
      var _console4;

      var processedArgs = this.processArgs.apply(this, arguments);

      if (!processedArgs) {
        return;
      }

      (_console4 = console).groupEnd.apply(_console4, (0, _toConsumableArray2.default)(processedArgs));

      this.groupCount--;
    }
  }]);
  return Logger;
}();

exports.default = Logger;