"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var spinner_1 = tslib_1.__importDefault(require("@atlaskit/spinner"));
var constants_1 = require("../internal/constants");
var LoadingContainer_1 = require("../styled/LoadingContainer");
var LoadingContainer = /** @class */ (function (_super) {
    tslib_1.__extends(LoadingContainer, _super);
    function LoadingContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LoadingContainer.prototype.render = function () {
        var _a = this.props, children = _a.children, isLoading = _a.isLoading, spinnerSize = _a.spinnerSize, contentsOpacity = _a.contentsOpacity;
        return (react_1.default.createElement(LoadingContainer_1.Container, null,
            !isLoading ? (children) : (react_1.default.createElement(LoadingContainer_1.ContentsContainer, { contentsOpacity: contentsOpacity }, children)),
            isLoading && (react_1.default.createElement(LoadingContainer_1.SpinnerContainer, null,
                react_1.default.createElement(spinner_1.default, { size: spinnerSize })))));
    };
    LoadingContainer.defaultProps = {
        isLoading: true,
        spinnerSize: constants_1.LARGE,
        contentsOpacity: constants_1.LOADING_CONTENTS_OPACITY,
    };
    return LoadingContainer;
}(react_1.default.Component));
exports.default = LoadingContainer;
//# sourceMappingURL=LoadingContainer.js.map