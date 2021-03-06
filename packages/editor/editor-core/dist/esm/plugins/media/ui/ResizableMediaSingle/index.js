import { __assign, __awaiter, __extends, __generator } from "tslib";
import * as React from 'react';
import { findParentNodeOfTypeClosestToPos, hasParentNodeOfType, } from 'prosemirror-utils';
import { getMediaClient } from '@atlaskit/media-client';
import { akEditorWideLayoutWidth, calcPxFromColumns, calcPctFromPx, akEditorBreakoutPadding, calcColumnsFromPx, } from '@atlaskit/editor-common';
import { Wrapper } from './styled';
import Resizer from './Resizer';
import { snapTo, handleSides, imageAlignmentMap } from './utils';
import { calcMediaPxWidth, wrappedLayouts } from '../../utils/media-single';
import { getPluginState } from '../../../table/pm-plugins/table-resizing/plugin';
var ResizableMediaSingle = /** @class */ (function (_super) {
    __extends(ResizableMediaSingle, _super);
    function ResizableMediaSingle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            offsetLeft: _this.calcOffsetLeft(),
            // We default to true until we resolve the file type
            isVideoFile: true,
        };
        _this.calcNewSize = function (newWidth, stop) {
            var _a = _this.props, layout = _a.layout, state = _a.state;
            var newPct = calcPctFromPx(newWidth, _this.props.lineLength) * 100;
            _this.setState({ resizedPctWidth: newPct });
            var newLayout = hasParentNodeOfType(state.schema.nodes.table)(state.selection)
                ? layout
                : _this.calcUnwrappedLayout(newPct, newWidth);
            if (newPct <= 100) {
                if (_this.wrappedLayout && (stop ? newPct !== 100 : true)) {
                    newLayout = layout;
                }
                return {
                    width: newPct,
                    layout: newLayout,
                };
            }
            else {
                return {
                    width: _this.props.pctWidth || null,
                    layout: newLayout,
                };
            }
        };
        _this.calcUnwrappedLayout = function (pct, width) {
            if (pct <= 100) {
                return 'center';
            }
            if (width <= akEditorWideLayoutWidth) {
                return 'wide';
            }
            return 'full-width';
        };
        _this.calcColumnLeftOffset = function () {
            var offsetLeft = _this.state.offsetLeft;
            return _this.insideInlineLike
                ? calcColumnsFromPx(offsetLeft, _this.props.lineLength, _this.props.gridSize)
                : 0;
        };
        _this.calcPxWidth = function (useLayout) {
            var _a = _this.props, origWidth = _a.width, origHeight = _a.height, layout = _a.layout, pctWidth = _a.pctWidth, lineLength = _a.lineLength, containerWidth = _a.containerWidth, fullWidthMode = _a.fullWidthMode, getPos = _a.getPos, state = _a.state;
            var resizedPctWidth = _this.state.resizedPctWidth;
            return calcMediaPxWidth({
                origWidth: origWidth,
                origHeight: origHeight,
                pctWidth: pctWidth,
                state: state,
                containerWidth: { width: containerWidth, lineLength: lineLength },
                isFullWidthModeEnabled: fullWidthMode,
                layout: useLayout || layout,
                pos: getPos(),
                resizedPctWidth: resizedPctWidth,
            });
        };
        _this.highlights = function (newWidth, snapPoints) {
            var snapWidth = snapTo(newWidth, snapPoints);
            var _a = _this.props.view.state.schema.nodes, layoutColumn = _a.layoutColumn, table = _a.table;
            if (_this.$pos &&
                !!findParentNodeOfTypeClosestToPos(_this.$pos, [layoutColumn, table])) {
                return [];
            }
            if (snapWidth > akEditorWideLayoutWidth) {
                return ['full-width'];
            }
            var _b = _this.props, layout = _b.layout, lineLength = _b.lineLength, gridSize = _b.gridSize;
            var columns = calcColumnsFromPx(snapWidth, lineLength, gridSize);
            var columnWidth = Math.round(columns);
            var highlight = [];
            if (layout === 'wrap-left' || layout === 'align-start') {
                highlight.push(0, columnWidth);
            }
            else if (layout === 'wrap-right' || layout === 'align-end') {
                highlight.push(gridSize, gridSize - columnWidth);
            }
            else if (_this.insideInlineLike) {
                highlight.push(Math.round(columns + _this.calcColumnLeftOffset()));
            }
            else {
                highlight.push(Math.floor((gridSize - columnWidth) / 2), Math.ceil((gridSize + columnWidth) / 2));
            }
            return highlight;
        };
        return _this;
    }
    ResizableMediaSingle.prototype.componentDidUpdate = function () {
        var offsetLeft = this.calcOffsetLeft();
        if (offsetLeft !== this.state.offsetLeft && offsetLeft >= 0) {
            this.setState({ offsetLeft: offsetLeft });
        }
        return true;
    };
    Object.defineProperty(ResizableMediaSingle.prototype, "wrappedLayout", {
        get: function () {
            return wrappedLayouts.indexOf(this.props.layout) > -1;
        },
        enumerable: true,
        configurable: true
    });
    ResizableMediaSingle.prototype.componentDidMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var viewMediaClientConfig;
            return __generator(this, function (_a) {
                viewMediaClientConfig = this.props.viewMediaClientConfig;
                if (viewMediaClientConfig) {
                    this.checkVideoFile(viewMediaClientConfig);
                }
                return [2 /*return*/];
            });
        });
    };
    ResizableMediaSingle.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        if (this.props.viewMediaClientConfig !== nextProps.viewMediaClientConfig) {
            this.checkVideoFile(nextProps.viewMediaClientConfig);
        }
        if (this.props.layout !== nextProps.layout) {
            this.checkLayout(this.props.layout, nextProps.layout);
        }
    };
    ResizableMediaSingle.prototype.checkVideoFile = function (viewMediaClientConfig) {
        return __awaiter(this, void 0, void 0, function () {
            var $pos, mediaNode, mediaClient, state;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        $pos = this.$pos;
                        if (!$pos || !viewMediaClientConfig) {
                            return [2 /*return*/];
                        }
                        mediaNode = this.props.state.doc.nodeAt($pos.pos + 1);
                        if (!mediaNode || !mediaNode.attrs.id) {
                            return [2 /*return*/];
                        }
                        mediaClient = getMediaClient(viewMediaClientConfig);
                        return [4 /*yield*/, mediaClient.file.getCurrentState(mediaNode.attrs.id, {
                                collectionName: mediaNode.attrs.collection,
                            })];
                    case 1:
                        state = _a.sent();
                        if (state && state.status !== 'error' && state.mediaType === 'image') {
                            this.setState({
                                isVideoFile: false,
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * When returning to center layout from a wrapped/aligned layout, it might actually
     * be wide or full-width
     */
    ResizableMediaSingle.prototype.checkLayout = function (oldLayout, newLayout) {
        var resizedPctWidth = this.state.resizedPctWidth;
        if (wrappedLayouts.indexOf(oldLayout) > -1 &&
            newLayout === 'center' &&
            resizedPctWidth) {
            var layout = this.calcUnwrappedLayout(resizedPctWidth, this.calcPxWidth(newLayout));
            this.props.updateSize(resizedPctWidth, layout);
        }
    };
    Object.defineProperty(ResizableMediaSingle.prototype, "$pos", {
        get: function () {
            var pos = this.props.getPos();
            if (Number.isNaN(pos) || typeof pos !== 'number') {
                return null;
            }
            // need to pass view because we may not get updated props in time
            return this.props.view.state.doc.resolve(pos);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResizableMediaSingle.prototype, "gridWidth", {
        /**
         * The maxmimum number of grid columns this node can resize to.
         */
        get: function () {
            var gridSize = this.props.gridSize;
            return !(this.wrappedLayout || this.insideInlineLike)
                ? gridSize / 2
                : gridSize;
        },
        enumerable: true,
        configurable: true
    });
    ResizableMediaSingle.prototype.calcOffsetLeft = function () {
        var offsetLeft = 0;
        if (this.wrapper && this.insideInlineLike) {
            var currentNode = this.wrapper;
            var boundingRect = currentNode.getBoundingClientRect();
            var pmRect = this.props.view.dom.getBoundingClientRect();
            offsetLeft = boundingRect.left - pmRect.left;
        }
        return offsetLeft;
    };
    ResizableMediaSingle.prototype.calcSnapPoints = function () {
        var offsetLeft = this.state.offsetLeft;
        var _a = this.props, containerWidth = _a.containerWidth, lineLength = _a.lineLength, allowBreakoutSnapPoints = _a.allowBreakoutSnapPoints;
        var snapTargets = [];
        for (var i = 0; i < this.gridWidth; i++) {
            snapTargets.push(calcPxFromColumns(i, lineLength, this.gridWidth) - offsetLeft);
        }
        // full width
        snapTargets.push(lineLength - offsetLeft);
        var minimumWidth = calcPxFromColumns(this.wrappedLayout || this.insideInlineLike ? 1 : 2, lineLength, this.props.gridSize);
        var snapPoints = snapTargets.filter(function (width) { return width >= minimumWidth; });
        var $pos = this.$pos;
        if (!$pos) {
            return snapPoints;
        }
        var isVideoFile = this.state.isVideoFile;
        snapPoints = isVideoFile
            ? snapPoints.filter(function (width) { return width > 320; })
            : snapPoints;
        var isTopLevel = $pos.parent.type.name === 'doc';
        if (isTopLevel && allowBreakoutSnapPoints) {
            snapPoints.push(akEditorWideLayoutWidth);
            var fullWidthPoint = containerWidth - akEditorBreakoutPadding;
            if (fullWidthPoint > akEditorWideLayoutWidth) {
                snapPoints.push(fullWidthPoint);
            }
        }
        return snapPoints;
    };
    Object.defineProperty(ResizableMediaSingle.prototype, "insideInlineLike", {
        get: function () {
            var $pos = this.$pos;
            if (!$pos) {
                return false;
            }
            var listItem = this.props.view.state.schema.nodes.listItem;
            return !!findParentNodeOfTypeClosestToPos($pos, [listItem]);
        },
        enumerable: true,
        configurable: true
    });
    ResizableMediaSingle.prototype.render = function () {
        var _this = this;
        var _a = this.props, origWidth = _a.width, origHeight = _a.height, layout = _a.layout, pctWidth = _a.pctWidth, containerWidth = _a.containerWidth, fullWidthMode = _a.fullWidthMode, selected = _a.selected, state = _a.state, children = _a.children;
        var pxWidth = this.calcPxWidth();
        // scale, keeping aspect ratio
        var height = (origHeight / origWidth) * pxWidth;
        var width = pxWidth;
        var enable = {};
        handleSides.forEach(function (side) {
            var oppositeSide = side === 'left' ? 'right' : 'left';
            enable[side] =
                ['full-width', 'wide', 'center']
                    .concat("wrap-" + oppositeSide)
                    .concat("align-" + imageAlignmentMap[oppositeSide])
                    .indexOf(layout) > -1;
            if (side === 'left' && _this.insideInlineLike) {
                enable[side] = false;
            }
        });
        return (React.createElement(Wrapper, { width: width, height: height, layout: layout, isResized: !!pctWidth, containerWidth: containerWidth || origWidth, innerRef: function (elem) { return (_this.wrapper = elem); }, fullWidthMode: fullWidthMode },
            React.createElement(Resizer, __assign({}, this.props, { width: width, height: height, selected: selected, enable: enable, calcNewSize: this.calcNewSize, snapPoints: this.calcSnapPoints(), scaleFactor: !this.wrappedLayout && !this.insideInlineLike ? 2 : 1, highlights: this.highlights, handleResizeStart: function () {
                    // Checks if a table drag is currently happening, if so, abort
                    if (state.doc.type.schema.nodes.table) {
                        var dragging = getPluginState(state).dragging;
                        if (dragging) {
                            return false;
                        }
                    }
                    return true;
                } }), children)));
    };
    return ResizableMediaSingle;
}(React.Component));
export default ResizableMediaSingle;
//# sourceMappingURL=index.js.map