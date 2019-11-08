"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var consumer_1 = require("./consumer");
var document_1 = tslib_1.__importDefault(require("../components/document"));
var DocumentBody = /** @class */ (function (_super) {
    tslib_1.__extends(DocumentBody, _super);
    function DocumentBody() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderChild = function (props) {
            return React.createElement(document_1.default, tslib_1.__assign({}, _this.props, props));
        };
        _this.stateMapper = function (state) {
            var doc = state.doc, hasError = state.hasError, isLoading = state.isLoading, mode = state.mode;
            return {
                doc: doc,
                hasError: hasError,
                isLoading: isLoading,
                mode: mode,
            };
        };
        _this.renderPropsMapper = function (renderProps) {
            var renderTitle = renderProps.renderTitle, renderToolbar = renderProps.renderToolbar;
            return {
                renderTitle: renderTitle,
                renderToolbar: renderToolbar,
            };
        };
        return _this;
    }
    DocumentBody.prototype.render = function () {
        return (React.createElement(consumer_1.Consumer, { stateMapper: this.stateMapper, renderPropsMapper: this.renderPropsMapper }, this.renderChild));
    };
    return DocumentBody;
}(react_1.PureComponent));
exports.default = DocumentBody;
//# sourceMappingURL=document-body.js.map