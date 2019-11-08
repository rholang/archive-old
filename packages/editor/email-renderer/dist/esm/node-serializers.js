import blockquote from './nodes/blockquote';
import blockCard from './nodes/block-card';
import bulletList from './nodes/bullet-list';
import codeBlock from './nodes/code-block';
import decisionItem from './nodes/decision-item';
import decisionList from './nodes/decision-list';
import emoji from './nodes/emoji';
import hardBreak from './nodes/hard-break';
import heading from './nodes/heading';
import inlineCard from './nodes/inline-card';
import listItem from './nodes/list-item';
import mention from './nodes/mention';
import media from './nodes/media';
import mediaGroup from './nodes/media-group';
import mediaSingle from './nodes/media-single';
import orderedList from './nodes/ordered-list';
import panel from './nodes/panel';
import paragraph from './nodes/paragraph';
import rule from './nodes/rule';
import table from './nodes/table';
import tableCell from './nodes/table-cell';
import tableHeader from './nodes/table-header';
import tableRow from './nodes/table-row';
import taskList from './nodes/task-list';
import taskItem from './nodes/task-item';
import text from './nodes/text';
import unknownBlock from './nodes/unknown-block';
import status from './nodes/status';
import layoutColumn from './nodes/layoutColumn';
import layoutSection from './nodes/layoutSection';
import bodiedExtension from './nodes/bodiedExtension';
import inlineExtension from './nodes/inlineExtension';
import date from './nodes/date';
var renderNothing = function () { return ''; };
export var nodeSerializers = {
    bodiedExtension: bodiedExtension,
    blockquote: blockquote,
    blockCard: blockCard,
    bulletList: bulletList,
    codeBlock: codeBlock,
    decisionList: decisionList,
    decisionItem: decisionItem,
    emoji: emoji,
    extension: bodiedExtension,
    image: renderNothing,
    inlineCard: inlineCard,
    layoutColumn: layoutColumn,
    layoutSection: layoutSection,
    inlineExtension: inlineExtension,
    hardBreak: hardBreak,
    heading: heading,
    listItem: listItem,
    media: media,
    mediaGroup: mediaGroup,
    mediaSingle: mediaSingle,
    mention: mention,
    orderedList: orderedList,
    panel: panel,
    paragraph: paragraph,
    placeholder: renderNothing,
    rule: rule,
    table: table,
    tableCell: tableCell,
    tableHeader: tableHeader,
    tableRow: tableRow,
    taskItem: taskItem,
    taskList: taskList,
    text: text,
    unknownBlock: unknownBlock,
    status: status,
    date: date,
};
//# sourceMappingURL=node-serializers.js.map