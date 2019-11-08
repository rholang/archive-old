import { __assign } from "tslib";
import { defaultSchema } from '@atlaskit/adf-schema';
// TODO: Import individual lodash functions that are specified in package.json
// eslint-disable-next-line import/no-extraneous-dependencies
import * as _ from 'lodash';
import { nodeSerializers } from './node-serializers';
import styles from './styles';
import juice from 'juice';
import { escapeHtmlString } from './escape-html-string';
import { processImages } from './static';
import { createClassName } from './styles/util';
import { fontFamily, fontSize } from './styles/common';
var serializeNode = function (node, index, parent, serializedHTML, context) {
    // ignore nodes with unknown type
    if (!nodeSerializers[node.type.name]) {
        return "[UNKNOWN_NODE_TYPE: " + node.type.name + "]";
    }
    var parentAttrs = getAttrsFromParent(index, parent);
    return nodeSerializers[node.type.name]({
        node: node,
        attrs: __assign(__assign({}, node.attrs), parentAttrs),
        marks: node.marks,
        parent: parent,
        text: serializedHTML || node.attrs.text || node.attrs.shortName || node.text,
        context: context,
    });
};
/**
 * Used to pass attributes that affect nested nodes.
 *
 * Example: A 'table' node contains 'isNumberColumnEnabled' flag. In order to render
 * numbered columns, 'tableRow' node needs to know this information, thus this function.
 *
 * @param parent {PMNode} parent node
 * @param index {number} index of current child in parent's content array
 */
var getAttrsFromParent = function (index, parent) {
    if (parent && parent.attrs && parent.attrs.isNumberColumnEnabled) {
        return {
            index: index,
            isNumberColumnEnabled: true,
        };
    }
    return {};
};
var traverseTree = function (fragment, parent, context) {
    var output = '';
    fragment.forEach(function (childNode, _offset, idx) {
        if (childNode.isLeaf) {
            output += serializeNode(childNode, idx, parent, undefined, context);
        }
        else {
            var innerHTML = traverseTree(childNode.content, childNode, context);
            output += serializeNode(childNode, idx, parent, innerHTML, context);
        }
    });
    return output;
};
export var commonStyle = {
    'font-family': fontFamily,
    'font-size': fontSize,
    'font-weight': 400,
    'line-height': '24px',
};
var wrapAdf = function (content) { return ({ version: 1, type: 'doc', content: content }); };
var juicify = function (html, inlineCSS) {
    var opts = {};
    if (inlineCSS) {
        opts.extraCss = styles;
    }
    return juice("<div class=\"" + createClassName('wrapper') + "\">" + html + "</div>", opts);
};
// replace all CID image references with a fake image
var stubImages = function (content, isMockEnabled) {
    return isMockEnabled
        ? {
            result: content.result.replace(/src="cid:[\w-]*"/gi, 'src="data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="'),
            embeddedImages: content.embeddedImages,
        }
        : content;
};
/**
 * EmailSerializer allows to disable/mock images via isImageStubEnabled flag.
 * The reason behind this is that in emails, images are embedded separately as inline attachemnts
 * and referenced via CID. However, when rendered in browser, this does not work and breaks the experience
 * when rendered in demo page, so we instead inline the image data.
 */
var EmailSerializer = /** @class */ (function () {
    function EmailSerializer(schema, opts) {
        var _this = this;
        if (schema === void 0) { schema = defaultSchema; }
        if (opts === void 0) { opts = {}; }
        this.schema = schema;
        this.serializeFragmentWithImages = function (fragment, context) {
            return _.flow(function (fragment) { return fragment.toJSON(); }, JSON.stringify, escapeHtmlString, JSON.parse, wrapAdf, _this.schema.nodeFromJSON, _.property('content'), function (fragment) { return traverseTree(fragment, undefined, context); }, function (html) { return juicify(html, _this.opts.isInlineCSSEnabled); }, function (html) { return processImages(html, _this.opts.isImageStubEnabled); }, // inline static assets for demo purposes
            function (// inline static assets for demo purposes
            result) { return stubImages(result, _this.opts.isImageStubEnabled); })(fragment);
        };
        this.serializeFragment = _.flow(this.serializeFragmentWithImages, _.property('result'));
        this.opts = __assign(__assign({}, EmailSerializer.defaultOpts), opts);
    }
    EmailSerializer.fromSchema = function (schema, opts) {
        if (schema === void 0) { schema = defaultSchema; }
        if (opts === void 0) { opts = {}; }
        return new EmailSerializer(schema, opts);
    };
    EmailSerializer.defaultOpts = {
        isImageStubEnabled: false,
        isInlineCSSEnabled: false,
    };
    return EmailSerializer;
}());
export { EmailSerializer };
export * from './styles/util';
export default EmailSerializer;
//# sourceMappingURL=index.js.map