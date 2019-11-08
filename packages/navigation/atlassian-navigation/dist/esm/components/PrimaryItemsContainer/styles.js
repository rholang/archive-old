import { gridSize } from '@atlaskit/theme/constants';
import { HORIZONTAL_GLOBAL_NAV_HEIGHT } from '../../common/constants';
var topMarginSize = HORIZONTAL_GLOBAL_NAV_HEIGHT * 0.25;
var rightMarginSize = 0;
var bottomMarginSize = topMarginSize;
var leftMarginSize = gridSize() / 2;
export var containerCSS = {
    display: 'flex',
    flexGrow: 1,
    overflow: 'hidden',
    '& > *': {
        flexShrink: 0,
        margin: topMarginSize + "px " + rightMarginSize + "px " + bottomMarginSize + "px " + leftMarginSize + "px",
    },
};
export var widthDetectorContainerStyle = {
    flexShrink: 1,
    minWidth: 1,
};
export var primaryButtonSkeletonCSS = {
    marginLeft: gridSize() * 1.5 + "px",
    marginRight: gridSize() * 1.5 + "px",
};
//# sourceMappingURL=styles.js.map