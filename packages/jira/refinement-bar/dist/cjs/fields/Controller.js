"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var FieldController = function FieldController(config) {
  var _this = this;

  (0, _classCallCheck2.default)(this, FieldController);
  (0, _defineProperty2.default)(this, "config", void 0);
  (0, _defineProperty2.default)(this, "key", void 0);
  (0, _defineProperty2.default)(this, "label", void 0);
  (0, _defineProperty2.default)(this, "validate", void 0);
  (0, _defineProperty2.default)(this, "type", void 0);
  (0, _defineProperty2.default)(this, "hasValue", function () {
    throw Error("Missing `hasValue` method in the \"".concat(_this.type.name, "\" controller."));
  });
  (0, _defineProperty2.default)(this, "getInitialValue", function () {
    throw Error("Missing `getInitialValue` method in the \"".concat(_this.type.name, "\" controller."));
  });
  (0, _defineProperty2.default)(this, "defaultValidate", function () {
    return null;
  });
  this.config = config;
  this.key = config.key;
  this.label = config.label;
  this.type = config.type;
  this.validate = config.validate || this.defaultValidate;

  if (!this.label) {
    throw Error("\"".concat(this.key, "\" requires a label."));
  }
};

exports.default = FieldController;