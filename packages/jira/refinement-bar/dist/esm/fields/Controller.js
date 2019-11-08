import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

var FieldController = function FieldController(config) {
  var _this = this;

  _classCallCheck(this, FieldController);

  _defineProperty(this, "config", void 0);

  _defineProperty(this, "key", void 0);

  _defineProperty(this, "label", void 0);

  _defineProperty(this, "validate", void 0);

  _defineProperty(this, "type", void 0);

  _defineProperty(this, "hasValue", function () {
    throw Error("Missing `hasValue` method in the \"".concat(_this.type.name, "\" controller."));
  });

  _defineProperty(this, "getInitialValue", function () {
    throw Error("Missing `getInitialValue` method in the \"".concat(_this.type.name, "\" controller."));
  });

  _defineProperty(this, "defaultValidate", function () {
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

export { FieldController as default };