"use strict";
/// <reference lib="es2017.object" />
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var chalk_1 = tslib_1.__importDefault(require("chalk"));
var meow_1 = tslib_1.__importDefault(require("meow"));
var update_1 = require("./commands/update");
var changelog_1 = require("./commands/changelog");
// prettier-ignore
var HELP_MSG = "\n" + chalk_1.default.yellow.bold('[update]') + "\n   Updates a list of given packages to latest version.\n\n   " + chalk_1.default.green('Options') + "\n     " + chalk_1.default.yellow('--exclude') + "     Comma separated list of packages to exclude from update\n     " + chalk_1.default.yellow('--force') + "       Forces update even when all provided packages are up-to-date\n\n   " + chalk_1.default.green('Examples') + "\n     " + chalk_1.default.dim('$ akup update @atlaskit/editor-core') + "\n     " + chalk_1.default.dim('$ akup update @atlaskit/editor-core @atlaskit/renderer --exclude @atlaskit/analytics-next,@atlaskit/media-card') + "\n\n" + chalk_1.default.yellow.bold('[changelog]') + "\n   Shows a changelog for a given package from current version to latest.\n\n   " + chalk_1.default.green('Examples') + "\n     " + chalk_1.default.dim('$ akup changelog @atlaskit/editor-core') + "\n";
function run() {
    var cli = meow_1.default(HELP_MSG);
    var _a = tslib_1.__read(cli.input), command = _a[0], inputs = _a.slice(1);
    if (command === 'update') {
        return update_1.updateCommand(inputs, {
            exclude: (cli.flags.exclude || '').split(','),
            force: cli.flags.force,
            preset: cli.flags.preset,
        });
    }
    if (command === 'changelog') {
        return changelog_1.changelogCommand(inputs[0], inputs[1]);
    }
    /* eslint-disable no-console */
    return Promise.resolve(console.log(cli.help));
}
exports.run = run;
//# sourceMappingURL=index.js.map