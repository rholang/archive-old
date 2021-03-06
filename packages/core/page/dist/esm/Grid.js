var _a;
import { __extends } from "tslib";
import React, { Component } from 'react';
import { ThemeProvider, withTheme } from 'styled-components';
import { defaultGridColumns } from './internal/vars';
import Grid from './internal/GridElement';
export default withTheme((_a = /** @class */ (function (_super) {
        __extends(AkGrid, _super);
        function AkGrid() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.getTheme = function (props) { return ({
                columns: props.theme && props.theme.columns
                    ? props.theme.columns
                    : defaultGridColumns,
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
            return (React.createElement(ThemeProvider, { theme: this.getTheme(this.props) },
                React.createElement(Grid, { spacing: this.props.spacing, layout: this.props.layout }, this.props.children)));
        };
        return AkGrid;
    }(Component)),
    _a.defaultProps = {
        spacing: 'cosy',
        layout: 'fixed',
    },
    _a));
//# sourceMappingURL=Grid.js.map