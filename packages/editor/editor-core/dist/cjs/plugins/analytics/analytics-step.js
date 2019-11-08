"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var prosemirror_transform_1 = require("prosemirror-transform");
var prosemirror_model_1 = require("prosemirror-model");
var types_1 = require("./types");
var utils_1 = require("./utils");
exports.analyticsStepType = 'atlaskit-analytics';
var actionsToIgnore = [
    types_1.ACTION.INVOKED,
    types_1.ACTION.OPENED,
];
/** Creates undo event from a normal analytics event */
var createUndoEvent = function (analyticsEvent) {
    return (tslib_1.__assign(tslib_1.__assign({}, analyticsEvent), { payload: {
            action: types_1.ACTION.UNDID,
            actionSubject: analyticsEvent.payload.actionSubject,
            actionSubjectId: analyticsEvent.payload.action,
            attributes: tslib_1.__assign(tslib_1.__assign({}, analyticsEvent.payload.attributes), { actionSubjectId: analyticsEvent.payload.actionSubjectId }),
            eventType: types_1.EVENT_TYPE.TRACK,
        } }));
};
/** Toggles event action between undo & redo */
var toggleEventAction = function (analyticsEvent) {
    return (tslib_1.__assign(tslib_1.__assign({}, analyticsEvent), { payload: tslib_1.__assign(tslib_1.__assign({}, analyticsEvent.payload), { action: analyticsEvent.payload.action === types_1.ACTION.UNDID
                ? types_1.ACTION.REDID
                : types_1.ACTION.UNDID }) }));
};
/**
 * Custom Prosemirror Step to fire our GAS V3 analytics events
 * Using a Step means that it will work with prosemirror-history and we get
 * undo/redo events for free
 */
var AnalyticsStep = /** @class */ (function (_super) {
    tslib_1.__extends(AnalyticsStep, _super);
    function AnalyticsStep(createAnalyticsEvent, analyticsEvents, pos) {
        var _this = _super.call(this) || this;
        _this.analyticsEvents = [];
        _this.createAnalyticsEvent = createAnalyticsEvent;
        _this.analyticsEvents = analyticsEvents;
        _this.pos = pos;
        return _this;
    }
    /**
     * Generate new undo/redo analytics event when step is inverted
     */
    AnalyticsStep.prototype.invert = function () {
        var analyticsEvents = this.analyticsEvents
            .filter(function (analyticsEvent) {
            return actionsToIgnore.indexOf(analyticsEvent.payload.action) === -1;
        })
            .map(function (analyticsEvent) {
            if (analyticsEvent.payload.action === types_1.ACTION.UNDID ||
                analyticsEvent.payload.action === types_1.ACTION.REDID) {
                return toggleEventAction(analyticsEvent);
            }
            else {
                return createUndoEvent(analyticsEvent);
            }
        });
        return new AnalyticsStep(this.createAnalyticsEvent, analyticsEvents);
    };
    AnalyticsStep.prototype.apply = function (doc) {
        var e_1, _a;
        try {
            for (var _b = tslib_1.__values(this.analyticsEvents), _c = _b.next(); !_c.done; _c = _b.next()) {
                var analyticsEvent = _c.value;
                utils_1.fireAnalyticsEvent(this.createAnalyticsEvent)(analyticsEvent);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return prosemirror_transform_1.StepResult.ok(doc);
    };
    AnalyticsStep.prototype.map = function (mapping) {
        var newPos = this.pos;
        if (typeof newPos === 'number') {
            newPos = mapping.map(newPos);
        }
        // Return the same events, this step will never be removed
        return new AnalyticsStep(this.createAnalyticsEvent, this.analyticsEvents, newPos);
    };
    AnalyticsStep.prototype.getMap = function () {
        if (typeof this.pos === 'number') {
            return new prosemirror_transform_1.StepMap([this.pos, 0, 0]);
        }
        return new prosemirror_transform_1.StepMap([]);
    };
    AnalyticsStep.prototype.merge = function (other) {
        if (other instanceof AnalyticsStep) {
            var otherAnalyticsEvents = other.analyticsEvents;
            return new AnalyticsStep(this.createAnalyticsEvent, tslib_1.__spread(otherAnalyticsEvents, this.analyticsEvents));
        }
        return null;
    };
    AnalyticsStep.prototype.toJSON = function () {
        return {
            stepType: exports.analyticsStepType,
        };
    };
    AnalyticsStep.fromJSON = function () {
        return new prosemirror_transform_1.ReplaceStep(0, 0, prosemirror_model_1.Slice.empty);
    };
    return AnalyticsStep;
}(prosemirror_transform_1.Step));
exports.AnalyticsStep = AnalyticsStep;
/** Register this step with Prosemirror */
prosemirror_transform_1.Step.jsonID(exports.analyticsStepType, AnalyticsStep);
//# sourceMappingURL=analytics-step.js.map