import { __assign, __extends, __makeTemplateObject } from "tslib";
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import Button from '@atlaskit/button';
import { gridSize, math } from '@atlaskit/theme';
import styled from 'styled-components';
import { messages } from '../messages';
import ErrorImage from '../assets/ErrorImage';
var ErrorWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  text-align: center;\n  margin-top: ", "px;\n"], ["\n  text-align: center;\n  margin-top: ", "px;\n"])), math.multiply(gridSize, 4));
var SearchError = /** @class */ (function (_super) {
    __extends(SearchError, _super);
    function SearchError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SearchError.prototype.render = function () {
        var onRetryClick = this.props.onRetryClick;
        return (React.createElement(ErrorWrapper, null,
            React.createElement(ErrorImage, null),
            React.createElement("h3", null,
                React.createElement(FormattedMessage, __assign({}, messages.search_error_title))),
            React.createElement("p", null,
                React.createElement("span", null,
                    React.createElement(FormattedMessage, __assign({}, messages.search_error_body, { values: {
                            link: (React.createElement(Button, { appearance: "link", spacing: "none", onClick: onRetryClick },
                                React.createElement(FormattedMessage, __assign({}, messages.search_error_body_link)))),
                        } }))))));
    };
    return SearchError;
}(React.Component));
export default SearchError;
var templateObject_1;
//# sourceMappingURL=SearchError.js.map