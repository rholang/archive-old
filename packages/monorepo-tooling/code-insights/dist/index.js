"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const duplicate_dependencies_report_1 = tslib_1.__importDefault(require("./reports/duplicate-dependencies/duplicate-dependencies-report"));
const chalk_1 = tslib_1.__importDefault(require("chalk"));
const meow_1 = tslib_1.__importDefault(require("meow"));
const console_1 = tslib_1.__importDefault(require("./reporters/console"));
const bitbucket_server_1 = tslib_1.__importDefault(require("./reporters/bitbucket-server"));
const git_1 = require("./util/git");
const getTargetBranch = (flags, gitReporter) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    if (gitReporter) {
        return ((yield gitReporter.getTargetBranch(flags.branch)) || flags.targetBranch);
    }
    return flags.targetBranch;
});
// prettier-ignore
const HELP_MSG = `
   Reports insights

   ${chalk_1.default.green('Options')}
     ${chalk_1.default.yellow('--commit')}       The commit to publish insights on [default=current head]
     ${chalk_1.default.yellow('--reporters')}    The reporters to run [default=console]
     ${chalk_1.default.yellow('--gitUrl')}       The git url of the repo [default=current origin url]
     ${chalk_1.default.yellow('--targetBranch')} The branch with which to compare the current branch, when git reporting is enabled can detect PR target branch. [default=master]

   ${chalk_1.default.green('Reporters')}
    ${chalk_1.default.yellow('console')}        outputs insights to the console
    ${chalk_1.default.yellow('bbs')}            outputs insights to the bitbucket-server code insights tool. Requires BITBUCKET_SERVER_TOKEN env variable
`;
const getGitUrl = (gitUrl) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    if (gitUrl) {
        return gitUrl;
    }
    return git_1.getOriginUrl();
});
const getCommit = (commit) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    if (commit) {
        return commit;
    }
    return git_1.getRef();
});
function run() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const cli = meow_1.default(HELP_MSG, {
            flags: {
                commit: {
                    type: 'string',
                },
                branch: {
                    type: 'string',
                },
                targetBranch: {
                    type: 'string',
                    default: 'origin/master',
                },
                gitUrl: {
                    type: 'string',
                },
                reporters: {
                    type: 'string',
                    default: 'console',
                },
            },
        });
        const selectedReporters = cli.flags.reporters.split(',');
        const reporters = [];
        const [gitUrl, commit] = yield Promise.all([
            getGitUrl(cli.flags.gitUrl),
            getCommit(cli.flags.commit),
        ]);
        let bitbucketServerReporter;
        if (selectedReporters.includes('bbs')) {
            bitbucketServerReporter = new bitbucket_server_1.default(gitUrl, commit);
            reporters.push(bitbucketServerReporter);
        }
        if (selectedReporters.includes('console')) {
            reporters.push(new console_1.default());
        }
        const targetBranch = yield getTargetBranch(cli.flags, bitbucketServerReporter);
        const duplicatesReport = yield duplicate_dependencies_report_1.default(targetBranch);
        for (const reporter in reporters) {
            try {
                yield reporters[reporter].publishInsightsReport(duplicatesReport);
            }
            catch (err) {
                console.error(chalk_1.default.red(`Failed to use reporter ${chalk_1.default.bold(reporters[reporter].name)}`));
                console.error(err);
            }
        }
    });
}
exports.run = run;
//# sourceMappingURL=index.js.map