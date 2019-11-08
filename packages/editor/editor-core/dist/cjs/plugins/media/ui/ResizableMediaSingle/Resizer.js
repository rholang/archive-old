"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var re_resizable_1 = require("re-resizable");
var grid_1 = require("../../../grid");
var utils_1 = require("./utils");
var editor_common_1 = require("@atlaskit/editor-common");
var Resizer = /** @class */ (function (_super) {
    tslib_1.__extends(Resizer, _super);
    function Resizer(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isResizing: false,
        };
        _this.handleResizeStart = function (event) {
            var _a = _this.props, handleResizeStart = _a.handleResizeStart, highlights = _a.highlights, displayGrid = _a.displayGrid, layout = _a.layout, width = _a.width, snapPoints = _a.snapPoints;
            // prevent creating a drag event on Firefox
            event.preventDefault();
            if (handleResizeStart && !handleResizeStart(event)) {
                return false;
            }
            _this.setState({ isResizing: true }, function () {
                var newHighlights = highlights(width, snapPoints);
                displayGrid(newHighlights.length > 0, grid_1.gridTypeForLayout(layout), newHighlights);
            });
        };
        _this.handleResize = function (_event, _direction, _elementRef, delta) {
            var _a = _this.props, highlights = _a.highlights, calcNewSize = _a.calcNewSize, scaleFactor = _a.scaleFactor, snapPoints = _a.snapPoints, displayGrid = _a.displayGrid, layout = _a.layout, updateSize = _a.updateSize;
            var resizable = _this.resizable.current;
            if (!resizable || !resizable.state.original || !_this.state.isResizing) {
                return;
            }
            var newWidth = Math.max(resizable.state.original.width + delta.width * (scaleFactor || 1), snapPoints[0]);
            newWidth = Math.min(newWidth, snapPoints[snapPoints.length - 1]);
            var newSize = calcNewSize(newWidth, false);
            if (newSize.layout !== layout) {
                updateSize(newSize.width, newSize.layout);
            }
            var newHighlights = highlights(newWidth, snapPoints);
            displayGrid(newHighlights.length > 0, grid_1.gridTypeForLayout(newSize.layout), newHighlights);
            resizable.updateSize({ width: newWidth, height: 'auto' });
            resizable.setState({ isResizing: true });
        };
        _this.handleResizeStop = function (_event, _direction, _elementRef, delta) {
            var _a = _this.props, highlights = _a.highlights, calcNewSize = _a.calcNewSize, snapPoints = _a.snapPoints, displayGrid = _a.displayGrid, layout = _a.layout, updateSize = _a.updateSize;
            var resizable = _this.resizable.current;
            if (!resizable || !resizable.state.original || !_this.state.isResizing) {
                return;
            }
            var newWidth = Math.max(resizable.state.original.width + delta.width, snapPoints[0]);
            newWidth = Math.min(newWidth, snapPoints[snapPoints.length - 1]);
            var snapWidth = utils_1.snapTo(newWidth, snapPoints);
            var newSize = calcNewSize(snapWidth, true);
            var newHighlights = highlights(newWidth, snapPoints);
            // show committed grid size
            displayGrid(newHighlights.length > 0, grid_1.gridTypeForLayout(newSize.layout), newHighlights);
            _this.setState({ isResizing: false }, function () {
                updateSize(newSize.width, newSize.layout);
                displayGrid(false, grid_1.gridTypeForLayout(layout));
            });
        };
        _this.resizable = React.createRef();
        return _this;
    }
    Resizer.prototype.render = function () {
        var handleStyles = {};
        var handles = {};
        utils_1.handleSides.forEach(function (side) {
            var _a;
            handles[side] = "mediaSingle-resize-handle-" + side;
            handleStyles[side] = (_a = {
                    width: '24px'
                },
                _a[side] = '-13px',
                _a.zIndex = 99,
                _a);
        });
        // Ideally, Resizable would let you pass in the component rather than
        // the div. For now, we just apply the same styles using CSS
        return (React.createElement(re_resizable_1.Resizable, { ref: this.resizable, size: {
                width: this.props.width,
                height: 'auto',
            }, className: classnames_1.default(editor_common_1.mediaSingleClassName, "image-" + this.props.layout, this.props.className, {
                'is-resizing': this.state.isResizing,
                'not-resized': !this.props.pctWidth,
                'mediaSingle-selected': this.props.selected,
                'media-wrapped': this.props.layout === 'wrap-left' ||
                    this.props.layout === 'wrap-right',
            }), handleWrapperClass: 'mediaSingle-resize-wrapper', handleClasses: handles, handleStyles: handleStyles, enable: this.props.enable, onResize: this.handleResize, onResizeStop: this.handleResizeStop, onResizeStart: this.handleResizeStart }, this.props.children));
    };
    return Resizer;
}(React.Component));
exports.default = Resizer;
//# sourceMappingURL=Resizer.js.map