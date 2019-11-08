import { __extends } from "tslib";
import * as React from 'react';
import { Rectangle, Camera, Vector2, getCssFromImageOrientation, } from '@atlaskit/media-ui';
import { withAnalyticsEvents, } from '@atlaskit/analytics-next';
import { BaselineExtend, ImageWrapper, Img } from '../../styled';
import { ZoomLevel } from '../../domain/zoomLevel';
import { closeOnDirectClick } from '../../utils/closeOnDirectClick';
import { ZoomControls } from '../../zoomControls';
import { Outcome } from '../../domain';
import { closedEvent } from '../../analytics/closed';
import { channel } from '../../analytics';
export function zoomLevelAfterResize(newCamera, oldCamera, oldZoomLevel) {
    var isImgScaledToFit = oldZoomLevel.value === oldCamera.scaleDownToFit;
    var zoomLevelToRefit = new ZoomLevel(newCamera.scaleDownToFit);
    return isImgScaledToFit ? zoomLevelToRefit : oldZoomLevel;
}
var clientRectangle = function (el) {
    var clientWidth = el.clientWidth, clientHeight = el.clientHeight;
    return new Rectangle(clientWidth, clientHeight);
};
var naturalSizeRectangle = function (el) {
    var naturalWidth = el.naturalWidth, naturalHeight = el.naturalHeight;
    return new Rectangle(naturalWidth, naturalHeight);
};
var initialState = {
    zoomLevel: new ZoomLevel(1),
    camera: Outcome.pending(),
    isDragging: false,
    cursorPos: new Vector2(0, 0),
};
var InteractiveImgComponent = /** @class */ (function (_super) {
    __extends(InteractiveImgComponent, _super);
    function InteractiveImgComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = initialState;
        _this.saveWrapperRef = function (ref) { return (_this.wrapper = ref); };
        _this.onImageClicked = function (e) {
            var _a = _this.props, onClose = _a.onClose, onBlanketClicked = _a.onBlanketClicked;
            if (e.target === e.currentTarget && onBlanketClicked) {
                onBlanketClicked();
            }
            closeOnDirectClick(onClose)(e);
        };
        _this.onImgLoad = function (ev) {
            if (_this.wrapper) {
                var onLoad = _this.props.onLoad;
                var viewport = clientRectangle(_this.wrapper);
                var originalImg = naturalSizeRectangle(ev.currentTarget);
                var camera = new Camera(viewport, originalImg);
                _this.setState({
                    camera: Outcome.successful(camera),
                    zoomLevel: new ZoomLevel(camera.scaleDownToFit),
                });
                if (onLoad) {
                    onLoad();
                }
            }
        };
        _this.onResize = function () {
            _this.state.camera.whenSuccessful(function (oldCamera) {
                if (!_this.wrapper) {
                    return;
                }
                var oldZoomLevel = _this.state.zoomLevel;
                var newViewport = clientRectangle(_this.wrapper);
                var newCamera = oldCamera.resizedViewport(newViewport);
                var newZoomLevel = zoomLevelAfterResize(newCamera, oldCamera, oldZoomLevel);
                _this.setState({
                    camera: Outcome.successful(newCamera),
                    zoomLevel: newZoomLevel,
                });
            });
        };
        _this.onZoomChange = function (nextZoomLevel) {
            _this.state.camera.whenSuccessful(function (camera) {
                var wrapper = _this.wrapper;
                if (!wrapper) {
                    return;
                }
                var scrollLeft = wrapper.scrollLeft, scrollTop = wrapper.scrollTop;
                var prevOffset = new Vector2(scrollLeft, scrollTop);
                var prevZoomLevel = _this.state.zoomLevel;
                _this.setState({ zoomLevel: nextZoomLevel }, function () {
                    var _a = camera.scaledOffset(prevOffset, prevZoomLevel.value, nextZoomLevel.value), x = _a.x, y = _a.y;
                    wrapper.scrollLeft = x;
                    wrapper.scrollTop = y;
                });
            });
        };
        _this.startDragging = function (ev) {
            ev.preventDefault();
            _this.setState({
                isDragging: true,
                cursorPos: new Vector2(ev.screenX, ev.screenY),
            });
        };
        _this.stopDragging = function (ev) {
            ev.preventDefault();
            _this.setState({ isDragging: false });
        };
        _this.panImage = function (ev) {
            if (_this.state.isDragging && _this.wrapper) {
                var cursorPos = new Vector2(ev.screenX, ev.screenY);
                var delta = _this.state.cursorPos.sub(cursorPos);
                _this.setState({ cursorPos: cursorPos });
                _this.wrapper.scrollLeft += delta.x;
                _this.wrapper.scrollTop += delta.y;
            }
        };
        return _this;
    }
    InteractiveImgComponent.prototype.componentDidMount = function () {
        this.state = initialState;
        window.addEventListener('resize', this.onResize);
        document.addEventListener('mousemove', this.panImage);
        document.addEventListener('mouseup', this.stopDragging);
    };
    InteractiveImgComponent.prototype.componentWillUnmount = function () {
        window.removeEventListener('resize', this.onResize);
        document.removeEventListener('mousemove', this.panImage);
        document.removeEventListener('mouseup', this.stopDragging);
    };
    InteractiveImgComponent.prototype.render = function () {
        var _a = this.props, src = _a.src, orientation = _a.orientation, onError = _a.onError;
        var _b = this.state, zoomLevel = _b.zoomLevel, camera = _b.camera, isDragging = _b.isDragging;
        var canDrag = camera.match({
            successful: function (camera) { return zoomLevel.value > camera.scaleToFit; },
            pending: function () { return false; },
            failed: function () { return false; },
        });
        // We use style attr instead of SC prop for perf reasons
        var imgStyle = camera.match({
            successful: function (camera) { return camera.scaledImg(zoomLevel.value); },
            pending: function () { return ({}); },
            failed: function () { return ({}); },
        });
        if (orientation) {
            var transform = getCssFromImageOrientation(orientation);
            imgStyle.transform = transform;
        }
        return (React.createElement(ImageWrapper, { onClick: this.onImageClicked, innerRef: this.saveWrapperRef },
            React.createElement(Img, { canDrag: canDrag, isDragging: isDragging, src: src, style: imgStyle, onLoad: this.onImgLoad, onError: onError, onMouseDown: this.startDragging, shouldPixelate: zoomLevel.value > 1 }),
            React.createElement(BaselineExtend, null),
            React.createElement(ZoomControls, { zoomLevel: zoomLevel, onChange: this.onZoomChange })));
    };
    return InteractiveImgComponent;
}(React.Component));
export { InteractiveImgComponent };
export var InteractiveImg = withAnalyticsEvents({
    onBlanketClicked: function (createAnalyticsEvent) {
        var event = createAnalyticsEvent(closedEvent('blanket'));
        event.fire(channel);
    },
})(InteractiveImgComponent);
//# sourceMappingURL=interactive-img.js.map