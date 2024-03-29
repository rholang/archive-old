import { __assign, __extends } from "tslib";
import * as React from 'react';
import { PureComponent } from 'react';
import { IntlProvider } from 'react-intl';
import { defaultSchema } from '@atlaskit/adf-schema';
import { reduce } from '@atlaskit/adf-utils';
import { UnsupportedBlock, ProviderFactory, BaseTheme, WidthProvider, getAnalyticsAppearance, WithCreateAnalyticsEvent, getResponseEndTime, startMeasure, stopMeasure, } from '@atlaskit/editor-common';
import { FabricChannel } from '@atlaskit/analytics-listeners';
import { FabricEditorAnalyticsContext } from '@atlaskit/analytics-namespaced-context';
import { ReactSerializer, renderDocument } from '../../';
import { Wrapper } from './style';
import { TruncatedWrapper } from './truncated-wrapper';
import { ACTION, ACTION_SUBJECT, EVENT_TYPE } from '../../analytics/enums';
import { PLATFORM, MODE } from '../../analytics/events';
import AnalyticsContext from '../../analytics/analyticsContext';
import { CopyTextProvider } from '../../react/nodes/copy-text-provider';
import { Provider as SmartCardStorageProvider } from '../SmartCardStorage';
import { name, version } from '../../version.json';
var Renderer = /** @class */ (function (_super) {
    __extends(Renderer, _super);
    function Renderer(props) {
        var _this = _super.call(this, props) || this;
        _this.fireAnalyticsEvent = function (event) {
            var createAnalyticsEvent = _this.props.createAnalyticsEvent;
            if (createAnalyticsEvent) {
                var channel = FabricChannel.editor;
                createAnalyticsEvent(event).fire(channel);
            }
        };
        _this.providerFactory = props.dataProviders || new ProviderFactory();
        _this.updateSerializer(props);
        startMeasure('Renderer Render Time');
        return _this;
    }
    Renderer.prototype.anchorLinkAnalytics = function () {
        var hash = window.location.hash && decodeURIComponent(window.location.hash.slice(1));
        if (!this.props.disableHeadingIDs &&
            hash &&
            this.editorRef &&
            this.editorRef instanceof HTMLElement) {
            var anchorLinkElement = document.getElementById(hash);
            // We are not use this.editorRef.querySelector here, instead we have this.editorRef.contains
            // because querySelector might fail if there are special characters in hash, and CSS.escape is still experimental.
            if (anchorLinkElement && this.editorRef.contains(anchorLinkElement)) {
                this.fireAnalyticsEvent({
                    action: ACTION.VIEWED,
                    actionSubject: ACTION_SUBJECT.ANCHOR_LINK,
                    attributes: { platform: PLATFORM.WEB, mode: MODE.RENDERER },
                    eventType: EVENT_TYPE.UI,
                });
            }
        }
    };
    Renderer.prototype.componentDidMount = function () {
        var _this = this;
        this.fireAnalyticsEvent({
            action: ACTION.STARTED,
            actionSubject: ACTION_SUBJECT.RENDERER,
            attributes: { platform: PLATFORM.WEB },
            eventType: EVENT_TYPE.UI,
        });
        this.rafID = requestAnimationFrame(function () {
            stopMeasure('Renderer Render Time', function (duration) {
                _this.fireAnalyticsEvent({
                    action: ACTION.RENDERED,
                    actionSubject: ACTION_SUBJECT.RENDERER,
                    attributes: {
                        platform: PLATFORM.WEB,
                        duration: duration,
                        ttfb: getResponseEndTime(),
                        nodes: reduce(_this.props.document, function (acc, node) {
                            acc[node.type] = (acc[node.type] || 0) + 1;
                            return acc;
                        }, {}),
                    },
                    eventType: EVENT_TYPE.OPERATIONAL,
                });
            });
            _this.anchorLinkAnalytics();
        });
    };
    Renderer.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        if (nextProps.portal !== this.props.portal ||
            nextProps.appearance !== this.props.appearance) {
            this.updateSerializer(nextProps);
        }
    };
    Renderer.prototype.updateSerializer = function (props) {
        var eventHandlers = props.eventHandlers, portal = props.portal, rendererContext = props.rendererContext, document = props.document, extensionHandlers = props.extensionHandlers, schema = props.schema, appearance = props.appearance, disableHeadingIDs = props.disableHeadingIDs, allowDynamicTextSizing = props.allowDynamicTextSizing, allowHeadingAnchorLinks = props.allowHeadingAnchorLinks, allowColumnSorting = props.allowColumnSorting, shouldOpenMediaViewer = props.shouldOpenMediaViewer;
        this.serializer = new ReactSerializer({
            providers: this.providerFactory,
            eventHandlers: eventHandlers,
            extensionHandlers: extensionHandlers,
            portal: portal,
            objectContext: __assign({ adDoc: document, schema: schema }, rendererContext),
            appearance: appearance,
            disableHeadingIDs: disableHeadingIDs,
            allowDynamicTextSizing: allowDynamicTextSizing,
            allowHeadingAnchorLinks: allowHeadingAnchorLinks,
            allowColumnSorting: allowColumnSorting,
            fireAnalyticsEvent: this.fireAnalyticsEvent,
            shouldOpenMediaViewer: shouldOpenMediaViewer,
        });
    };
    Renderer.prototype.render = function () {
        var _this = this;
        var _a = this.props, document = _a.document, onComplete = _a.onComplete, onError = _a.onError, schema = _a.schema, appearance = _a.appearance, adfStage = _a.adfStage, allowDynamicTextSizing = _a.allowDynamicTextSizing, maxHeight = _a.maxHeight, truncated = _a.truncated;
        try {
            var _b = renderDocument(document, this.serializer, schema || defaultSchema, adfStage), result = _b.result, stat = _b.stat;
            if (onComplete) {
                onComplete(stat);
            }
            var rendererOutput = (React.createElement(CopyTextProvider, null,
                React.createElement(IntlProvider, null,
                    React.createElement(AnalyticsContext.Provider, { value: {
                            fireAnalyticsEvent: function (event) {
                                return _this.fireAnalyticsEvent(event);
                            },
                        } },
                        React.createElement(SmartCardStorageProvider, null,
                            React.createElement(RendererWrapper, { appearance: appearance, dynamicTextSizing: !!allowDynamicTextSizing, wrapperRef: function (ref) {
                                    _this.editorRef = ref;
                                } }, result))))));
            return truncated ? (React.createElement(TruncatedWrapper, { height: maxHeight }, rendererOutput)) : (rendererOutput);
        }
        catch (e) {
            if (onError) {
                onError(e);
            }
            return (React.createElement(RendererWrapper, { appearance: appearance, dynamicTextSizing: !!allowDynamicTextSizing },
                React.createElement(UnsupportedBlock, null)));
        }
    };
    Renderer.prototype.componentWillUnmount = function () {
        var dataProviders = this.props.dataProviders;
        if (this.rafID) {
            window.cancelAnimationFrame(this.rafID);
        }
        // if this is the ProviderFactory which was created in constructor
        // it's safe to destroy it on Renderer unmount
        if (!dataProviders) {
            this.providerFactory.destroy();
        }
    };
    return Renderer;
}(PureComponent));
export { Renderer };
var RendererWithAnalytics = function (props) { return (React.createElement(FabricEditorAnalyticsContext, { data: {
        appearance: getAnalyticsAppearance(props.appearance),
        packageName: name,
        packageVersion: version,
        componentName: 'editorCore',
    } },
    React.createElement(WithCreateAnalyticsEvent, { render: function (createAnalyticsEvent) { return (React.createElement(Renderer, __assign({}, props, { createAnalyticsEvent: createAnalyticsEvent }))); } }))); };
export default RendererWithAnalytics;
export function RendererWrapper(_a) {
    var appearance = _a.appearance, children = _a.children, dynamicTextSizing = _a.dynamicTextSizing, wrapperRef = _a.wrapperRef;
    return (React.createElement(WidthProvider, null,
        React.createElement(BaseTheme, { dynamicTextSizing: dynamicTextSizing },
            React.createElement(Wrapper, { innerRef: wrapperRef, appearance: appearance }, children))));
}
//# sourceMappingURL=index.js.map