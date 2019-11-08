"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var locale_1 = require("@atlaskit/locale");
var calendar_base_1 = require("calendar-base");
var lodash_pick_1 = tslib_1.__importDefault(require("lodash.pick"));
var react_1 = tslib_1.__importStar(require("react"));
var react_uid_1 = require("react-uid");
var analytics_next_1 = require("@atlaskit/analytics-next");
var version_json_1 = require("../version.json");
var util_1 = require("../util");
var Date_1 = tslib_1.__importDefault(require("./Date"));
var Heading_1 = tslib_1.__importDefault(require("./Heading"));
var Calendar_1 = require("../styled/Calendar");
var arrowKeys = {
    ArrowDown: 'down',
    ArrowLeft: 'left',
    ArrowRight: 'right',
    ArrowUp: 'up',
};
var daysPerWeek = 7;
var monthsPerYear = 12;
function getUniqueId(prefix) {
    return prefix + "-" + react_uid_1.uid({ id: prefix });
}
function padToTwo(number) {
    return number <= 99 ? ("0" + number).slice(-2) : "" + number;
}
var Calendar = /** @class */ (function (_super) {
    tslib_1.__extends(Calendar, _super);
    function Calendar(props) {
        var _this = _super.call(this, props) || this;
        _this.container = null;
        // All state needs to be accessed via this function so that the state is mapped from props
        // correctly to allow controlled/uncontrolled usage.
        _this.getState = function () {
            return tslib_1.__assign(tslib_1.__assign({}, _this.state), lodash_pick_1.default(_this.props, [
                'day',
                'disabled',
                'selected',
                'month',
                'previouslySelected',
                'year',
                'today',
            ]));
        };
        _this.handleContainerKeyDown = function (e) {
            var key = e.key;
            var arrowKey = arrowKeys[key];
            if (key === 'Enter' || key === ' ') {
                var _a = _this.getState(), selectDay = _a.day, selectMonth = _a.month, selectYear = _a.year;
                e.preventDefault();
                _this.triggerOnSelect({
                    day: selectDay,
                    year: selectYear,
                    month: selectMonth,
                });
            }
            else if (arrowKey) {
                e.preventDefault();
                _this.navigate(arrowKey);
            }
        };
        _this.handleClickDay = function (_a) {
            var year = _a.year, month = _a.month, day = _a.day;
            _this.triggerOnSelect({ year: year, month: month, day: day });
        };
        _this.handleClickNext = function () {
            var _a = tslib_1.__assign(tslib_1.__assign({}, _this.getState()), _this.getNextMonth()), day = _a.day, month = _a.month, year = _a.year;
            _this.triggerOnChange({ day: day, month: month, year: year, type: 'next' });
        };
        _this.handleClickPrev = function () {
            var _a = tslib_1.__assign(tslib_1.__assign({}, _this.getState()), _this.getPrevMonth()), day = _a.day, month = _a.month, year = _a.year;
            _this.triggerOnChange({ day: day, month: month, year: year, type: 'prev' });
        };
        _this.handleContainerBlur = function (event) {
            _this.setState({ day: 0 });
            _this.props.onBlur(event);
        };
        _this.handleContainerFocus = function (event) {
            _this.setState({ day: _this.getState().day || 1 });
            _this.props.onFocus(event);
        };
        _this.refContainer = function (e) {
            _this.container = e;
        };
        _this.triggerOnChange = function (_a) {
            var year = _a.year, month = _a.month, day = _a.day, type = _a.type;
            var iso = util_1.dateToString({ year: year, month: month, day: day });
            _this.props.onChange({ day: day, month: month, year: year, iso: iso, type: type });
            _this.setState({
                day: day,
                month: month,
                year: year,
            });
        };
        _this.triggerOnSelect = function (_a) {
            var year = _a.year, month = _a.month, day = _a.day;
            var iso = util_1.dateToString({ year: year, month: month, day: day });
            _this.props.onSelect({ day: day, month: month, year: year, iso: iso });
            _this.setState({
                previouslySelected: _this.getState().selected,
                selected: [iso],
            });
        };
        _this.getCalendarWeeks = function (mappedState) {
            var day = mappedState.day, year = mappedState.year, month = mappedState.month, disabled = mappedState.disabled, previouslySelected = mappedState.previouslySelected, selected = mappedState.selected, today = mappedState.today;
            var testId = _this.props.testId;
            var calendar = _this.calendar.getCalendar(year, month - 1);
            var weeks = [];
            var shouldDisplaySixthWeek = calendar.length % 6;
            // Some months jump between 5 and 6 weeks to display. In some cases 4 (Feb
            // with the 1st on a Monday etc). This ensures the UI doesn't jump around by
            // catering to always showing 6 weeks.
            if (shouldDisplaySixthWeek) {
                var lastDayIsSibling = calendar[calendar.length - 1].siblingMonth;
                var sliceStart = lastDayIsSibling ? daysPerWeek : 0;
                calendar.push.apply(calendar, tslib_1.__spread(_this.calendar
                    .getCalendar(year, month)
                    .slice(sliceStart, sliceStart + daysPerWeek)
                    .map(function (date) { return (tslib_1.__assign(tslib_1.__assign({}, date), { siblingMonth: true })); })));
            }
            calendar.forEach(function (date) {
                var dateAsString = util_1.dateToString(date, { fixMonth: true });
                var week;
                if (date.weekDay === 0) {
                    week = { key: dateAsString, components: [] };
                    weeks.push(week);
                }
                else {
                    week = weeks[weeks.length - 1];
                }
                var isDisabled = disabled.indexOf(dateAsString) > -1;
                var isFocused = day === date.day && !date.siblingMonth;
                var isPreviouslySelected = !isDisabled && previouslySelected.indexOf(dateAsString) > -1;
                var isSelected = !isDisabled && selected.indexOf(dateAsString) > -1;
                var isSiblingMonth = date.siblingMonth;
                var isToday = today === dateAsString;
                week.components.push(react_1.default.createElement(Date_1.default, { disabled: isDisabled, focused: isFocused, isToday: isToday, key: dateAsString, month: date.month + 1, onClick: _this.handleClickDay, previouslySelected: isPreviouslySelected, selected: isSelected, sibling: isSiblingMonth, year: date.year, testId: testId }, date.day));
            });
            return weeks;
        };
        var now = new Date();
        var thisDay = now.getDate();
        var thisMonth = now.getMonth() + 1;
        var thisYear = now.getFullYear();
        _this.state = {
            day: _this.props.defaultDay || thisDay,
            disabled: _this.props.defaultDisabled,
            selected: _this.props.defaultSelected,
            month: _this.props.defaultMonth || thisMonth,
            previouslySelected: _this.props.defaultPreviouslySelected,
            year: _this.props.defaultYear || thisYear,
            today: _this.props.today ||
                thisYear + "-" + padToTwo(thisMonth) + "-" + padToTwo(thisDay),
            l10n: locale_1.createLocalizationProvider(_this.props.locale),
        };
        _this.calendar = new calendar_base_1.Calendar({
            siblingMonths: true,
            weekNumbers: true,
        });
        return _this;
    }
    Calendar.prototype.componentWillReceiveProps = function (nextProps) {
        if (this.props.locale !== nextProps.locale) {
            this.setState({ l10n: locale_1.createLocalizationProvider(nextProps.locale) });
        }
    };
    Calendar.prototype.getNextMonth = function () {
        var _a = this.getState(), month = _a.month, year = _a.year;
        if (month === monthsPerYear) {
            month = 1;
            year += 1;
        }
        else {
            month += 1;
        }
        return { month: month, year: year };
    };
    Calendar.prototype.getPrevMonth = function () {
        var _a = this.getState(), month = _a.month, year = _a.year;
        if (month === 1) {
            month = monthsPerYear;
            year -= 1;
        }
        else {
            month -= 1;
        }
        return { month: month, year: year };
    };
    Calendar.prototype.focus = function () {
        if (this.container) {
            this.container.focus();
        }
    };
    Calendar.prototype.navigate = function (type) {
        var _a = this.getState(), day = _a.day, month = _a.month, year = _a.year;
        if (type === 'down') {
            var next = day + daysPerWeek;
            var daysInMonth = calendar_base_1.Calendar.daysInMonth(year, month - 1);
            if (next > daysInMonth) {
                var _b = this.getNextMonth(), nextMonth = _b.month, nextYear = _b.year;
                this.triggerOnChange({
                    year: nextYear,
                    month: nextMonth,
                    day: next - daysInMonth,
                    type: type,
                });
            }
            else {
                this.triggerOnChange({ year: year, month: month, day: next, type: type });
            }
        }
        else if (type === 'left') {
            var prev = day - 1;
            if (prev < 1) {
                var _c = this.getPrevMonth(), prevMonth = _c.month, prevYear = _c.year;
                var prevDay = calendar_base_1.Calendar.daysInMonth(prevYear, prevMonth - 1);
                this.triggerOnChange({
                    year: prevYear,
                    month: prevMonth,
                    day: prevDay,
                    type: type,
                });
            }
            else {
                this.triggerOnChange({ year: year, month: month, day: prev, type: type });
            }
        }
        else if (type === 'right') {
            var next = day + 1;
            var daysInMonth = calendar_base_1.Calendar.daysInMonth(year, month - 1);
            if (next > daysInMonth) {
                var _d = this.getNextMonth(), nextMonth = _d.month, nextYear = _d.year;
                this.triggerOnChange({
                    year: nextYear,
                    month: nextMonth,
                    day: 1,
                    type: type,
                });
            }
            else {
                this.triggerOnChange({ year: year, month: month, day: next, type: type });
            }
        }
        else if (type === 'up') {
            var prev = day - daysPerWeek;
            if (prev < 1) {
                var _e = this.getPrevMonth(), prevMonth = _e.month, prevYear = _e.year;
                var prevDay = calendar_base_1.Calendar.daysInMonth(prevYear, prevMonth - 1) + prev;
                this.triggerOnChange({
                    year: prevYear,
                    month: prevMonth,
                    day: prevDay,
                    type: type,
                });
            }
            else {
                this.triggerOnChange({ year: year, month: month, day: prev, type: type });
            }
        }
    };
    Calendar.prototype.render = function () {
        var mappedState = this.getState();
        var l10n = mappedState.l10n;
        var _a = this.props, innerProps = _a.innerProps, testId = _a.testId;
        var announceId = getUniqueId('announce');
        return (react_1.default.createElement("div", tslib_1.__assign({}, innerProps, { onBlur: this.handleContainerBlur, onFocus: this.handleContainerFocus, onKeyDown: this.handleContainerKeyDown, role: "presentation" }),
            react_1.default.createElement(Calendar_1.Announcer, { id: announceId, "aria-live": "assertive", "aria-relevant": "text" }, new Date(mappedState.year, mappedState.month, mappedState.day).toString()),
            react_1.default.createElement(Calendar_1.Wrapper, { "aria-describedby": announceId, "aria-label": "calendar", innerRef: this.refContainer, role: "grid", tabIndex: 0 },
                react_1.default.createElement(Heading_1.default
                // The month number needs to be translated to index in the month
                // name array e.g. 1 (January) -> 0
                , { 
                    // The month number needs to be translated to index in the month
                    // name array e.g. 1 (January) -> 0
                    monthLongTitle: l10n.getMonthsLong()[mappedState.month - 1], year: mappedState.year, handleClickNext: this.handleClickNext, handleClickPrev: this.handleClickPrev, testId: testId }),
                react_1.default.createElement(Calendar_1.CalendarTable, { role: "presentation" },
                    react_1.default.createElement(Calendar_1.CalendarThead, null,
                        react_1.default.createElement("tr", null, l10n.getDaysShort().map(function (shortDay) { return (react_1.default.createElement(Calendar_1.CalendarTh, { key: shortDay }, shortDay)); }))),
                    react_1.default.createElement(Calendar_1.CalendarTbody, { "data-testid": testId && testId + "--month" }, this.getCalendarWeeks(mappedState).map(function (week) { return (react_1.default.createElement("tr", { key: week.key }, week.components)); }))))));
    };
    Calendar.defaultProps = {
        onBlur: function () { },
        onChange: function () { },
        onFocus: function () { },
        onSelect: function () { },
        innerProps: {},
        defaultDay: 0,
        defaultDisabled: [],
        defaultSelected: [],
        defaultPreviouslySelected: [],
        locale: 'en-US',
    };
    return Calendar;
}(react_1.Component));
exports.CalendarWithoutAnalytics = Calendar;
var createAndFireEventOnAtlaskit = analytics_next_1.createAndFireEvent('atlaskit');
exports.default = analytics_next_1.withAnalyticsContext({
    componentName: 'calendar',
    packageName: version_json_1.name,
    packageVersion: version_json_1.version,
})(analytics_next_1.withAnalyticsEvents({
    onChange: createAndFireEventOnAtlaskit({
        action: 'changed',
        actionSubject: 'calendarDate',
        attributes: {
            componentName: 'calendar',
            packageName: version_json_1.name,
            packageVersion: version_json_1.version,
        },
    }),
    onSelect: createAndFireEventOnAtlaskit({
        action: 'selected',
        actionSubject: 'calendarDate',
        attributes: {
            componentName: 'calendar',
            packageName: version_json_1.name,
            packageVersion: version_json_1.version,
        },
    }),
})(Calendar));
//# sourceMappingURL=Calendar.js.map