"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.global = exports.siteSettings = exports.settings = exports.dark = exports.container = void 0;

var _chromatism = _interopRequireDefault(require("chromatism"));

var _components = require("@atlaskit/theme/components");

var colors = _interopRequireWildcard(require("@atlaskit/theme/colors"));

// the following colors have been added at request of Venn. These should either
// be added to theme.colors or moved to specific AK colors. They are using a new
// method to generate colors dynamically based on the background color.
var darkDrawerItemHoverBackground = '#313F57';
var darkDrawerItemActiveBackground = '#2B374D';
var darkItemHoverBackground = '#253247';
var darkItemActiveBackground = '#202B3D';
var darkItemSelectedBackground = '#202B3D';
var derivedGlobalHoverBackground = '#192238';
var derivedGlobalActiveBackground = '#202B3D';
var derivedGlobalSelectedBackground = '#1D2842'; // Currently shared by all the themes - but need not be

var focus = {
  outline: (0, _components.themed)({
    light: colors.B100,
    dark: colors.B75
  })
};

function lightenColor(color, alpha) {
  var _chromatism$convert$r = _chromatism.default.convert(color).rgb,
      red = _chromatism$convert$r.r,
      green = _chromatism$convert$r.g,
      blue = _chromatism$convert$r.b;

  return "rgba(".concat(red, ", ").concat(green, ", ").concat(blue, ", 0.").concat(alpha, ")");
}

var container = function () {
  var primaryBackground = colors.codeBlock;
  var item = {
    default: {
      background: 'transparent'
    },
    hover: {
      background: (0, _components.themed)({
        light: colors.N20A,
        dark: darkDrawerItemHoverBackground
      })
    },
    active: {
      background: (0, _components.themed)({
        light: colors.B50,
        dark: darkDrawerItemActiveBackground
      })
    },
    selected: {
      background: colors.N20A,
      text: colors.B400
    },
    focus: focus,
    dragging: {
      // similar to hover - but without opacity
      background: (0, _components.themed)({
        light: colors.N30,
        dark: colors.DN30
      })
    }
  };
  var scrollBar = {
    default: {
      background: (0, _components.themed)({
        light: lightenColor(colors.N500, 36),
        dark: lightenColor(colors.DN600, 36)
      })
    },
    hover: {
      background: (0, _components.themed)({
        light: lightenColor(colors.N500, 56),
        dark: lightenColor(colors.DN600, 56)
      })
    }
  };
  var dropdown = {
    default: {
      background: item.hover.background
    },
    hover: {
      background: (0, _components.themed)({
        light: colors.N30A,
        dark: colors.DN30A
      })
    },
    active: item.active,
    selected: item.selected,
    focus: item.focus,
    dragging: item.dragging
  };
  var theme = {
    background: {
      primary: primaryBackground,
      secondary: primaryBackground,
      tertiary: (0, _components.themed)({
        light: colors.N0,
        dark: colors.DN30
      })
    },
    text: (0, _components.themed)({
      light: colors.N500,
      dark: colors.DN600
    }),
    subText: colors.subtleText,
    keyline: (0, _components.themed)({
      light: colors.N30A,
      dark: colors.DN30A
    }),
    item: item,
    dropdown: dropdown,
    scrollBar: scrollBar
  };
  return theme;
}();

exports.container = container;

var dark = function () {
  var item = {
    default: {
      background: 'transparent'
    },
    hover: {
      background: darkItemHoverBackground
    },
    active: {
      // Currently there is no ramp for white opacity
      background: darkItemActiveBackground,
      text: colors.B100
    },
    selected: {
      background: darkItemSelectedBackground,
      text: colors.DN900
    },
    focus: focus,
    dragging: {
      // Similar to active colour - but without opacity
      background: colors.DN50
    }
  };
  var scrollBar = {
    default: {
      background: lightenColor(colors.DN400, 36)
    },
    hover: {
      background: lightenColor(colors.DN400, 26)
    }
  };
  var dropdown = {
    default: {
      background: item.hover.background
    },
    hover: {
      // Going lighter to be different from hover
      background: colors.DN60
    },
    active: item.active,
    selected: item.selected,
    focus: item.focus,
    dragging: item.dragging
  };
  var theme = {
    background: {
      primary: colors.DN0,
      secondary: colors.DN20,
      tertiary: colors.DN30
    },
    text: colors.DN400,
    subText: colors.DN100,
    keyline: colors.DN50,
    item: item,
    dropdown: dropdown,
    scrollBar: scrollBar
  };
  return theme;
}();

exports.dark = dark;

var settings = function () {
  var primaryBackground = colors.N800;
  var item = {
    default: {
      background: 'transparent'
    },
    hover: {
      background: colors.N700A
    },
    active: {
      // Currently there is no ramp for white opacity
      background: 'rgba(255, 255, 255, 0.08)',
      text: colors.B100
    },
    selected: {
      background: colors.N700A
    },
    focus: focus,
    dragging: {
      // Similar to active colour - but without opacity
      background: colors.N600
    }
  };
  var scrollBar = {
    default: {
      background: lightenColor(colors.N0, 36)
    },
    hover: {
      background: lightenColor(colors.N0, 26)
    }
  };
  var dropdown = {
    default: {
      background: item.hover.background
    },
    hover: {
      // Going lighter to be different from hover
      background: colors.N90A
    },
    active: item.active,
    selected: item.selected,
    focus: item.focus,
    dragging: item.dragging
  };
  var theme = {
    background: {
      primary: primaryBackground,
      secondary: colors.N700,
      tertiary: colors.N700
    },
    text: colors.N0,
    subText: colors.N70,
    keyline: colors.N900,
    item: item,
    dropdown: dropdown,
    scrollBar: scrollBar
  };
  return theme;
}();

exports.settings = settings;

var siteSettings = function () {
  // deep copy settings and re-assign some colors
  var theme = JSON.parse(JSON.stringify(settings));
  theme.background.secondary = colors.N800;
  theme.item.active.text = colors.B100;
  return theme;
}();

exports.siteSettings = siteSettings;

var global = function () {
  var primaryBackground = colors.B500;
  var primaryBackgroundTransp = colors.N10A;
  var activeBackground = colors.B200;
  var item = {
    default: {
      background: primaryBackground,
      primaryBackgroundTransp: primaryBackgroundTransp
    },
    hover: {
      background: (0, _components.themed)({
        light: colors.N80A,
        dark: derivedGlobalHoverBackground
      })
    },
    active: {
      background: (0, _components.themed)({
        light: activeBackground,
        dark: derivedGlobalActiveBackground
      }),
      text: (0, _components.themed)({
        light: colors.B50,
        dark: colors.B100
      })
    },
    selected: {
      background: (0, _components.themed)({
        light: colors.N50A,
        dark: derivedGlobalSelectedBackground
      }),
      text: colors.B50
    },
    focus: focus,
    dragging: {
      // using active colour for this preset
      background: activeBackground
    }
  };
  var scrollBar = {
    default: {
      background: (0, _components.themed)({
        light: lightenColor(colors.B50, 36),
        dark: lightenColor(colors.DN400, 36)
      })
    },
    hover: {
      background: (0, _components.themed)({
        light: lightenColor(colors.B50, 56),
        dark: lightenColor(colors.DN400, 56)
      })
    }
  };
  var dropdown = {
    default: {
      background: item.hover.background
    },
    hover: {
      // going darker than standard hover
      background: colors.N90A
    },
    active: item.active,
    selected: item.selected,
    focus: item.focus,
    dragging: item.dragging
  };
  var theme = {
    background: {
      primary: (0, _components.themed)({
        light: primaryBackground,
        dark: colors.DN0
      }),
      secondary: (0, _components.themed)({
        light: primaryBackground,
        dark: colors.DN0
      }),
      tertiary: (0, _components.themed)({
        light: primaryBackground,
        dark: colors.DN0
      })
    },
    hasDarkmode: true,
    text: (0, _components.themed)({
      light: colors.B50,
      dark: colors.DN400
    }),
    subText: (0, _components.themed)({
      light: colors.B75,
      dark: colors.DN100
    }),
    keyline: (0, _components.themed)({
      light: colors.N80A,
      dark: colors.DN50
    }),
    item: item,
    dropdown: dropdown,
    scrollBar: scrollBar
  };
  return theme;
}();

exports.global = global;