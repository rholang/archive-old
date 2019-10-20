
    function dir(id, children) {
      return { type: 'dir', id: id, children: children };
    }

    function file(id, exports, contents) {
      return { type: 'file', id: id, exports: exports, contents: contents };
    }

    export default dir('root', [
  dir('packages', [
    dir('home', [
      dir('notification-indicator', [
        dir('docs', [
          file('00-intro.tsx',
    function(){ return import(/* webpackChunkName: "packages/home/notification-indicator/docs/00-intro.tsx" */ '/home/t/bak2/atlaskit-mk-2/packages/home/notification-indicator/docs/00-intro.tsx'); }, function(){ return import(/* webpackChunkName: "packages/home/notification-indicator/docs/00-intro.tsx (raw)" */'!!raw-loader!/home/t/bak2/atlaskit-mk-2/packages/home/notification-indicator/docs/00-intro.tsx'); }
  )
        ]),
        file('package.json',
    function(){ return import(/* webpackChunkName: "packages/home/notification-indicator/package.json" */ '/home/t/bak2/atlaskit-mk-2/packages/home/notification-indicator/package.json'); }, function(){ return Promise.reject({
        error: "We cannot parse raw json at the moment due to weback4 trying to parse json after it has gone through the raw loader. Please use the non-raw version of of JSON files"
      }) }
  ),
        file('CHANGELOG.md',
    function(){ return import(/* webpackChunkName: "packages/home/notification-indicator/CHANGELOG.md" */ '/home/t/bak2/atlaskit-mk-2/packages/home/notification-indicator/CHANGELOG.md'); }, function(){ return import(/* webpackChunkName: "packages/home/notification-indicator/CHANGELOG.md (raw)" */'!!raw-loader!/home/t/bak2/atlaskit-mk-2/packages/home/notification-indicator/CHANGELOG.md'); }
  ),
        dir('examples', [
          file('00-basic.tsx',
    function(){ return import(/* webpackChunkName: "packages/home/notification-indicator/examples/00-basic.tsx" */ '/home/t/bak2/atlaskit-mk-2/packages/home/notification-indicator/examples/00-basic.tsx'); }, function(){ return import(/* webpackChunkName: "packages/home/notification-indicator/examples/00-basic.tsx (raw)" */'!!raw-loader!/home/t/bak2/atlaskit-mk-2/packages/home/notification-indicator/examples/00-basic.tsx'); }
  ),
          file('10-notifications.tsx',
    function(){ return import(/* webpackChunkName: "packages/home/notification-indicator/examples/10-notifications.tsx" */ '/home/t/bak2/atlaskit-mk-2/packages/home/notification-indicator/examples/10-notifications.tsx'); }, function(){ return import(/* webpackChunkName: "packages/home/notification-indicator/examples/10-notifications.tsx (raw)" */'!!raw-loader!/home/t/bak2/atlaskit-mk-2/packages/home/notification-indicator/examples/10-notifications.tsx'); }
  )
        ])
      ]),
      dir('notification-log-client', [
        dir('docs', [
          file('00-intro.tsx',
    function(){ return import(/* webpackChunkName: "packages/home/notification-log-client/docs/00-intro.tsx" */ '/home/t/bak2/atlaskit-mk-2/packages/home/notification-log-client/docs/00-intro.tsx'); }, function(){ return import(/* webpackChunkName: "packages/home/notification-log-client/docs/00-intro.tsx (raw)" */'!!raw-loader!/home/t/bak2/atlaskit-mk-2/packages/home/notification-log-client/docs/00-intro.tsx'); }
  )
        ]),
        file('package.json',
    function(){ return import(/* webpackChunkName: "packages/home/notification-log-client/package.json" */ '/home/t/bak2/atlaskit-mk-2/packages/home/notification-log-client/package.json'); }, function(){ return Promise.reject({
        error: "We cannot parse raw json at the moment due to weback4 trying to parse json after it has gone through the raw loader. Please use the non-raw version of of JSON files"
      }) }
  ),
        file('CHANGELOG.md',
    function(){ return import(/* webpackChunkName: "packages/home/notification-log-client/CHANGELOG.md" */ '/home/t/bak2/atlaskit-mk-2/packages/home/notification-log-client/CHANGELOG.md'); }, function(){ return import(/* webpackChunkName: "packages/home/notification-log-client/CHANGELOG.md (raw)" */'!!raw-loader!/home/t/bak2/atlaskit-mk-2/packages/home/notification-log-client/CHANGELOG.md'); }
  ),
        dir('examples', [
          file('00-basic.tsx',
    function(){ return import(/* webpackChunkName: "packages/home/notification-log-client/examples/00-basic.tsx" */ '/home/t/bak2/atlaskit-mk-2/packages/home/notification-log-client/examples/00-basic.tsx'); }, function(){ return import(/* webpackChunkName: "packages/home/notification-log-client/examples/00-basic.tsx (raw)" */'!!raw-loader!/home/t/bak2/atlaskit-mk-2/packages/home/notification-log-client/examples/00-basic.tsx'); }
  )
        ])
      ])
    ])
  ]),
  dir('docs', [
    dir('development', [
      file('00-introduction.md',
    function(){ return import(/* webpackChunkName: "docs/development/00-introduction.md" */ '/home/t/bak2/atlaskit-mk-2/docs/development/00-introduction.md'); }, function(){ return import(/* webpackChunkName: "docs/development/00-introduction.md (raw)" */'!!raw-loader!/home/t/bak2/atlaskit-mk-2/docs/development/00-introduction.md'); }
  ),
      file('01-network-configuration.md',
    function(){ return import(/* webpackChunkName: "docs/development/01-network-configuration.md" */ '/home/t/bak2/atlaskit-mk-2/docs/development/01-network-configuration.md'); }, function(){ return import(/* webpackChunkName: "docs/development/01-network-configuration.md (raw)" */'!!raw-loader!/home/t/bak2/atlaskit-mk-2/docs/development/01-network-configuration.md'); }
  ),
      file('02-installing-rnode.md',
    function(){ return import(/* webpackChunkName: "docs/development/02-installing-rnode.md" */ '/home/t/bak2/atlaskit-mk-2/docs/development/02-installing-rnode.md'); }, function(){ return import(/* webpackChunkName: "docs/development/02-installing-rnode.md (raw)" */'!!raw-loader!/home/t/bak2/atlaskit-mk-2/docs/development/02-installing-rnode.md'); }
  ),
      file('03-running-rnode.md',
    function(){ return import(/* webpackChunkName: "docs/development/03-running-rnode.md" */ '/home/t/bak2/atlaskit-mk-2/docs/development/03-running-rnode.md'); }, function(){ return import(/* webpackChunkName: "docs/development/03-running-rnode.md (raw)" */'!!raw-loader!/home/t/bak2/atlaskit-mk-2/docs/development/03-running-rnode.md'); }
  ),
      file('04-running-rnode-docker.md',
    function(){ return import(/* webpackChunkName: "docs/development/04-running-rnode-docker.md" */ '/home/t/bak2/atlaskit-mk-2/docs/development/04-running-rnode-docker.md'); }, function(){ return import(/* webpackChunkName: "docs/development/04-running-rnode-docker.md (raw)" */'!!raw-loader!/home/t/bak2/atlaskit-mk-2/docs/development/04-running-rnode-docker.md'); }
  )
    ]),
    file('getting-started.md',
    function(){ return import(/* webpackChunkName: "docs/getting-started.md" */ '/home/t/bak2/atlaskit-mk-2/docs/getting-started.md'); }, function(){ return import(/* webpackChunkName: "docs/getting-started.md (raw)" */'!!raw-loader!/home/t/bak2/atlaskit-mk-2/docs/getting-started.md'); }
  ),
    dir('guides', [
      file('00-contributing.md',
    function(){ return import(/* webpackChunkName: "docs/guides/00-contributing.md" */ '/home/t/bak2/atlaskit-mk-2/docs/guides/00-contributing.md'); }, function(){ return import(/* webpackChunkName: "docs/guides/00-contributing.md (raw)" */'!!raw-loader!/home/t/bak2/atlaskit-mk-2/docs/guides/00-contributing.md'); }
  ),
      file('01-contribution-checklist.md',
    function(){ return import(/* webpackChunkName: "docs/guides/01-contribution-checklist.md" */ '/home/t/bak2/atlaskit-mk-2/docs/guides/01-contribution-checklist.md'); }, function(){ return import(/* webpackChunkName: "docs/guides/01-contribution-checklist.md (raw)" */'!!raw-loader!/home/t/bak2/atlaskit-mk-2/docs/guides/01-contribution-checklist.md'); }
  ),
      file('02-directory-structure.md',
    function(){ return import(/* webpackChunkName: "docs/guides/02-directory-structure.md" */ '/home/t/bak2/atlaskit-mk-2/docs/guides/02-directory-structure.md'); }, function(){ return import(/* webpackChunkName: "docs/guides/02-directory-structure.md (raw)" */'!!raw-loader!/home/t/bak2/atlaskit-mk-2/docs/guides/02-directory-structure.md'); }
  ),
      file('03-linking.md',
    function(){ return import(/* webpackChunkName: "docs/guides/03-linking.md" */ '/home/t/bak2/atlaskit-mk-2/docs/guides/03-linking.md'); }, function(){ return import(/* webpackChunkName: "docs/guides/03-linking.md (raw)" */'!!raw-loader!/home/t/bak2/atlaskit-mk-2/docs/guides/03-linking.md'); }
  ),
      file('04-component-design.md',
    function(){ return import(/* webpackChunkName: "docs/guides/04-component-design.md" */ '/home/t/bak2/atlaskit-mk-2/docs/guides/04-component-design.md'); }, function(){ return import(/* webpackChunkName: "docs/guides/04-component-design.md (raw)" */'!!raw-loader!/home/t/bak2/atlaskit-mk-2/docs/guides/04-component-design.md'); }
  ),
      file('05-naming-props.md',
    function(){ return import(/* webpackChunkName: "docs/guides/05-naming-props.md" */ '/home/t/bak2/atlaskit-mk-2/docs/guides/05-naming-props.md'); }, function(){ return import(/* webpackChunkName: "docs/guides/05-naming-props.md (raw)" */'!!raw-loader!/home/t/bak2/atlaskit-mk-2/docs/guides/05-naming-props.md'); }
  ),
      file('06-controlled-uncontrolled-props.md',
    function(){ return import(/* webpackChunkName: "docs/guides/06-controlled-uncontrolled-props.md" */ '/home/t/bak2/atlaskit-mk-2/docs/guides/06-controlled-uncontrolled-props.md'); }, function(){ return import(/* webpackChunkName: "docs/guides/06-controlled-uncontrolled-props.md (raw)" */'!!raw-loader!/home/t/bak2/atlaskit-mk-2/docs/guides/06-controlled-uncontrolled-props.md'); }
  ),
      file('07-hoc-vs-props.md',
    function(){ return import(/* webpackChunkName: "docs/guides/07-hoc-vs-props.md" */ '/home/t/bak2/atlaskit-mk-2/docs/guides/07-hoc-vs-props.md'); }, function(){ return import(/* webpackChunkName: "docs/guides/07-hoc-vs-props.md (raw)" */'!!raw-loader!/home/t/bak2/atlaskit-mk-2/docs/guides/07-hoc-vs-props.md'); }
  ),
      file('08-component-vs-pure-component.md',
    function(){ return import(/* webpackChunkName: "docs/guides/08-component-vs-pure-component.md" */ '/home/t/bak2/atlaskit-mk-2/docs/guides/08-component-vs-pure-component.md'); }, function(){ return import(/* webpackChunkName: "docs/guides/08-component-vs-pure-component.md (raw)" */'!!raw-loader!/home/t/bak2/atlaskit-mk-2/docs/guides/08-component-vs-pure-component.md'); }
  ),
      file('09-flow-typing-a-component.md',
    function(){ return import(/* webpackChunkName: "docs/guides/09-flow-typing-a-component.md" */ '/home/t/bak2/atlaskit-mk-2/docs/guides/09-flow-typing-a-component.md'); }, function(){ return import(/* webpackChunkName: "docs/guides/09-flow-typing-a-component.md (raw)" */'!!raw-loader!/home/t/bak2/atlaskit-mk-2/docs/guides/09-flow-typing-a-component.md'); }
  ),
      file('10-linting-styles.md',
    function(){ return import(/* webpackChunkName: "docs/guides/10-linting-styles.md" */ '/home/t/bak2/atlaskit-mk-2/docs/guides/10-linting-styles.md'); }, function(){ return import(/* webpackChunkName: "docs/guides/10-linting-styles.md (raw)" */'!!raw-loader!/home/t/bak2/atlaskit-mk-2/docs/guides/10-linting-styles.md'); }
  ),
      file('11-testing.md',
    function(){ return import(/* webpackChunkName: "docs/guides/11-testing.md" */ '/home/t/bak2/atlaskit-mk-2/docs/guides/11-testing.md'); }, function(){ return import(/* webpackChunkName: "docs/guides/11-testing.md (raw)" */'!!raw-loader!/home/t/bak2/atlaskit-mk-2/docs/guides/11-testing.md'); }
  ),
      file('12-bundle-size.md',
    function(){ return import(/* webpackChunkName: "docs/guides/12-bundle-size.md" */ '/home/t/bak2/atlaskit-mk-2/docs/guides/12-bundle-size.md'); }, function(){ return import(/* webpackChunkName: "docs/guides/12-bundle-size.md (raw)" */'!!raw-loader!/home/t/bak2/atlaskit-mk-2/docs/guides/12-bundle-size.md'); }
  ),
      file('13-versioning.md',
    function(){ return import(/* webpackChunkName: "docs/guides/13-versioning.md" */ '/home/t/bak2/atlaskit-mk-2/docs/guides/13-versioning.md'); }, function(){ return import(/* webpackChunkName: "docs/guides/13-versioning.md (raw)" */'!!raw-loader!/home/t/bak2/atlaskit-mk-2/docs/guides/13-versioning.md'); }
  ),
      file('14-releasing-packages.md',
    function(){ return import(/* webpackChunkName: "docs/guides/14-releasing-packages.md" */ '/home/t/bak2/atlaskit-mk-2/docs/guides/14-releasing-packages.md'); }, function(){ return import(/* webpackChunkName: "docs/guides/14-releasing-packages.md (raw)" */'!!raw-loader!/home/t/bak2/atlaskit-mk-2/docs/guides/14-releasing-packages.md'); }
  ),
      file('15-error-handling.md',
    function(){ return import(/* webpackChunkName: "docs/guides/15-error-handling.md" */ '/home/t/bak2/atlaskit-mk-2/docs/guides/15-error-handling.md'); }, function(){ return import(/* webpackChunkName: "docs/guides/15-error-handling.md (raw)" */'!!raw-loader!/home/t/bak2/atlaskit-mk-2/docs/guides/15-error-handling.md'); }
  ),
      file('16-how-to-document-components.md',
    function(){ return import(/* webpackChunkName: "docs/guides/16-how-to-document-components.md" */ '/home/t/bak2/atlaskit-mk-2/docs/guides/16-how-to-document-components.md'); }, function(){ return import(/* webpackChunkName: "docs/guides/16-how-to-document-components.md (raw)" */'!!raw-loader!/home/t/bak2/atlaskit-mk-2/docs/guides/16-how-to-document-components.md'); }
  ),
      file('17-useful-commands.md',
    function(){ return import(/* webpackChunkName: "docs/guides/17-useful-commands.md" */ '/home/t/bak2/atlaskit-mk-2/docs/guides/17-useful-commands.md'); }, function(){ return import(/* webpackChunkName: "docs/guides/17-useful-commands.md (raw)" */'!!raw-loader!/home/t/bak2/atlaskit-mk-2/docs/guides/17-useful-commands.md'); }
  ),
      file('18-adding-new-icons.md',
    function(){ return import(/* webpackChunkName: "docs/guides/18-adding-new-icons.md" */ '/home/t/bak2/atlaskit-mk-2/docs/guides/18-adding-new-icons.md'); }, function(){ return import(/* webpackChunkName: "docs/guides/18-adding-new-icons.md (raw)" */'!!raw-loader!/home/t/bak2/atlaskit-mk-2/docs/guides/18-adding-new-icons.md'); }
  ),
      file('19-analytics.md',
    function(){ return import(/* webpackChunkName: "docs/guides/19-analytics.md" */ '/home/t/bak2/atlaskit-mk-2/docs/guides/19-analytics.md'); }, function(){ return import(/* webpackChunkName: "docs/guides/19-analytics.md (raw)" */'!!raw-loader!/home/t/bak2/atlaskit-mk-2/docs/guides/19-analytics.md'); }
  ),
      file('20-frequently-asked-questions.md',
    function(){ return import(/* webpackChunkName: "docs/guides/20-frequently-asked-questions.md" */ '/home/t/bak2/atlaskit-mk-2/docs/guides/20-frequently-asked-questions.md'); }, function(){ return import(/* webpackChunkName: "docs/guides/20-frequently-asked-questions.md (raw)" */'!!raw-loader!/home/t/bak2/atlaskit-mk-2/docs/guides/20-frequently-asked-questions.md'); }
  ),
      file('21-publishing-hotfixes.md',
    function(){ return import(/* webpackChunkName: "docs/guides/21-publishing-hotfixes.md" */ '/home/t/bak2/atlaskit-mk-2/docs/guides/21-publishing-hotfixes.md'); }, function(){ return import(/* webpackChunkName: "docs/guides/21-publishing-hotfixes.md (raw)" */'!!raw-loader!/home/t/bak2/atlaskit-mk-2/docs/guides/21-publishing-hotfixes.md'); }
  )
    ])
  ])
]);
  