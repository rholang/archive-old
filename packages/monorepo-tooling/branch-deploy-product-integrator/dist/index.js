"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const chalk_1 = tslib_1.__importDefault(require("chalk"));
const meow_1 = tslib_1.__importDefault(require("meow"));
const promise_1 = tslib_1.__importDefault(require("simple-git/promise"));
const util_1 = tslib_1.__importDefault(require("util"));
const child_process_1 = tslib_1.__importDefault(require("child_process"));
const exec = util_1.default.promisify(child_process_1.default.exec);
//@ts-ignore
const branch_installer_1 = tslib_1.__importDefault(require("@atlaskit/branch-installer"));
//@ts-ignore
const isomorphic_fetch_1 = tslib_1.__importDefault(require("isomorphic-fetch"));
const util_2 = require("./util");
// prettier-ignore
const HELP_MSG = `
  🚀 Atlaskit branch deploy product integrator™ 🚀

   ${chalk_1.default.green('Options')}
     ${chalk_1.default.yellow('--branchPrefix')} Prefix for the generated branch [default=atlaskit-branch-deploy/]
     ${chalk_1.default.yellow('--atlaskitCommitHash')} Atlaskit commit hash of the branch deploy that needs to be installed
     ${chalk_1.default.yellow('--atlaskitBranchName')} The name of the Atlaskit branch being installed
     ${chalk_1.default.yellow('--packageEngine')} The package manager to use, currently only tested with Bolt and yarn [default=yarn]
     ${chalk_1.default.yellow('--packages')} comma delimited list of packages to install branch deploy of
     ${chalk_1.default.yellow('--dedupe')} run yarn deduplicate at the end to deduplicate the lock file
     ${chalk_1.default.yellow('--cmd')} the command to use can be add or upgrade [default=upgrade]
     ${chalk_1.default.yellow('--dryRun')} Log out commands that would be run instead of running them
     ${chalk_1.default.yellow('--')} Any arguments after -- will be appended to the upgrade command
`;
function run() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const cli = meow_1.default(HELP_MSG, {
            flags: {
                branchPrefix: {
                    type: 'string',
                    default: 'atlaskit-branch-deploy-',
                },
                atlaskitBranchName: {
                    type: 'string',
                },
                packageEngine: {
                    type: 'string',
                    default: 'yarn',
                },
                atlaskitCommitHash: {
                    type: 'string',
                },
                packages: {
                    type: 'string',
                    default: 'all',
                },
                dedupe: {
                    type: 'boolean',
                    default: false,
                },
                cmd: {
                    type: 'string',
                    default: 'upgrade',
                },
                dryRun: {
                    type: 'boolean',
                    default: false,
                },
            },
        });
        const { atlaskitBranchName, atlaskitCommitHash, branchPrefix, packageEngine, packages, dedupe, cmd, dryRun, } = cli.flags;
        const extraArgs = cli.input;
        const git = dryRun ? util_2.debugMock('git') : promise_1.default('./');
        const branchName = `${branchPrefix}${atlaskitBranchName}`;
        const remote = yield git.listRemote(['--get-url']);
        if (!dryRun && remote.indexOf('atlassian/atlaskit-mk-2') > -1) {
            throw new Error('Working path should not be the Atlaskit repo!');
        }
        let branchExists;
        try {
            yield git.revparse(['--verify', `origin/${branchName}`]);
            branchExists = true;
        }
        catch (error) {
            branchExists = false;
        }
        if (branchExists) {
            yield git.checkout(branchName);
            yield git.pull('origin', branchName);
        }
        else {
            yield git.checkoutBranch(branchName, 'origin/master');
        }
        yield branch_installer_1.default(atlaskitCommitHash, {
            engine: packageEngine,
            cmd: cmd,
            packages: packages,
            timeout: 30 * 60 * 1000,
            interval: 30000,
            extraArgs,
            dryRun,
        });
        yield git.add(['./']);
        const commitInfo = yield (yield isomorphic_fetch_1.default(`https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2/commit/${atlaskitCommitHash}`, {})).json();
        const emailRegex = /^.*<([A-z]+@atlassian.com)>$/;
        let authorEmail = 'no-reply@atlassian.com';
        if (commitInfo.author.raw.match(emailRegex)) {
            authorEmail = commitInfo.author.raw.replace(emailRegex, '$1');
        }
        // prettier-ignore
        const commitMessage = `Upgraded to Atlaskit changes on branch ${cli.flags.atlaskitBranchName}

https://bitbucket.org/atlassian/atlaskit-mk-2/branch/${cli.flags.atlaskitBranchName}

This commit was auto-generated.
  `;
        yield git.commit(commitMessage, [
            '--author',
            `BOT Atlaskit branch deploy integrator <${authorEmail}>`,
        ]);
        yield git.push('origin', branchName);
        if (dedupe) {
            console.log(chalk_1.default.yellow('Running yarn-deduplicate'));
            yield exec('yarn yarn-deduplicate yarn.lock');
            yield git.add(['./']);
            yield git.commit(`Deduplicated yarn.lock file`, [
                '--author',
                `BOT Atlaskit branch deploy integrator <${authorEmail}>`,
            ]);
            yield git.push('origin', branchName);
        }
    });
}
exports.run = run;
//# sourceMappingURL=index.js.map