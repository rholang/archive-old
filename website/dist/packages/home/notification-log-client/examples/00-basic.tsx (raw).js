(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[111],{697:function(n,i){n.exports="import * as React from 'react';\n\nimport { NotificationIndicator } from '@atlaskit/notification-indicator';\n\nimport { NotificationLogClient } from '../src';\n\nclass MockNotificationLogClient extends NotificationLogClient {\n  constructor() {\n    super('', '');\n  }\n\n  public async countUnseenNotifications() {\n    return Promise.resolve({ count: 5 });\n  }\n}\n\nexport default function Example() {\n  /**\n   * We are using a mock version here because we don't want to call out to the real service to get a working example.\n   * Typically this would be:\n   *\n   * const notificationLogClient = new NotificationLogClient(\n   *   'base-url',\n   *   'cloud-id',\n   * );\n   */\n  const notificationLogClient = new MockNotificationLogClient();\n  const providerPromise = Promise.resolve(notificationLogClient);\n\n  return (\n    <div>\n      <div>Initialise client and render a NotificationIndicator badge.</div>\n\n      <NotificationIndicator notificationLogProvider={providerPromise} />\n    </div>\n  );\n}\n"}}]);