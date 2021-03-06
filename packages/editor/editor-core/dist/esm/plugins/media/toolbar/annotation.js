import { __awaiter, __extends, __generator } from "tslib";
import * as React from 'react';
import AnnotateIcon from '@atlaskit/icon/glyph/media-services/annotate';
import { getMediaClient } from '@atlaskit/media-client';
import { defineMessages } from 'react-intl';
import Button from '../../floating-toolbar/ui/Button';
import Separator from '../../floating-toolbar/ui/Separator';
import { stateKey } from '../pm-plugins/main';
import { openMediaEditor } from '../commands/media-editor';
import { withAnalytics, ACTION_SUBJECT_ID, ACTION_SUBJECT, ACTION, EVENT_TYPE, } from '../../../plugins/analytics';
var annotate = function (state, dispatch) {
    var pluginState = stateKey.getState(state);
    if (!pluginState) {
        return false;
    }
    var mediaSingle = state.schema.nodes.mediaSingle;
    var selected = pluginState.selectedMediaContainerNode();
    if (!selected || selected.type !== mediaSingle) {
        return false;
    }
    var _a = selected.firstChild.attrs, id = _a.id, collectionName = _a.collection, occurrenceKey = _a.occurrenceKey;
    return withAnalytics({
        action: ACTION.CLICKED,
        actionSubject: ACTION_SUBJECT.MEDIA,
        actionSubjectId: ACTION_SUBJECT_ID.ANNOTATE_BUTTON,
        eventType: EVENT_TYPE.UI,
    })(openMediaEditor(state.selection.from + 1, {
        id: id,
        collectionName: collectionName,
        mediaItemType: 'file',
        occurrenceKey: occurrenceKey,
    }))(state, dispatch);
};
export var messages = defineMessages({
    annotate: {
        id: 'fabric.editor.annotate',
        defaultMessage: 'Annotate',
        description: 'Annotate an image by drawing arrows, adding text, or scribbles.',
    },
});
var AnnotationToolbar = /** @class */ (function (_super) {
    __extends(AnnotationToolbar, _super);
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
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
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
        return __awaiter(this, void 0, void 0, function () {
            var mediaClient, state;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        mediaClient = getMediaClient(this.props.viewMediaClientConfig);
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
        var title = intl.formatMessage(messages.annotate);
        return (React.createElement(React.Fragment, null,
            React.createElement(Separator, null),
            React.createElement(Button, { title: title, icon: React.createElement(AnnotateIcon, { label: title }), onClick: this.onClickAnnotation })));
    };
    return AnnotationToolbar;
}(React.Component));
export { AnnotationToolbar };
export var renderAnnotationButton = function (pluginState, intl) {
    return function (view, idx) {
        var selectedContainer = pluginState.selectedMediaContainerNode();
        if (!selectedContainer) {
            return null;
        }
        return (React.createElement(AnnotationToolbar, { key: idx, viewMediaClientConfig: pluginState.mediaClientConfig, id: selectedContainer.firstChild.attrs.id, collection: selectedContainer.firstChild.attrs.collection, view: view, intl: intl }));
    };
};
//# sourceMappingURL=annotation.js.map