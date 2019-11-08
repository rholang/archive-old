import { __extends } from "tslib";
import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { searchGiphy } from '../../../actions/searchGiphy';
import { changeService } from '../../../actions/changeService';
import { StatelessSidebarItem } from './sidebarItem';
import { GiphyIcon } from '../icons';
var StatelessGiphySidebarItem = /** @class */ (function (_super) {
    __extends(StatelessGiphySidebarItem, _super);
    function StatelessGiphySidebarItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StatelessGiphySidebarItem.prototype.render = function () {
        var _a = this.props, isActive = _a.isActive, onChangeService = _a.onChangeService;
        return (React.createElement(StatelessSidebarItem, { serviceName: "giphy", serviceFullName: "GIPHY", isActive: isActive, onChangeService: onChangeService },
            React.createElement(GiphyIcon, { active: isActive })));
    };
    return StatelessGiphySidebarItem;
}(Component));
export { StatelessGiphySidebarItem };
var mapDispatchToProps = function (dispatch) { return ({
    onChangeService: function () {
        dispatch(changeService('giphy'));
        dispatch(searchGiphy('', false));
    },
}); };
export default connect(null, mapDispatchToProps)(StatelessGiphySidebarItem);
//# sourceMappingURL=giphySidebarItem.js.map