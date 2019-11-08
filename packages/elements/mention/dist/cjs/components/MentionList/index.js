"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var logger_1 = tslib_1.__importDefault(require("../../util/logger"));
var mouse_1 = require("../../util/mouse");
var MentionItem_1 = tslib_1.__importDefault(require("../MentionItem"));
var MentionListError_1 = tslib_1.__importDefault(require("../MentionListError"));
var Scrollable_1 = tslib_1.__importDefault(require("../Scrollable"));
var styles_1 = require("./styles");
function wrapIndex(mentions, index) {
    var len = mentions.length;
    var newIndex = index;
    while (newIndex < 0 && len > 0) {
        newIndex += len;
    }
    return newIndex % len;
}
function getKey(index, mentions) {
    return mentions && mentions[index] && mentions[index].id;
}
function getIndex(key, mentions) {
    var index;
    if (mentions) {
        index = 0;
        while (index < mentions.length && mentions[index].id !== key) {
            index++;
        }
        if (index === mentions.length) {
            index = undefined;
        }
    }
    return index;
}
var MentionList = /** @class */ (function (_super) {
    tslib_1.__extends(MentionList, _super);
    function MentionList(props) {
        var _this = _super.call(this, props) || this;
        // API
        _this.selectNext = function () {
            var newIndex = wrapIndex(_this.props.mentions, _this.state.selectedIndex + 1);
            _this.selectIndex(newIndex);
        };
        _this.selectPrevious = function () {
            var newIndex = wrapIndex(_this.props.mentions, _this.state.selectedIndex - 1);
            _this.selectIndex(newIndex);
        };
        _this.selectIndex = function (index, callback) {
            var mentions = _this.props.mentions;
            _this.setState({
                selectedIndex: index,
                selectedKey: getKey(index, mentions),
            }, callback);
        };
        _this.selectId = function (id, callback) {
            var mentions = _this.props.mentions;
            var index = getIndex(id, mentions);
            if (index !== undefined) {
                _this.setState({
                    selectedIndex: index,
                    selectedKey: id,
                }, callback);
            }
        };
        _this.chooseCurrentSelection = function () {
            var _a = _this.props, mentions = _a.mentions, onSelection = _a.onSelection;
            var selectedIndex = _this.state.selectedIndex;
            var selectedMention = mentions && mentions[selectedIndex || 0];
            logger_1.default('ak-mention-list.chooseCurrentSelection', selectedMention);
            if (onSelection && selectedMention) {
                onSelection(selectedMention);
            }
        };
        _this.mentionsCount = function () {
            var mentions = _this.props.mentions;
            return (mentions && mentions.length) || 0;
        };
        _this.selectIndexOnHover = function (mention, event) {
            if (!event) {
                return;
            }
            var mousePosition = mouse_1.mouseLocation(event);
            if (mouse_1.actualMouseMove(_this.lastMousePosition, mousePosition)) {
                _this.selectId(mention.id);
            }
            _this.lastMousePosition = mousePosition;
        };
        _this.itemSelected = function (mention) {
            _this.selectId(mention.id, function () {
                _this.chooseCurrentSelection();
            });
        };
        _this.handleScrollableRef = function (ref) {
            _this.scrollable = ref;
        };
        _this.setDefaultSelectionState();
        return _this;
    }
    MentionList.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        // adjust selection
        var mentions = nextProps.mentions;
        var selectedKey = this.state.selectedKey;
        if (mentions) {
            if (!selectedKey) {
                // don't explicitly set any selected index and go with default behaviour
                return;
            }
            for (var i = 0; i < mentions.length; i++) {
                if (selectedKey === mentions[i].id) {
                    this.setState({
                        selectedIndex: i,
                    });
                    return;
                }
            }
            // existing selection not in results so clear any current selection state and go with default behaviour
            this.setDefaultSelectionState();
        }
    };
    MentionList.prototype.componentDidUpdate = function () {
        var mentions = this.props.mentions;
        var selectedIndex = this.state.selectedIndex;
        if (mentions && mentions[selectedIndex]) {
            this.revealItem(mentions[selectedIndex].id);
        }
        // FIXME - a React version of this _may_ be required for Confluence
        // integration tests. Will remove / fix once known
        // emit(elem, mentionListRenderedEvent);
    };
    // Internal
    MentionList.prototype.revealItem = function (key) {
        var item = this.items[key];
        if (item && this.scrollable) {
            this.scrollable.reveal(item);
        }
    };
    /**
     * The default selection state is to chose index 0 and not have any particular key selected
     */
    MentionList.prototype.setDefaultSelectionState = function () {
        this.state = {
            selectedIndex: 0,
            selectedKey: undefined,
        };
    };
    MentionList.prototype.renderItems = function () {
        var _this = this;
        var mentions = this.props.mentions;
        if (mentions && mentions.length) {
            this.items = {};
            return (React.createElement("div", null,
                this.props.initialHighlightElement,
                mentions.map(function (mention, idx) {
                    var key = mention.id;
                    var item = (React.createElement(MentionItem_1.default, { mention: mention, selected: _this.isSelectedMention(mention, idx), key: key, onMouseMove: _this.selectIndexOnHover, 
                        /* Cannot use onclick, as onblur will close the element, and prevent
                         * onClick from firing.
                         */
                        onSelection: _this.itemSelected, ref: function (ref) {
                            if (ref) {
                                _this.items[key] = ref;
                            }
                            else {
                                delete _this.items[key];
                            }
                        } }));
                    return item;
                })));
        }
        return null;
    };
    MentionList.prototype.isSelectedMention = function (mention, index) {
        var selectedKey = this.state.selectedKey;
        return selectedKey ? selectedKey === mention.id : index === 0;
    };
    MentionList.prototype.render = function () {
        var _a = this.props, mentions = _a.mentions, resourceError = _a.resourceError;
        var hasMentions = mentions && mentions.length;
        // If we get an error, but existing mentions are displayed, lets
        // just continue to show the existing mentions we have
        var mustShowError = resourceError && !hasMentions;
        var errorSection;
        var resultSection;
        if (mustShowError) {
            errorSection = React.createElement(MentionListError_1.default, { error: resourceError });
        }
        else if (hasMentions) {
            resultSection = (React.createElement(Scrollable_1.default, { ref: this.handleScrollableRef }, this.renderItems()));
        }
        return (React.createElement(styles_1.MentionListStyle, { empty: !hasMentions && !resourceError },
            errorSection,
            resultSection));
    };
    return MentionList;
}(React.PureComponent));
exports.default = MentionList;
//# sourceMappingURL=index.js.map