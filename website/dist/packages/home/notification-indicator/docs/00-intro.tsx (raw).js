(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[100],{935:function(n,t){n.exports="import * as React from 'react';\nimport {\n  md,\n  code,\n  Example,\n  Props,\n  AtlassianInternalWarning,\n} from '@atlaskit/docs';\n\nexport default md`\n  ${<AtlassianInternalWarning />}\n\n  \\`\\`\\`NotificationIndicator\\`\\`\\` is a React component that wraps an existing @atlaskit/badge component with\n  additional functionalities:\n  \n  * Populate its own state by fetching data through the provided notification-log-client.\n  * Sets up automatic refresh when \\`\\`\\`refreshRate\\`\\`\\` is specified.\n  * Disables automatic refresh when tab is inactive, unless forced.\n\n  ## Usage\n\n  ${code`import { NotificationIndicator } from '@atlaskit/notification-indicator';`}\n\n  ${(\n    <Example\n      Component={require('../examples/00-basic').default}\n      title=\"Basic\"\n      source={require('!!raw-loader!../examples/00-basic')}\n    />\n  )}\n\n  ${(\n    <Props\n      heading=\"Props\"\n      props={require('!!extract-react-types-loader!../src/NotificationIndicator')}\n    />\n  )}\n`;\n"}}]);