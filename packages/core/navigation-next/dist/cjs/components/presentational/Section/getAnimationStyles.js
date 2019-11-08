"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@emotion/core");

var _constants = require("../../../common/constants");

var enterAnimationDown = (0, _core.keyframes)(["\n  from { transform: translateX(100%); }\n  to { transform: translateX(0%); }\n"]);
var enterAnimationUp = (0, _core.keyframes)(["\n  from { transform: translateX(-100%); }\n  to { transform: translateX(0%); }\n"]);
var exitAnimationDown = (0, _core.keyframes)(["\n  from { transform: translateX(0); }\n  to { transform: translateX(-100%); }\n"]);
var exitAnimationUp = (0, _core.keyframes)(["\n  from { transform: translateX(0); }\n  to { transform: translateX(100%); }\n"]);

var _default = function _default(_ref) {
  var state = _ref.state,
      traversalDirection = _ref.traversalDirection;

  if (!['entering', 'exiting'].includes(state) || !traversalDirection) {
    return {};
  }

  if (state === 'exiting') {
    var animationName = traversalDirection === 'down' ? exitAnimationDown : exitAnimationUp;
    return (
      /*#__PURE__*/
      (0, _core.css)({
        animationDuration: _constants.transitionDuration,
        animationFillMode: 'forwards',
        animationTimingFunction: _constants.transitionTimingFunction
      }, " animation-name:", animationName, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3ByZXNlbnRhdGlvbmFsL1NlY3Rpb24vZ2V0QW5pbWF0aW9uU3R5bGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBDYyIsImZpbGUiOiIuLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9TZWN0aW9uL2dldEFuaW1hdGlvblN0eWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5cbmltcG9ydCB7IGNzcywga2V5ZnJhbWVzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5cbmltcG9ydCB7XG4gIHRyYW5zaXRpb25EdXJhdGlvbixcbiAgdHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uLFxufSBmcm9tICcuLi8uLi8uLi9jb21tb24vY29uc3RhbnRzJztcblxuY29uc3QgZW50ZXJBbmltYXRpb25Eb3duID0ga2V5ZnJhbWVzYFxuICBmcm9tIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpOyB9XG4gIHRvIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTsgfVxuYDtcblxuY29uc3QgZW50ZXJBbmltYXRpb25VcCA9IGtleWZyYW1lc2BcbiAgZnJvbSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7IH1cbiAgdG8geyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpOyB9XG5gO1xuXG5jb25zdCBleGl0QW5pbWF0aW9uRG93biA9IGtleWZyYW1lc2BcbiAgZnJvbSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfVxuICB0byB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7IH1cbmA7XG5cbmNvbnN0IGV4aXRBbmltYXRpb25VcCA9IGtleWZyYW1lc2BcbiAgZnJvbSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfVxuICB0byB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTsgfVxuYDtcblxudHlwZSBHZXRUcmFuc2l0aW9uU3R5bGVzQXJncyA9IHtcbiAgc3RhdGU6ICdlbnRlcmluZycgfCAnZW50ZXJlZCcgfCAnZXhpdGluZycgfCAnZXhpdGVkJyxcbiAgdHJhdmVyc2FsRGlyZWN0aW9uOiAndXAnIHwgJ2Rvd24nIHwgbnVsbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0ICh7IHN0YXRlLCB0cmF2ZXJzYWxEaXJlY3Rpb24gfTogR2V0VHJhbnNpdGlvblN0eWxlc0FyZ3MpOiB7fSA9PiB7XG4gIGlmICghWydlbnRlcmluZycsICdleGl0aW5nJ10uaW5jbHVkZXMoc3RhdGUpIHx8ICF0cmF2ZXJzYWxEaXJlY3Rpb24pIHtcbiAgICByZXR1cm4ge307XG4gIH1cblxuICBpZiAoc3RhdGUgPT09ICdleGl0aW5nJykge1xuICAgIGNvbnN0IGFuaW1hdGlvbk5hbWUgPVxuICAgICAgdHJhdmVyc2FsRGlyZWN0aW9uID09PSAnZG93bicgPyBleGl0QW5pbWF0aW9uRG93biA6IGV4aXRBbmltYXRpb25VcDtcbiAgICByZXR1cm4gY3NzYFxuICAgICR7e1xuICAgICAgYW5pbWF0aW9uRHVyYXRpb246IHRyYW5zaXRpb25EdXJhdGlvbixcbiAgICAgIGFuaW1hdGlvbkZpbGxNb2RlOiAnZm9yd2FyZHMnLFxuICAgICAgYW5pbWF0aW9uVGltaW5nRnVuY3Rpb246IHRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbixcbiAgICB9fVxuICAgICAgYW5pbWF0aW9uLW5hbWU6ICR7YW5pbWF0aW9uTmFtZX07XG4gICAgYDtcbiAgfVxuXG4gIGlmIChzdGF0ZSA9PT0gJ2VudGVyaW5nJykge1xuICAgIGNvbnN0IGFuaW1hdGlvbk5hbWUgPVxuICAgICAgdHJhdmVyc2FsRGlyZWN0aW9uID09PSAnZG93bicgPyBlbnRlckFuaW1hdGlvbkRvd24gOiBlbnRlckFuaW1hdGlvblVwO1xuICAgIHJldHVybiBjc3NgXG4gICAgJHt7XG4gICAgICBhbmltYXRpb25EdXJhdGlvbjogdHJhbnNpdGlvbkR1cmF0aW9uLFxuICAgICAgYW5pbWF0aW9uRmlsbE1vZGU6ICdmb3J3YXJkcycsXG4gICAgICBhbmltYXRpb25UaW1pbmdGdW5jdGlvbjogdHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgekluZGV4OiAxLFxuICAgIH19XG4gICAgICBhbmltYXRpb24tbmFtZTogJHthbmltYXRpb25OYW1lfTtcbiAgICBgO1xuICB9XG5cbiAgcmV0dXJuIHt9O1xufTtcbiJdfQ== */"))
    );
  }

  if (state === 'entering') {
    var _animationName = traversalDirection === 'down' ? enterAnimationDown : enterAnimationUp;

    return (
      /*#__PURE__*/
      (0, _core.css)({
        animationDuration: _constants.transitionDuration,
        animationFillMode: 'forwards',
        animationTimingFunction: _constants.transitionTimingFunction,
        position: 'absolute',
        width: '100%',
        zIndex: 1
      }, " animation-name:", _animationName, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3ByZXNlbnRhdGlvbmFsL1NlY3Rpb24vZ2V0QW5pbWF0aW9uU3R5bGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVEYyIsImZpbGUiOiIuLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9TZWN0aW9uL2dldEFuaW1hdGlvblN0eWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5cbmltcG9ydCB7IGNzcywga2V5ZnJhbWVzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5cbmltcG9ydCB7XG4gIHRyYW5zaXRpb25EdXJhdGlvbixcbiAgdHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uLFxufSBmcm9tICcuLi8uLi8uLi9jb21tb24vY29uc3RhbnRzJztcblxuY29uc3QgZW50ZXJBbmltYXRpb25Eb3duID0ga2V5ZnJhbWVzYFxuICBmcm9tIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpOyB9XG4gIHRvIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTsgfVxuYDtcblxuY29uc3QgZW50ZXJBbmltYXRpb25VcCA9IGtleWZyYW1lc2BcbiAgZnJvbSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7IH1cbiAgdG8geyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpOyB9XG5gO1xuXG5jb25zdCBleGl0QW5pbWF0aW9uRG93biA9IGtleWZyYW1lc2BcbiAgZnJvbSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfVxuICB0byB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7IH1cbmA7XG5cbmNvbnN0IGV4aXRBbmltYXRpb25VcCA9IGtleWZyYW1lc2BcbiAgZnJvbSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfVxuICB0byB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTsgfVxuYDtcblxudHlwZSBHZXRUcmFuc2l0aW9uU3R5bGVzQXJncyA9IHtcbiAgc3RhdGU6ICdlbnRlcmluZycgfCAnZW50ZXJlZCcgfCAnZXhpdGluZycgfCAnZXhpdGVkJyxcbiAgdHJhdmVyc2FsRGlyZWN0aW9uOiAndXAnIHwgJ2Rvd24nIHwgbnVsbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0ICh7IHN0YXRlLCB0cmF2ZXJzYWxEaXJlY3Rpb24gfTogR2V0VHJhbnNpdGlvblN0eWxlc0FyZ3MpOiB7fSA9PiB7XG4gIGlmICghWydlbnRlcmluZycsICdleGl0aW5nJ10uaW5jbHVkZXMoc3RhdGUpIHx8ICF0cmF2ZXJzYWxEaXJlY3Rpb24pIHtcbiAgICByZXR1cm4ge307XG4gIH1cblxuICBpZiAoc3RhdGUgPT09ICdleGl0aW5nJykge1xuICAgIGNvbnN0IGFuaW1hdGlvbk5hbWUgPVxuICAgICAgdHJhdmVyc2FsRGlyZWN0aW9uID09PSAnZG93bicgPyBleGl0QW5pbWF0aW9uRG93biA6IGV4aXRBbmltYXRpb25VcDtcbiAgICByZXR1cm4gY3NzYFxuICAgICR7e1xuICAgICAgYW5pbWF0aW9uRHVyYXRpb246IHRyYW5zaXRpb25EdXJhdGlvbixcbiAgICAgIGFuaW1hdGlvbkZpbGxNb2RlOiAnZm9yd2FyZHMnLFxuICAgICAgYW5pbWF0aW9uVGltaW5nRnVuY3Rpb246IHRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbixcbiAgICB9fVxuICAgICAgYW5pbWF0aW9uLW5hbWU6ICR7YW5pbWF0aW9uTmFtZX07XG4gICAgYDtcbiAgfVxuXG4gIGlmIChzdGF0ZSA9PT0gJ2VudGVyaW5nJykge1xuICAgIGNvbnN0IGFuaW1hdGlvbk5hbWUgPVxuICAgICAgdHJhdmVyc2FsRGlyZWN0aW9uID09PSAnZG93bicgPyBlbnRlckFuaW1hdGlvbkRvd24gOiBlbnRlckFuaW1hdGlvblVwO1xuICAgIHJldHVybiBjc3NgXG4gICAgJHt7XG4gICAgICBhbmltYXRpb25EdXJhdGlvbjogdHJhbnNpdGlvbkR1cmF0aW9uLFxuICAgICAgYW5pbWF0aW9uRmlsbE1vZGU6ICdmb3J3YXJkcycsXG4gICAgICBhbmltYXRpb25UaW1pbmdGdW5jdGlvbjogdHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgekluZGV4OiAxLFxuICAgIH19XG4gICAgICBhbmltYXRpb24tbmFtZTogJHthbmltYXRpb25OYW1lfTtcbiAgICBgO1xuICB9XG5cbiAgcmV0dXJuIHt9O1xufTtcbiJdfQ== */"))
    );
  }

  return {};
};

exports.default = _default;