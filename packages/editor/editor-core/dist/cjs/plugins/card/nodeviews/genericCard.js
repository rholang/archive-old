"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var PropTypes = tslib_1.__importStar(require("prop-types"));
var adf_schema_1 = require("@atlaskit/adf-schema");
var utils_1 = require("../utils");
function Card(SmartCardComponent, UnsupportedComponent) {
    var _a;
    return _a = /** @class */ (function (_super) {
            tslib_1.__extends(class_1, _super);
            function class_1() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.state = {
                    isError: false,
                };
                return _this;
            }
            class_1.prototype.render = function () {
                var url = utils_1.titleUrlPairFromNode(this.props.node).url;
                if (url && !adf_schema_1.isSafeUrl(url)) {
                    return React.createElement(UnsupportedComponent, null);
                }
                if (this.state.isError) {
                    if (url) {
                        return (React.createElement("a", { href: url, onClick: function (e) {
                                e.preventDefault();
                            } }, url));
                    }
                    else {
                        return React.createElement(UnsupportedComponent, null);
                    }
                }
                var cardContext = this.context.contextAdapter
                    ? this.context.contextAdapter.card
                    : undefined;
                return React.createElement(SmartCardComponent, tslib_1.__assign({ cardContext: cardContext }, this.props));
            };
            class_1.prototype.componentDidCatch = function (_error) {
                this.setState({ isError: true });
            };
            return class_1;
        }(React.PureComponent)),
        _a.contextTypes = {
            contextAdapter: PropTypes.object,
        },
        _a;
}
exports.Card = Card;
//# sourceMappingURL=genericCard.js.map