"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var __1 = require("../..");
var CardLoader = /** @class */ (function (_super) {
    tslib_1.__extends(CardLoader, _super);
    function CardLoader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            Card: CardLoader.Card,
            MediaCardErrorBoundary: CardLoader.MediaCardErrorBoundary,
        };
        return _this;
    }
    CardLoader.prototype.componentDidMount = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, mediaClient, cardModule, mediaCardErrorBoundaryModule, error_1;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!!this.state.Card) return [3 /*break*/, 4];
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, Promise.all([
                                Promise.resolve().then(function () { return tslib_1.__importStar(require(/* webpackChunkName:"@atlaskit-media-client" */ '@atlaskit/media-client')); }),
                                Promise.resolve().then(function () { return tslib_1.__importStar(require(/* webpackChunkName:"@atlaskit-internal_Card" */ './index')); }),
                                Promise.resolve().then(function () { return tslib_1.__importStar(require(/* webpackChunkName:"@atlaskit-internal_MediaCardErrorBoundary" */ '../media-card-analytics-error-boundary')); }),
                            ])];
                    case 2:
                        _a = tslib_1.__read.apply(void 0, [_b.sent(), 3]), mediaClient = _a[0], cardModule = _a[1], mediaCardErrorBoundaryModule = _a[2];
                        CardLoader.Card = mediaClient.withMediaClient(cardModule.Card);
                        CardLoader.MediaCardErrorBoundary =
                            mediaCardErrorBoundaryModule.default;
                        this.setState({
                            Card: CardLoader.Card,
                            MediaCardErrorBoundary: CardLoader.MediaCardErrorBoundary,
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _b.sent();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CardLoader.prototype.render = function () {
        var dimensions = this.props.dimensions;
        var _a = this.state, Card = _a.Card, MediaCardErrorBoundary = _a.MediaCardErrorBoundary;
        if (!Card || !MediaCardErrorBoundary) {
            return React.createElement(__1.CardLoading, { dimensions: dimensions });
        }
        return (React.createElement(MediaCardErrorBoundary, null,
            React.createElement(Card, tslib_1.__assign({}, this.props))));
    };
    CardLoader.displayName = 'AsyncCard';
    return CardLoader;
}(React.PureComponent));
exports.default = CardLoader;
//# sourceMappingURL=cardLoader.js.map