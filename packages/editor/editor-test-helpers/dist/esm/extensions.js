import { __assign, __awaiter, __extends, __generator } from "tslib";
import * as React from 'react';
var FakeExtension = function (_a) {
    var colour = _a.colour, _b = _a.minWidth, minWidth = _b === void 0 ? 85 : _b, children = _a.children;
    return (React.createElement("div", { style: {
            backgroundColor: colour,
            color: 'white',
            padding: 10,
            minWidth: minWidth,
        } }, children));
};
var InlineExtension = function (_a) {
    var node = _a.node;
    return React.createElement(FakeExtension, { colour: "green" }, node.content);
};
var InlineAsyncExtension = /** @class */ (function (_super) {
    __extends(InlineAsyncExtension, _super);
    function InlineAsyncExtension() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            width: 85,
        };
        return _this;
    }
    InlineAsyncExtension.prototype.render = function () {
        var node = this.props.node;
        var width = this.state.width;
        return (React.createElement(FakeExtension, { minWidth: width, colour: "green" }, node.content));
    };
    InlineAsyncExtension.prototype.componentDidMount = function () {
        var _this = this;
        this.widthTimeoutId = window.setTimeout(function () {
            _this.setState({ width: 285 });
        }, 2000);
    };
    InlineAsyncExtension.prototype.componentWillUnmount = function () {
        window.clearTimeout(this.widthTimeoutId);
    };
    return InlineAsyncExtension;
}(React.Component));
var BlockExtension = function (_a) {
    var node = _a.node;
    return (React.createElement(FakeExtension, { colour: "black" },
        React.createElement("div", { style: node.parameters.style }, node.content)));
};
var BodiedExtension = function () {
    return React.createElement(FakeExtension, { colour: "blue" }, "Bodied extension demo");
};
var IFrameExtension = function () {
    return (React.createElement(FakeExtension, { colour: "red" },
        React.createElement("div", null,
            React.createElement("div", null,
                React.createElement("iframe", { style: { background: 'blue', width: 400, height: 200 } })),
            React.createElement("iframe", { style: { background: 'yellow', width: 600, height: 300 } }))));
};
export var extensionHandlers = {
    'com.atlassian.confluence.macro.core': function (ext) {
        var extensionKey = ext.extensionKey;
        // using any here because most props are going to be injected through the extension handler
        // and typescript won't accept that as valid
        var macroProps = {
            node: ext,
        };
        switch (extensionKey) {
            case 'block-eh':
                return React.createElement(BlockExtension, __assign({}, macroProps));
            case 'block-layout-eh':
                return React.createElement(BlockExtension, __assign({}, macroProps));
            case 'block-iframe-eh':
                return React.createElement(IFrameExtension, __assign({}, macroProps));
            case 'bodied-eh':
                return React.createElement(BodiedExtension, __assign({}, macroProps));
            case 'inline-eh':
                return React.createElement(InlineExtension, __assign({}, macroProps));
            case 'jql-table':
                return (React.createElement("table", null,
                    React.createElement("tbody", null,
                        React.createElement("tr", null,
                            React.createElement("td", null, "a1"),
                            React.createElement("td", null, "a2"),
                            React.createElement("td", null, "a3")),
                        React.createElement("tr", null,
                            React.createElement("td", null, "b1"),
                            React.createElement("td", null, "b2"),
                            React.createElement("td", null, "b3")),
                        React.createElement("tr", null,
                            React.createElement("td", null, "c1"),
                            React.createElement("td", null, "c2"),
                            React.createElement("td", null, "c3")))));
            case 'inline-async-eh':
                return React.createElement(InlineAsyncExtension, __assign({}, macroProps));
        }
        return null;
    },
    'com.atlassian.extensions.update': {
        render: function (ext) {
            return React.createElement("div", null, ext.parameters.count);
        },
        update: function (params) { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, ({
                        count: params.count + 1,
                    })];
            });
        }); },
    },
    'com.atlassian.extensions.noupdate': {
        render: function () {
            return React.createElement("button", null, "This is a test extension");
        },
    },
};
//# sourceMappingURL=extensions.js.map