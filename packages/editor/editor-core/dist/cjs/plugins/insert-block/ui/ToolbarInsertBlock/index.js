"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var ReactDOM = tslib_1.__importStar(require("react-dom"));
var react_intl_1 = require("react-intl");
var add_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/editor/add"));
var chevron_down_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/chevron-down"));
var table_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/editor/table"));
var image_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/editor/image"));
var code_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/editor/code"));
var info_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/editor/info"));
var mention_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/editor/mention"));
var task_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/editor/task"));
var decision_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/editor/decision"));
var quote_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/quote"));
var more_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/editor/more"));
var link_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/editor/link"));
var emoji_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/editor/emoji"));
var date_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/editor/date"));
var status_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/status"));
var text_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/media-services/text"));
var layout_two_equal_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/editor/layout-two-equal"));
var horizontal_rule_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/editor/horizontal-rule"));
var picker_1 = require("@atlaskit/emoji/picker");
var editor_common_1 = require("@atlaskit/editor-common");
var analytics_1 = require("../../../../analytics");
var keymaps_1 = require("../../../../keymaps");
var DropdownMenu_1 = tslib_1.__importDefault(require("../../../../ui/DropdownMenu"));
var ToolbarButton_1 = tslib_1.__importDefault(require("../../../../ui/ToolbarButton"));
var styles_1 = require("../../../../ui/styles");
var commands_1 = require("../../../table/commands");
var actions_1 = require("../../../date/actions");
var actions_2 = require("../../../placeholder-text/actions");
var input_rule_1 = require("../../../rule/pm-plugins/input-rule");
var styles_2 = require("./styles");
var actions_3 = require("../../../layout/actions");
var commands_2 = require("../../../tasks-and-decisions/commands");
var commands_3 = require("../../../hyperlink/commands");
var insert_mention_query_1 = require("../../../mentions/commands/insert-mention-query");
var actions_4 = require("../../../status/actions");
var analytics_2 = require("../../../analytics");
var insert_emoji_1 = require("../../../emoji/commands/insert-emoji");
exports.messages = react_intl_1.defineMessages({
    action: {
        id: 'fabric.editor.action',
        defaultMessage: 'Action item',
        description: 'Also known as a “task”, “to do item”, or a checklist',
    },
    actionDescription: {
        id: 'fabric.editor.action.description',
        defaultMessage: 'Create and assign action items',
        description: '',
    },
    link: {
        id: 'fabric.editor.link',
        defaultMessage: 'Link',
        description: 'Insert a hyperlink',
    },
    linkDescription: {
        id: 'fabric.editor.link.description',
        defaultMessage: 'Insert a link',
        description: 'Insert a hyperlink',
    },
    filesAndImages: {
        id: 'fabric.editor.filesAndImages',
        defaultMessage: 'Files & images',
        description: 'Insert one or more files or images',
    },
    filesAndImagesDescription: {
        id: 'fabric.editor.filesAndImages.description',
        defaultMessage: 'Add images and other files to your page',
        description: 'Insert one or more files or images',
    },
    image: {
        id: 'fabric.editor.image',
        defaultMessage: 'Image',
        description: 'Insert an image.',
    },
    mention: {
        id: 'fabric.editor.mention',
        defaultMessage: 'Mention',
        description: 'Reference another person in your document',
    },
    mentionDescription: {
        id: 'fabric.editor.mention.description',
        defaultMessage: 'Mention someone to send them a notification',
        description: 'Reference another person in your document',
    },
    emoji: {
        id: 'fabric.editor.emoji',
        defaultMessage: 'Emoji',
        description: 'Insert an emoticon or smiley :-)',
    },
    emojiDescription: {
        id: 'fabric.editor.emoji.description',
        defaultMessage: 'Use emojis to express ideas 🎉 and emotions 😄',
        description: 'Insert an emoticon or smiley :-)',
    },
    table: {
        id: 'fabric.editor.table',
        defaultMessage: 'Table',
        description: 'Inserts a table in the document',
    },
    tableDescription: {
        id: 'fabric.editor.table.description',
        defaultMessage: 'Insert a table',
        description: 'Inserts a table in the document',
    },
    decision: {
        id: 'fabric.editor.decision',
        defaultMessage: 'Decision',
        description: 'Capture a decision you’ve made',
    },
    decisionDescription: {
        id: 'fabric.editor.decision.description',
        defaultMessage: 'Capture decisions so they’re easy to track',
        description: 'Capture a decision you’ve made',
    },
    feedbackDialog: {
        id: 'fabric.editor.feedbackDialog',
        defaultMessage: 'Give feedback',
        description: 'Open the feedback dialog from editor',
    },
    feedbackDialogDescription: {
        id: 'fabric.editor.feedbackDialog.description',
        defaultMessage: 'Tell us about your experience using the new editor',
        description: 'Description for feedback option under quick insert dropdown',
    },
    horizontalRule: {
        id: 'fabric.editor.horizontalRule',
        defaultMessage: 'Divider',
        description: 'A horizontal rule or divider',
    },
    horizontalRuleDescription: {
        id: 'fabric.editor.horizontalRule.description',
        defaultMessage: 'Separate content with a horizontal line',
        description: 'A horizontal rule or divider',
    },
    date: {
        id: 'fabric.editor.date',
        defaultMessage: 'Date',
        description: 'Opens a date picker that lets you select a date',
    },
    dateDescription: {
        id: 'fabric.editor.date.description',
        defaultMessage: 'Add a date using a calendar',
        description: 'Opens a date picker that lets you select a date',
    },
    placeholderText: {
        id: 'fabric.editor.placeholderText',
        defaultMessage: 'Placeholder text',
        description: '',
    },
    columns: {
        id: 'fabric.editor.columns',
        defaultMessage: 'Layouts',
        description: 'Create a multi column section or layout',
    },
    columnsDescription: {
        id: 'fabric.editor.columns.description',
        defaultMessage: 'Structure your page using sections',
        description: 'Create a multi column section or layout',
    },
    status: {
        id: 'fabric.editor.status',
        defaultMessage: 'Status',
        description: 'Inserts an item representing the status of an activity to task.',
    },
    statusDescription: {
        id: 'fabric.editor.status.description',
        defaultMessage: 'Add a custom status label',
        description: 'Inserts an item representing the status of an activity to task.',
    },
    viewMore: {
        id: 'fabric.editor.viewMore',
        defaultMessage: 'View more',
        description: '',
    },
    insertMenu: {
        id: 'fabric.editor.insertMenu',
        defaultMessage: 'Insert',
        description: 'Opens a menu of additional items that can be inserted into your document.',
    },
});
var blockTypeIcons = {
    codeblock: code_1.default,
    panel: info_1.default,
    blockquote: quote_1.default,
};
/**
 * Checks if an element is detached (i.e. not in the current document)
 */
var isDetachedElement = function (el) { return !document.body.contains(el); };
var noop = function () { };
var ToolbarInsertBlock = /** @class */ (function (_super) {
    tslib_1.__extends(ToolbarInsertBlock, _super);
    function ToolbarInsertBlock() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isOpen: false,
            emojiPickerOpen: false,
        };
        _this.onOpenChange = function (attrs) {
            var state = {
                isOpen: attrs.isOpen,
                emojiPickerOpen: _this.state.emojiPickerOpen,
            };
            if (_this.state.emojiPickerOpen && !attrs.open) {
                state.emojiPickerOpen = false;
            }
            _this.setState(state);
        };
        _this.handleTriggerClick = function () {
            var isOpen = _this.state.isOpen;
            _this.onOpenChange({ isOpen: !isOpen });
        };
        _this.toggleEmojiPicker = function (inputMethod) {
            if (inputMethod === void 0) { inputMethod = analytics_2.INPUT_METHOD.TOOLBAR; }
            _this.setState(function (prevState) { return ({ emojiPickerOpen: !prevState.emojiPickerOpen }); }, function () {
                if (_this.state.emojiPickerOpen) {
                    var dispatchAnalyticsEvent = _this.props.dispatchAnalyticsEvent;
                    if (dispatchAnalyticsEvent) {
                        dispatchAnalyticsEvent({
                            action: analytics_2.ACTION.OPENED,
                            actionSubject: analytics_2.ACTION_SUBJECT.PICKER,
                            actionSubjectId: analytics_2.ACTION_SUBJECT_ID.PICKER_EMOJI,
                            attributes: { inputMethod: inputMethod },
                            eventType: analytics_2.EVENT_TYPE.UI,
                        });
                    }
                }
            });
        };
        _this.handleButtonRef = function (ref) {
            var buttonRef = ref || null;
            if (buttonRef) {
                _this.button = ReactDOM.findDOMNode(buttonRef);
            }
        };
        _this.handleDropDownButtonRef = function (ref, items) {
            items.forEach(function (item) { return item.handleRef && item.handleRef(ref); });
        };
        _this.onPickerRef = function (ref) {
            if (ref) {
                document.addEventListener('click', _this.handleClickOutside);
            }
            else {
                document.removeEventListener('click', _this.handleClickOutside);
            }
            _this.pickerRef = ref;
        };
        _this.handleClickOutside = function (e) {
            var picker = _this.pickerRef && ReactDOM.findDOMNode(_this.pickerRef);
            // Ignore click events for detached elements.
            // Workaround for FS-1322 - where two onClicks fire - one when the upload button is
            // still in the document, and one once it's detached. Does not always occur, and
            // may be a side effect of a react render optimisation
            if (!picker ||
                (e.target &&
                    !isDetachedElement(e.target) &&
                    !picker.contains(e.target))) {
                _this.toggleEmojiPicker();
            }
        };
        _this.createItems = function () {
            var _a = _this.props, isTypeAheadAllowed = _a.isTypeAheadAllowed, tableSupported = _a.tableSupported, mediaUploadsEnabled = _a.mediaUploadsEnabled, mediaSupported = _a.mediaSupported, imageUploadSupported = _a.imageUploadSupported, imageUploadEnabled = _a.imageUploadEnabled, mentionsSupported = _a.mentionsSupported, availableWrapperBlockTypes = _a.availableWrapperBlockTypes, actionSupported = _a.actionSupported, decisionSupported = _a.decisionSupported, macroProvider = _a.macroProvider, linkSupported = _a.linkSupported, linkDisabled = _a.linkDisabled, emojiDisabled = _a.emojiDisabled, emojiProvider = _a.emojiProvider, nativeStatusSupported = _a.nativeStatusSupported, insertMenuItems = _a.insertMenuItems, dateEnabled = _a.dateEnabled, placeholderTextEnabled = _a.placeholderTextEnabled, horizontalRuleEnabled = _a.horizontalRuleEnabled, layoutSectionEnabled = _a.layoutSectionEnabled, formatMessage = _a.intl.formatMessage;
            var items = [];
            if (actionSupported) {
                var labelAction = formatMessage(exports.messages.action);
                items.push({
                    content: labelAction,
                    value: { name: 'action' },
                    elemBefore: React.createElement(task_1.default, { label: labelAction }),
                    elemAfter: React.createElement(styles_1.Shortcut, null, '[]'),
                    shortcut: '[]',
                });
            }
            if (linkSupported) {
                var labelLink = formatMessage(exports.messages.link);
                var shortcutLink = keymaps_1.tooltip(keymaps_1.addLink);
                items.push({
                    content: labelLink,
                    value: { name: 'link' },
                    isDisabled: linkDisabled,
                    elemBefore: React.createElement(link_1.default, { label: labelLink }),
                    elemAfter: shortcutLink && React.createElement(styles_1.Shortcut, null, shortcutLink),
                    shortcut: shortcutLink,
                });
            }
            if (mediaSupported && mediaUploadsEnabled) {
                var labelFilesAndImages = formatMessage(exports.messages.filesAndImages);
                items.push({
                    content: labelFilesAndImages,
                    value: { name: 'media' },
                    elemBefore: React.createElement(image_1.default, { label: labelFilesAndImages }),
                });
            }
            if (imageUploadSupported) {
                var labelImage = formatMessage(exports.messages.image);
                items.push({
                    content: labelImage,
                    value: { name: 'image upload' },
                    isDisabled: !imageUploadEnabled,
                    elemBefore: React.createElement(image_1.default, { label: labelImage }),
                });
            }
            if (mentionsSupported) {
                var labelMention = formatMessage(exports.messages.mention);
                items.push({
                    content: labelMention,
                    value: { name: 'mention' },
                    isDisabled: !isTypeAheadAllowed,
                    elemBefore: React.createElement(mention_1.default, { label: labelMention }),
                    elemAfter: React.createElement(styles_1.Shortcut, null, "@"),
                    shortcut: '@',
                });
            }
            if (emojiProvider) {
                var labelEmoji = formatMessage(exports.messages.emoji);
                items.push({
                    content: labelEmoji,
                    value: { name: 'emoji' },
                    isDisabled: emojiDisabled || !isTypeAheadAllowed,
                    elemBefore: React.createElement(emoji_1.default, { label: labelEmoji }),
                    handleRef: _this.handleButtonRef,
                    elemAfter: React.createElement(styles_1.Shortcut, null, ":"),
                    shortcut: ':',
                });
            }
            if (tableSupported) {
                var labelTable = formatMessage(exports.messages.table);
                var shortcutTable = keymaps_1.tooltip(keymaps_1.toggleTable);
                items.push({
                    content: labelTable,
                    value: { name: 'table' },
                    elemBefore: React.createElement(table_1.default, { label: labelTable }),
                    elemAfter: shortcutTable && React.createElement(styles_1.Shortcut, null, shortcutTable),
                    shortcut: shortcutTable,
                });
            }
            if (layoutSectionEnabled) {
                var labelColumns = formatMessage(exports.messages.columns);
                items.push({
                    content: labelColumns,
                    value: { name: 'layout' },
                    elemBefore: React.createElement(layout_two_equal_1.default, { label: labelColumns }),
                });
            }
            if (availableWrapperBlockTypes) {
                availableWrapperBlockTypes.forEach(function (blockType) {
                    var BlockTypeIcon = blockTypeIcons[blockType.name];
                    var labelBlock = formatMessage(blockType.title);
                    var shortcutBlock = keymaps_1.tooltip(keymaps_1.findKeymapByDescription(blockType.title.defaultMessage));
                    items.push({
                        content: labelBlock,
                        value: blockType,
                        elemBefore: React.createElement(BlockTypeIcon, { label: labelBlock }),
                        elemAfter: shortcutBlock && React.createElement(styles_1.Shortcut, null, shortcutBlock),
                        shortcut: shortcutBlock,
                    });
                });
            }
            if (decisionSupported) {
                var labelDecision = formatMessage(exports.messages.decision);
                items.push({
                    content: labelDecision,
                    value: { name: 'decision' },
                    elemBefore: React.createElement(decision_1.default, { label: labelDecision }),
                    elemAfter: React.createElement(styles_1.Shortcut, null, '<>'),
                    shortcut: '<>',
                });
            }
            if (horizontalRuleEnabled &&
                _this.props.editorView.state.schema.nodes.rule) {
                var labelHorizontalRule = formatMessage(exports.messages.horizontalRule);
                items.push({
                    content: labelHorizontalRule,
                    value: { name: 'horizontalrule' },
                    elemBefore: React.createElement(horizontal_rule_1.default, { label: labelHorizontalRule }),
                    elemAfter: React.createElement(styles_1.Shortcut, null, "---"),
                    shortcut: '---',
                });
            }
            if (dateEnabled) {
                var labelDate = formatMessage(exports.messages.date);
                items.push({
                    content: labelDate,
                    value: { name: 'date' },
                    elemBefore: React.createElement(date_1.default, { label: labelDate }),
                });
            }
            if (placeholderTextEnabled) {
                var labelPlaceholderText = formatMessage(exports.messages.placeholderText);
                items.push({
                    content: labelPlaceholderText,
                    value: { name: 'placeholder text' },
                    elemBefore: React.createElement(text_1.default, { label: labelPlaceholderText }),
                });
            }
            if (nativeStatusSupported) {
                var labelStatus = formatMessage(exports.messages.status);
                items.push({
                    content: labelStatus,
                    value: { name: 'status' },
                    elemBefore: React.createElement(status_1.default, { label: labelStatus }),
                });
            }
            if (insertMenuItems) {
                items = items.concat(insertMenuItems);
                // keeping this here for backwards compatibility so confluence
                // has time to implement this button before it disappears.
                // Should be safe to delete soon. If in doubt ask Leandro Lemos (llemos)
            }
            else if (typeof macroProvider !== 'undefined' && macroProvider) {
                var labelViewMore = formatMessage(exports.messages.viewMore);
                items.push({
                    content: labelViewMore,
                    value: { name: 'macro' },
                    elemBefore: React.createElement(more_1.default, { label: labelViewMore }),
                });
            }
            return items;
        };
        _this.toggleLinkPanel = analytics_1.withAnalytics('atlassian.editor.format.hyperlink.button', function (inputMethod) {
            var editorView = _this.props.editorView;
            commands_3.showLinkToolbar(inputMethod)(editorView.state, editorView.dispatch);
            return true;
        });
        _this.insertMention = analytics_1.withAnalytics('atlassian.fabric.mention.picker.trigger.button', function (inputMethod) {
            var editorView = _this.props.editorView;
            insert_mention_query_1.insertMentionQuery(inputMethod)(editorView.state, editorView.dispatch);
            return true;
        });
        _this.insertTable = analytics_1.withAnalytics('atlassian.editor.format.table.button', function (inputMethod) {
            var editorView = _this.props.editorView;
            return analytics_2.withAnalytics({
                action: analytics_2.ACTION.INSERTED,
                actionSubject: analytics_2.ACTION_SUBJECT.DOCUMENT,
                actionSubjectId: analytics_2.ACTION_SUBJECT_ID.TABLE,
                attributes: { inputMethod: inputMethod },
                eventType: analytics_2.EVENT_TYPE.TRACK,
            })(commands_1.createTable)(editorView.state, editorView.dispatch);
        });
        _this.createDate = analytics_1.withAnalytics('atlassian.editor.format.date.button', function (inputMethod) {
            var editorView = _this.props.editorView;
            actions_1.insertDate(undefined, inputMethod)(editorView.state, editorView.dispatch);
            actions_1.openDatePicker()(editorView.state, editorView.dispatch);
            return true;
        });
        _this.createPlaceholderText = analytics_1.withAnalytics('atlassian.editor.format.placeholder.button', function () {
            var editorView = _this.props.editorView;
            actions_2.showPlaceholderFloatingToolbar(editorView.state, editorView.dispatch);
            return true;
        });
        _this.insertLayoutColumns = analytics_1.withAnalytics('atlassian.editor.format.layout.button', function (inputMethod) {
            var editorView = _this.props.editorView;
            actions_3.insertLayoutColumnsWithAnalytics(inputMethod)(editorView.state, editorView.dispatch);
            return true;
        });
        _this.createStatus = analytics_1.withAnalytics('atlassian.editor.format.status.button', function (inputMethod) {
            var editorView = _this.props.editorView;
            actions_4.updateStatusWithAnalytics(inputMethod)(editorView.state, editorView.dispatch);
            return true;
        });
        _this.openMediaPicker = analytics_1.withAnalytics('atlassian.editor.format.media.button', function (inputMethod) {
            var _a = _this.props, onShowMediaPicker = _a.onShowMediaPicker, dispatchAnalyticsEvent = _a.dispatchAnalyticsEvent;
            if (onShowMediaPicker) {
                onShowMediaPicker();
                if (dispatchAnalyticsEvent) {
                    dispatchAnalyticsEvent({
                        action: analytics_2.ACTION.OPENED,
                        actionSubject: analytics_2.ACTION_SUBJECT.PICKER,
                        actionSubjectId: analytics_2.ACTION_SUBJECT_ID.PICKER_CLOUD,
                        attributes: { inputMethod: inputMethod },
                        eventType: analytics_2.EVENT_TYPE.UI,
                    });
                }
            }
            return true;
        });
        _this.insertTaskDecision = function (name, inputMethod) {
            return analytics_1.withAnalytics("atlassian.fabric." + name + ".trigger.button", function () {
                var editorView = _this.props.editorView;
                if (!editorView) {
                    return false;
                }
                var listType = name === 'action' ? 'taskList' : 'decisionList';
                commands_2.insertTaskDecision(editorView, listType, inputMethod);
                return true;
            });
        };
        _this.insertHorizontalRule = analytics_1.withAnalytics('atlassian.editor.format.horizontalrule.button', function (inputMethod) {
            var editorView = _this.props.editorView;
            var tr = input_rule_1.createHorizontalRule(editorView.state, editorView.state.selection.from, editorView.state.selection.to, inputMethod);
            if (tr) {
                editorView.dispatch(tr);
                return true;
            }
            return false;
        });
        _this.insertBlockType = function (itemName) {
            return analytics_1.withAnalytics("atlassian.editor.format." + itemName + ".button", function () {
                var _a = _this.props, editorView = _a.editorView, onInsertBlockType = _a.onInsertBlockType;
                var state = editorView.state, dispatch = editorView.dispatch;
                onInsertBlockType(itemName)(state, dispatch);
                return true;
            });
        };
        _this.handleSelectedEmoji = analytics_1.withAnalytics('atlassian.editor.emoji.button', function (emojiId) {
            insert_emoji_1.insertEmoji(emojiId, analytics_2.INPUT_METHOD.PICKER)(_this.props.editorView.state, _this.props.editorView.dispatch);
            _this.props.editorView.focus();
            _this.toggleEmojiPicker();
            return true;
        });
        _this.onItemActivated = function (_a) {
            var item = _a.item, inputMethod = _a.inputMethod;
            var _b = _this.props, editorView = _b.editorView, editorActions = _b.editorActions, onInsertMacroFromMacroBrowser = _b.onInsertMacroFromMacroBrowser, macroProvider = _b.macroProvider, handleImageUpload = _b.handleImageUpload;
            switch (item.value.name) {
                case 'link':
                    _this.toggleLinkPanel(inputMethod);
                    break;
                case 'table':
                    _this.insertTable(inputMethod);
                    break;
                case 'image upload':
                    if (handleImageUpload) {
                        var state = editorView.state, dispatch = editorView.dispatch;
                        handleImageUpload()(state, dispatch);
                    }
                    break;
                case 'media':
                    _this.openMediaPicker(inputMethod);
                    break;
                case 'mention':
                    _this.insertMention(inputMethod);
                    break;
                case 'emoji':
                    _this.toggleEmojiPicker(inputMethod);
                    break;
                case 'codeblock':
                case 'blockquote':
                case 'panel':
                    _this.insertBlockType(item.value.name)();
                    break;
                case 'action':
                case 'decision':
                    _this.insertTaskDecision(item.value.name, inputMethod)();
                    break;
                case 'horizontalrule':
                    _this.insertHorizontalRule(inputMethod);
                    break;
                case 'macro':
                    analytics_1.analyticsService.trackEvent("atlassian.editor.format." + item.value.name + ".button");
                    onInsertMacroFromMacroBrowser(macroProvider)(editorView.state, editorView.dispatch);
                    break;
                case 'date':
                    _this.createDate();
                    break;
                case 'placeholder text':
                    _this.createPlaceholderText();
                    break;
                case 'layout':
                    _this.insertLayoutColumns(inputMethod);
                    break;
                case 'status':
                    _this.createStatus(inputMethod);
                    break;
                default:
                    if (item && item.onClick) {
                        item.onClick(editorActions);
                        break;
                    }
            }
            _this.setState({ isOpen: false });
            if (!editorView.hasFocus()) {
                editorView.focus();
            }
        };
        _this.insertToolbarMenuItem = function (btn) {
            return _this.onItemActivated({
                item: btn,
                inputMethod: analytics_2.INPUT_METHOD.TOOLBAR,
            });
        };
        _this.insertInsertMenuItem = function (_a) {
            var item = _a.item;
            return _this.onItemActivated({
                item: item,
                inputMethod: analytics_2.INPUT_METHOD.INSERT_MENU,
            });
        };
        return _this;
    }
    ToolbarInsertBlock.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        // If number of visible buttons changed, close emoji picker
        if (nextProps.buttons !== this.props.buttons) {
            this.setState({ emojiPickerOpen: false });
        }
    };
    ToolbarInsertBlock.prototype.renderPopup = function () {
        var emojiPickerOpen = this.state.emojiPickerOpen;
        var _a = this.props, popupsMountPoint = _a.popupsMountPoint, popupsBoundariesElement = _a.popupsBoundariesElement, popupsScrollableElement = _a.popupsScrollableElement, emojiProvider = _a.emojiProvider;
        if (!emojiPickerOpen || !this.button || !emojiProvider) {
            return null;
        }
        return (React.createElement(editor_common_1.Popup, { target: this.button, fitHeight: 350, fitWidth: 350, offset: [0, 3], mountTo: popupsMountPoint, boundariesElement: popupsBoundariesElement, scrollableElement: popupsScrollableElement },
            React.createElement(picker_1.EmojiPicker, { emojiProvider: emojiProvider, onSelection: this.handleSelectedEmoji, onPickerRef: this.onPickerRef })));
    };
    ToolbarInsertBlock.prototype.render = function () {
        var _this = this;
        var isOpen = this.state.isOpen;
        var _a = this.props, popupsMountPoint = _a.popupsMountPoint, popupsBoundariesElement = _a.popupsBoundariesElement, popupsScrollableElement = _a.popupsScrollableElement, isDisabled = _a.isDisabled, numberOfButtons = _a.buttons, isReducedSpacing = _a.isReducedSpacing, formatMessage = _a.intl.formatMessage;
        var items = this.createItems();
        var buttons = items.slice(0, numberOfButtons);
        var dropdownItems = items.slice(numberOfButtons);
        if (items.length === 0) {
            return null;
        }
        var labelInsertMenu = formatMessage(exports.messages.insertMenu);
        keymaps_1.findShortcutByDescription(exports.messages.insertMenu.description);
        var toolbarButtonFactory = function (disabled, items) { return (React.createElement(ToolbarButton_1.default, { ref: function (el) { return _this.handleDropDownButtonRef(el, items); }, selected: isOpen, disabled: disabled, onClick: _this.handleTriggerClick, spacing: isReducedSpacing ? 'none' : 'default', title: keymaps_1.renderTooltipContent(labelInsertMenu, undefined, '/'), iconBefore: React.createElement(styles_2.TriggerWrapper, null,
                React.createElement(add_1.default, { label: labelInsertMenu }),
                React.createElement(styles_1.ExpandIconWrapper, null,
                    React.createElement(chevron_down_1.default, { label: labelInsertMenu }))) })); };
        return (React.createElement(styles_1.ButtonGroup, { width: isReducedSpacing ? 'small' : 'large' },
            buttons.map(function (btn) { return (React.createElement(ToolbarButton_1.default, { ref: btn.handleRef || noop, key: btn.content, spacing: isReducedSpacing ? 'none' : 'default', disabled: isDisabled || btn.isDisabled, iconBefore: btn.elemBefore, selected: btn.isActive, title: keymaps_1.renderTooltipContent(btn.content, undefined, btn.shortcut), onClick: function () { return _this.insertToolbarMenuItem(btn); } })); }),
            React.createElement(styles_1.Wrapper, null,
                this.renderPopup(),
                dropdownItems.length > 0 &&
                    (!isDisabled ? (React.createElement(DropdownMenu_1.default, { items: [{ items: dropdownItems }], onItemActivated: this.insertInsertMenuItem, onOpenChange: this.onOpenChange, mountTo: popupsMountPoint, boundariesElement: popupsBoundariesElement, scrollableElement: popupsScrollableElement, isOpen: isOpen, fitHeight: 188, fitWidth: 175, zIndex: editor_common_1.akEditorMenuZIndex }, toolbarButtonFactory(false, dropdownItems))) : (React.createElement("div", null, toolbarButtonFactory(true, dropdownItems)))))));
    };
    return ToolbarInsertBlock;
}(React.PureComponent));
exports.default = react_intl_1.injectIntl(ToolbarInsertBlock);
//# sourceMappingURL=index.js.map