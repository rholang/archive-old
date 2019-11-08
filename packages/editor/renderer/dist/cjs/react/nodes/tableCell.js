"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var editor_common_1 = require("@atlaskit/editor-common");
var SortingIcon_1 = tslib_1.__importDefault(require("../../ui/SortingIcon"));
var events_1 = require("../../analytics/events");
var enums_1 = require("../../analytics/enums");
var consts_1 = require("../../consts");
var nextStatusOrder = function (currentSortOrder) {
    switch (currentSortOrder) {
        case editor_common_1.SortOrder.NO_ORDER:
            return editor_common_1.SortOrder.ASC;
        case editor_common_1.SortOrder.ASC:
            return editor_common_1.SortOrder.DESC;
        case editor_common_1.SortOrder.DESC:
            return editor_common_1.SortOrder.NO_ORDER;
    }
    return editor_common_1.SortOrder.NO_ORDER;
};
var getDataAttributes = function (colwidth) {
    var attrs = {};
    if (colwidth) {
        attrs['data-colwidth'] = colwidth.join(',');
    }
    return attrs;
};
var getStyle = function (background) {
    var style = {};
    if (background) {
        style.backgroundColor = background;
    }
    return style;
};
var withCellProps = function (WrapperComponent) {
    return /** @class */ (function (_super) {
        tslib_1.__extends(WithCellProps, _super);
        function WithCellProps() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        WithCellProps.prototype.render = function () {
            var _a = this.props, children = _a.children, className = _a.className, onClick = _a.onClick, colwidth = _a.colwidth, rowspan = _a.rowspan, colspan = _a.colspan, background = _a.background;
            return (React.createElement(WrapperComponent, tslib_1.__assign({ rowSpan: rowspan, colSpan: colspan, style: getStyle(background), onClick: onClick, className: className }, getDataAttributes(colwidth)), children));
        };
        return WithCellProps;
    }(React.Component));
};
exports.withSortableColumn = function (WrapperComponent) {
    return /** @class */ (function (_super) {
        tslib_1.__extends(WithSortableColumn, _super);
        function WithSortableColumn(props) {
            var _this = _super.call(this, props) || this;
            _this.onClick = function () {
                var _a = _this.props, fireAnalyticsEvent = _a.fireAnalyticsEvent, onSorting = _a.onSorting, columnIndex = _a.columnIndex, sortOrdered = _a.sortOrdered;
                if (onSorting && columnIndex != null) {
                    var sortOrder = nextStatusOrder(sortOrdered);
                    onSorting(columnIndex, sortOrder);
                    fireAnalyticsEvent &&
                        fireAnalyticsEvent({
                            action: enums_1.ACTION.SORT_COLUMN,
                            actionSubject: enums_1.ACTION_SUBJECT.TABLE,
                            attributes: {
                                platform: events_1.PLATFORM.WEB,
                                mode: events_1.MODE.RENDERER,
                                columnIndex: columnIndex,
                                sortOrder: sortOrder,
                            },
                            eventType: enums_1.EVENT_TYPE.TRACK,
                        });
                }
                else {
                    fireAnalyticsEvent &&
                        fireAnalyticsEvent({
                            action: enums_1.ACTION.SORT_COLUMN_NOT_ALLOWED,
                            actionSubject: enums_1.ACTION_SUBJECT.TABLE,
                            attributes: {
                                platform: events_1.PLATFORM.WEB,
                                mode: events_1.MODE.RENDERER,
                            },
                            eventType: enums_1.EVENT_TYPE.TRACK,
                        });
                }
            };
            return _this;
        }
        WithSortableColumn.prototype.render = function () {
            var _a = this.props, allowColumnSorting = _a.allowColumnSorting, onSorting = _a.onSorting, children = _a.children, sortOrdered = _a.sortOrdered, isHeaderRow = _a.isHeaderRow;
            var sortOrderedClassName = sortOrdered === editor_common_1.SortOrder.NO_ORDER
                ? consts_1.RendererCssClassName.SORTABLE_COLUMN_NO_ORDER
                : '';
            if (!allowColumnSorting || !isHeaderRow) {
                return React.createElement(WrapperComponent, tslib_1.__assign({}, this.props));
            }
            var className = consts_1.RendererCssClassName.SORTABLE_COLUMN;
            if (!onSorting) {
                className = className + " " + consts_1.RendererCssClassName.SORTABLE_COLUMN_NOT_ALLOWED;
            }
            return (React.createElement(WrapperComponent, tslib_1.__assign({}, this.props, { className: className, onClick: this.onClick }),
                React.createElement(React.Fragment, null,
                    children,
                    React.createElement("figure", { className: consts_1.RendererCssClassName.SORTABLE_COLUMN_ICON + " " + sortOrderedClassName },
                        React.createElement(SortingIcon_1.default, { isSortingAllowed: !!onSorting, sortOrdered: sortOrdered })))));
        };
        return WithSortableColumn;
    }(React.Component));
};
exports.TableHeader = editor_common_1.compose(exports.withSortableColumn, withCellProps)('th');
exports.TableCell = withCellProps('td');
//# sourceMappingURL=tableCell.js.map