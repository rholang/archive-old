"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var decision_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/editor/decision"));
var DecisionItem_1 = require("../styled/DecisionItem");
var Item_1 = tslib_1.__importDefault(require("./Item"));
var DecisionItem = /** @class */ (function (_super) {
    tslib_1.__extends(DecisionItem, _super);
    function DecisionItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DecisionItem.prototype.render = function () {
        var _a = this.props, appearance = _a.appearance, children = _a.children, contentRef = _a.contentRef, placeholder = _a.placeholder, showPlaceholder = _a.showPlaceholder;
        var icon = (React.createElement(DecisionItem_1.EditorIconWrapper, { showPlaceholder: showPlaceholder },
            React.createElement(decision_1.default, { label: "Decision", size: "large" })));
        return (React.createElement(Item_1.default, { appearance: appearance, contentRef: contentRef, icon: icon, placeholder: placeholder, showPlaceholder: showPlaceholder }, children));
    };
    DecisionItem.defaultProps = {
        appearance: 'inline',
    };
    return DecisionItem;
}(react_1.PureComponent));
exports.default = DecisionItem;
//# sourceMappingURL=DecisionItem.js.map