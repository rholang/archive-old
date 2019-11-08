"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var heading_anchor_1 = tslib_1.__importDefault(require("./heading-anchor"));
var url_parse_1 = tslib_1.__importDefault(require("url-parse"));
var enums_1 = require("../../analytics/enums");
var analyticsContext_1 = tslib_1.__importDefault(require("../../analytics/analyticsContext"));
var copy_text_provider_1 = require("./copy-text-provider");
var getCurrentUrlWithHash = function (hash) {
    if (hash === void 0) { hash = ''; }
    var url = new url_parse_1.default(window.location.href);
    url.set('hash', encodeURIComponent(hash));
    return url.href;
};
function Heading(props) {
    var headingId = props.headingId;
    var HX = "h" + props.level;
    return (react_1.default.createElement(HX, { id: headingId },
        !!props.showAnchorLink && (react_1.default.createElement(copy_text_provider_1.CopyTextConsumer, null, function (_a) {
            var copyTextToClipboard = _a.copyTextToClipboard;
            return (headingId && (react_1.default.createElement(analyticsContext_1.default.Consumer, null, function (_a) {
                var fireAnalyticsEvent = _a.fireAnalyticsEvent;
                return (react_1.default.createElement(heading_anchor_1.default, { onCopyText: function () {
                        fireAnalyticsEvent({
                            action: enums_1.ACTION.CLICKED,
                            actionSubject: enums_1.ACTION_SUBJECT.BUTTON,
                            actionSubjectId: enums_1.ACTION_SUBJECT_ID.HEADING_ANCHOR_LINK,
                            eventType: enums_1.EVENT_TYPE.UI,
                        });
                        return copyTextToClipboard(getCurrentUrlWithHash(headingId));
                    } }));
            })));
        })),
        props.children));
}
exports.default = Heading;
//# sourceMappingURL=heading.js.map