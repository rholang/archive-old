"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
"use strict";
var react_1 = tslib_1.__importStar(require("react"));
var styled_components_1 = require("styled-components");
var vars_1 = require("./internal/vars");
var GridElement_1 = tslib_1.__importDefault(require("./internal/GridElement"));
exports.default = styled_components_1.withTheme((_a = /** @class */ (function (_super) {
        tslib_1.__extends(AkGrid, _super);
        function AkGrid() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.getTheme = function (props) { return ({
                columns: props.theme && props.theme.columns
                    ? props.theme.columns
                    : vars_1.defaultGridColumns,
                spacing: props.theme && props.theme.spacing
                    ? props.theme.spacing
                    : props.spacing,
                isNestedGrid: props.theme && props.theme.isNestedGrid
                    ? props.theme.isNestedGrid
                    : false,
            }); };
            return _this;
        }
        AkGrid.prototype.render = function () {
            return (react_1.default.createElement(styled_components_1.ThemeProvider, { theme: this.getTheme(this.props) },
                react_1.default.createElement(GridElement_1.default, { spacing: this.props.spacing, layout: this.props.layout }, this.props.children)));
        };
        return AkGrid;
    }(react_1.Component)),
    _a.defaultProps = {
        spacing: 'cosy',
        layout: 'fixed',
    },
    _a));
//# sourceMappingURL=Grid.js.map