import { createTag } from '../create-tag';
import { createTable } from '../table-util';
import { createClassName } from '../styles/util';
var className = createClassName('blockCard');
export var styles = "\n." + className + "-headingUrl {\n  overflow: hidden;\n  color: #000000;\n  font-size: 14px;\n  font-weight: 500;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  text-decoration: none;\n}\n." + className + "-outerTd  {\n  border-radius: 3px;\n  -webkit-border-radius: 3px;\n  -moz-border-radius: 3px;\n  padding: 2px 5px 5px 5px;\n  margin: 0px;\n  color: #000000;\n  background-color: #F4F5F7;\n  font-size: 12px;\n}\n." + className + "-headingData  {\n  font-size: 16px;\n  line-height: 24px;\n  font-weight: 500;\n}\n." + className + "-contentTextWithData  {\n  padding: 7px 0 0 0;\n  color: #000000;\n}\n." + className + "-block {\n  width: 400px;\n  min-width: 200px;\n  max-width: 400px;\n}\n." + className + "-cardContentTd {\n  border-radius: 3px;\n  -webkit-border-radius: 3px;\n  -moz-border-radius: 3px;\n  padding: 6px 12px 12px 12px;\n  background: #FFFFFF;\n  font-size: 12px;\n  line-height: 18px;\n  border: #ebedf0 solid 1px;\n}\n." + className + "-cardHeaderTd {\n  color: #5E6C84;\n  font-size: 12px;\n  line-height: 24px;\n}\n." + className + "-link {\n  border: none;\n  background: transparent;\n  color: #000000;\n  text-decoration: none;\n}\n." + className + "-headingUrl {\n  overflow: hidden;\n  color: #000000;\n  font-size: 14px;\n  font-weight: 500;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  text-decoration: none;\n}\n";
var renderBlockCardWithData = function (attrs) {
    var name = attrs.data.name;
    var summary = attrs.data.summary;
    var heading = createTag('div', { class: className + '-headingData' }, name);
    var text = createTag('div', { class: className + '-contentTextWithData' }, summary);
    var blockContent = createTable([
        [
            {
                attrs: { class: className + '-cardHeaderTd' },
                text: attrs.data.generator.name,
            },
        ],
        [
            {
                attrs: { class: className + '-cardContentTd' },
                text: "" + heading + text,
            },
        ],
    ], {}, { class: className + '-block' });
    return createTable([
        [
            {
                text: blockContent,
                attrs: { class: className + '-outerTd' },
            },
        ],
    ], {}, { class: className + '-block' });
};
var renderBlockCard = function (attrs, text) {
    var title = text || attrs.url;
    var heading = createTag('div', { class: className + "-block " + className + "-headingUrl" }, title);
    return createTable([[{ attrs: { class: className + '-outerTd' }, text: heading }]], {}, { class: className + '-block' });
};
export default function blockCard(_a) {
    var attrs = _a.attrs, text = _a.text;
    if (attrs.data) {
        var href_1 = attrs.data.url;
        var card_1 = renderBlockCardWithData(attrs);
        return href_1
            ? createTag('a', { href: href_1, class: className + '-link' }, card_1)
            : card_1;
    }
    var href = attrs.url;
    var card = renderBlockCard(attrs, text);
    return href
        ? createTag('a', { href: href, class: className + '-link' }, card)
        : card;
}
//# sourceMappingURL=block-card.js.map