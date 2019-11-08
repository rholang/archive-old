"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var PropTypes = tslib_1.__importStar(require("prop-types"));
var EditorSharedConfigContext = React.createContext(null);
var EditorSharedConfigProvider = /** @class */ (function (_super) {
    tslib_1.__extends(EditorSharedConfigProvider, _super);
    function EditorSharedConfigProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EditorSharedConfigProvider.prototype.getChildContext = function () {
        return { editorSharedConfig: this.props.value };
    };
    EditorSharedConfigProvider.prototype.render = function () {
        return (React.createElement(EditorSharedConfigContext.Provider, { value: this.props.value }, this.props.children));
    };
    EditorSharedConfigProvider.childContextTypes = {
        editorSharedConfig: PropTypes.object,
    };
    return EditorSharedConfigProvider;
}(React.Component));
exports.EditorSharedConfigProvider = EditorSharedConfigProvider;
var EditorSharedConfigConsumer = /** @class */ (function (_super) {
    tslib_1.__extends(EditorSharedConfigConsumer, _super);
    function EditorSharedConfigConsumer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EditorSharedConfigConsumer.prototype.render = function () {
        var _this = this;
        return (React.createElement(EditorSharedConfigContext.Consumer, null, function (value) { return _this.props.children(_this.context.editorSharedConfig || value); }));
    };
    EditorSharedConfigConsumer.contextTypes = { editorSharedConfig: PropTypes.object };
    return EditorSharedConfigConsumer;
}(React.Component));
exports.EditorSharedConfigConsumer = EditorSharedConfigConsumer;
exports.useEditorSharedConfig = function () {
    return React.useContext(EditorSharedConfigContext);
};
//# sourceMappingURL=shared-config.js.map