export var panel = function (attrs) { return function () {
    var content = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        content[_i] = arguments[_i];
    }
    return ({
        type: 'panel',
        attrs: attrs,
        content: content,
    });
}; };
//# sourceMappingURL=panel.js.map