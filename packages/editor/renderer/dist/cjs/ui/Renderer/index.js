"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var react_intl_1 = require("react-intl");
var adf_schema_1 = require("@atlaskit/adf-schema");
var adf_utils_1 = require("@atlaskit/adf-utils");
var editor_common_1 = require("@atlaskit/editor-common");
var analytics_listeners_1 = require("@atlaskit/analytics-listeners");
var analytics_namespaced_context_1 = require("@atlaskit/analytics-namespaced-context");
var __1 = require("../../");
var style_1 = require("./style");
var truncated_wrapper_1 = require("./truncated-wrapper");
var enums_1 = require("../../analytics/enums");
var events_1 = require("../../analytics/events");
var analyticsContext_1 = tslib_1.__importDefault(require("../../analytics/analyticsContext"));
var copy_text_provider_1 = require("../../react/nodes/copy-text-provider");
var SmartCardStorage_1 = require("../SmartCardStorage");
var version_json_1 = require("../../version.json");
var Renderer = /** @class */ (function (_super) {
    tslib_1.__extends(Renderer, _super);
    function Renderer(props) {
        var _this = _super.call(this, props) || this;
        _this.fireAnalyticsEvent = function (event) {
            var createAnalyticsEvent = _this.props.createAnalyticsEvent;
            if (createAnalyticsEvent) {
                var channel = analytics_listeners_1.FabricChannel.editor;
                createAnalyticsEvent(event).fire(channel);
            }
        };
        _this.providerFactory = props.dataProviders || new editor_common_1.ProviderFactory();
        _this.updateSerializer(props);
        editor_common_1.startMeasure('Renderer Render Time');
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
                    action: enums_1.ACTION.VIEWED,
                    actionSubject: enums_1.ACTION_SUBJECT.ANCHOR_LINK,
                    attributes: { platform: events_1.PLATFORM.WEB, mode: events_1.MODE.RENDERER },
                    eventType: enums_1.EVENT_TYPE.UI,
                });
            }
        }
    };
    Renderer.prototype.componentDidMount = function () {
        var _this = this;
        this.fireAnalyticsEvent({
            action: enums_1.ACTION.STARTED,
            actionSubject: enums_1.ACTION_SUBJECT.RENDERER,
            attributes: { platform: events_1.PLATFORM.WEB },
            eventType: enums_1.EVENT_TYPE.UI,
        });
        this.rafID = requestAnimationFrame(function () {
            editor_common_1.stopMeasure('Renderer Render Time', function (duration) {
                _this.fireAnalyticsEvent({
                    action: enums_1.ACTION.RENDERED,
                    actionSubject: enums_1.ACTION_SUBJECT.RENDERER,
                    attributes: {
                        platform: events_1.PLATFORM.WEB,
                        duration: duration,
                        ttfb: editor_common_1.getResponseEndTime(),
                        nodes: adf_utils_1.reduce(_this.props.document, function (acc, node) {
                            acc[node.type] = (acc[node.type] || 0) + 1;
                            return acc;
                        }, {}),
                    },
                    eventType: enums_1.EVENT_TYPE.OPERATIONAL,
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
        this.serializer = new __1.ReactSerializer({
            providers: this.providerFactory,
            eventHandlers: eventHandlers,
            extensionHandlers: extensionHandlers,
            portal: portal,
            objectContext: tslib_1.__assign({ adDoc: document, schema: schema }, rendererContext),
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
            var _b = __1.renderDocument(document, this.serializer, schema || adf_schema_1.defaultSchema, adfStage), result = _b.result, stat = _b.stat;
            if (onComplete) {
                onComplete(stat);
            }
            var rendererOutput = (React.createElement(copy_text_provider_1.CopyTextProvider, null,
                React.createElement(react_intl_1.IntlProvider, null,
                    React.createElement(analyticsContext_1.default.Provider, { value: {
                            fireAnalyticsEvent: function (event) {
                                return _this.fireAnalyticsEvent(event);
                            },
                        } },
                        React.createElement(SmartCardStorage_1.Provider, null,
                            React.createElement(RendererWrapper, { appearance: appearance, dynamicTextSizing: !!allowDynamicTextSizing, wrapperRef: function (ref) {
                                    _this.editorRef = ref;
                                } }, result))))));
            return truncated ? (React.createElement(truncated_wrapper_1.TruncatedWrapper, { height: maxHeight }, rendererOutput)) : (rendererOutput);
        }
        catch (e) {
            if (onError) {
                onError(e);
            }
            return (React.createElement(RendererWrapper, { appearance: appearance, dynamicTextSizing: !!allowDynamicTextSizing },
                React.createElement(editor_common_1.UnsupportedBlock, null)));
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
}(react_1.PureComponent));
exports.Renderer = Renderer;
var RendererWithAnalytics = function (props) { return (React.createElement(analytics_namespaced_context_1.FabricEditorAnalyticsContext, { data: {
        appearance: editor_common_1.getAnalyticsAppearance(props.appearance),
        packageName: version_json_1.name,
        packageVersion: version_json_1.version,
        componentName: 'editorCore',
    } },
    React.createElement(editor_common_1.WithCreateAnalyticsEvent, { render: function (createAnalyticsEvent) { return (React.createElement(Renderer, tslib_1.__assign({}, props, { createAnalyticsEvent: createAnalyticsEvent }))); } }))); };
exports.default = RendererWithAnalytics;
function RendererWrapper(_a) {
    var appearance = _a.appearance, children = _a.children, dynamicTextSizing = _a.dynamicTextSizing, wrapperRef = _a.wrapperRef;
    return (React.createElement(editor_common_1.WidthProvider, null,
        React.createElement(editor_common_1.BaseTheme, { dynamicTextSizing: dynamicTextSizing },
            React.createElement(style_1.Wrapper, { innerRef: wrapperRef, appearance: appearance }, children))));
}
exports.RendererWrapper = RendererWrapper;
//# sourceMappingURL=index.js.map