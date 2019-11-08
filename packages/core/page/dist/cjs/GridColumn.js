"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
"use strict";
var react_1 = tslib_1.__importStar(require("react"));
var styled_components_1 = require("styled-components");
var vars_1 = require("./internal/vars");
var GridColumnElement_1 = tslib_1.__importDefault(require("./internal/GridColumnElement"));
var defaultSpacing = 'cosy';
exports.default = styled_components_1.withTheme((_a = /** @class */ (function (_super) {
        tslib_1.__extends(AkGridColumn, _super);
        function AkGridColumn() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.getTheme = function (props) { return ({
                columns: props.theme && props.theme.columns
                    ? props.theme.columns
                    : vars_1.defaultGridColumns,
                spacing: props.theme && props.theme.spacing
                    ? props.theme.spacing
                    : defaultSpacing,
                isNestedGrid: false,
            }); };
            _this.getNestedTheme = function (props) { return ({
                columns: props.medium,
                spacing: props.theme && props.theme.spacing
                    ? props.theme.spacing
                    : defaultSpacing,
                isNestedGrid: true,
            }); };
            return _this;
        }
        AkGridColumn.prototype.render = function () {
            return (react_1.default.createElement(styled_components_1.ThemeProvider, { theme: this.getTheme(this.props) },
                react_1.default.createElement(GridColumnElement_1.default, { medium: this.props.medium },
                    react_1.default.createElement(styled_components_1.ThemeProvider, { theme: this.getNestedTheme(this.props) },
                        react_1.default.createElement("div", null, this.props.children)))));
        };
        return AkGridColumn;
    }(react_1.Component)),
    _a.defaultProps = {
        medium: 0,
    },
    _a));
//# sourceMappingURL=GridColumn.js.map