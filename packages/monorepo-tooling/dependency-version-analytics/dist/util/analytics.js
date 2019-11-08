"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const chalk_1 = tslib_1.__importDefault(require("chalk"));
// @ts-ignore
const inquirer_1 = tslib_1.__importDefault(require("inquirer"));
const semver_1 = tslib_1.__importDefault(require("semver"));
const analytics_node_client_1 = require("@atlassiansox/analytics-node-client");
const version_json_1 = require("../version.json");
function getUpgradeType(version, previousVersion) {
    if (previousVersion == null && version != null) {
        return 'add';
    }
    else if (previousVersion != null && version == null) {
        return 'remove';
    }
    else if (previousVersion != null &&
        version != null &&
        previousVersion !== version) {
        const coercedPrevious = semver_1.default.coerce(previousVersion);
        const coercedNew = semver_1.default.coerce(version);
        if (semver_1.default.lt(coercedNew, coercedPrevious)) {
            return 'downgrade';
        }
        else {
            return 'upgrade';
        }
    }
    else {
        return null;
    }
}
function getUpgradeSubType(version, previousVersion) {
    let upgradeSubType = null;
    if (version == null || previousVersion == null) {
        return upgradeSubType;
    }
    const parsedOld = semver_1.default.coerce(previousVersion);
    const parsedNew = semver_1.default.coerce(version);
    if (parsedOld && parsedNew) {
        upgradeSubType = semver_1.default.diff(parsedOld.version, parsedNew.version);
    }
    return upgradeSubType;
}
function createUpgradeEvent(name, version, previousVersion, date, optionalArgs = {}) {
    if (Number.isNaN(Date.parse(date))) {
        throw new Error(`Invalid date: '${date}'`);
    }
    const upgradeType = getUpgradeType(version, previousVersion);
    if (!upgradeType) {
        // Not an upgrade for this dependency, return null
        return null;
    }
    const upgradeSubType = getUpgradeSubType(version, previousVersion);
    const eventVersion = upgradeType !== 'remove' ? version : previousVersion;
    const parsedVersion = semver_1.default.coerce(eventVersion);
    return Object.assign({ cliVersion: version_json_1.version, dependencyName: name, versionString: eventVersion, major: parsedVersion ? `${parsedVersion.major}` : null, minor: parsedVersion ? `${parsedVersion.minor}` : null, patch: parsedVersion ? `${parsedVersion.patch}` : null, date: new Date(date).toISOString(), upgradeType,
        upgradeSubType }, optionalArgs);
}
exports.createUpgradeEvent = createUpgradeEvent;
function sendAnalytics(analyticsEvents, { dev, limit, product, skipPrompt, }) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const analyticsEnv = dev ? 'dev' : 'prod';
        const eventsToSend = limit != null ? analyticsEvents.slice(0, limit) : analyticsEvents;
        const client = analytics_node_client_1.analyticsClient({
            env: dev ? 'dev' : 'prod',
            product: product,
        });
        if (!skipPrompt) {
            const answers = yield inquirer_1.default.prompt([
                {
                    type: 'confirm',
                    name: 'continue',
                    message: `Are you sure you want to send ${eventsToSend.length} historical analytics events to '${analyticsEnv}' env for product '${product}?`,
                    default: false,
                },
            ]);
            if (!answers.continue) {
                console.log('Aborting');
                process.exit(0);
            }
        }
        try {
            const promises = yield Promise.all(eventsToSend.map(event => {
                return client.sendTrackEvent({
                    anonymousId: 'unknown',
                    trackEvent: {
                        tags: ['atlaskit'],
                        source: '@atlaskit/dependency-version-analytics',
                        action: 'upgraded',
                        actionSubject: 'akDependency',
                        attributes: Object.assign({}, event),
                        origin: 'console',
                        platform: 'bot',
                    },
                });
            }));
            console.log(chalk_1.default.green(`Sent ${promises.length} dependency version upgrade analytics events`));
        }
        catch (e) {
            console.error(chalk_1.default.red('Sending analytics failed'));
            console.error(e);
            process.exit(1);
        }
    });
}
exports.sendAnalytics = sendAnalytics;
//# sourceMappingURL=analytics.js.map