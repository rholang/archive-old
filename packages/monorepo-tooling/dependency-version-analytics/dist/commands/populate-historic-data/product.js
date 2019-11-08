"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const constants_1 = require("./../../constants");
const chalk_1 = tslib_1.__importDefault(require("chalk"));
const load_file_from_git_history_1 = tslib_1.__importDefault(require("../../util/load-file-from-git-history"));
const analytics_1 = require("../../util/analytics");
const git_1 = require("../../util/git");
const generate_csv_1 = require("./util/generate-csv");
// Object.fromEntries polyfill, remove when upgraded to node 10
function fromEntries(iterable) {
    return [...iterable].reduce((obj, { 0: key, 1: val }) => Object.assign(obj, { [key]: val }), {});
}
const parseAkDependencyVersions = (depMap, type) => {
    return fromEntries(Object.entries(depMap)
        .filter(([name]) => name.includes('@atlaskit'))
        .map(([name, version]) => [name, { version, type }]));
};
const getAkDependencyVersionsFromHash = (hash) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    let akDeps = {};
    try {
        const json = yield load_file_from_git_history_1.default(hash, 'package.json');
        const parsed = JSON.parse(json);
        akDeps = Object.assign(Object.assign(Object.assign(Object.assign({}, parseAkDependencyVersions(parsed.devDependencies || {}, 'devDependency')), parseAkDependencyVersions(parsed.dependencies || {}, 'dependency')), parseAkDependencyVersions(parsed.peerDependencies || {}, 'peerDependency')), parseAkDependencyVersions(parsed.optionalDependencies || {}, 'optionalDependency'));
    }
    catch (e) {
        console.error(chalk_1.default.red(`Error parsing package.json most likely, commit ${hash}`));
        console.error(e);
    }
    return akDeps;
});
const getUpgradeEventsFromPkgChange = (oldDeps, newDeps, { date, commitHash }) => {
    const addOrUpgradeEvents = Object.entries(newDeps)
        .map(([name, { version, type }]) => {
        return analytics_1.createUpgradeEvent(name, version, oldDeps[name] && oldDeps[name].version, date, {
            commitHash,
            dependencyType: type,
            historical: true,
        });
    })
        .filter((e) => e != null);
    const removeEvents = Object.entries(oldDeps)
        .filter(([name]) => newDeps[name] == null)
        .map(([name, { version, type }]) => {
        return analytics_1.createUpgradeEvent(name, undefined, version, date, {
            commitHash,
            dependencyType: type,
            historical: true,
        });
    })
        .filter((e) => e != null);
    return [...addOrUpgradeEvents, ...removeEvents];
};
const getEventsFromHistory = (packageChangesLog, prevRunHash) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const allPackageChanges = [];
    const allUpgradeEvents = [];
    const prevRunAkDeps = prevRunHash
        ? yield getAkDependencyVersionsFromHash(prevRunHash)
        : {};
    for (let historyListIndex = 0; historyListIndex < packageChangesLog.all.length; historyListIndex++) {
        // Using a for loop because running all promises in parallel spawns too many processes
        // Batching would be more efficient but in it's current form it's not unreasonably slow.
        let item = packageChangesLog.all[historyListIndex];
        const akDeps = yield getAkDependencyVersionsFromHash(item.hash);
        if (Object.keys(akDeps).length > 0) {
            const packageChange = {
                date: new Date(item.date).toISOString(),
                akDeps,
            };
            const prevAkDeps = allPackageChanges.length > 0
                ? allPackageChanges[allPackageChanges.length - 1].akDeps
                : prevRunAkDeps;
            const upgradeEvents = getUpgradeEventsFromPkgChange(prevAkDeps, akDeps, {
                date: packageChange.date,
                commitHash: item.hash,
            });
            if (upgradeEvents.length > 0) {
                allUpgradeEvents.push(...upgradeEvents);
                allPackageChanges.push(packageChange);
            }
        }
    }
    return { allPackageChanges, allUpgradeEvents };
});
function populateProduct(flags) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const tag = flags.tag || constants_1.DEFAULT_TAG;
        if (!flags.reset) {
            yield git_1.refetchTag(tag);
            const tagExists = yield git_1.doesTagExist(tag);
            if (!tagExists) {
                console.error(chalk_1.default.red(`Tag '${tag}' does not exist. Must use --reset for populating from start of history.`));
                process.exit(1);
            }
        }
        const detectSince = flags.reset ? undefined : tag;
        const log = yield git_1.getChangesSince(detectSince);
        if (log.all.length === 0) {
            console.log(`No package.json changes found since '${tag}' tag.`);
            return;
        }
        const prevRunHash = flags.reset ? null : yield git_1.getHash(tag);
        const { allPackageChanges, allUpgradeEvents } = yield getEventsFromHistory(log, prevRunHash);
        if (flags.csv) {
            const csv = generate_csv_1.generateCSV(allPackageChanges);
            console.log(csv);
            return;
        }
        if (flags.dryRun) {
            console.log(JSON.stringify(allUpgradeEvents));
            return;
        }
        if (allUpgradeEvents.length > 0) {
            yield analytics_1.sendAnalytics(allUpgradeEvents, {
                dev: flags.dev,
                limit: flags.limit,
                product: flags.product,
                skipPrompt: !flags.interactive,
            });
        }
        else {
            console.log(`Found no AK dependency changes since last run from tag "${tag}"'`);
        }
        console.log('Updating tag to current commit...');
        yield git_1.tagCommit(constants_1.DEFAULT_TAG);
        console.log(`Finished. Run 'git push origin ${tag}'.`);
    });
}
exports.default = populateProduct;
//# sourceMappingURL=product.js.map