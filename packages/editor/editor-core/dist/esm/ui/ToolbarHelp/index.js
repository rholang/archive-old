import * as React from 'react';
import QuestionIcon from '@atlaskit/icon/glyph/question';
import ToolbarButton from '../ToolbarButton';
import WithHelpTrigger from '../WithHelpTrigger';
export default (function (_a) {
    var _b = _a.title, title = _b === void 0 ? 'Open help dialog' : _b, _c = _a.titlePosition, titlePosition = _c === void 0 ? 'left' : _c;
    return (React.createElement(WithHelpTrigger, { render: function (showHelp) { return (React.createElement(ToolbarButton, { onClick: showHelp, title: title, titlePosition: titlePosition, iconBefore: React.createElement(QuestionIcon, { label: title }) })); } }));
});
//# sourceMappingURL=index.js.map