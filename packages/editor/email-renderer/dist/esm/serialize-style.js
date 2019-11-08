export var serializeStyle = function (style) {
    return Object.keys(style).reduce(function (memo, key) {
        if (style[key] === undefined) {
            return memo;
        }
        var value = String(style[key]).replace(/"/g, "'");
        return (memo += key + ": " + value + ";");
    }, '');
};
//# sourceMappingURL=serialize-style.js.map