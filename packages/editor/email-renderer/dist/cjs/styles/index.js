"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var paragraph_1 = require("../nodes/paragraph");
var code_block_1 = require("../nodes/code-block");
var heading_1 = require("../nodes/heading");
var list_item_1 = require("../nodes/list-item");
var bullet_list_1 = require("../nodes/bullet-list");
var ordered_list_1 = require("../nodes/ordered-list");
var blockquote_1 = require("../nodes/blockquote");
var rule_1 = require("../nodes/rule");
var mention_1 = require("../nodes/mention");
var table_cell_1 = require("../nodes/table-cell");
var table_row_1 = require("../nodes/table-row");
var table_header_1 = require("../nodes/table-header");
var status_1 = require("../nodes/status");
var block_card_1 = require("../nodes/block-card");
var bodiedExtension_1 = require("../nodes/bodiedExtension");
var inlineExtension_1 = require("../nodes/inlineExtension");
var date_1 = require("../nodes/date");
var decision_item_1 = require("../nodes/decision-item");
var inline_card_1 = require("../nodes/inline-card");
var panel_1 = require("../nodes/panel");
var task_item_1 = require("../nodes/task-item");
var media_1 = require("../nodes/media");
var media_single_1 = require("../nodes/media-single");
var table_1 = require("../nodes/table");
var task_list_1 = require("../nodes/task-list");
var decision_list_1 = require("../nodes/decision-list");
var table_util_1 = require("../table-util");
var alignment_1 = require("../marks/alignment");
var code_1 = require("../marks/code");
var em_1 = require("../marks/em");
var indentation_1 = require("../marks/indentation");
var link_1 = require("../marks/link");
var strike_1 = require("../marks/strike");
var strong_1 = require("../marks/strong");
var underline_1 = require("../marks/underline");
var common_1 = require("./common");
var util_1 = require("./util");
var styles = "\n  ." + util_1.createClassName('wrapper') + " {\n    font-family: " + common_1.fontFamily + ";\n    font-size: " + common_1.fontSize + ";\n    font-weight: " + common_1.fontWeight + ";\n    line-height: " + common_1.lineHeight + ";\n    vertical-align: baseline;\n  }\n  " + paragraph_1.styles + "\n  " + code_block_1.styles + "\n  " + heading_1.styles + "\n  " + blockquote_1.styles + "\n  " + bullet_list_1.styles + "\n  " + ordered_list_1.styles + "\n  " + list_item_1.styles + "\n  " + rule_1.styles + "\n  " + mention_1.styles + "\n  " + status_1.styles + "\n  " + table_header_1.styles + "\n  " + table_cell_1.styles + "\n  " + table_row_1.styles + "\n  " + block_card_1.styles + "\n  " + bodiedExtension_1.styles + "\n  " + inlineExtension_1.styles + "\n  " + date_1.styles + "\n  " + decision_item_1.styles + "\n  " + inline_card_1.styles + "\n  " + panel_1.styles + "\n  " + task_item_1.styles + "\n  " + media_1.styles + "\n  " + media_single_1.styles + "\n  " + table_1.styles + "\n  " + table_util_1.styles + "\n  " + task_list_1.styles + "\n  " + decision_list_1.styles + "\n\n  " + alignment_1.styles + "\n  " + code_1.styles + "\n  " + em_1.styles + "\n  " + indentation_1.styles + "\n  " + link_1.styles + "\n  " + strike_1.styles + "\n  " + strong_1.styles + "\n  " + underline_1.styles + "\n\n  /* Hacks to bypass diff styles */\n\n  ." + util_1.createClassName('taskItem') + "-iconTd\n  span.diff-image-container:first-child:nth-last-child(2),\n  ." + util_1.createClassName('panel') + " > span.diff-image-container.diff-removed {\n    display: none;\n  }\n  /* Do not display \"Image added\" or \"Image removed\" in CS generated content */\n  ." + util_1.createClassName('wrapper') + " span.diff-image-overlay {\n    display: none;\n  }\n";
exports.default = styles;
//# sourceMappingURL=index.js.map