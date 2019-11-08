"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var CardWithDataRenderer = /** @class */ (function (_super) {
    tslib_1.__extends(CardWithDataRenderer, _super);
    function CardWithDataRenderer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardWithDataRenderer.moduleImporter = function (target) {
        Promise.resolve().then(function () { return tslib_1.__importStar(require(/* webpackChunkName:"@atlaskit-internal-smartcard-datacardcontent" */ './component')); }).then(function (module) {
            CardWithDataRenderer.CardContent = module.CardWithDataContent;
            target.forceUpdate();
        });
    };
    CardWithDataRenderer.prototype.componentDidMount = function () {
        if (CardWithDataRenderer.CardContent === null) {
            (this.props.importer || CardWithDataRenderer.moduleImporter)(this);
        }
    };
    CardWithDataRenderer.prototype.render = function () {
        var _a = this.props, appearance = _a.appearance, data = _a.data, isSelected = _a.isSelected, onClick = _a.onClick, onResolve = _a.onResolve;
        if (!data) {
            throw new Error('@atlaskit/smart-cards: you are trying to render a card with data, but does not provide any');
        }
        if (CardWithDataRenderer.CardContent) {
            return (react_1.default.createElement(CardWithDataRenderer.CardContent, { appearance: appearance, data: data, isSelected: isSelected, onClick: onClick, onResolve: onResolve }));
        }
        return react_1.default.createElement("div", { "data-card-with-data": true });
    };
    CardWithDataRenderer.CardContent = null;
    return CardWithDataRenderer;
}(react_1.default.PureComponent));
exports.CardWithDataRenderer = CardWithDataRenderer;
//# sourceMappingURL=loader.js.map