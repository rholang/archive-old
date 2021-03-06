"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var specs = tslib_1.__importStar(require("./specs"));
var isDefined = function (x) { return x != null; };
var isNumber = function (x) {
    return typeof x === 'number' && !isNaN(x) && isFinite(x);
};
var isInteger = function (x) {
    return typeof x === 'number' && isFinite(x) && Math.floor(x) === x;
};
var isBoolean = function (x) {
    return x === true || x === false || toString.call(x) === '[object Boolean]';
};
// This is a kludge, might replace with something like _.isString in future
var isString = function (s) {
    return typeof s === 'string' || s instanceof String;
};
var isPlainObject = function (x) {
    return typeof x === 'object' && x !== null && !Array.isArray(x);
};
var copy = function (source, dest, key) {
    dest[key] = source[key];
    return dest;
};
// Helpers
var makeArray = function (maybeArray) {
    return Array.isArray(maybeArray) ? maybeArray : [maybeArray];
};
function isForceContentValidationSpec(x) {
    return isDefined(x.forceContentValidation);
}
function mapMarksItems(spec, fn) {
    if (fn === void 0) { fn = function (x) { return x; }; }
    var _a = spec.props.marks, items = _a.items, rest = tslib_1.__rest(_a, ["items"]);
    return tslib_1.__assign(tslib_1.__assign({}, spec), { props: tslib_1.__assign(tslib_1.__assign({}, spec.props), { marks: tslib_1.__assign(tslib_1.__assign({}, rest), { 
                /**
                 * `Text & MarksObject<Mark-1>` produces `items: ['mark-1']`
                 * `Text & MarksObject<Mark-1 | Mark-2>` produces `items: [['mark-1', 'mark-2']]`
                 */
                items: items.length
                    ? Array.isArray(items[0])
                        ? items.map(fn)
                        : [fn(items)]
                    : [[]] }) }) });
}
var partitionObject = function (obj, predicate) {
    return Object.keys(obj).reduce(function (acc, key) {
        acc[predicate(key, obj[key], obj) ? 0 : 1].push(key);
        return acc;
    }, [[], []]);
};
// TODO: no-implicit-any
function createSpec(nodes, marks) {
    return Object.keys(specs).reduce(function (newSpecs, k) {
        var spec = tslib_1.__assign({}, specs[k]);
        if (spec.props) {
            spec.props = tslib_1.__assign({}, spec.props);
            if (isString(spec.props.content)) {
                spec.props.content = specs[spec.props.content];
            }
            if (spec.props.content) {
                if (!spec.props.content.items) {
                    /**
                     * Flatten
                     *
                     * Input:
                     * [ { type: 'array', items: [ 'tableHeader' ] }, { type: 'array', items: [ 'tableCell' ] } ]
                     *
                     * Output:
                     * { type: 'array', items: [ [ 'tableHeader' ], [ 'tableCell' ] ] }
                     */
                    spec.props.content = {
                        type: 'array',
                        items: (spec.props.content || []).map(function (arr) { return arr.items; }),
                    };
                }
                else {
                    spec.props.content = tslib_1.__assign({}, spec.props.content);
                }
                spec.props.content.items = spec.props.content.items
                    // ['inline'] => [['emoji', 'hr', ...]]
                    // ['media'] => [['media']]
                    .map(function (item) {
                    return isString(item)
                        ? Array.isArray(specs[item])
                            ? specs[item]
                            : [item]
                        : item;
                })
                    // [['emoji', 'hr', 'inline_code']] => [['emoji', 'hr', ['text', { marks: {} }]]]
                    .map(function (item) {
                    return item
                        .map(function (subItem) {
                        return Array.isArray(specs[subItem])
                            ? specs[subItem]
                            : isString(subItem)
                                ? subItem
                                : // Now `NoMark` produces `items: []`, should be fixed in generator
                                    ['text', subItem];
                    })
                        // Remove unsupported nodes & marks
                        // Filter nodes
                        .filter(function (subItem) {
                        // When Mark or `nodes` is undefined don't filter
                        return !nodes
                            ? true
                            : nodes.indexOf(Array.isArray(subItem) ? subItem[0] : subItem) > -1;
                    })
                        // Filter marks
                        .map(function (subItem) {
                        return Array.isArray(subItem) && marks
                            ? /**
                               * TODO: Probably try something like immer, but it's 3.3kb gzipped.
                               * Not worth it just for this.
                               */
                                [subItem[0], mapMarksItems(subItem[1])]
                            : subItem;
                    });
                });
            }
        }
        newSpecs[k] = spec;
        return newSpecs;
    }, {});
}
function getOptionsForType(type, list) {
    var _a;
    if (!list) {
        return {};
    }
    for (var i = 0, len = list.length; i < len; i++) {
        var spec = list[i];
        var name_1 = spec;
        var options = {};
        if (Array.isArray(spec)) {
            _a = tslib_1.__read(spec, 2), name_1 = _a[0], options = _a[1];
        }
        if (name_1 === type) {
            return options;
        }
    }
    return false;
}
function validateAttrs(spec, value) {
    // extension_node parameters has no type
    if (!isDefined(spec.type)) {
        return !!spec.optional;
    }
    if (!isDefined(value)) {
        return !!spec.optional;
    }
    switch (spec.type) {
        case 'boolean':
            return isBoolean(value);
        case 'number':
            return (isNumber(value) &&
                (isDefined(spec.minimum) ? spec.minimum <= value : true) &&
                (isDefined(spec.maximum) ? spec.maximum >= value : true));
        case 'integer':
            return (isInteger(value) &&
                (isDefined(spec.minimum) ? spec.minimum <= value : true) &&
                (isDefined(spec.maximum) ? spec.maximum >= value : true));
        case 'string':
            return (isString(value) &&
                (isDefined(spec.minLength) ? spec.minLength <= value.length : true) &&
                (spec.pattern ? new RegExp(spec.pattern).test(value) : true));
        case 'object':
            return isPlainObject(value);
        case 'array':
            if (!isForceContentValidationSpec(spec)) {
                var types_1 = spec.items;
                var lastTypeIndex_1 = types_1.length - 1;
                if (Array.isArray(value)) {
                    // We are doing this to support tuple which can be defined as [number, string]
                    // NOTE: Not validating tuples strictly
                    return value.every(function (x, i) {
                        return validateAttrs(types_1[Math.min(i, lastTypeIndex_1)], x);
                    });
                }
            }
            return false;
        case 'enum':
            return isString(value) && spec.values.indexOf(value) > -1;
    }
    return false;
}
exports.validateAttrs = validateAttrs;
var getUnsupportedOptions = function (spec) {
    if (spec && spec.props && spec.props.content) {
        var _a = spec.props.content, allowUnsupportedBlock = _a.allowUnsupportedBlock, allowUnsupportedInline = _a.allowUnsupportedInline;
        return { allowUnsupportedBlock: allowUnsupportedBlock, allowUnsupportedInline: allowUnsupportedInline };
    }
    return {};
};
var invalidChildContent = function (child, errorCallback, parentSpec) {
    var message = child.type + ": invalid content.";
    if (!errorCallback) {
        throw new Error(message);
    }
    else {
        return errorCallback(tslib_1.__assign({}, child), {
            code: 'INVALID_CONTENT',
            message: message,
        }, getUnsupportedOptions(parentSpec));
    }
};
function validator(nodes, marks, options) {
    var validatorSpecs = createSpec(nodes, marks);
    var _a = options || {}, _b = _a.mode, mode = _b === void 0 ? 'strict' : _b, _c = _a.allowPrivateAttributes, allowPrivateAttributes = _c === void 0 ? false : _c;
    var validate = function (entity, errorCallback, allowed, parentSpec) {
        var _a;
        var type = entity.type;
        var newEntity = tslib_1.__assign({}, entity);
        var err = function (code, msg, meta) {
            var message = type + ": " + msg + ".";
            if (errorCallback) {
                return {
                    valid: false,
                    entity: errorCallback(newEntity, { code: code, message: message, meta: meta }, getUnsupportedOptions(parentSpec)),
                };
            }
            else {
                throw new Error(message);
            }
        };
        if (type) {
            var typeOptions = getOptionsForType(type, allowed);
            if (typeOptions === false) {
                return err('INVALID_TYPE', 'type not allowed here');
            }
            var spec = validatorSpecs[type];
            if (!spec) {
                return err('INVALID_TYPE', type + ": No validation spec found for type!");
            }
            var validator_1 = tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, spec), typeOptions), (spec.props
                ? { props: tslib_1.__assign(tslib_1.__assign({}, spec.props), (typeOptions['props'] || {})) }
                : {}));
            if (validator_1) {
                // Required Props
                // For array format where `required` is an array
                if (validator_1.required) {
                    if (!validator_1.required.every(function (prop) { return isDefined(entity[prop]); })) {
                        return err('MISSING_PROPERTIES', 'required prop missing');
                    }
                }
                if (validator_1.props) {
                    // Check text
                    if (validator_1.props.text) {
                        if (isDefined(entity.text) &&
                            !validateAttrs(validator_1.props.text, entity.text)) {
                            return err('INVALID_TEXT', "'text' validation failed");
                        }
                    }
                    // Content Length
                    if (validator_1.props.content &&
                        isDefined(validator_1.props.content.minItems) &&
                        entity.content) {
                        var length_1 = entity.content.length;
                        if (validator_1.props.content.minItems > length_1) {
                            var minItems = validator_1.props.content.minItems;
                            return err('INVALID_CONTENT_LENGTH', "'content' should have more than " + minItems + " child", { length: length_1 });
                        }
                    }
                    // Required Props
                    // For object format based on `optional` property
                    var _b = tslib_1.__read(partitionObject(validator_1.props, function (k, v) { return v.optional || !!entity[k]; }), 2), missingProps = _b[1];
                    if (missingProps.length) {
                        return err('MISSING_PROPERTIES', 'required prop missing', {
                            props: missingProps,
                        });
                    }
                    // Attributes
                    var validatorAttrs_1 = {};
                    // Attributes Validation
                    if (validator_1.props.attrs && entity.attrs) {
                        var attrOptions = makeArray(validator_1.props.attrs);
                        var invalidAttrs = [];
                        /**
                         * Attrs can be union type so try each path
                         * attrs: [{ props: { url: { type: 'string' } } }, { props: { data: {} } }],
                         * Gotcha: It will always report the last failure.
                         */
                        for (var i = 0, length_2 = attrOptions.length; i < length_2; ++i) {
                            var attrOption = attrOptions[i];
                            _a = tslib_1.__read(partitionObject(attrOption.props, function (k, v) {
                                // We need to validate the content from that kind of
                                // array against the nodes and marks. @see ED-6325
                                if (isForceContentValidationSpec(v) &&
                                    v.forceContentValidation) {
                                    var items = entity.attrs[k] || [];
                                    var newItems = [];
                                    var specItemsAllowed = v.items;
                                    var entitySet = specItemsAllowed.reduce(function (xs, x) {
                                        return xs.concat(x);
                                    });
                                    for (var i_1 = 0; i_1 < items.length; i_1++) {
                                        var validateResult = validate(items[i_1], errorCallback, entitySet, validator_1);
                                        if (!validateResult.valid && validateResult.entity) {
                                            newItems.push(validateResult.entity);
                                        }
                                    }
                                    newEntity.attrs = tslib_1.__assign({}, newEntity.attrs);
                                    newEntity.attrs[k] = newItems;
                                    return true;
                                }
                                else {
                                    return validateAttrs(v, entity.attrs[k]);
                                }
                            }), 2), invalidAttrs = _a[1];
                            if (!invalidAttrs.length) {
                                validatorAttrs_1 = attrOption;
                                break;
                            }
                        }
                        if (invalidAttrs.length) {
                            return err('INVALID_ATTRIBUTES', "'attrs' validation failed", {
                                attrs: invalidAttrs,
                            });
                        }
                    }
                    // Extra Props
                    var _c = tslib_1.__read(partitionObject(entity, function (k) {
                        return isDefined(validator_1.props[k]);
                    }), 2), requiredProps = _c[0], redundantProps = _c[1];
                    if (redundantProps.length) {
                        if (mode === 'loose') {
                            newEntity = { type: type };
                            requiredProps.reduce(function (acc, p) { return copy(entity, acc, p); }, newEntity);
                        }
                        else {
                            return err('REDUNDANT_PROPERTIES', "redundant props found: " + redundantProps.join(', '), { props: redundantProps });
                        }
                    }
                    // Extra Attributes
                    if (entity.attrs) {
                        var attrs = Object.keys(entity.attrs).filter(function (k) { return !(allowPrivateAttributes && k.startsWith('__')); });
                        if (!validatorAttrs_1 ||
                            !attrs.every(function (a) { return !!validatorAttrs_1.props[a]; })) {
                            if (mode === 'loose') {
                                newEntity.attrs = {};
                                attrs
                                    .filter(function (a) { return !!validatorAttrs_1.props[a]; })
                                    .reduce(function (acc, p) { return copy(entity.attrs || {}, acc, p); }, newEntity.attrs);
                            }
                            else {
                                var redundantAttrs = attrs.filter(function (a) { return !validatorAttrs_1.props[a]; });
                                return err('REDUNDANT_ATTRIBUTES', "redundant attributes found: " + redundantAttrs.join(', '), { attrs: redundantAttrs });
                            }
                        }
                    }
                    // Children
                    if (validator_1.props.content) {
                        if (entity.content) {
                            newEntity.content = entity.content
                                .map(function (child, index) {
                                // Only go inside valid branch
                                var validSets = validator_1.props.content.items.filter(function (set) {
                                    /**
                                     * Manually treat listItem content as Tuple,
                                     * hopefully tsc has new AST for Tuple in v3.0
                                     */
                                    return type === 'listItem'
                                        ? true
                                        : set.some(
                                        // [p, hr, ...] or [p, [text, {}], ...]
                                        function (spec) {
                                            return (Array.isArray(spec) ? spec[0] : spec) ===
                                                child.type;
                                        });
                                });
                                if (validSets.length) {
                                    /**
                                     * In case of multiple valid branches, we are treating them as Tuple.
                                     * Thought this assumption is incorrect but it works for us since we don't
                                     * have any valid alternative branches.
                                     */
                                    var setIndex = validSets.length > 1
                                        ? Math.min(index, validSets.length - 1)
                                        : 0;
                                    var set = validSets[setIndex].filter(function (item) {
                                        return (Array.isArray(item) ? item[0] : item) === child.type;
                                    });
                                    if (set.length === 0) {
                                        return invalidChildContent(child, errorCallback, validator_1);
                                    }
                                    /**
                                     * When there's multiple possible branches try all of them.
                                     * If all of them fails, throw the first one.
                                     * e.g.- [['text', { marks: ['a'] }], ['text', { marks: ['b'] }]]
                                     */
                                    var firstError = void 0;
                                    var firstChild = void 0;
                                    for (var i = 0, len = set.length; i < len; i++) {
                                        try {
                                            var _a = validate(child, errorCallback, [set[i]], validator_1), valid = _a.valid, newChildEntity = _a.entity;
                                            if (valid) {
                                                return newChildEntity;
                                            }
                                            else {
                                                firstChild = firstChild || newChildEntity;
                                            }
                                        }
                                        catch (error) {
                                            firstError = firstError || error;
                                        }
                                    }
                                    if (!errorCallback) {
                                        throw firstError;
                                    }
                                    else {
                                        return firstChild;
                                    }
                                }
                                else {
                                    return invalidChildContent(child, errorCallback, validator_1);
                                }
                            })
                                .filter(Boolean);
                        }
                        else if (!validator_1.props.content.optional) {
                            return err('MISSING_PROPERTIES', 'missing `content` prop');
                        }
                    }
                    // Marks
                    if (entity.marks) {
                        if (validator_1.props.marks) {
                            var items = validator_1.props.marks.items;
                            var marksSet_1 = items.length
                                ? Array.isArray(items[0])
                                    ? items[0]
                                    : items
                                : [];
                            var newMarks = entity.marks
                                .filter(function (mark) {
                                return mode === 'strict' && marks
                                    ? marks.indexOf(mark.type) > -1
                                    : true;
                            })
                                .map(function (mark) {
                                return validate(mark, errorCallback, marksSet_1, validator_1).entity;
                            })
                                .filter(Boolean);
                            if (newMarks.length) {
                                newEntity.marks = newMarks;
                            }
                            else {
                                delete newEntity.marks;
                                return { valid: false, entity: newEntity };
                            }
                        }
                        else {
                            return err('REDUNDANT_MARKS', 'redundant marks', {
                                marks: Object.keys(entity.marks),
                            });
                        }
                    }
                }
                else {
                    var props = Object.keys(entity);
                    // If there's no validator.props then there shouldn't be any key except `type`
                    if (props.length > 1) {
                        return err('REDUNDANT_PROPERTIES', "redundant props found: " + Object.keys(entity).join(', '), { props: props });
                    }
                }
            }
        }
        else {
            return err('INVALID_TYPE', 'ProseMirror Node/Mark should contain a `type`');
        }
        return { valid: true, entity: newEntity };
    };
    return validate;
}
exports.validator = validator;
//# sourceMappingURL=index.js.map