"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var prosemirror_model_1 = require("prosemirror-model");
var prosemirror_transform_1 = require("prosemirror-transform");
exports.tableSortingStepType = 'atlaskit-table-sorting-ordering';
var TableSortStep = /** @class */ (function (_super) {
    tslib_1.__extends(TableSortStep, _super);
    function TableSortStep(pos, prev, next) {
        var _this = _super.call(this) || this;
        _this.prev = prev;
        _this.next = next;
        _this.pos = pos;
        return _this;
    }
    TableSortStep.prototype.invert = function () {
        return new TableSortStep(this.pos, this.next, this.prev);
    };
    TableSortStep.prototype.apply = function (doc) {
        return prosemirror_transform_1.StepResult.ok(doc);
    };
    TableSortStep.prototype.map = function () {
        return null;
    };
    TableSortStep.prototype.getMap = function () {
        return new prosemirror_transform_1.StepMap([0, 0, 0]);
    };
    TableSortStep.prototype.toJSON = function () {
        return {
            stepType: exports.tableSortingStepType,
        };
    };
    TableSortStep.fromJSON = function () {
        return new prosemirror_transform_1.ReplaceStep(0, 0, prosemirror_model_1.Slice.empty);
    };
    return TableSortStep;
}(prosemirror_transform_1.Step));
exports.TableSortStep = TableSortStep;
/** Register this step with Prosemirror */
prosemirror_transform_1.Step.jsonID(exports.tableSortingStepType, TableSortStep);
//# sourceMappingURL=sort-step.js.map