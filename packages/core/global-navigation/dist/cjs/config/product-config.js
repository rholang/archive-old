"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = generateProductConfig;

var _core = require("@emotion/core");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _react = _interopRequireDefault(require("react"));

var _questionCircle = _interopRequireDefault(require("@atlaskit/icon/glyph/question-circle"));

var _badge = _interopRequireDefault(require("@atlaskit/badge"));

var _avatar = _interopRequireDefault(require("@atlaskit/avatar"));

var _signIn = _interopRequireDefault(require("@atlaskit/icon/glyph/sign-in"));

var MAX_NOTIFICATIONS_COUNT = 9;

var isNotEmpty = function isNotEmpty(obj) {
  var values = Object.values(obj);
  return !!(values.length && values.reduce(function (acc, curr) {
    return acc || !!curr;
  }, false));
};

var generateAvatar = function generateAvatar(profileIconUrl) {
  var GeneratedAvatar = function GeneratedAvatar(_ref) {
    var className = _ref.className,
        onClick = _ref.onClick,
        label = _ref.label;
    return (0, _core.jsx)("span", {
      className: className
    }, (0, _core.jsx)(_avatar.default, {
      name: label,
      enableTooltip: false,
      borderColor: "transparent",
      src: profileIconUrl,
      isActive: false,
      isHover: false,
      size: "small",
      onClick: onClick
    }));
  };

  return GeneratedAvatar;
};

function configFactory(onClick, tooltip) {
  var otherConfig = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var href = otherConfig.href;
  var shouldNotRenderItem = !onClick && !href;
  var label = otherConfig.label;

  if (!label && typeof tooltip === 'string') {
    label = tooltip;
  }

  if (shouldNotRenderItem && (tooltip || isNotEmpty(otherConfig))) {
    // eslint-disable-next-line no-console
    console.warn("One of the items in the Global Navigation is missing an onClick (or an href in case of the productIcon). This item will not be rendered in Global Navigation.");
  }

  if (shouldNotRenderItem) return null;
  return (0, _objectSpread2.default)({}, href ? {
    href: href
  } : null, onClick ? {
    onClick: onClick
  } : null, tooltip ? {
    tooltip: tooltip
  } : null, {
    label: label
  }, otherConfig);
}

function helpConfigFactory(items, tooltip) {
  var otherConfig = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (!items && (tooltip || isNotEmpty(otherConfig))) {
    // eslint-disable-next-line no-console
    console.warn('You have provided some prop(s) for help, but not helpItems. Help will not be rendered in Global Navigation');
  }

  if (!items) return null;
  var label = otherConfig.label;

  if (!label && typeof tooltip === 'string') {
    label = tooltip;
  }

  return (0, _objectSpread2.default)({
    icon: _questionCircle.default,
    dropdownItems: items
  }, tooltip ? {
    tooltip: tooltip
  } : null, {
    label: label
  }, otherConfig);
}

function profileConfigFactory(items, tooltip, href, profileIconUrl) {
  var otherConfig = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
  var shouldNotRenderProfile = !items && !href;

  if (shouldNotRenderProfile && (tooltip || isNotEmpty(otherConfig))) {
    // eslint-disable-next-line no-console
    console.warn('You provided some prop(s) for profile, but not profileItems or loginHref. Profile will not be rendered in Global Navigation');
  }

  if (shouldNotRenderProfile) return null;

  if (items && href) {
    // eslint-disable-next-line no-console
    console.warn('You have provided both loginHref and profileItems. loginUrl prop will be ignored by Global Navigation');
  }

  var profileComponent = items ? {
    icon: generateAvatar(profileIconUrl),
    dropdownItems: items
  } : {
    icon: _signIn.default,
    href: href
  };
  var label = otherConfig.label;

  if (!label && typeof tooltip === 'string') {
    label = tooltip;
  }

  return (0, _objectSpread2.default)({}, profileComponent, tooltip ? {
    tooltip: tooltip
  } : null, {
    label: label
  }, otherConfig);
}

function notificationBadge(badgeCount) {
  return {
    badge: badgeCount ? function () {
      return (0, _core.jsx)(_badge.default, {
        max: MAX_NOTIFICATIONS_COUNT,
        appearance: "important"
      }, badgeCount);
    } : null,
    badgeCount: badgeCount
  };
}

function notificationConfigFactory(notificationTooltip, notificationLabel, badgeCount, notificationDrawerContents, onNotificationClick, isNotificationInbuilt, openDrawer, getNotificationRef) {
  var notificationOnClickHandler = function notificationOnClickHandler() {
    if (onNotificationClick) {
      onNotificationClick();
    }

    openDrawer();
  };

  return isNotificationInbuilt ? configFactory(notificationOnClickHandler, notificationTooltip, {
    badgeCount: badgeCount,
    getRef: getNotificationRef,
    label: notificationLabel
  }) : configFactory(onNotificationClick || notificationDrawerContents && openDrawer, notificationTooltip, (0, _objectSpread2.default)({}, notificationBadge(badgeCount), {
    getRef: getNotificationRef,
    label: notificationLabel
  }));
}

function appSwitcherConfigFactory(props) {
  var label = props.label;

  if (!label && typeof props.tooltip === 'string') {
    label = props.tooltip;
  }

  return (0, _objectSpread2.default)({}, props, {
    label: label
  });
}

function generateProductConfig(props, openDrawer, isNotificationInbuilt) {
  var onProductClick = props.onProductClick,
      productTooltip = props.productTooltip,
      productLabel = props.productLabel,
      productIcon = props.productIcon,
      productHref = props.productHref,
      getProductRef = props.getProductRef,
      onRecentClick = props.onRecentClick,
      recentLabel = props.recentLabel,
      recentTooltip = props.recentTooltip,
      recentDrawerContents = props.recentDrawerContents,
      getRecentRef = props.getRecentRef,
      onInviteClick = props.onInviteClick,
      inviteLabel = props.inviteLabel,
      inviteTooltip = props.inviteTooltip,
      inviteDrawerContents = props.inviteDrawerContents,
      getInviteRef = props.getInviteRef,
      onCreateClick = props.onCreateClick,
      createLabel = props.createLabel,
      createTooltip = props.createTooltip,
      createDrawerContents = props.createDrawerContents,
      getCreateRef = props.getCreateRef,
      searchTooltip = props.searchTooltip,
      searchLabel = props.searchLabel,
      onSearchClick = props.onSearchClick,
      searchDrawerContents = props.searchDrawerContents,
      getSearchRef = props.getSearchRef,
      onStarredClick = props.onStarredClick,
      starredLabel = props.starredLabel,
      starredTooltip = props.starredTooltip,
      starredDrawerContents = props.starredDrawerContents,
      getStarredRef = props.getStarredRef,
      notificationTooltip = props.notificationTooltip,
      notificationsLabel = props.notificationsLabel,
      notificationCount = props.notificationCount,
      notificationDrawerContents = props.notificationDrawerContents,
      onNotificationClick = props.onNotificationClick,
      getNotificationRef = props.getNotificationRef,
      appSwitcherComponent = props.appSwitcherComponent,
      appSwitcherLabel = props.appSwitcherLabel,
      appSwitcherTooltip = props.appSwitcherTooltip,
      getAppSwitcherRef = props.getAppSwitcherRef,
      enableHelpDrawer = props.enableHelpDrawer,
      helpItems = props.helpItems,
      onHelpClick = props.onHelpClick,
      helpLabel = props.helpLabel,
      helpTooltip = props.helpTooltip,
      helpBadge = props.helpBadge,
      helpDrawerContents = props.helpDrawerContents,
      getHelpRef = props.getHelpRef,
      onSettingsClick = props.onSettingsClick,
      settingsLabel = props.settingsLabel,
      settingsTooltip = props.settingsTooltip,
      settingsDrawerContents = props.settingsDrawerContents,
      getSettingsRef = props.getSettingsRef,
      profileItems = props.profileItems,
      profileLabel = props.profileLabel,
      profileTooltip = props.profileTooltip,
      loginHref = props.loginHref,
      profileIconUrl = props.profileIconUrl,
      getProfileRef = props.getProfileRef; // $FlowFixMe

  if (props.enableAtlassianSwitcher) {
    // eslint-disable-next-line no-console
    console.warn('Use of `enableAtlassianSwitcher` has been deprecated because `atlassian-switcher` is no longer bundled. Please use `appSwitcherComponent` instead.');
  }

  return {
    product: configFactory(onProductClick, productTooltip, {
      icon: productIcon,
      href: productHref,
      getRef: getProductRef,
      label: productLabel
    }),
    recent: configFactory(onRecentClick || recentDrawerContents && openDrawer('recent'), recentTooltip, {
      getRef: getRecentRef,
      label: recentLabel
    }),
    invite: configFactory(onInviteClick || inviteDrawerContents && openDrawer('invite'), inviteTooltip, {
      getRef: getInviteRef,
      label: inviteLabel
    }),
    create: configFactory(onCreateClick || createDrawerContents && openDrawer('create'), createTooltip, {
      getRef: getCreateRef,
      label: createLabel
    }),
    search: configFactory(onSearchClick || searchDrawerContents && openDrawer('search'), searchTooltip, {
      getRef: getSearchRef,
      label: searchLabel
    }),
    starred: configFactory(onStarredClick || starredDrawerContents && openDrawer('starred'), starredTooltip, {
      getRef: getStarredRef,
      label: starredLabel
    }),
    help: enableHelpDrawer ? configFactory(onHelpClick || helpDrawerContents && openDrawer('help'), helpTooltip, {
      getRef: getHelpRef,
      label: helpLabel,
      badge: helpBadge
    }) : helpConfigFactory(helpItems, helpTooltip, {
      getRef: getHelpRef,
      label: helpLabel,
      badge: helpBadge
    }),
    settings: configFactory(onSettingsClick || settingsDrawerContents && openDrawer('settings'), settingsTooltip, {
      getRef: getSettingsRef,
      label: settingsLabel
    }),
    notification: notificationConfigFactory(notificationTooltip, notificationsLabel, notificationCount, notificationDrawerContents, onNotificationClick, isNotificationInbuilt, openDrawer('notification'), getNotificationRef),
    profile: profileConfigFactory(profileItems, profileTooltip, loginHref, profileIconUrl, {
      getRef: getProfileRef,
      label: profileLabel
    }),
    appSwitcher: appSwitcherComponent ? appSwitcherConfigFactory({
      itemComponent: appSwitcherComponent,
      label: appSwitcherLabel,
      tooltip: appSwitcherTooltip,
      getRef: getAppSwitcherRef
    }) : null
  };
}