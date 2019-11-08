import * as React from 'react';
import { withHelp } from './HelpContext';
import Header from './Header';
import Search from './Search';
import ArticleComponent from './Article';
import { Container, HelpBody, HelpFooter, Section, DefaultContent, } from './styled';
export var HelpContent = function (props) {
    var help = props.help;
    return (React.createElement(React.Fragment, null,
        React.createElement(Container, null,
            React.createElement(Section, null,
                React.createElement(Header, null),
                React.createElement(HelpBody, null,
                    help.isSearchVisible() && React.createElement(Search, null),
                    React.createElement(ArticleComponent, null),
                    React.createElement(DefaultContent, { isArticleVisible: help.isArticleVisible() }, help.defaultContent)),
                help.isFooter() ? React.createElement(HelpFooter, null, help.footer) : null))));
};
export default withHelp(HelpContent);
//# sourceMappingURL=HelpContent.js.map