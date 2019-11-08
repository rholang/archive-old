"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_intl_1 = require("react-intl");
var PortalProvider_1 = require("../../ui/PortalProvider");
var EditorInternal_1 = require("./internal/components/EditorInternal");
var preset_context_1 = require("./internal/context/preset-context");
exports.PresetProvider = preset_context_1.PresetProvider;
var shared_config_1 = require("./internal/context/shared-config");
exports.EditorSharedConfigConsumer = shared_config_1.EditorSharedConfigConsumer;
var EditorContent_1 = require("./internal/components/EditorContent");
exports.EditorContent = EditorContent_1.EditorContent;
function Editor(props) {
    var plugins = preset_context_1.usePresetContext();
    return (React.createElement(react_intl_1.IntlProvider, { locale: "en" },
        React.createElement(PortalProvider_1.PortalProvider, { render: function (portalProviderAPI) { return (React.createElement(React.Fragment, null,
                React.createElement(EditorInternal_1.EditorInternal, tslib_1.__assign({}, props, { plugins: plugins, portalProviderAPI: portalProviderAPI })),
                React.createElement(PortalProvider_1.PortalRenderer, { portalProviderAPI: portalProviderAPI }))); } })));
}
exports.Editor = Editor;
//# sourceMappingURL=Editor.js.map