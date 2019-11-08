"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var annotate_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/media-services/annotate"));
var media_client_1 = require("@atlaskit/media-client");
var react_intl_1 = require("react-intl");
var Button_1 = tslib_1.__importDefault(require("../../floating-toolbar/ui/Button"));
var Separator_1 = tslib_1.__importDefault(require("../../floating-toolbar/ui/Separator"));
var main_1 = require("../pm-plugins/main");
var media_editor_1 = require("../commands/media-editor");
var analytics_1 = require("../../../plugins/analytics");
var annotate = function (state, dispatch) {
    var pluginState = main_1.stateKey.getState(state);
    if (!pluginState) {
        return false;
    }
    var mediaSingle = state.schema.nodes.mediaSingle;
    var selected = pluginState.selectedMediaContainerNode();
    if (!selected || selected.type !== mediaSingle) {
        return false;
    }
    var _a = selected.firstChild.attrs, id = _a.id, collectionName = _a.collection, occurrenceKey = _a.occurrenceKey;
    return analytics_1.withAnalytics({
        action: analytics_1.ACTION.CLICKED,
        actionSubject: analytics_1.ACTION_SUBJECT.MEDIA,
        actionSubjectId: analytics_1.ACTION_SUBJECT_ID.ANNOTATE_BUTTON,
        eventType: analytics_1.EVENT_TYPE.UI,
    })(media_editor_1.openMediaEditor(state.selection.from + 1, {
        id: id,
        collectionName: collectionName,
        mediaItemType: 'file',
        occurrenceKey: occurrenceKey,
    }))(state, dispatch);
};
exports.messages = react_intl_1.defineMessages({
    annotate: {
        id: 'fabric.editor.annotate',
        defaultMessage: 'Annotate',
        description: 'Annotate an image by drawing arrows, adding text, or scribbles.',
    },
});
var AnnotationToolbar = /** @class */ (function (_super) {
    tslib_1.__extends(AnnotationToolbar, _super);
    function AnnotationToolbar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isImage: false,
        };
        _this.onClickAnnotation = function () {
            var view = _this.props.view;
            if (view) {
                annotate(view.state, view.dispatch);
            }
        };
        return _this;
    }
    AnnotationToolbar.prototype.componentDidMount = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.checkIsImage()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AnnotationToolbar.prototype.checkIsImage = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var mediaClient, state;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        mediaClient = media_client_1.getMediaClient(this.props.viewMediaClientConfig);
                        if (!this.props.id) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, mediaClient.file.getCurrentState(this.props.id, {
                                collectionName: this.props.collection,
                            })];
                    case 1:
                        state = _a.sent();
                        if (state && state.status !== 'error' && state.mediaType === 'image') {
                            this.setState({
                                isImage: true,
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AnnotationToolbar.prototype.componentDidUpdate = function (prevProps) {
        var _this = this;
        if (prevProps.id !== this.props.id) {
            this.setState({ isImage: false }, function () {
                _this.checkIsImage();
            });
        }
    };
    AnnotationToolbar.prototype.render = function () {
        if (!this.state.isImage) {
            return null;
        }
        var intl = this.props.intl;
        var title = intl.formatMessage(exports.messages.annotate);
        return (React.createElement(React.Fragment, null,
            React.createElement(Separator_1.default, null),
            React.createElement(Button_1.default, { title: title, icon: React.createElement(annotate_1.default, { label: title }), onClick: this.onClickAnnotation })));
    };
    return AnnotationToolbar;
}(React.Component));
exports.AnnotationToolbar = AnnotationToolbar;
exports.renderAnnotationButton = function (pluginState, intl) {
    return function (view, idx) {
        var selectedContainer = pluginState.selectedMediaContainerNode();
        if (!selectedContainer) {
            return null;
        }
        return (React.createElement(AnnotationToolbar, { key: idx, viewMediaClientConfig: pluginState.mediaClientConfig, id: selectedContainer.firstChild.attrs.id, collection: selectedContainer.firstChild.attrs.collection, view: view, intl: intl }));
    };
};
//# sourceMappingURL=annotation.js.map