"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var more_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/editor/more"));
var theme_1 = require("@atlaskit/theme");
var tooltip_1 = tslib_1.__importDefault(require("@atlaskit/tooltip"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var React = tslib_1.__importStar(require("react"));
var typestyle_1 = require("typestyle");
var i18n_1 = require("./i18n");
var react_intl_1 = require("react-intl");
var moreEmojiContainerStyle = typestyle_1.style({ display: 'flex' });
var moreButtonStyle = typestyle_1.style({
    opacity: 0,
    outline: 'none',
    backgroundColor: 'transparent',
    border: 0,
    borderRadius: theme_1.borderRadius() + "px",
    cursor: 'pointer',
    margin: '4px 4px 4px 0',
    padding: '4px',
    width: '38px',
    verticalAlign: 'top',
    $nest: {
        '&:hover': {
            backgroundColor: theme_1.colors.N30A,
        },
    },
});
var separatorStyle = typestyle_1.style({
    backgroundColor: theme_1.colors.N30A,
    margin: '8px 8px 8px 4px',
    width: '1px',
    height: '60%',
    display: 'inline-block',
});
var ShowMore = /** @class */ (function (_super) {
    tslib_1.__extends(ShowMore, _super);
    function ShowMore() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShowMore.prototype.render = function () {
        var _a = this.props, style = _a.style, onClick = _a.onClick, classNameProp = _a.className;
        return (React.createElement("div", { className: classnames_1.default(moreEmojiContainerStyle, classNameProp.container), style: style.container },
            React.createElement("div", { className: separatorStyle }),
            React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, i18n_1.messages.moreEmoji), function (text) { return (React.createElement(tooltip_1.default, { content: text },
                React.createElement("button", { className: classnames_1.default(moreButtonStyle, classNameProp.button), style: style.button, onMouseDown: onClick },
                    React.createElement(more_1.default, { label: "More" })))); })));
    };
    ShowMore.defaultProps = {
        className: {},
        style: {},
    };
    return ShowMore;
}(React.PureComponent));
exports.ShowMore = ShowMore;
//# sourceMappingURL=ShowMore.js.map