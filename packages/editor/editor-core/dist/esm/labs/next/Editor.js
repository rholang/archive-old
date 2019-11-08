import { __assign } from "tslib";
import * as React from 'react';
import { IntlProvider } from 'react-intl';
import { PortalRenderer, PortalProvider } from '../../ui/PortalProvider';
import { EditorInternal } from './internal/components/EditorInternal';
import { usePresetContext, PresetProvider, } from './internal/context/preset-context';
import { EditorSharedConfigConsumer, } from './internal/context/shared-config';
import { EditorContent } from './internal/components/EditorContent';
function Editor(props) {
    var plugins = usePresetContext();
    return (React.createElement(IntlProvider, { locale: "en" },
        React.createElement(PortalProvider, { render: function (portalProviderAPI) { return (React.createElement(React.Fragment, null,
                React.createElement(EditorInternal, __assign({}, props, { plugins: plugins, portalProviderAPI: portalProviderAPI })),
                React.createElement(PortalRenderer, { portalProviderAPI: portalProviderAPI }))); } })));
}
/**
 *
 * Public API Exports.
 *
 */
export { PresetProvider, Editor, EditorContent, EditorSharedConfigConsumer, };
//# sourceMappingURL=Editor.js.map