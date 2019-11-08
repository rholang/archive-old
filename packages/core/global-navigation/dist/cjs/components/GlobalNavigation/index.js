"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@emotion/core");

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _react = _interopRequireWildcard(require("react"));

var _analyticsNamespacedContext = require("@atlaskit/analytics-namespaced-context");

var _notificationIndicator = require("@atlaskit/notification-indicator");

var _notificationLogClient = require("@atlaskit/notification-log-client");

var _navigationNext = require("@atlaskit/navigation-next");

var _drawer = _interopRequireDefault(require("@atlaskit/drawer"));

var _version = require("../../version.json");

var _defaultConfig = _interopRequireDefault(require("../../config/default-config"));

var _productConfig = _interopRequireDefault(require("../../config/product-config"));

var _ItemComponent = _interopRequireDefault(require("../ItemComponent"));

var _ScreenTracker = _interopRequireDefault(require("../ScreenTracker"));

var _analytics = require("./analytics");

var _platformIntegration = _interopRequireDefault(require("../../platform-integration"));

var noop = function noop() {};

var localStorage = (typeof window === "undefined" ? "undefined" : (0, _typeof2.default)(window)) === 'object' ? window.localStorage : {};

var GlobalNavigation =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(GlobalNavigation, _Component);

  function GlobalNavigation(_props) {
    var _this;

    (0, _classCallCheck2.default)(this, GlobalNavigation);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(GlobalNavigation).call(this, _props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "drawers", {
      search: {
        isControlled: false
      },
      notification: {
        isControlled: false
      },
      starred: {
        isControlled: false
      },
      help: {
        isControlled: false
      },
      settings: {
        isControlled: false
      },
      create: {
        isControlled: false
      },
      recent: {
        isControlled: false
      },
      invite: {
        isControlled: false
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "isNotificationInbuilt", false);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onCountUpdating", function () {
      var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        visibilityChangesSinceTimer: 0
      };

      if (!_this.state.notificationCount || param.visibilityChangesSinceTimer <= 1) {
        // fetch the notificationCount
        return {};
      } // skip fetch, refresh from local storage if newer


      var cachedCount = parseInt(_this.getLocalStorageCount(), 10);
      var result = {};

      if (cachedCount && cachedCount !== _this.state.notificationCount) {
        result.countOverride = cachedCount;
      } else {
        result.skip = true;
      }

      return result;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onCountUpdated", function () {
      var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        newCount: 0
      };

      _this.updateLocalStorageCount(param.newCount);

      _this.setState({
        notificationCount: param.newCount
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getLocalStorageCount", function () {
      try {
        return localStorage.getItem('notificationBadgeCountCache');
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
      }

      return null;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "updateLocalStorageCount", function (newCount) {
      try {
        localStorage.setItem('notificationBadgeCountCache', newCount);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "updateDrawerControlledStatus", function (drawerName, props) {
      var capitalisedDrawerName = _this.getCapitalisedDrawerName(drawerName);

      if (props["on".concat(capitalisedDrawerName.replace('Drawer', ''), "Click")]) {
        _this.drawers[drawerName].isControlled = false;
      } else {
        // If a drawer doesn't have an onClick handler, mark it as a controlled drawer.
        _this.drawers[drawerName].isControlled = true;
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getCapitalisedDrawerName", function (drawerName) {
      return "".concat(drawerName[0].toUpperCase()).concat(drawerName.slice(1), "Drawer");
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "openDrawer", function (drawerName) {
      return function () {
        var capitalisedDrawerName = _this.getCapitalisedDrawerName(drawerName);

        var onOpenCallback = noop;

        if (typeof _this.props["on".concat(capitalisedDrawerName, "Open")] === 'function') {
          onOpenCallback = _this.props["on".concat(capitalisedDrawerName, "Open")];
        }

        if (drawerName === 'notification' && _this.isNotificationInbuilt) {
          _this.onCountUpdated({
            newCount: 0
          });
        } // Update the state only if it's a controlled drawer.
        // componentDidMount takes care of the uncontrolled drawers


        if (_this.drawers[drawerName].isControlled) {
          _this.setState((0, _defineProperty2.default)({}, "is".concat(capitalisedDrawerName, "Open"), true), onOpenCallback);
        } else {
          // invoke callback in both cases
          onOpenCallback();
        }
      };
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "closeDrawer", function (drawerName) {
      return function (event, analyticsEvent, trigger) {
        var capitalisedDrawerName = _this.getCapitalisedDrawerName(drawerName);

        var onCloseCallback = noop;

        if (typeof _this.props["on".concat(capitalisedDrawerName, "Close")] === 'function') {
          onCloseCallback = _this.props["on".concat(capitalisedDrawerName, "Close")];
        }

        (0, _analytics.fireDrawerDismissedEvents)(drawerName, analyticsEvent, trigger); // Update the state only if it's a controlled drawer.
        // componentDidMount takes care of the uncontrolled drawers

        if (_this.drawers[drawerName].isControlled) {
          _this.setState((0, _defineProperty2.default)({}, "is".concat(capitalisedDrawerName, "Open"), false), onCloseCallback);
        } else {
          // invoke callback in both cases
          onCloseCallback();
        }
      };
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "renderNotificationBadge", function () {
      if (_this.state.isNotificationDrawerOpen) {
        // Unmount the badge when the drawer is open
        // So that it can remount with the latest badgeCount when the drawer closes.
        return null;
      }

      var _this$props = _this.props,
          cloudId = _this$props.cloudId,
          fabricNotificationLogUrl = _this$props.fabricNotificationLogUrl;
      var refreshRate = _this.state.notificationCount ? 180000 : 60000;
      return (0, _core.jsx)(_notificationIndicator.NotificationIndicator, {
        notificationLogProvider: new _notificationLogClient.NotificationLogClient(fabricNotificationLogUrl, cloudId),
        refreshRate: refreshRate,
        onCountUpdated: _this.onCountUpdated,
        onCountUpdating: _this.onCountUpdating
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "renderNotificationDrawerContents", function () {
      var _this$props2 = _this.props,
          locale = _this$props2.locale,
          product = _this$props2.product;
      return (0, _core.jsx)(_platformIntegration.default, {
        product: product,
        locale: locale
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "constructNavItems", function () {
      var productConfig = (0, _productConfig.default)(_this.props, _this.openDrawer, _this.isNotificationInbuilt);
      var defaultConfig = (0, _defaultConfig.default)();
      var badge = _this.renderNotificationBadge;

      var _ref = _this.isNotificationInbuilt ? _this.state : _this.props,
          badgeCount = _ref.notificationCount;

      var navItems = Object.keys(productConfig).map(function (item) {
        return (0, _objectSpread2.default)({}, productConfig[item] ? (0, _objectSpread2.default)({}, item === 'notification' && _this.isNotificationInbuilt ? {
          id: 'notifications',
          badge: badge
        } : {}, defaultConfig[item], productConfig[item], item === 'notification' ? {
          id: 'notifications',
          badgeCount: badgeCount
        } : {}) : null);
      });
      return {
        primaryItems: navItems.filter(function (_ref2) {
          var section = _ref2.section;
          return section === 'primary';
        }).sort(function (_ref3, _ref4) {
          var rank1 = _ref3.rank;
          var rank2 = _ref4.rank;
          return rank1 - rank2;
        }).map(function (navItem) {
          var section = navItem.section,
              rank = navItem.rank,
              props = (0, _objectWithoutProperties2.default)(navItem, ["section", "rank"]);
          return props;
        }),
        secondaryItems: navItems.filter(function (_ref5) {
          var section = _ref5.section;
          return section === 'secondary';
        }).sort(function (_ref6, _ref7) {
          var rank1 = _ref6.rank;
          var rank2 = _ref7.rank;
          return rank1 - rank2;
        }).map(function (navItem) {
          var section = navItem.section,
              rank = navItem.rank,
              props = (0, _objectWithoutProperties2.default)(navItem, ["section", "rank"]);
          return props;
        })
      };
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getDrawerContents", function (drawerName) {
      switch (drawerName) {
        case 'notification':
          return _this.isNotificationInbuilt ? _this.renderNotificationDrawerContents : _this.props.notificationDrawerContents;

        default:
          return _this.props["".concat(drawerName, "DrawerContents")];
      }
    });
    _this.state = {
      isCreateDrawerOpen: false,
      isSearchDrawerOpen: false,
      isNotificationDrawerOpen: false,
      isStarredDrawerOpen: false,
      isHelpDrawerOpen: false,
      isSettingsDrawerOpen: false,
      isRecentDrawerOpen: false,
      isInviteDrawerOpen: false,
      notificationCount: 0
    };
    Object.keys(_this.drawers).forEach(function (drawer) {
      _this.updateDrawerControlledStatus(drawer, _props);

      var capitalisedDrawerName = _this.getCapitalisedDrawerName(drawer);

      if (_props["".concat(drawer, "DrawerContents")] && !_props["on".concat(capitalisedDrawerName, "Close")]) {
        /* eslint-disable no-console */
        console.warn("You have provided an onClick handler for ".concat(drawer, ", but no close handler for the drawer.\n        Please pass on").concat(capitalisedDrawerName, "Close prop to handle closing of the ").concat(drawer, " drawer."));
        /* eslint-enable */
      } // Set it's initial state using a prop with the same name.


      _this.state["is".concat(capitalisedDrawerName, "Open")] = _props["is".concat(capitalisedDrawerName, "Open")];
    });
    var _this$props3 = _this.props,
        _cloudId = _this$props3.cloudId,
        _fabricNotificationLogUrl = _this$props3.fabricNotificationLogUrl,
        notificationDrawerContents = _this$props3.notificationDrawerContents;
    _this.isNotificationInbuilt = !!(!notificationDrawerContents && _cloudId && _fabricNotificationLogUrl);
    return _this;
  }

  (0, _createClass2.default)(GlobalNavigation, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      Object.keys(this.drawers).forEach(function (drawerName) {
        _this2.updateDrawerControlledStatus(drawerName, _this2.props);

        var capitalisedDrawerName = _this2.getCapitalisedDrawerName(drawerName); // Do nothing if it's a controlled drawer


        if (_this2.drawers[drawerName].isControlled) {
          return;
        }

        if (prevProps["is".concat(capitalisedDrawerName, "Open")] !== _this2.props["is".concat(capitalisedDrawerName, "Open")]) {
          // Update the state based on the prop
          _this2.setState((0, _defineProperty2.default)({}, "is".concat(capitalisedDrawerName, "Open"), _this2.props["is".concat(capitalisedDrawerName, "Open")]));
        }
      });
      var _this$props4 = this.props,
          cloudId = _this$props4.cloudId,
          fabricNotificationLogUrl = _this$props4.fabricNotificationLogUrl,
          notificationDrawerContents = _this$props4.notificationDrawerContents;
      this.isNotificationInbuilt = !!(!notificationDrawerContents && cloudId && fabricNotificationLogUrl);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      // TODO: Look into memoizing this to avoid memory bloat
      var _this$constructNavIte = this.constructNavItems(),
          primaryItems = _this$constructNavIte.primaryItems,
          secondaryItems = _this$constructNavIte.secondaryItems;

      var drawerBackIcon = this.props.drawerBackIcon;
      return (0, _core.jsx)(_analyticsNamespacedContext.NavigationAnalyticsContext, {
        data: {
          packageName: _version.name,
          packageVersion: _version.version,
          componentName: 'globalNavigation'
        }
      }, (0, _core.jsx)(_react.Fragment, null, (0, _core.jsx)(_navigationNext.GlobalNav, {
        itemComponent: _ItemComponent.default,
        primaryItems: primaryItems,
        secondaryItems: secondaryItems
      }), Object.keys(this.drawers).map(function (drawerName) {
        var capitalisedDrawerName = _this3.getCapitalisedDrawerName(drawerName);

        var shouldUnmountOnExit = _this3.props["should".concat(capitalisedDrawerName, "UnmountOnExit")];

        var DrawerContents = _this3.getDrawerContents(drawerName);

        if (!DrawerContents) {
          return null;
        }

        var isFocusLockEnabled = _this3.props["is".concat(capitalisedDrawerName, "FocusLockEnabled")];

        var onCloseComplete = _this3.props["on".concat(capitalisedDrawerName, "CloseComplete")];

        return (0, _core.jsx)(_drawer.default, {
          key: drawerName,
          isOpen: _this3.state["is".concat(capitalisedDrawerName, "Open")],
          onClose: _this3.closeDrawer(drawerName),
          onCloseComplete: onCloseComplete,
          shouldUnmountOnExit: shouldUnmountOnExit,
          isFocusLockEnabled: isFocusLockEnabled,
          width: _this3.props["".concat(drawerName, "DrawerWidth")],
          icon: drawerBackIcon
        }, (0, _core.jsx)(_ScreenTracker.default, {
          name: _analytics.analyticsIdMap[drawerName],
          isVisible: _this3.state["is".concat(capitalisedDrawerName, "Open")]
        }), (0, _core.jsx)(DrawerContents, null));
      })));
    }
  }]);
  return GlobalNavigation;
}(_react.Component);

exports.default = GlobalNavigation;
(0, _defineProperty2.default)(GlobalNavigation, "defaultProps", {
  createDrawerWidth: 'wide',
  searchDrawerWidth: 'wide',
  notificationDrawerWidth: 'wide',
  starredDrawerWidth: 'wide',
  helpDrawerWidth: 'wide',
  settingsDrawerWidth: 'wide',
  recentDrawerWidth: 'wide',
  inviteDrawerWidth: 'wide',
  drawerBackIcon: null
});