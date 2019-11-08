"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var util_1 = require("../util");
/**
 * This component is stateful and should be instantianted per contextIdentifiers.
 */
var ContextMentionResource = /** @class */ (function () {
    function ContextMentionResource(mentionProvider, contextIdentifier) {
        var _this = this;
        this.callWithContextIds = function (f, declaredArgs) { return function () {
            var _a;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var argsLength = args ? args.length : 0;
            // cover the scenario where optional parameters are not passed
            // by passing undefined instead to keep the contextIdentifiers parameter in the right position
            var mentionArgs = argsLength !== declaredArgs
                ? util_1.padArray(args, declaredArgs - argsLength, undefined)
                : args;
            return (_a = _this.mentionProvider)[f].apply(_a, tslib_1.__spread(mentionArgs, [_this.contextIdentifier]));
        }; };
        this.callDefault = function (f) { return function () {
            var _a;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return (_a = _this.mentionProvider)[f].apply(_a, tslib_1.__spread(args));
        }; };
        this.subscribe = this.callDefault('subscribe');
        this.unsubscribe = this.callDefault('unsubscribe');
        this.filter = this.callWithContextIds('filter', 1);
        this.recordMentionSelection = this.callWithContextIds('recordMentionSelection', 1);
        this.shouldHighlightMention = this.callDefault('shouldHighlightMention');
        this.isFiltering = this.callDefault('isFiltering');
        this.mentionProvider = mentionProvider;
        this.contextIdentifier = contextIdentifier;
    }
    ContextMentionResource.prototype.getContextIdentifier = function () {
        return this.contextIdentifier;
    };
    return ContextMentionResource;
}());
exports.default = ContextMentionResource;
//# sourceMappingURL=ContextMentionResource.js.map