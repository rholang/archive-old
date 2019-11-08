import { __extends } from "tslib";
import * as React from 'react';
import * as PropTypes from 'prop-types';
var EditorSharedConfigContext = React.createContext(null);
var EditorSharedConfigProvider = /** @class */ (function (_super) {
    __extends(EditorSharedConfigProvider, _super);
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
export { EditorSharedConfigProvider };
var EditorSharedConfigConsumer = /** @class */ (function (_super) {
    __extends(EditorSharedConfigConsumer, _super);
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
export { EditorSharedConfigConsumer };
export var useEditorSharedConfig = function () {
    return React.useContext(EditorSharedConfigContext);
};
//# sourceMappingURL=shared-config.js.map