import { __assign, __extends } from "tslib";
import * as React from 'react';
import { SortOrder, compose } from '@atlaskit/editor-common';
import SortingIcon from '../../ui/SortingIcon';
import { MODE, PLATFORM } from '../../analytics/events';
import { ACTION, ACTION_SUBJECT, EVENT_TYPE } from '../../analytics/enums';
import { RendererCssClassName } from '../../consts';
var nextStatusOrder = function (currentSortOrder) {
    switch (currentSortOrder) {
        case SortOrder.NO_ORDER:
            return SortOrder.ASC;
        case SortOrder.ASC:
            return SortOrder.DESC;
        case SortOrder.DESC:
            return SortOrder.NO_ORDER;
    }
    return SortOrder.NO_ORDER;
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
        __extends(WithCellProps, _super);
        function WithCellProps() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        WithCellProps.prototype.render = function () {
            var _a = this.props, children = _a.children, className = _a.className, onClick = _a.onClick, colwidth = _a.colwidth, rowspan = _a.rowspan, colspan = _a.colspan, background = _a.background;
            return (React.createElement(WrapperComponent, __assign({ rowSpan: rowspan, colSpan: colspan, style: getStyle(background), onClick: onClick, className: className }, getDataAttributes(colwidth)), children));
        };
        return WithCellProps;
    }(React.Component));
};
export var withSortableColumn = function (WrapperComponent) {
    return /** @class */ (function (_super) {
        __extends(WithSortableColumn, _super);
        function WithSortableColumn(props) {
            var _this = _super.call(this, props) || this;
            _this.onClick = function () {
                var _a = _this.props, fireAnalyticsEvent = _a.fireAnalyticsEvent, onSorting = _a.onSorting, columnIndex = _a.columnIndex, sortOrdered = _a.sortOrdered;
                if (onSorting && columnIndex != null) {
                    var sortOrder = nextStatusOrder(sortOrdered);
                    onSorting(columnIndex, sortOrder);
                    fireAnalyticsEvent &&
                        fireAnalyticsEvent({
                            action: ACTION.SORT_COLUMN,
                            actionSubject: ACTION_SUBJECT.TABLE,
                            attributes: {
                                platform: PLATFORM.WEB,
                                mode: MODE.RENDERER,
                                columnIndex: columnIndex,
                                sortOrder: sortOrder,
                            },
                            eventType: EVENT_TYPE.TRACK,
                        });
                }
                else {
                    fireAnalyticsEvent &&
                        fireAnalyticsEvent({
                            action: ACTION.SORT_COLUMN_NOT_ALLOWED,
                            actionSubject: ACTION_SUBJECT.TABLE,
                            attributes: {
                                platform: PLATFORM.WEB,
                                mode: MODE.RENDERER,
                            },
                            eventType: EVENT_TYPE.TRACK,
                        });
                }
            };
            return _this;
        }
        WithSortableColumn.prototype.render = function () {
            var _a = this.props, allowColumnSorting = _a.allowColumnSorting, onSorting = _a.onSorting, children = _a.children, sortOrdered = _a.sortOrdered, isHeaderRow = _a.isHeaderRow;
            var sortOrderedClassName = sortOrdered === SortOrder.NO_ORDER
                ? RendererCssClassName.SORTABLE_COLUMN_NO_ORDER
                : '';
            if (!allowColumnSorting || !isHeaderRow) {
                return React.createElement(WrapperComponent, __assign({}, this.props));
            }
            var className = RendererCssClassName.SORTABLE_COLUMN;
            if (!onSorting) {
                className = className + " " + RendererCssClassName.SORTABLE_COLUMN_NOT_ALLOWED;
            }
            return (React.createElement(WrapperComponent, __assign({}, this.props, { className: className, onClick: this.onClick }),
                React.createElement(React.Fragment, null,
                    children,
                    React.createElement("figure", { className: RendererCssClassName.SORTABLE_COLUMN_ICON + " " + sortOrderedClassName },
                        React.createElement(SortingIcon, { isSortingAllowed: !!onSorting, sortOrdered: sortOrdered })))));
        };
        return WithSortableColumn;
    }(React.Component));
};
export var TableHeader = compose(withSortableColumn, withCellProps)('th');
export var TableCell = withCellProps('td');
//# sourceMappingURL=tableCell.js.map