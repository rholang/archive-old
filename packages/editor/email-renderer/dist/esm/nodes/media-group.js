import { createTag } from '../create-tag';
import { serializeStyle } from '../serialize-style';
export default function mediaGroup(_a) {
    var text = _a.text;
    var style = serializeStyle({
        width: '100%',
    });
    return createTag('div', { style: style }, text);
}
//# sourceMappingURL=media-group.js.map