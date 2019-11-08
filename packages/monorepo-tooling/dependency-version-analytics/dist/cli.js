"use strict";
/// <reference lib="es2017.object" />
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const chalk_1 = tslib_1.__importDefault(require("chalk"));
const meow_1 = tslib_1.__importDefault(require("meow"));
const populate_historic_data_1 = require("./commands/populate-historic-data");
// prettier-ignore
const HELP_MSG = `
${chalk_1.default.green('Global options')}
     ${chalk_1.default.yellow('--dev')}            Send analytics to dev analytics pipeline instead of prod
     ${chalk_1.default.yellow('--dryRun')}         Performs a dry run, prints analytics events to console in JSON format instead of sending them
     ${chalk_1.default.yellow('--limit')}          Limit the number of events sent, used for validation purposes
     ${chalk_1.default.yellow('--no-interactive')} Disable any interactive prompts

${chalk_1.default.yellow.bold('[populate-product] <product>')}
   Sends analytics events for atlaskit dependency versions changes in package.json.

   Detects changes since the last time the tool was run by using the 'atlaskit-dependency-version-analytics-last-run' git tag and updating
   the tag on successful completion.
   If running the tool for the first time (tag does not exist), --reset must be used to detect changes since the beginning of the repo.

   ${chalk_1.default.green('Options')}
     ${chalk_1.default.yellow('--csv')}         Prints AK dependency history in CSV format
     ${chalk_1.default.yellow('--reset')}       Reset change detection to detect changes from the beginning of time
     ${chalk_1.default.yellow('--tag')}         Specify a different tag to mark when the tool was last run

   ${chalk_1.default.green('Examples')}
     ${chalk_1.default.dim('$ atlaskit-version-analytics populate-product jira')}

${chalk_1.default.yellow.bold('[populate-package] <package>')}
   Sends analytics events for published versions of the specified atlaskit package.

   ${chalk_1.default.green('Options')}
     ${chalk_1.default.yellow('--since')}       Only publish versions since the following JS date string (exclusive)

   ${chalk_1.default.green('Examples')}
     ${chalk_1.default.dim('$ atlaskit-version-analytics populate-package @atlaskit/button')}
`;
function run({ dev }) {
    const cli = meow_1.default(HELP_MSG, {
        flags: {
            csv: {
                type: 'boolean',
            },
            dev: {
                type: 'boolean',
            },
            dryRun: {
                type: 'boolean',
                alias: 'd',
            },
            reset: {
                type: 'boolean',
            },
            limit: {
                type: 'string',
            },
            interactive: {
                type: 'boolean',
                default: true,
            },
            since: {
                type: 'string',
            },
            tag: {
                type: 'string',
            },
        },
    });
    const [command, ...inputs] = cli.input;
    const limit = cli.flags.limit != null ? +cli.flags.limit : undefined;
    if (command === 'populate-product') {
        const product = inputs[0];
        if (!product) {
            console.error(chalk_1.default.red('Must pass a product parameter'));
            process.exit(1);
        }
        return populate_historic_data_1.populateProduct({
            csv: cli.flags.csv,
            dev: dev || cli.flags.dev,
            dryRun: cli.flags.dryRun,
            interactive: cli.flags.interactive,
            limit,
            product,
            reset: cli.flags.reset,
            tag: cli.flags.tag,
        });
    }
    else if (command === 'populate-package') {
        const pkg = inputs[0];
        if (!pkg) {
            console.error(chalk_1.default.red('Must pass a package parameter'));
            process.exit(1);
        }
        return populate_historic_data_1.populatePackage({
            dev: dev || cli.flags.dev,
            dryRun: cli.flags.dryRun,
            interactive: cli.flags.interactive,
            limit,
            pkg,
            since: cli.flags.since,
        });
    }
    /* eslint-disable no-console */
    return Promise.resolve(console.log(cli.help));
}
exports.run = run;
//# sourceMappingURL=cli.js.map