import { __assign, __extends } from "tslib";
import classnames from 'classnames';
import * as React from 'react';
import { PureComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { isMessagesKey } from '../../util/type-helpers';
import { messages } from '../i18n';
import * as styles from './styles';
var EmojiPickerCategoryHeading = /** @class */ (function (_super) {
    __extends(EmojiPickerCategoryHeading, _super);
    function EmojiPickerCategoryHeading() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmojiPickerCategoryHeading.prototype.render = function () {
        var _a = this.props, id = _a.id, title = _a.title, className = _a.className;
        return (React.createElement("div", { id: id, "data-category-id": id, className: classnames(className) },
            React.createElement("div", { className: styles.emojiCategoryTitle }, isMessagesKey(title) ? (React.createElement(FormattedMessage, __assign({}, messages[title]))) : (title))));
    };
    return EmojiPickerCategoryHeading;
}(PureComponent));
export default EmojiPickerCategoryHeading;
//# sourceMappingURL=EmojiPickerCategoryHeading.js.map