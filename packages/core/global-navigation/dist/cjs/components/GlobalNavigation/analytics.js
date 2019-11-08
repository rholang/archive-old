"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fireDrawerDismissedEvents = exports.analyticsIdMap = void 0;

var _constants = require("../../constants");

var analyticsIdMap = {
  search: 'quickSearchDrawer',
  notification: 'notificationsDrawer',
  create: 'createDrawer',
  starred: 'starDrawer',
  help: 'helpDrawer',
  settings: 'settingsDrawer',
  invite: 'inviteDrawer'
};
exports.analyticsIdMap = analyticsIdMap;

var fireDrawerDismissedEvents = function fireDrawerDismissedEvents(drawerName, analyticsEvent, trigger) {
  if (analyticsEvent.payload.attributes && analyticsEvent.payload.attributes.trigger === 'escKey') {
    var keyboardShortcutEvent = analyticsEvent.clone().update(function () {
      return {
        action: 'pressed',
        actionSubject: 'keyboardShortcut',
        actionSubjectId: 'dismissDrawer',
        attributes: {
          key: 'Esc'
        }
      };
    });
    keyboardShortcutEvent.fire(_constants.NAVIGATION_CHANNEL);
  }

  if (trigger) {
    analyticsEvent.update({
      action: 'dismissed',
      actionSubject: 'drawer',
      actionSubjectId: analyticsIdMap[drawerName],
      attributes: {
        trigger: trigger
      }
    }).fire(_constants.NAVIGATION_CHANNEL);
    return;
  }

  analyticsEvent.update({
    actionSubjectId: analyticsIdMap[drawerName]
  }).fire(_constants.NAVIGATION_CHANNEL);
};

exports.fireDrawerDismissedEvents = fireDrawerDismissedEvents;