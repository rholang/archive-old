import { __extends } from "tslib";
import React from 'react';
import Spinner from '@atlaskit/spinner';
import { LARGE, LOADING_CONTENTS_OPACITY } from '../internal/constants';
import { Container, ContentsContainer, SpinnerContainer, } from '../styled/LoadingContainer';
var LoadingContainer = /** @class */ (function (_super) {
    __extends(LoadingContainer, _super);
    function LoadingContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LoadingContainer.prototype.render = function () {
        var _a = this.props, children = _a.children, isLoading = _a.isLoading, spinnerSize = _a.spinnerSize, contentsOpacity = _a.contentsOpacity;
        return (React.createElement(Container, null,
            !isLoading ? (children) : (React.createElement(ContentsContainer, { contentsOpacity: contentsOpacity }, children)),
            isLoading && (React.createElement(SpinnerContainer, null,
                React.createElement(Spinner, { size: spinnerSize })))));
    };
    LoadingContainer.defaultProps = {
        isLoading: true,
        spinnerSize: LARGE,
        contentsOpacity: LOADING_CONTENTS_OPACITY,
    };
    return LoadingContainer;
}(React.Component));
export default LoadingContainer;
//# sourceMappingURL=LoadingContainer.js.map