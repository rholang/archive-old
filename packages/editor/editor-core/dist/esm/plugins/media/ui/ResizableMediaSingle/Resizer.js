import { __extends } from "tslib";
import * as React from 'react';
import classnames from 'classnames';
import { Resizable } from 're-resizable';
import { gridTypeForLayout } from '../../../grid';
import { snapTo, handleSides } from './utils';
import { mediaSingleClassName } from '@atlaskit/editor-common';
var Resizer = /** @class */ (function (_super) {
    __extends(Resizer, _super);
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
                displayGrid(newHighlights.length > 0, gridTypeForLayout(layout), newHighlights);
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
            displayGrid(newHighlights.length > 0, gridTypeForLayout(newSize.layout), newHighlights);
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
            var snapWidth = snapTo(newWidth, snapPoints);
            var newSize = calcNewSize(snapWidth, true);
            var newHighlights = highlights(newWidth, snapPoints);
            // show committed grid size
            displayGrid(newHighlights.length > 0, gridTypeForLayout(newSize.layout), newHighlights);
            _this.setState({ isResizing: false }, function () {
                updateSize(newSize.width, newSize.layout);
                displayGrid(false, gridTypeForLayout(layout));
            });
        };
        _this.resizable = React.createRef();
        return _this;
    }
    Resizer.prototype.render = function () {
        var handleStyles = {};
        var handles = {};
        handleSides.forEach(function (side) {
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
        return (React.createElement(Resizable, { ref: this.resizable, size: {
                width: this.props.width,
                height: 'auto',
            }, className: classnames(mediaSingleClassName, "image-" + this.props.layout, this.props.className, {
                'is-resizing': this.state.isResizing,
                'not-resized': !this.props.pctWidth,
                'mediaSingle-selected': this.props.selected,
                'media-wrapped': this.props.layout === 'wrap-left' ||
                    this.props.layout === 'wrap-right',
            }), handleWrapperClass: 'mediaSingle-resize-wrapper', handleClasses: handles, handleStyles: handleStyles, enable: this.props.enable, onResize: this.handleResize, onResizeStop: this.handleResizeStop, onResizeStart: this.handleResizeStart }, this.props.children));
    };
    return Resizer;
}(React.Component));
export default Resizer;
//# sourceMappingURL=Resizer.js.map