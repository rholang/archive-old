'use strict';
import { __assign, __extends } from "tslib";
import * as React from 'react';
import { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { messages } from '@atlaskit/media-ui';
import LocalBrowserButton from './uploadButton';
import { filesIcon } from '../../../../icons';
import { ButtonWrapper, DefaultImage, DropzoneText, DropzoneContainer, DropzoneContentWrapper, TextWrapper, } from './styled';
var Dropzone = /** @class */ (function (_super) {
    __extends(Dropzone, _super);
    function Dropzone() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dropzone.prototype.render = function () {
        var _a = this.props, isEmpty = _a.isEmpty, browserRef = _a.browserRef;
        return (React.createElement(DropzoneContainer, { isEmpty: isEmpty },
            React.createElement(DropzoneContentWrapper, null,
                React.createElement(DefaultImage, { src: filesIcon }),
                React.createElement(TextWrapper, null,
                    React.createElement(DropzoneText, null,
                        React.createElement(FormattedMessage, __assign({}, messages.drag_and_drop_your_files))),
                    React.createElement(ButtonWrapper, null,
                        React.createElement(LocalBrowserButton, { browserRef: browserRef }))))));
    };
    return Dropzone;
}(Component));
export { Dropzone };
//# sourceMappingURL=dropzone.js.map