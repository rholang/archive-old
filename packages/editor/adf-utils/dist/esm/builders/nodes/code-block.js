export var codeBlock = function (attrs) { return function () {
    var content = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        content[_i] = arguments[_i];
    }
    return ({
        type: 'codeBlock',
        attrs: attrs,
        content: content,
    });
}; };
//# sourceMappingURL=code-block.js.map