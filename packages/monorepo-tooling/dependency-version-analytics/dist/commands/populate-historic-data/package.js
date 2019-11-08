"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const semver_1 = tslib_1.__importDefault(require("semver"));
const get_package_version_history_1 = tslib_1.__importDefault(require("../../util/get-package-version-history"));
const analytics_1 = require("../../util/analytics");
const createAnalyticsEvents = (packageName, packageVersionHistory, since) => {
    const sortedPackageVersionHistory = Object.entries(packageVersionHistory)
        .filter(([version]) => semver_1.default.valid(version))
        .sort((a, b) => Number(new Date(a[1])) - Number(new Date(b[1])));
    const upgradeEvents = sortedPackageVersionHistory
        .map(([version, time], i) => {
        if (since && Number(new Date(time)) <= Number(new Date(since))) {
            return null;
        }
        const previousVersion = sortedPackageVersionHistory[i - 1] &&
            sortedPackageVersionHistory[i - 1][0];
        return analytics_1.createUpgradeEvent(packageName, version, previousVersion, time, {
            historical: true,
        });
    })
        .filter((e) => e != null);
    return upgradeEvents;
};
function populatePackage(flags) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        if (!flags.pkg.startsWith('@atlaskit/')) {
            throw new Error(`Package must start with '@atlaskit/'`);
        }
        const packageVersionHistory = yield get_package_version_history_1.default(flags.pkg);
        if (flags.since && Number.isNaN(Number(new Date(flags.since)))) {
            throw new Error(`'since' flag is an invalid date`);
        }
        const analyticsEvents = createAnalyticsEvents(flags.pkg, packageVersionHistory, flags.since);
        if (flags.dryRun) {
            console.log(JSON.stringify(analyticsEvents));
            return analyticsEvents;
        }
        yield analytics_1.sendAnalytics(analyticsEvents, {
            dev: flags.dev,
            limit: flags.limit,
            product: 'atlaskit',
            skipPrompt: !flags.interactive,
        });
        return analyticsEvents;
    });
}
exports.default = populatePackage;
//# sourceMappingURL=package.js.map