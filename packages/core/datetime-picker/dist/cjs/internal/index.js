"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
exports.ClearIndicator = null;
// This date was chosen to clearly show date and time formats (day > 12)
// e.g. 18/02/1993 vs. 2/18/1993 and 1:00 PM vs 13:00
exports.placeholderDatetime = new Date(1993, 1, 18, 13);
exports.defaultTimes = [
    '09:00',
    '09:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '12:00',
    '12:30',
    '13:00',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
    '16:30',
    '17:00',
    '17:30',
    '18:00',
];
exports.defaultTimeFormat = 'h:mma';
exports.defaultDateFormat = 'YYYY/MM/DD';
function padToTwo(number) {
    return number <= 99 ? ("0" + number).slice(-2) : "" + number;
}
exports.padToTwo = padToTwo;
exports.DropdownIndicator = function (props) {
    // Wanted to use React.Component<{}> but that was having issues
    // https://github.com/basarat/typescript-book/blob/master/docs/jsx/react.md#react-jsx-tip-accept-a-component-that-can-act-on-props-and-be-rendered-using-jsx
    var Icon = props.selectProps.dropdownIndicatorIcon;
    return Icon ? react_1.default.createElement(Icon, null) : null;
};
function formatDateTimeZoneIntoIso(date, time, zone) {
    return date + "T" + time + zone;
}
exports.formatDateTimeZoneIntoIso = formatDateTimeZoneIntoIso;
//# sourceMappingURL=index.js.map