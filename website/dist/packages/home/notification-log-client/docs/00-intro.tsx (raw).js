(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[111],{961:function(n,i){n.exports="import * as React from 'react';\nimport { md, code, Example, AtlassianInternalWarning } from '@atlaskit/docs';\n\nexport default md`\n  ${<AtlassianInternalWarning />}\n\n  \\`notification-log-client\\` is a fetch client implementation for making API calls to notification-log service.\n\n  This is intended to be used as a provider into other components, such as NotificationIndicator.\n\n  ## Usage\n\n  ${code`import { NotificationLogClient } from '@atlaskit/notification-log-client';\n\n  const notificationLogClient = new NotificationLogClient(\n    'http://base-url-to-notification-log-service',\n    'cloudid-abcd-1234-5678',\n  );\n\n  const result = await notificationLogClient.countUnseenNotifications();\n  console.log(result.count);`}\n\n  ${(\n    <Example\n      Component={require('../examples/00-basic').default}\n      title=\"Basic\"\n      source={require('!!raw-loader!../examples/00-basic')}\n    />\n  )}\n`;\n"}}]);