export var bodiedExtension = function (attrs) { return function () {
    var content = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        content[_i] = arguments[_i];
    }
    return ({
        type: 'bodiedExtension',
        attrs: attrs,
        content: content,
    });
}; };
//# sourceMappingURL=bodied-extension.js.map