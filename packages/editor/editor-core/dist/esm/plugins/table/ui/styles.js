import { __makeTemplateObject } from "tslib";
// @ts-ignore: unused variable
import { css } from 'styled-components';
import { borderRadius, colors, fontSize } from '@atlaskit/theme';
import { browser, tableMarginTop, tableMarginBottom, tableSharedStyle, akEditorTableToolbarSize, akEditorUnitZIndex, akEditorSmallZIndex, akEditorTableNumberColumnWidth, akEditorTableBorder, tableCellBorderWidth, tableResizeHandleWidth } from '@atlaskit/editor-common';
import { scrollbarStyles } from '../../../ui/styles';
import { TableCssClassName as ClassName } from '../types';
import { tableBackgroundBorderColor } from '@atlaskit/adf-schema';
var N40A = colors.N40A, B100 = colors.B100, B300 = colors.B300, N300 = colors.N300, B75 = colors.B75, N20 = colors.N20, N50 = colors.N50, R50 = colors.R50, R300 = colors.R300, R75 = colors.R75, N20A = colors.N20A, N60A = colors.N60A, N90 = colors.N90, N200 = colors.N200, N0 = colors.N0, R500 = colors.R500, Y50 = colors.Y50, Y200 = colors.Y200;
export var tableToolbarColor = N20;
export var tableBorderColor = N50;
export var tableFloatingControlsColor = N20;
export var tableCellSelectedColor = B75;
export var tableToolbarSelectedColor = B100;
export var tableBorderSelectedColor = B300;
export var tableCellDeleteColor = R50;
export var tableBorderDeleteColor = R300;
export var tableToolbarDeleteColor = R75;
export var tableToolbarSize = akEditorTableToolbarSize;
export var tableBorderRadiusSize = 3;
export var tableInsertColumnButtonSize = 20;
export var tableDeleteButtonSize = 16;
export var tableDeleteButtonOffset = 6;
export var tablePadding = 8;
export var contextualMenuTriggerSize = 16;
export var contextualMenuDropdownWidth = 180;
export var layoutButtonSize = 32;
export var tableInsertColumnButtonOffset = 3;
export var tableScrollbarOffset = 15;
export var tableMarginFullWidthMode = 2;
export var lineMarkerOffsetFromColumnControls = 13;
export var lineMarkerSize = 4;
export var columnControlsDecorationHeight = 25;
export var columnControlsZIndex = akEditorUnitZIndex * 10;
export var columnControlsSelectedZIndex = columnControlsZIndex + 1;
export var columnResizeHandleZIndex = columnControlsSelectedZIndex + 1;
var isIE11 = browser.ie_version === 11;
var InsertLine = function (css) { return "\n  ." + ClassName.CONTROLS_INSERT_LINE + " {\n    background: " + tableBorderSelectedColor + ";\n    display: none;\n    position: absolute;\n    z-index: " + akEditorUnitZIndex + ";\n    " + css + "\n  }\n"; };
var Marker = "\n  background-color: " + tableBorderColor + ";\n  position: absolute;\n  height: " + lineMarkerSize + "px;\n  width: " + lineMarkerSize + "px;\n  border-radius: 50%;\n  pointer-events: none;\n";
var InsertMarker = function (css) { return "\n  ." + ClassName.CONTROLS_INSERT_MARKER + " {\n    " + Marker + ";\n    " + css + "\n  }\n"; };
var Button = function (css) { return "\n  border-radius: " + borderRadius() + "px;\n  border-width: 0px;\n  display: inline-flex;\n  max-width: 100%;\n  text-align: center;\n  margin: 0px;\n  padding: 0px;\n  text-decoration: none;\n  transition: background 0.1s ease-out 0s, box-shadow 0.15s cubic-bezier(0.47, 0.03, 0.49, 1.38) 0s;\n  outline: none !important;\n  cursor: none;\n\n  > ." + ClassName.CONTROLS_BUTTON_ICON + " {\n    display: inline-flex;\n    max-height: 100%;\n    max-width: 100%;\n  }\n  " + css + "\n"; };
var HeaderButton = function (css) { return "\n  ." + ClassName.CONTROLS_BUTTON + " {\n    background: " + tableToolbarColor + ";\n    border-top: 1px solid " + tableBorderColor + ";\n    border-left: 1px solid " + tableBorderColor + ";\n    display: block;\n    box-sizing: border-box;\n    padding: 0;\n\n    :focus {\n      outline: none;\n    }\n    " + css + "\n  }\n\n  ." + ClassName.ROW_CONTROLS_BUTTON + "::after {\n    content: ' ';\n    background-color: transparent;\n    left: -15px;\n    top: 0;\n    position: absolute;\n    width: 15px;\n    height: 100%;\n    z-index: 1;\n  }\n\n  .active ." + ClassName.CONTROLS_BUTTON + " {\n    color: " + N0 + ";\n    background-color: " + tableToolbarSelectedColor + ";\n    border-color: " + tableBorderSelectedColor + ";\n  }\n"; };
var HeaderButtonHover = function () { return "\n  ." + ClassName.CONTROLS_BUTTON + ":hover {\n    color: " + N0 + ";\n    background-color: " + tableToolbarSelectedColor + ";\n    border-color: " + tableBorderSelectedColor + ";\n    cursor: pointer;\n  }\n"; };
var HeaderButtonDanger = function () { return "\n  ." + ClassName.HOVERED_CELL_IN_DANGER + " ." + ClassName.CONTROLS_BUTTON + " {\n    background-color: " + tableToolbarDeleteColor + ";\n    border-color: " + tableBorderDeleteColor + ";\n    position: relative;\n    z-index: " + akEditorUnitZIndex + ";\n  }\n"; };
var InsertButton = function () { return "\n  ." + ClassName.CONTROLS_INSERT_BUTTON_INNER + " {\n    position: absolute;\n    z-index: " + (akEditorUnitZIndex + 10) + ";\n    bottom: 0;\n  }\n  ." + ClassName.CONTROLS_INSERT_BUTTON_INNER + ",\n  ." + ClassName.CONTROLS_INSERT_BUTTON + " {\n    height: " + tableInsertColumnButtonSize + "px;\n    width: " + tableInsertColumnButtonSize + "px;\n  }\n  ." + ClassName.CONTROLS_INSERT_BUTTON + " {\n    " + Button("\n      background: white;\n      box-shadow: 0 4px 8px -2px " + N60A + ", 0 0 1px " + N60A + ";\n      color: " + N300 + ";\n    ") + "\n  }\n  ." + ClassName.CONTROLS_INSERT_LINE + " {\n    display: none;\n  }\n  &:hover ." + ClassName.CONTROLS_INSERT_LINE + " {\n    display: flex;\n  }\n"; };
var InsertButtonHover = function () { return "\n  ." + ClassName.CONTROLS_INSERT_BUTTON + ":hover {\n    background: " + B300 + ";\n    color: white;\n    cursor: pointer;\n  }\n"; };
var insertColumnButtonWrapper = "\n  " + InsertButton() + "\n  " + InsertButtonHover() + "\n  " + InsertLine("\n    width: 2px;\n    left: 9px;\n  ") + "\n";
var insertRowButtonWrapper = "\n  " + InsertButton() + "\n  " + InsertButtonHover() + "\n  " + InsertLine("\n    height: 2px;\n    top: -11px;\n    left: " + (tableInsertColumnButtonSize - 1) + "px;\n  ") + "\n";
var columnControlsLineMarker = "\n  ." + ClassName.TABLE_CONTAINER + "." + ClassName.WITH_CONTROLS + " table tr:first-child td,\n  ." + ClassName.TABLE_CONTAINER + "." + ClassName.WITH_CONTROLS + " table tr:first-child th {\n    position: relative;\n\n    &::before {\n      content: ' ';\n      " + Marker + ";\n      top: -" + (tableToolbarSize + lineMarkerOffsetFromColumnControls) + "px;\n      right: -" + lineMarkerSize / 2 + "px;\n    }\n  }\n";
var DeleteButton = "\n  ." + ClassName.CONTROLS_DELETE_BUTTON_WRAP + ",\n  ." + ClassName.CONTROLS_DELETE_BUTTON + " {\n    height: " + tableDeleteButtonSize + "px;\n    width: " + tableDeleteButtonSize + "px;\n  }\n  ." + ClassName.CONTROLS_DELETE_BUTTON_WRAP + " {\n    ." + ClassName.CONTROLS_DELETE_BUTTON + " {\n      " + Button("\n        background: " + N20A + ";\n        color: " + N300 + ";\n      ") + "\n    }\n  }\n\n  ." + ClassName.CONTROLS_DELETE_BUTTON + ":hover {\n    background: " + R300 + ";\n    color: white;\n    cursor: pointer;\n  }\n";
var OverflowShadow = "\n." + ClassName.TABLE_RIGHT_SHADOW + ",\n." + ClassName.TABLE_LEFT_SHADOW + "{\n  display: block;\n  height: calc(100% - " + (tableMarginTop + tableMarginBottom + tableToolbarSize - 2) + "px);\n  position: absolute;\n  pointer-events: none;\n  top: " + (tableMarginTop + tableToolbarSize - 1) + "px;\n  z-index: " + akEditorSmallZIndex + ";\n  width: 8px;\n}\n." + ClassName.TABLE_LEFT_SHADOW + " {\n  background: linear-gradient(\n    to left,\n    rgba(99, 114, 130, 0) 0,\n    " + N40A + " 100%\n  );\n  left: 0px;\n}\n." + ClassName.TABLE_RIGHT_SHADOW + " {\n  background: linear-gradient(\n    to right,\n    rgba(99, 114, 130, 0) 0,\n    " + N40A + " 100%\n  );\n  left: calc(100% + 2px);\n}\n." + ClassName.WITH_CONTROLS + " {\n  ." + ClassName.TABLE_RIGHT_SHADOW + ",\n  ." + ClassName.TABLE_LEFT_SHADOW + "{\n    height: calc(100% - " + (tableMarginTop + tableMarginBottom - 2) + "px);\n    top: " + (tableMarginTop - 1) + "px;\n  }\n  ." + ClassName.TABLE_LEFT_SHADOW + " {\n    border-left: 1px solid " + tableBorderColor + ";\n  }\n}\n";
var columnHeaderButton = function (css) { return "\n  background: " + tableToolbarColor + ";\n  border-top: 1px solid " + tableBorderColor + ";\n  border-left: 1px solid " + tableBorderColor + ";\n  display: block;\n  box-sizing: border-box;\n  padding: 0;\n\n  :focus {\n    outline: none;\n  }\n\n  " + css + "\n"; };
var columnHeaderButtonSelected = "\n  color: " + N0 + ";\n  background-color: " + tableToolbarSelectedColor + ";\n  border-color: " + tableBorderSelectedColor + ";\n  z-index: " + columnControlsSelectedZIndex + ";\n";
var columnControlsDecoration = "\n  ." + ClassName.COLUMN_CONTROLS_DECORATIONS + " {\n    display: none;\n    cursor: pointer;\n    position: absolute;\n    width: calc(100% + " + tableCellBorderWidth * 2 + "px);\n    left: -1px;\n    top: -" + (columnControlsDecorationHeight + tableCellBorderWidth) + "px;\n    height: " + columnControlsDecorationHeight + "px;\n\n    &::after {\n      content: ' ';\n\n      " + columnHeaderButton("\n        border-right: " + tableCellBorderWidth + "px solid " + tableBorderColor + ";\n        border-bottom: none;\n        height: " + tableToolbarSize + "px;\n        width: 100%;\n        position: absolute;\n        top: " + (columnControlsDecorationHeight - tableToolbarSize) + "px;\n        left: 0px;\n        z-index: " + columnControlsZIndex + ";\n      ") + "\n    }\n  }\n\n\n  ." + ClassName.TABLE_CONTAINER + " {\n    td, th {\n      overflow: hidden;\n    }\n\n    &." + ClassName.WITH_CONTROLS + " tr:first-child {\n      td, th {\n        overflow: visible;\n      }\n    }\n  }\n\n\n  ." + ClassName.WITH_CONTROLS + " ." + ClassName.COLUMN_CONTROLS_DECORATIONS + " {\n    display: block;\n  }\n\n  table tr:first-child td." + ClassName.TABLE_CELL + ",\n  table tr:first-child th." + ClassName.TABLE_HEADER_CELL + " {\n    &." + ClassName.COLUMN_SELECTED + ",\n    &." + ClassName.HOVERED_COLUMN + ",\n    &." + ClassName.HOVERED_TABLE + " {\n      ." + ClassName.COLUMN_CONTROLS_DECORATIONS + "::after {\n        " + columnHeaderButtonSelected + ";\n      }\n\n      &." + ClassName.HOVERED_CELL_IN_DANGER + " ." + ClassName.COLUMN_CONTROLS_DECORATIONS + "::after {\n        background-color: " + tableToolbarDeleteColor + ";\n        border: 1px solid " + tableBorderDeleteColor + ";\n        border-bottom: none;\n        z-index: " + akEditorUnitZIndex * 100 + ";\n      }\n    }\n  }\n\n  ." + ClassName.TABLE_SELECTED + " table tr:first-child td." + ClassName.TABLE_CELL + ",\n  ." + ClassName.TABLE_SELECTED + " table tr:first-child th." + ClassName.TABLE_HEADER_CELL + " {\n    ." + ClassName.COLUMN_CONTROLS_DECORATIONS + "::after {\n      " + columnHeaderButtonSelected + ";\n    }\n  }\n\n  table ." + ClassName.RESIZE_HANDLE + " {\n    position: absolute;\n    top: " + (columnControlsDecorationHeight - tableToolbarSize) + "px;\n    right: -" + (tableResizeHandleWidth / 2 + 2) + "px;\n    width: " + tableResizeHandleWidth * 2 + "px;\n    cursor: col-resize;\n    z-index: " + 1000 + ";\n\n    :after {\n      background: " + tableBorderSelectedColor + ";\n      display: none;\n      content: '';\n      height: 100%;\n      width: 2px;\n      position: absolute;\n      left: 50%;\n    }\n\n    :hover {\n      :after {\n        display: block;\n      }\n    }\n  }\n";
var hoveredDeleteButton = "\n  ." + ClassName.TABLE_CONTAINER + "." + ClassName.HOVERED_DELETE_BUTTON + " {\n    ." + ClassName.SELECTED_CELL + ",\n    ." + ClassName.COLUMN_SELECTED + ",\n    ." + ClassName.HOVERED_CELL + " {\n      border: 1px solid " + tableBorderDeleteColor + ";\n    }\n    ." + ClassName.SELECTED_CELL + "::after {\n      background: " + tableCellDeleteColor + ";\n    }\n  }\n";
var hoveredCell = "\n  :not(." + ClassName.IS_RESIZING + ") ." + ClassName.TABLE_CONTAINER + ":not(." + ClassName.HOVERED_DELETE_BUTTON + ") {\n    ." + ClassName.HOVERED_CELL + " {\n      position: relative;\n      border: 1px solid " + tableBorderSelectedColor + ";\n    }\n  }\n";
var hoveredWarningCell = "\n  :not(." + ClassName.IS_RESIZING + ") ." + ClassName.TABLE_CONTAINER + ":not(." + ClassName.HOVERED_DELETE_BUTTON + ") {\n    td." + ClassName.HOVERED_CELL_WARNING + " {\n      background-color: " + Y50 + " !important; // We need to override the background-color added to the cell\n      border: 1px solid " + Y200 + ";\n    }\n  }\n";
export var tableStyles = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  .", " button {\n    background: ", ";\n    color: ", ";\n    cursor: none;\n  }\n\n  .", ":not(.", ") button:hover {\n    background: ", ";\n    color: white !important;\n    cursor: pointer;\n  }\n\n\n  .ProseMirror {\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n\n    .", " {\n      ", "\n    }\n\n    .", " {\n      ", "\n    }\n\n    /* Delete button*/\n    ", "\n    /* Ends Delete button*/\n\n    ", "\n    .less-padding {\n      padding: 0 ", "px;\n\n      .", " {\n        padding: 0 ", "px;\n      }\n\n      &.", "[data-number-column='true'] {\n        padding-left: ", "px;\n      }\n    }\n\n    /* Breakout only works on top level */\n    > .", " .", "[data-layout='full-width'],\n    > .", " .", "[data-layout='wide'] {\n      margin-left: 50%;\n      transform: translateX(-50%);\n    }\n    > * .", " .", " {\n      width: 100% !important;\n    }\n\n    ", ";\n\n    /* Corner controls */\n    .", " {\n      width: ", "px;\n      height: ", "px;\n      display: none;\n\n      .", " {\n        position: relative;\n\n        ", ";\n      }\n\n      .", " {\n        position: relative;\n\n        ", ";\n      }\n    }\n    .", " {\n      position: absolute;\n      top: 0;\n      width: ", "px;\n      height: ", "px;\n      border: 1px solid ", ";\n      border-radius: 0;\n      border-top-left-radius: ", "px;\n      background: ", ";\n      box-sizing: border-box;\n      padding: 0;\n      :focus {\n        outline: none;\n      }\n    }\n    .active .", " {\n      border-color: ", ";\n      background: ", ";\n    }\n    .", "[data-number-column='true'] {\n      .", ",\n      .", " {\n        width: ", "px;\n      }\n      .", " .", " {\n        border-right-width: 0;\n      }\n    }\n    :not(.", ") .", ":hover {\n      border-color: ", ";\n      background: ", ";\n      cursor: pointer;\n    }\n    :not(.", ") .", ".", " {\n      border-color: ", ";\n      background: ", ";\n    }\n\n    /* Row controls */\n    .", " {\n      width: ", "px;\n      box-sizing: border-box;\n      display: none;\n      position: relative;\n\n      ", ";\n\n      .", " {\n        display: flex;\n        flex-direction: column;\n      }\n      .", ":last-child > button {\n        border-bottom-left-radius: ", "px;\n      }\n      .", " {\n        position: relative;\n        margin-top: -1px;\n      }\n      .", ":hover,\n      .", ".active,\n      .", ":hover {\n        z-index: ", ";\n      }\n\n      ", "\n    }\n    :not(.", ") .", " {\n      ", "\n      ", "\n    }\n\n    /* Numbered column */\n    .", " {\n      position: relative;\n      float: right;\n      margin-left: ", "px;\n      top: ", "px;\n      width: ", "px;\n      box-sizing: border-box;\n      border-left: 1px solid ", ";\n    }\n    .", " {\n      border-top: 1px solid ", ";\n      border-right: 1px solid ", ";\n      box-sizing: border-box;\n      margin-top: -1px;\n      padding: 10px 2px;\n      text-align: center;\n      font-size: ", "px;\n      background-color: ", ";\n      color: ", ";\n      border-color: ", ";\n\n      :first-child {\n        margin-top: 0;\n      }\n      :last-child {\n        border-bottom: 1px solid ", ";\n      }\n    }\n    .", " {\n      .", ",\n      .", " {\n        display: block;\n      }\n      .", " {\n        border-left: 0 none;\n        padding-left: 1px;\n        margin-left: 0;\n\n        .", ".active {\n          border-bottom: 1px solid ", ";\n          border-color: ", ";\n          background-color: ", ";\n          position: relative;\n          z-index: ", ";\n          color: ", ";\n        }\n      }\n    }\n    :not(.", ") .", " {\n      .", " {\n        cursor: pointer;\n      }\n      .", ":hover {\n        border-bottom: 1px solid ", ";\n        border-color: ", ";\n        background-color: ", ";\n        position: relative;\n        z-index: ", ";\n        color: ", ";\n      }\n      .", ".", " {\n        background-color: ", ";\n        border: 1px solid ", ";\n        border-left: 0;\n        color: ", ";\n        position: relative;\n        z-index: ", ";\n      }\n    }\n\n    /* Table */\n    .", " > table {\n      overflow: hidden visible;\n      table-layout: fixed;\n\n      .", " + * {\n        margin-top: 0;\n      }\n\n      .", ",\n      .", " {\n        position: relative;\n      }\n      /* Give selected cells a blue overlay */\n      .", "::after,\n      .", "::after {\n        z-index: ", ";\n        position: absolute;\n        content: '';\n        left: 0;\n        right: 0;\n        top: 0;\n        bottom: 0;\n        opacity: 0.3;\n        pointer-events: none;\n      }\n      .", " {\n        border: 1px solid ", ";\n      }\n      .", "::after {\n        background: ", ";\n      }\n      th.", "::after, td.", "::after {\n        background: ", ";\n      }\n    }\n    .", " {\n      position: absolute;\n      top: ", "px;\n    }\n    .", ".", " {\n      z-index: ", ";\n    }\n    .", " {\n      left: -", "px;\n    }\n    .", " {\n      padding-right: ", "px;\n      margin-right: -", "px;\n      padding-top: ", "px;\n      margin-top: -", "px;\n      padding-bottom: ", "px;\n      margin-bottom: -", "px;\n      z-index: ", ";\n      /* fixes gap cursor height */\n      overflow: ", ";\n      position: relative;\n    }\n  }\n\n  .ProseMirror.", " {\n    .", " {\n      overflow-x: ", ";\n      ", ";\n    }\n  }\n\n  .ProseMirror.", " {\n    cursor: col-resize;\n  }\n\n"], ["\n  .", " button {\n    background: ", ";\n    color: ", ";\n    cursor: none;\n  }\n\n  .", ":not(.", ") button:hover {\n    background: ", ";\n    color: white !important;\n    cursor: pointer;\n  }\n\n\n  .ProseMirror {\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n\n    .", " {\n      ", "\n    }\n\n    .", " {\n      ", "\n    }\n\n    /* Delete button*/\n    ", "\n    /* Ends Delete button*/\n\n    ", "\n    .less-padding {\n      padding: 0 ", "px;\n\n      .", " {\n        padding: 0 ", "px;\n      }\n\n      &.", "[data-number-column='true'] {\n        padding-left: ", "px;\n      }\n    }\n\n    /* Breakout only works on top level */\n    > .", " .", "[data-layout='full-width'],\n    > .", " .", "[data-layout='wide'] {\n      margin-left: 50%;\n      transform: translateX(-50%);\n    }\n    > * .", " .", " {\n      width: 100% !important;\n    }\n\n    ", ";\n\n    /* Corner controls */\n    .", " {\n      width: ", "px;\n      height: ", "px;\n      display: none;\n\n      .", " {\n        position: relative;\n\n        ",
    ";\n      }\n\n      .", " {\n        position: relative;\n\n        ",
    ";\n      }\n    }\n    .", " {\n      position: absolute;\n      top: 0;\n      width: ", "px;\n      height: ", "px;\n      border: 1px solid ", ";\n      border-radius: 0;\n      border-top-left-radius: ", "px;\n      background: ", ";\n      box-sizing: border-box;\n      padding: 0;\n      :focus {\n        outline: none;\n      }\n    }\n    .active .", " {\n      border-color: ", ";\n      background: ", ";\n    }\n    .", "[data-number-column='true'] {\n      .", ",\n      .", " {\n        width: ", "px;\n      }\n      .", " .", " {\n        border-right-width: 0;\n      }\n    }\n    :not(.", ") .", ":hover {\n      border-color: ", ";\n      background: ", ";\n      cursor: pointer;\n    }\n    :not(.", ") .", ".", " {\n      border-color: ", ";\n      background: ", ";\n    }\n\n    /* Row controls */\n    .", " {\n      width: ", "px;\n      box-sizing: border-box;\n      display: none;\n      position: relative;\n\n      ",
    ";\n\n      .", " {\n        display: flex;\n        flex-direction: column;\n      }\n      .", ":last-child > button {\n        border-bottom-left-radius: ", "px;\n      }\n      .", " {\n        position: relative;\n        margin-top: -1px;\n      }\n      .", ":hover,\n      .", ".active,\n      .", ":hover {\n        z-index: ", ";\n      }\n\n      ",
    "\n    }\n    :not(.", ") .", " {\n      ", "\n      ", "\n    }\n\n    /* Numbered column */\n    .", " {\n      position: relative;\n      float: right;\n      margin-left: ", "px;\n      top: ", "px;\n      width: ", "px;\n      box-sizing: border-box;\n      border-left: 1px solid ", ";\n    }\n    .", " {\n      border-top: 1px solid ", ";\n      border-right: 1px solid ", ";\n      box-sizing: border-box;\n      margin-top: -1px;\n      padding: 10px 2px;\n      text-align: center;\n      font-size: ", "px;\n      background-color: ", ";\n      color: ", ";\n      border-color: ", ";\n\n      :first-child {\n        margin-top: 0;\n      }\n      :last-child {\n        border-bottom: 1px solid ", ";\n      }\n    }\n    .", " {\n      .", ",\n      .", " {\n        display: block;\n      }\n      .", " {\n        border-left: 0 none;\n        padding-left: 1px;\n        margin-left: 0;\n\n        .", ".active {\n          border-bottom: 1px solid ", ";\n          border-color: ", ";\n          background-color: ", ";\n          position: relative;\n          z-index: ", ";\n          color: ", ";\n        }\n      }\n    }\n    :not(.", ") .", " {\n      .", " {\n        cursor: pointer;\n      }\n      .", ":hover {\n        border-bottom: 1px solid ", ";\n        border-color: ", ";\n        background-color: ", ";\n        position: relative;\n        z-index: ", ";\n        color: ", ";\n      }\n      .", ".", " {\n        background-color: ", ";\n        border: 1px solid ", ";\n        border-left: 0;\n        color: ", ";\n        position: relative;\n        z-index: ", ";\n      }\n    }\n\n    /* Table */\n    .", " > table {\n      overflow: hidden visible;\n      table-layout: fixed;\n\n      .", " + * {\n        margin-top: 0;\n      }\n\n      .", ",\n      .", " {\n        position: relative;\n      }\n      /* Give selected cells a blue overlay */\n      .", "::after,\n      .", "::after {\n        z-index: ", ";\n        position: absolute;\n        content: '';\n        left: 0;\n        right: 0;\n        top: 0;\n        bottom: 0;\n        opacity: 0.3;\n        pointer-events: none;\n      }\n      .", " {\n        border: 1px solid ", ";\n      }\n      .", "::after {\n        background: ", ";\n      }\n      th.", "::after, td.", "::after {\n        background: ", ";\n      }\n    }\n    .", " {\n      position: absolute;\n      top: ", "px;\n    }\n    .", ".", " {\n      z-index: ", ";\n    }\n    .", " {\n      left: -", "px;\n    }\n    .", " {\n      padding-right: ", "px;\n      margin-right: -", "px;\n      padding-top: ", "px;\n      margin-top: -", "px;\n      padding-bottom: ", "px;\n      margin-bottom: -", "px;\n      z-index: ", ";\n      /* fixes gap cursor height */\n      overflow: ", ";\n      position: relative;\n    }\n  }\n\n  .ProseMirror.", " {\n    .", " {\n      overflow-x: ", ";\n      ", ";\n    }\n  }\n\n  .ProseMirror.", " {\n    cursor: col-resize;\n  }\n\n"])), ClassName.LAYOUT_BUTTON, N20A, N300, ClassName.LAYOUT_BUTTON, ClassName.IS_RESIZING, B300, tableSharedStyle, columnControlsLineMarker, hoveredDeleteButton, hoveredCell, hoveredWarningCell, ClassName.CONTROLS_FLOATING_BUTTON_COLUMN, insertColumnButtonWrapper, ClassName.CONTROLS_FLOATING_BUTTON_ROW, insertRowButtonWrapper, DeleteButton, OverflowShadow, tablePadding, ClassName.ROW_CONTROLS_WRAPPER, tablePadding, ClassName.TABLE_CONTAINER, akEditorTableNumberColumnWidth + tablePadding - 1, ClassName.NODEVIEW_WRAPPER, ClassName.TABLE_CONTAINER, ClassName.NODEVIEW_WRAPPER, ClassName.TABLE_CONTAINER, ClassName.NODEVIEW_WRAPPER, ClassName.TABLE_CONTAINER, columnControlsDecoration, ClassName.CORNER_CONTROLS, tableToolbarSize + 1, tableToolbarSize + 1, ClassName.CORNER_CONTROLS_INSERT_ROW_MARKER, InsertMarker("\n          left: -11px;\n          top: 9px;\n        "), ClassName.CORNER_CONTROLS_INSERT_COLUMN_MARKER, InsertMarker("\n          right: -1px;\n          top: -12px;\n        "), ClassName.CONTROLS_CORNER_BUTTON, tableToolbarSize + 1, tableToolbarSize + 1, tableBorderColor, tableBorderRadiusSize, tableToolbarColor, ClassName.CONTROLS_CORNER_BUTTON, tableBorderSelectedColor, tableToolbarSelectedColor, ClassName.TABLE_CONTAINER, ClassName.CORNER_CONTROLS, ClassName.CONTROLS_CORNER_BUTTON, akEditorTableToolbarSize + akEditorTableNumberColumnWidth, ClassName.ROW_CONTROLS, ClassName.CONTROLS_BUTTON, ClassName.IS_RESIZING, ClassName.CONTROLS_CORNER_BUTTON, tableBorderSelectedColor, tableToolbarSelectedColor, ClassName.IS_RESIZING, ClassName.CONTROLS_CORNER_BUTTON, ClassName.HOVERED_CELL_IN_DANGER, tableBorderDeleteColor, tableToolbarDeleteColor, ClassName.ROW_CONTROLS, tableToolbarSize, InsertMarker("\n        bottom: -1px;\n        left: -11px;\n      "), ClassName.ROW_CONTROLS_INNER, ClassName.ROW_CONTROLS_BUTTON_WRAP, tableBorderRadiusSize, ClassName.ROW_CONTROLS_BUTTON_WRAP, ClassName.ROW_CONTROLS_BUTTON_WRAP, ClassName.ROW_CONTROLS_BUTTON_WRAP, ClassName.CONTROLS_BUTTON, akEditorUnitZIndex, HeaderButton("\n        border-bottom: 1px solid " + tableBorderColor + ";\n        border-right: 0px;\n        border-radius: 0;\n        height: 100%;\n        width: " + tableToolbarSize + "px;\n\n        ." + ClassName.CONTROLS_BUTTON_OVERLAY + " {\n          position: absolute;\n          width: 30px;\n          height: 50%;\n          right: 0;\n          bottom: 0;\n        }\n        ." + ClassName.CONTROLS_BUTTON_OVERLAY + ":first-child {\n          top: 0;\n        }\n      "), ClassName.IS_RESIZING, ClassName.ROW_CONTROLS, HeaderButtonHover(), HeaderButtonDanger(), ClassName.NUMBERED_COLUMN, akEditorTableToolbarSize - 1, akEditorTableToolbarSize, akEditorTableNumberColumnWidth + 1, akEditorTableBorder, ClassName.NUMBERED_COLUMN_BUTTON, akEditorTableBorder, akEditorTableBorder, fontSize(), tableToolbarColor, N200, akEditorTableBorder, akEditorTableBorder, ClassName.WITH_CONTROLS, ClassName.CORNER_CONTROLS, ClassName.ROW_CONTROLS, ClassName.NUMBERED_COLUMN, ClassName.NUMBERED_COLUMN_BUTTON, tableBorderSelectedColor, tableBorderSelectedColor, tableToolbarSelectedColor, akEditorUnitZIndex, N0, ClassName.IS_RESIZING, ClassName.WITH_CONTROLS, ClassName.NUMBERED_COLUMN_BUTTON, ClassName.NUMBERED_COLUMN_BUTTON, tableBorderSelectedColor, tableBorderSelectedColor, tableToolbarSelectedColor, akEditorUnitZIndex, N0, ClassName.NUMBERED_COLUMN_BUTTON, ClassName.HOVERED_CELL_IN_DANGER, tableToolbarDeleteColor, tableBorderDeleteColor, R500, akEditorUnitZIndex, ClassName.TABLE_NODE_WRAPPER, ClassName.COLUMN_CONTROLS_DECORATIONS, ClassName.SELECTED_CELL, ClassName.HOVERED_CELL_IN_DANGER, ClassName.SELECTED_CELL, ClassName.HOVERED_CELL_IN_DANGER, akEditorSmallZIndex, ClassName.SELECTED_CELL, tableBorderSelectedColor, ClassName.SELECTED_CELL, tableCellSelectedColor, ClassName.HOVERED_CELL_IN_DANGER, ClassName.HOVERED_CELL_IN_DANGER, tableCellDeleteColor, ClassName.ROW_CONTROLS_WRAPPER, tableMarginTop - 1, ClassName.ROW_CONTROLS_WRAPPER, ClassName.TABLE_LEFT_SHADOW, akEditorUnitZIndex, ClassName.ROW_CONTROLS_WRAPPER, tableToolbarSize, ClassName.TABLE_NODE_WRAPPER, tableInsertColumnButtonSize / 2, tableInsertColumnButtonSize / 2, tableInsertColumnButtonSize / 2, tableInsertColumnButtonSize / 2, tableScrollbarOffset, tableScrollbarOffset, akEditorUnitZIndex - 1, isIE11 ? 'none' : 'auto', ClassName.IS_RESIZING, ClassName.TABLE_NODE_WRAPPER, isIE11 ? 'none' : 'auto', !isIE11 ? scrollbarStyles : '', ClassName.RESIZE_CURSOR);
export var tableFloatingCellButtonStyles = css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  > div {\n    background: ", ";\n    border-radius: ", "px;\n    border: 2px solid ", ";\n    display: flex;\n    height: ", "px;\n    flex-direction: column;\n  }\n  button {\n    flex-direction: column;\n    padding: 0;\n    height: 100%;\n    display: flex;\n  }\n  span {\n    pointer-events: none;\n  }\n"], ["\n  > div {\n    background: ", ";\n    border-radius: ", "px;\n    border: 2px solid ", ";\n    display: flex;\n    height: ", "px;\n    flex-direction: column;\n  }\n  button {\n    flex-direction: column;\n    padding: 0;\n    height: 100%;\n    display: flex;\n  }\n  span {\n    pointer-events: none;\n  }\n"])), N20, borderRadius(), N0, contextualMenuTriggerSize - 2);
export var tableFullPageEditorStyles = css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  .ProseMirror .", " > table {\n    margin-left: 0;\n    margin-right: 0;\n    width: 100%;\n  }\n"], ["\n  .ProseMirror .", " > table {\n    margin-left: 0;\n    margin-right: 0;\n    width: 100%;\n  }\n"])), ClassName.TABLE_NODE_WRAPPER);
export var tableCommentEditorStyles = css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  .ProseMirror .", " > table {\n    margin-left: 0;\n    margin-right: 0;\n\n    ", ";\n  }\n"], ["\n  .ProseMirror .", " > table {\n    margin-left: 0;\n    margin-right: 0;\n\n    ", ";\n  }\n"])), ClassName.TABLE_NODE_WRAPPER, scrollbarStyles);
var colorsButtonPerLine = 7;
var colorsButtonRows = 3;
var colorButtonSizeWithPadding = 32;
export var tablePopupStyles = css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  .", " {\n    border-radius: ", "px;\n    background: white;\n    box-shadow: 0 4px 8px -2px ", ", 0 0 1px ", ";\n    display: block;\n    position: absolute;\n    width: ", "px;\n    height: ", "px;\n    top: 0;\n    left: ", "px;\n    padding: 8px;\n\n    > div {\n      padding: 0;\n    }\n  }\n\n  .", " {\n    border: 1px solid ", ";\n    border-radius: ", "px;\n    display: block;\n    width: 20px;\n    height: 20px;\n    position: relative;\n    left: -10px;\n\n    &::after {\n      content: '\u203A';\n      display: inline-block;\n      width: 1px;\n      position: relative;\n      left: 25px;\n      top: 9px;\n      color: ", ";\n    }\n  }\n"], ["\n  .", " {\n    border-radius: ", "px;\n    background: white;\n    box-shadow: 0 4px 8px -2px ", ", 0 0 1px ", ";\n    display: block;\n    position: absolute;\n    width: ", "px;\n    height: ", "px;\n    top: 0;\n    left: ", "px;\n    padding: 8px;\n\n    > div {\n      padding: 0;\n    }\n  }\n\n  .", " {\n    border: 1px solid ", ";\n    border-radius: ", "px;\n    display: block;\n    width: 20px;\n    height: 20px;\n    position: relative;\n    left: -10px;\n\n    &::after {\n      content: '\u203A';\n      display: inline-block;\n      width: 1px;\n      position: relative;\n      left: 25px;\n      top: 9px;\n      color: ", ";\n    }\n  }\n"])), ClassName.CONTEXTUAL_SUBMENU, borderRadius(), N60A, N60A, colorButtonSizeWithPadding * colorsButtonPerLine, colorButtonSizeWithPadding * colorsButtonRows, contextualMenuDropdownWidth, ClassName.CONTEXTUAL_MENU_ICON, tableBackgroundBorderColor, borderRadius(), N90);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=styles.js.map