import code from './marks/code';
import em from './marks/em';
import link from './marks/link';
import strike from './marks/strike';
import strong from './marks/strong';
import subsup from './marks/subsup';
import textColor from './marks/text-color';
import underline from './marks/underline';
import indentation from './marks/indentation';
import alignment from './marks/alignment';
var doNotMark = function (_a) {
    var text = _a.text;
    return text;
};
export var markSerializers = {
    action: doNotMark,
    alignment: alignment,
    annotation: doNotMark,
    breakout: doNotMark,
    code: code,
    em: em,
    indentation: indentation,
    link: link,
    strike: strike,
    strong: strong,
    subsup: subsup,
    textColor: textColor,
    underline: underline,
};
//# sourceMappingURL=mark-serializers.js.map