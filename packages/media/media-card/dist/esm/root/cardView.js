import { __extends } from "tslib";
import * as React from 'react';
import { withAnalyticsEvents, } from '@atlaskit/analytics-next';
import { FileCard } from '../files';
import { breakpointSize } from '../utils/breakpoint';
import { defaultImageCardDimensions, getDefaultCardDimensions, } from '../utils/cardDimensions';
import { isValidPercentageUnit } from '../utils/isValidPercentageUnit';
import { getCSSUnitValue } from '../utils/getCSSUnitValue';
import { getElementDimension } from '../utils/getElementDimension';
import { Wrapper } from './styled';
import { createAndFireMediaEvent } from '../utils/analytics';
/**
 * This is classic vanilla CardView class. To create an instance of class one would need to supply
 * `createAnalyticsEvent` prop to satisfy it's Analytics Events needs.
 */
var CardViewBase = /** @class */ (function (_super) {
    __extends(CardViewBase, _super);
    function CardViewBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {};
        _this.divRef = React.createRef();
        _this.fireOnSelectChangeToConsumer = function (newSelectedState) {
            var _a = _this.props, metadata = _a.metadata, selectable = _a.selectable, onSelectChange = _a.onSelectChange;
            if (selectable && onSelectChange) {
                onSelectChange({
                    selected: newSelectedState,
                    mediaItemDetails: metadata,
                });
            }
        };
        _this.renderFile = function () {
            var _a = _this.props, status = _a.status, metadata = _a.metadata, dataURI = _a.dataURI, progress = _a.progress, onRetry = _a.onRetry, resizeMode = _a.resizeMode, appearance = _a.appearance, dimensions = _a.dimensions, actions = _a.actions, selectable = _a.selectable, selected = _a.selected, disableOverlay = _a.disableOverlay, previewOrientation = _a.previewOrientation, alt = _a.alt, onDisplayImage = _a.onDisplayImage;
            return (React.createElement(FileCard, { status: status, details: metadata, dataURI: dataURI, alt: alt, progress: progress, onRetry: onRetry, resizeMode: resizeMode, appearance: appearance, dimensions: dimensions, actions: actions, selectable: selectable, selected: selected, disableOverlay: disableOverlay, previewOrientation: previewOrientation, onDisplayImage: onDisplayImage }));
        };
        return _this;
    }
    CardViewBase.prototype.componentDidMount = function () {
        this.saveElementWidth();
    };
    CardViewBase.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        var currSelected = this.props.selected;
        var nextSelectable = nextProps.selectable, nextSelected = nextProps.selected;
        // need to coerce to booleans as both "undefined" and "false" are considered NOT selected
        var cs = !!currSelected;
        var ns = !!nextSelected;
        if (nextSelectable && cs !== ns) {
            this.fireOnSelectChangeToConsumer(ns);
        }
    };
    Object.defineProperty(CardViewBase.prototype, "width", {
        // This width is only used to calculate breakpoints, dimensions are passed down as
        // integrator pass it to the root component
        get: function () {
            var elementWidth = this.state.elementWidth;
            if (elementWidth) {
                return elementWidth;
            }
            var width = (this.props.dimensions || { width: undefined }).width;
            if (!width) {
                return defaultImageCardDimensions.width;
            }
            return getCSSUnitValue(width);
        },
        enumerable: true,
        configurable: true
    });
    // If the dimensions.width is a percentage, we need to transform it
    // into a pixel value in order to get the right breakpoints applied.
    CardViewBase.prototype.saveElementWidth = function () {
        var dimensions = this.props.dimensions;
        if (!dimensions) {
            return;
        }
        var width = dimensions.width;
        if (width && isValidPercentageUnit(width)) {
            var elementWidth = getElementDimension(this, 'width');
            this.setState({ elementWidth: elementWidth });
        }
    };
    CardViewBase.prototype.render = function () {
        var _a = this.props, dimensions = _a.dimensions, appearance = _a.appearance, onClick = _a.onClick, onMouseEnter = _a.onMouseEnter;
        var wrapperDimensions = dimensions
            ? dimensions
            : getDefaultCardDimensions(appearance);
        return (React.createElement(Wrapper, { shouldUsePointerCursor: true, breakpointSize: breakpointSize(this.width), appearance: appearance, dimensions: wrapperDimensions, onClick: onClick, onMouseEnter: onMouseEnter, innerRef: this.divRef }, this.renderFile()));
    };
    CardViewBase.defaultProps = {
        appearance: 'auto',
    };
    return CardViewBase;
}(React.Component));
export { CardViewBase };
export var CardView = withAnalyticsEvents({
    onClick: createAndFireMediaEvent({
        eventType: 'ui',
        action: 'clicked',
        actionSubject: 'mediaCard',
    }),
})(CardViewBase);
//# sourceMappingURL=cardView.js.map