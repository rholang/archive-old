"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var schema_builder_1 = require("./schema-builder");
exports.createText = function (txt) { return function (schema) {
    return schema_builder_1.text(txt, schema);
}; };
exports.pmNodeFactory = {
    doc: schema_builder_1.doc,
    paragraph: schema_builder_1.p,
    blockquote: schema_builder_1.blockquote,
    panel: schema_builder_1.panel({}),
    bulletList: schema_builder_1.ul,
    orderedList: schema_builder_1.ol,
    rule: function () { return schema_builder_1.hr; },
    codeBlock: schema_builder_1.code_block(),
    heading: schema_builder_1.h1,
    listItem: schema_builder_1.li,
    hardBreak: schema_builder_1.hardBreak,
    decisionList: schema_builder_1.decisionList({ localId: 'fake-decision' }),
    taskList: schema_builder_1.taskList({ localId: 'fake-task' }),
    decisionItem: schema_builder_1.decisionItem({ localId: 'fake-decision' }),
    taskItem: schema_builder_1.taskItem({ localId: 'fake-task' }),
    emoji: function () { return schema_builder_1.emoji({ shortName: 'fakeName' }); },
    mention: function () {
        return schema_builder_1.mention({
            id: '1234',
            text: 'fakeMention',
            accessLevel: 'fakeMention',
            userType: 'DEFAULT',
        });
    },
    image: function () { return schema_builder_1.img({ src: 'src/testsource.png' }); },
    date: function () { return schema_builder_1.date({ timestamp: '121220121212' }); },
    status: function () {
        return schema_builder_1.status({
            color: 'yellow',
            localId: 'fake-status',
            text: 'In progress',
        });
    },
    table: function (content) { return schema_builder_1.table()(content); },
    tableCell: schema_builder_1.td({ colspan: 1, rowspan: 1 }),
    tableHeader: schema_builder_1.th({ colspan: 1, rowspan: 1 }),
    tableRow: schema_builder_1.tr,
    mediaSingle: schema_builder_1.mediaSingle({ layout: 'center' }),
    mediaGroup: schema_builder_1.mediaGroup,
    media: schema_builder_1.media,
    extension: function (content) {
        return schema_builder_1.extension({
            extensionKey: '123',
            extensionType: 'blockExtension',
            layout: 'default',
        })(content);
    },
    bodiedExtension: function (content) {
        return schema_builder_1.bodiedExtension({
            extensionKey: '123',
            extensionType: 'bodiedExtension',
            layout: 'default',
        })(content);
    },
    inlineCard: function () {
        return schema_builder_1.inlineCard({ url: 'https://product-fabric.atlassian.net/browse/ED-1' });
    },
    blockCard: function () {
        return schema_builder_1.blockCard({ url: 'https://product-fabric.atlassian.net/browse/ED-1' });
    },
};
exports.pmNodeBuilder = {
    doc: schema_builder_1.doc(schema_builder_1.p('')),
    text: exports.createText('fake text'),
    paragraph: schema_builder_1.p('fake paragraph'),
    blockquote: schema_builder_1.blockquote(schema_builder_1.p('fake blockquote')),
    panel: schema_builder_1.panel()(schema_builder_1.p('fake panel')),
    hardBreak: schema_builder_1.hardBreak(),
    codeBlock: schema_builder_1.code_block()('fake code'),
    listItem: schema_builder_1.li(schema_builder_1.p('fake list item')),
    rule: schema_builder_1.hr(),
    bulletList: schema_builder_1.ul(schema_builder_1.li(schema_builder_1.p('fake bullet list'))),
    orderedList: schema_builder_1.ol(schema_builder_1.li(schema_builder_1.p('fake ordered list'))),
    heading: schema_builder_1.h1('fake heading'),
    decisionList: schema_builder_1.decisionList({ localId: 'fake-decision-list' })(schema_builder_1.decisionItem({ localId: 'fake-decision-item' })('fake decision')),
    taskList: schema_builder_1.taskList({ localId: 'fake-task-list' })(schema_builder_1.taskItem({ localId: 'fake-task-item' })('fake task')),
    decisionItem: schema_builder_1.decisionItem({ localId: 'fake-decision' })('fake decision'),
    taskItem: schema_builder_1.taskItem({ localId: 'fake-task' })('task'),
    emoji: schema_builder_1.emoji({ shortName: 'fake emoji shortName' })(),
    mention: schema_builder_1.mention({ id: 'fakeMentionId' })(),
    image: schema_builder_1.img({ src: 'src/fakeimagesource.png' }),
    date: schema_builder_1.date({ timestamp: '121220121212' }),
    status: schema_builder_1.status({
        color: 'yellow',
        localId: 'fake-status',
        text: 'In progress',
    }),
    table: schema_builder_1.table()(schema_builder_1.tr(schema_builder_1.th({ colspan: 1, rowspan: 1 })(schema_builder_1.p('fake table header'))), schema_builder_1.tr(schema_builder_1.td({ colspan: 1, rowspan: 1 })(schema_builder_1.p('fake table row')))),
    tableCell: schema_builder_1.td({ colspan: 1, rowspan: 1 })(schema_builder_1.p('fake table cell')),
    tableHeader: schema_builder_1.th({ colspan: 1, rowspan: 1 })(schema_builder_1.p('fake table header')),
    tableRow: schema_builder_1.tr(schema_builder_1.th({ colspan: 1, rowspan: 1 })(schema_builder_1.p('fake table rowheader'))),
    extension: schema_builder_1.extension({ extensionKey: '123', extensionType: 'extension' })(),
    inlineExtension: schema_builder_1.inlineExtension({
        extensionKey: '123',
        extensionType: 'inlineExtension',
    })(),
    bodiedExtension: schema_builder_1.bodiedExtension({
        extensionKey: '123',
        extensionType: 'bodiedExtension',
    })(schema_builder_1.p('extended paragraph')),
    media: schema_builder_1.media({
        id: 'fakeMediaId',
        type: 'file',
        collection: 'fakeMediaCcol',
    })(),
    mediaSingle: schema_builder_1.mediaSingle({ layout: 'center' })(schema_builder_1.media({
        id: 'fakeMediaSingleId',
        type: 'file',
        collection: 'fakeMediaSingleCol',
    })()),
    mediaGroup: schema_builder_1.mediaGroup(schema_builder_1.media({
        id: 'fakeMediaGroupId',
        type: 'file',
        collection: 'fakeMediaGroupCol',
    })()),
    inlineCard: schema_builder_1.inlineCard({
        url: 'https://product-fabric.atlassian.net/browse/ED-1',
    }),
};
exports.pmMarkBuilder = {
    em: schema_builder_1.em('fake italic text'),
    strong: schema_builder_1.strong('fake bole text'),
    code: schema_builder_1.code('fake code text'),
    strike: schema_builder_1.strike('fake strike text'),
    underline: schema_builder_1.underline('fake underline text'),
    link: schema_builder_1.a({ title: 'faketitle', href: 'fakehref' })('fake link text'),
    subsup: schema_builder_1.subsup({ type: 'sub' })('fake subsup'),
    textColor: schema_builder_1.textColor({ color: '#f1f1f1' })('fake colored text'),
};
/**
 * Evaluate some kind of random data generation for node attribute values.
 */
//# sourceMappingURL=schema-element-builder.js.map