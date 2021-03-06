import * as React from 'react';
export function renderHighlight(ReactComponent, value, highlights, prefix) {
    if (!value) {
        return null;
    }
    var parts = [];
    var prefixText = prefix || '';
    var lastIndex = 0;
    if (highlights) {
        for (var i = 0; i < highlights.length; i++) {
            var h = highlights[i];
            var start = h.start;
            var end = h.end;
            if (start > lastIndex) {
                parts.push({
                    value: value.substring(lastIndex, start),
                    matches: false,
                });
            }
            parts.push({
                value: value.substring(start, end + 1),
                matches: true,
            });
            lastIndex = end + 1;
        }
        if (lastIndex < value.length) {
            parts.push({
                value: value.substring(lastIndex, value.length),
                matches: false,
            });
        }
    }
    else {
        parts.push({
            value: value,
            matches: false,
        });
    }
    return (React.createElement(ReactComponent, null,
        prefixText,
        parts.map(function (part, index) {
            if (part.matches) {
                return React.createElement("b", { key: index }, part.value);
            }
            return part.value;
        })));
}
//# sourceMappingURL=MentionHighlightHelpers.js.map