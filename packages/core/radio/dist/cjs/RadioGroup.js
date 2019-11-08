"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var Radio_1 = tslib_1.__importDefault(require("./Radio"));
var RadioGroup = /** @class */ (function (_super) {
    tslib_1.__extends(RadioGroup, _super);
    function RadioGroup(props) {
        var _this = _super.call(this, props) || this;
        _this.getProp = function (key) {
            return _this.props[key] ? _this.props[key] : _this.state[key];
        };
        _this.onChange = function (event) {
            _this.setState({
                value: event.currentTarget.value,
            });
            _this.props.onChange(event);
        };
        _this.buildOptions = function () {
            var _a = _this.props, options = _a.options, isDisabled = _a.isDisabled, isRequired = _a.isRequired, onInvalid = _a.onInvalid;
            var value = _this.getProp('value');
            if (!options.length)
                return [];
            return options.map(function (_a, index) {
                var testId = _a.testId, optionProps = tslib_1.__rest(_a, ["testId"]);
                if (typeof isDisabled !== 'undefined') {
                    optionProps.isDisabled = isDisabled;
                }
                if (value !== null && optionProps.value === value) {
                    optionProps.isChecked = true;
                }
                return (react_1.default.createElement(Radio_1.default, tslib_1.__assign({}, optionProps, { key: index, onChange: _this.onChange, onInvalid: onInvalid, isRequired: isRequired, testId: testId })));
            });
        };
        _this.state = {
            value: _this.props.value !== undefined
                ? _this.props.value
                : _this.props.defaultValue,
        };
        return _this;
    }
    RadioGroup.prototype.render = function () {
        var options = this.buildOptions();
        return react_1.default.createElement(react_1.Fragment, null, options);
    };
    RadioGroup.defaultProps = {
        onChange: function () { },
        options: [],
    };
    return RadioGroup;
}(react_1.Component));
exports.default = RadioGroup;
//# sourceMappingURL=RadioGroup.js.map