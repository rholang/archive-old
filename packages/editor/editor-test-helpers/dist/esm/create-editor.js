import { __extends, __read, __spread } from "tslib";
import * as React from 'react';
import { IntlProvider } from 'react-intl';
import { CellSelection } from 'prosemirror-tables';
import { findCellClosestToPos } from 'prosemirror-utils';
import { ReactEditorView, setTextSelection, getDefaultPluginsList, PortalProvider, PortalRenderer, GapCursorSelection, GapCursorSide, } from '@atlaskit/editor-core';
import { ProviderFactory } from '@atlaskit/editor-common';
import { mount } from 'enzyme';
import { NodeSelection } from 'prosemirror-state';
import patchEditorViewForJSDOM from './jsdom-fixtures';
var TestReactEditorView = /** @class */ (function (_super) {
    __extends(TestReactEditorView, _super);
    function TestReactEditorView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TestReactEditorView.prototype.getPlugins = function (editorProps) {
        return (this.props.plugins ||
            _super.prototype.getPlugins.call(this, editorProps, undefined, this.props.createAnalyticsEvent));
    };
    return TestReactEditorView;
}(ReactEditorView));
export default function createEditorFactoryForTests() {
    var place;
    var wrapper;
    afterEach(function () {
        if (wrapper) {
            if (wrapper.length > 0) {
                wrapper.unmount();
            }
            wrapper.detach();
        }
        if (place && place.parentNode) {
            place.parentNode.removeChild(place);
        }
    });
    return function (_a) {
        var doc = _a.doc, _b = _a.editorProps, editorProps = _b === void 0 ? {} : _b, editorPlugins = _a.editorPlugins, providerFactory = _a.providerFactory, pluginKey = _a.pluginKey, createAnalyticsEvent = _a.createAnalyticsEvent;
        var portalProviderAPI;
        var plugins = editorPlugins
            ? __spread(getDefaultPluginsList(editorProps), editorPlugins) : undefined;
        place = document.body.appendChild(document.createElement('div'));
        wrapper = mount(React.createElement(PortalProvider, { render: function (portalProvider) {
                portalProviderAPI = portalProvider;
                return (React.createElement(IntlProvider, { locale: "en" },
                    React.createElement(React.Fragment, null,
                        React.createElement(TestReactEditorView, { editorProps: editorProps, createAnalyticsEvent: createAnalyticsEvent, allowAnalyticsGASV3: editorProps.allowAnalyticsGASV3, portalProviderAPI: portalProvider, providerFactory: providerFactory ? providerFactory : new ProviderFactory(), onEditorCreated: function () { }, onEditorDestroyed: function () { }, plugins: plugins }),
                        React.createElement(PortalRenderer, { portalProviderAPI: portalProviderAPI }))));
            } }), { attachTo: place });
        var editor = wrapper.find(TestReactEditorView);
        // Work around JSDOM/Node not supporting DOM Selection API
        if (!('getSelection' in window)) {
            // TODO JEST-23
            patchEditorViewForJSDOM(editor.instance().view);
        }
        var _c = editor.instance(), editorView = _c.view, eventDispatcher = _c.eventDispatcher, _d = _c.config, contentComponents = _d.contentComponents, primaryToolbarComponents = _d.primaryToolbarComponents, secondaryToolbarComponents = _d.secondaryToolbarComponents;
        var refs;
        if (doc && editorView) {
            var dispatch = editorView.dispatch;
            var defaultDoc = doc(editorView.state.schema);
            var tr = editorView.state.tr.replaceWith(0, editorView.state.doc.nodeSize - 2, defaultDoc.content);
            tr.setMeta('addToHistory', false);
            editorView.dispatch(tr);
            refs = defaultDoc.refs;
            if (refs) {
                var _e = editorView.state, doc_1 = _e.doc, tr_1 = _e.tr;
                // Collapsed selection.
                if ('<>' in refs) {
                    setTextSelection(editorView, refs['<>']);
                    // Expanded selection
                }
                else if ('<' in refs || '>' in refs) {
                    if ('<' in refs === false) {
                        throw new Error('A `<` ref must complement a `>` ref.');
                    }
                    if ('>' in refs === false) {
                        throw new Error('A `>` ref must complement a `<` ref.');
                    }
                    setTextSelection(editorView, refs['<'], refs['>']);
                }
                // CellSelection
                else if (refs['<cell'] && refs['cell>']) {
                    var anchorCell = findCellClosestToPos(doc_1.resolve(refs['<cell']));
                    var headCell = findCellClosestToPos(doc_1.resolve(refs['cell>']));
                    if (anchorCell && headCell) {
                        dispatch(tr_1.setSelection(new CellSelection(doc_1.resolve(anchorCell.pos), doc_1.resolve(headCell.pos))));
                    }
                }
                // NodeSelection
                else if (refs['<node>']) {
                    dispatch(tr_1.setSelection(NodeSelection.create(doc_1, refs['<node>'])));
                }
                // GapCursor right
                // This may look the wrong way around here, but looks correct in the tests. Eg:
                // doc(hr(), '{<|gap>}') = Horizontal rule with a gap cursor on its right
                // The | denotes the gap cursor's side, based on the node on the side of the |.
                else if (refs['<|gap>']) {
                    dispatch(tr_1.setSelection(new GapCursorSelection(doc_1.resolve(refs['<|gap>']), GapCursorSide.RIGHT)));
                }
                // GapCursor left
                else if (refs['<gap|>']) {
                    dispatch(tr_1.setSelection(new GapCursorSelection(doc_1.resolve(refs['<gap|>']), GapCursorSide.LEFT)));
                }
            }
        }
        var plugin;
        var pluginState;
        if (pluginKey) {
            plugin = pluginKey.get(editorView.state);
            pluginState = pluginKey.getState(editorView.state);
        }
        return {
            portalProviderAPI: portalProviderAPI,
            editorView: editorView,
            eventDispatcher: eventDispatcher,
            contentComponents: contentComponents,
            primaryToolbarComponents: primaryToolbarComponents,
            secondaryToolbarComponents: secondaryToolbarComponents,
            refs: refs,
            sel: refs ? refs['<>'] : 0,
            plugin: plugin,
            pluginState: pluginState,
            editorProps: editorProps,
        };
    };
}
//# sourceMappingURL=create-editor.js.map