"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_intl_1 = require("react-intl");
var extractPropsFromObject_1 = require("./extractPropsFromObject");
exports.buildRepositoryLink = function (json) {
    var link = json.url && json.url.trim();
    return link ? { link: link } : {};
};
exports.buildRepositoryTitle = function (json) {
    var text = json.name && json.name.trim();
    return text ? { title: { text: text } } : {};
};
exports.buildRepositoryDescription = function (json) {
    var text = typeof json.summary === 'string' ? json.summary : undefined;
    return text ? { description: { text: text } } : {};
};
exports.buildRepositoryByline = function (json) {
    var attributedTo = json.attributedTo && json.attributedTo.name ? json.attributedTo.name : '';
    var dateCreated = json['schema:dateCreated'];
    var dateUpdated = json['updated'];
    var updatedBy = json['atlassian:updatedBy'] && json['atlassian:updatedBy'].name;
    if (dateCreated || dateUpdated) {
        return {
            byline: updatedBy ? (React.createElement("span", null,
                "Updated by ",
                updatedBy,
                " ",
                React.createElement(react_intl_1.FormattedRelative, { value: dateUpdated }))) : (React.createElement("span", null,
                "Created by ",
                attributedTo,
                " ",
                React.createElement(react_intl_1.FormattedRelative, { value: dateCreated }))),
        };
    }
    return {};
};
exports.setRepositoryContext = function (props, json) {
    var nextProps = tslib_1.__assign({}, props);
    if (nextProps.context && json.generator && json.context) {
        nextProps.context.text = json.generator.name + " / " + json.context.name;
    }
    return nextProps;
};
exports.setRepositoryDetails = function (props, json) {
    var nextProps = tslib_1.__assign({}, props);
    if (json['schema:programmingLanguage']) {
        nextProps.details = nextProps.details || [];
        nextProps.details.push({
            title: 'Language',
            text: json['schema:programmingLanguage'],
        });
    }
    if (json['atlassian:subscriberCount']) {
        nextProps.details = nextProps.details || [];
        nextProps.details.push({
            title: 'Subscribers',
            text: json['atlassian:subscriberCount'],
        });
    }
    return nextProps;
};
function extractPropsFromSourceCodeRepository(json) {
    var props = extractPropsFromObject_1.extractPropsFromObject(json);
    props = exports.setRepositoryContext(props, json);
    props = exports.setRepositoryDetails(props, json);
    return tslib_1.__assign(tslib_1.__assign(tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, exports.buildRepositoryLink(json)), exports.buildRepositoryTitle(json)), exports.buildRepositoryDescription(json)), exports.buildRepositoryByline(json)), props);
}
exports.extractPropsFromSourceCodeRepository = extractPropsFromSourceCodeRepository;
//# sourceMappingURL=extractPropsFromSourceCodeRepository.js.map