import { __assign, __extends } from "tslib";
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { isSafeUrl } from '@atlaskit/adf-schema';
import { titleUrlPairFromNode } from '../utils';
export function Card(SmartCardComponent, UnsupportedComponent) {
    var _a;
    return _a = /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.state = {
                    isError: false,
                };
                return _this;
            }
            class_1.prototype.render = function () {
                var url = titleUrlPairFromNode(this.props.node).url;
                if (url && !isSafeUrl(url)) {
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
                return React.createElement(SmartCardComponent, __assign({ cardContext: cardContext }, this.props));
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
//# sourceMappingURL=genericCard.js.map