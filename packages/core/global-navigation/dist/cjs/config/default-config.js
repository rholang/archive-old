"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = generateDefaultConfig;

var _search = _interopRequireDefault(require("@atlaskit/icon/glyph/search"));

var _add = _interopRequireDefault(require("@atlaskit/icon/glyph/add"));

var _starLarge = _interopRequireDefault(require("@atlaskit/icon/glyph/star-large"));

var _notification = _interopRequireDefault(require("@atlaskit/icon/glyph/notification"));

var _settings = _interopRequireDefault(require("@atlaskit/icon/glyph/settings"));

var _questionCircle = _interopRequireDefault(require("@atlaskit/icon/glyph/question-circle"));

var _inviteTeam = _interopRequireDefault(require("@atlaskit/icon/glyph/invite-team"));

var _CustomIcons = _interopRequireDefault(require("../components/CustomIcons"));

function generateDefaultConfig() {
  return {
    product: {
      label: 'Atlassian',
      rank: 1,
      section: 'primary',
      tooltip: 'Atlassian',
      id: 'productLogo'
    },
    recent: {
      icon: _CustomIcons.default,
      label: 'Recently visited',
      rank: 2,
      section: 'primary',
      tooltip: 'Recently visited',
      id: 'recentIcon'
    },
    starred: {
      icon: _starLarge.default,
      label: 'Starred and recent',
      rank: 3,
      section: 'primary',
      tooltip: 'Starred and recent',
      id: 'starDrawer'
    },
    search: {
      icon: _search.default,
      label: 'Search',
      section: 'primary',
      rank: 4,
      tooltip: 'Search',
      id: 'quickSearch'
    },
    create: {
      icon: _add.default,
      label: 'Create',
      section: 'primary',
      rank: 5,
      tooltip: 'Create',
      id: 'create'
    },
    invite: {
      icon: _inviteTeam.default,
      label: 'Invite',
      rank: 6,
      section: 'primary',
      tooltip: 'Invite',
      id: 'inviteIcon'
    },
    // ==============  secondary section  ==============
    notification: {
      icon: _notification.default,
      label: 'Notifications',
      section: 'secondary',
      rank: 1,
      tooltip: 'Notifications',
      id: 'notifications'
    },
    appSwitcher: {
      section: 'secondary',
      rank: 2,
      id: 'appSwitcher'
    },
    help: {
      icon: _questionCircle.default,
      label: 'Help',
      section: 'secondary',
      rank: 3,
      tooltip: 'Help',
      id: 'help'
    },
    settings: {
      icon: _settings.default,
      label: 'Settings',
      section: 'secondary',
      rank: 4,
      tooltip: 'Settings',
      id: 'settings'
    },
    profile: {
      label: 'Your profile and Settings',
      section: 'secondary',
      rank: 5,
      tooltip: 'Your profile and Settings',
      id: 'profile'
    }
  };
}