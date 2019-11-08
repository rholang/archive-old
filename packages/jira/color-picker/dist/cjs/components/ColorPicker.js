"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var memoize_one_1 = tslib_1.__importDefault(require("memoize-one"));
var select_1 = require("@atlaskit/select");
var Trigger_1 = tslib_1.__importDefault(require("./Trigger"));
var components = tslib_1.__importStar(require("./components"));
var version_json_1 = require("../version.json");
var analytics_next_1 = require("@atlaskit/analytics-next");
var ColorPicker_1 = require("../styled/ColorPicker");
var defaultPopperProps = {
    positionFixed: true,
    modifiers: { offset: { offset: "0, 8" } },
    placement: 'bottom-start',
};
var getOptions = memoize_one_1.default(function (props) {
    var palette = props.palette, selectedColor = props.selectedColor;
    var focusedItemIndex = 0;
    var value = palette.find(function (color, index) {
        if (color.value === selectedColor) {
            focusedItemIndex = index;
            return true;
        }
        return false;
    }) || palette[0];
    return {
        options: palette,
        value: value,
        focusedItemIndex: focusedItemIndex,
    };
});
var ColorPickerWithoutAnalytics = /** @class */ (function (_super) {
    tslib_1.__extends(ColorPickerWithoutAnalytics, _super);
    function ColorPickerWithoutAnalytics() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.createAndFireEventOnAtlaskit = analytics_next_1.createAndFireEvent('atlaskit');
        _this.changeAnalyticsCaller = function () {
            var createAnalyticsEvent = _this.props.createAnalyticsEvent;
            if (createAnalyticsEvent) {
                return _this.createAndFireEventOnAtlaskit({
                    action: 'clicked',
                    actionSubject: 'color-picker',
                    attributes: {
                        componentName: 'color-picker',
                        packageName: version_json_1.name,
                        packageVersion: version_json_1.version,
                    },
                })(createAnalyticsEvent);
            }
            return undefined;
        };
        _this.onChange = function (option) {
            _this.props.onChange(option.value, _this.changeAnalyticsCaller());
        };
        return _this;
    }
    ColorPickerWithoutAnalytics.prototype.render = function () {
        var _a = this.props, checkMarkColor = _a.checkMarkColor, cols = _a.cols, _b = _a.popperProps, popperProps = _b === void 0 ? defaultPopperProps : _b, _c = _a.label, label = _c === void 0 ? 'Color picker' : _c;
        var _d = getOptions(this.props), options = _d.options, value = _d.value;
        var fullLabel = label + ", " + value.label + " selected";
        return (React.createElement(select_1.PopupSelect, { target: function (_a) {
                var ref = _a.ref, isOpen = _a.isOpen;
                return (React.createElement(ColorPicker_1.ColorCardWrapper, { innerRef: ref },
                    React.createElement(Trigger_1.default, tslib_1.__assign({}, value, { label: fullLabel, expanded: isOpen }))));
            }, popperProps: popperProps, maxMenuWidth: "auto", minMenuWidth: "auto", options: options, "aria-label": fullLabel, value: value, components: components, onChange: this.onChange, 
            // never show search input
            searchThreshold: Number.MAX_VALUE, 
            // palette props
            cols: cols, checkMarkColor: checkMarkColor }));
    };
    return ColorPickerWithoutAnalytics;
}(React.Component));
exports.ColorPickerWithoutAnalytics = ColorPickerWithoutAnalytics;
exports.default = analytics_next_1.withAnalyticsContext({
    componentName: 'color-picker',
    packageName: version_json_1.name,
    packageVersion: version_json_1.version,
})(analytics_next_1.withAnalyticsEvents()(ColorPickerWithoutAnalytics));
//# sourceMappingURL=ColorPicker.js.map