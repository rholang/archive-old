"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const node_fetch_1 = tslib_1.__importDefault(require("node-fetch"));
const url_parse_1 = tslib_1.__importDefault(require("url-parse"));
const env_with_guard_1 = tslib_1.__importDefault(require("../util/env-with-guard"));
const crypto_1 = tslib_1.__importDefault(require("crypto"));
const chalk_1 = tslib_1.__importDefault(require("chalk"));
// TODO: Expose this through the CLI
const REPORT_KEY = 'beautiful.insights.duplicates';
class BitbucketServerReporter {
    constructor(gitUrl, commit) {
        this.name = 'Bitbucket server reporter';
        this.publishInsightsReport = (insightsReport) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log(`[BBS reporter] publishing report`);
            yield this._publishInsightsReport(REPORT_KEY, this.reportTemplate(insightsReport));
            console.log(chalk_1.default.green(`[BBS reporter] ✅ report published`));
            const annotations = insightsReport.annotations.map(annotation => {
                const hash = crypto_1.default.createHash('sha256');
                hash.update(annotation.message, 'utf8');
                return Object.assign(Object.assign({}, annotation), { externalId: `risk-${hash.digest('hex')}` });
            });
            console.log(`[BBS reporter] publishing report annotations`);
            yield this.publishInsightAnnotations(REPORT_KEY, annotations);
            console.log(chalk_1.default.green(`[BBS reporter] ✅ report annotations published`));
        });
        const { hostname, pathname } = url_parse_1.default(gitUrl);
        const [, project, repo] = pathname.split('/');
        this.baseUrl = `https://${hostname}`;
        this.project = project;
        this.repo = repo.split('.')[0];
        this.token = env_with_guard_1.default('BITBUCKET_SERVER_TOKEN');
        this.userName = env_with_guard_1.default('BITBUCKET_SERVER_USERNAME');
        this.password = env_with_guard_1.default('BITBUCKET_SERVER_PASSWORD');
        this.commit = commit;
    }
    getAuthHeader() {
        if (this.token !== null) {
            return `Bearer ${this.token}`;
        }
        else if (this.userName !== null && this.password !== null) {
            return ('Basic ' +
                new Buffer(`${this.userName}:${this.password}`).toString('base64'));
        }
        throw new Error('Missing BITBUCKET_SERVER_TOKEN env variable OR BITBUCKET_SERVER_USERNAME and BITBUCKET_SERVER_PASSWORD env variable required for auth');
    }
    insightsReportUrl(reportKey) {
        return `${this.baseUrl}/rest/insights/latest/projects/${this.project}/repos/${this.repo}/commits/${this.commit}/reports/${reportKey}`;
    }
    request(url, method = 'GET', body) {
        const opts = {
            method,
            headers: {
                Authorization: this.getAuthHeader(),
                'Content-type': 'application/json',
                Accept: 'application/json',
            },
        };
        if (body !== null) {
            opts.body = JSON.stringify(body);
        }
        return node_fetch_1.default(url, opts);
    }
    _publishInsightsReport(reportKey, report) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const reportUrl = this.insightsReportUrl(reportKey);
            report.data = [];
            const response = yield this.request(reportUrl, 'PUT', report);
            if (!response.ok) {
                const responseText = yield response.text();
                const message = `Failed to publish report: ${response.status}\n${responseText}`;
                throw new Error(message);
            }
        });
    }
    publishInsightAnnotations(reportKey, annotations) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const annotationUrl = `${this.insightsReportUrl(reportKey)}/annotations`;
            const response = yield this.request(annotationUrl, 'POST', {
                annotations,
            });
            if (!response.ok) {
                const responseText = yield response.text();
                const message = `Failed to publish annotations: ${response.status}\n${responseText}`;
                throw new Error(message);
            }
            return response;
        });
    }
    getPullRequestPage(start = 0, limit = 25) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const fetchUrl = `${this.baseUrl}/rest/api/1.0/projects/${this.project}/repos/${this.repo}/pull-requests?limit=${limit}&start=${start}`;
            const pullRequestsResponse = yield this.request(fetchUrl, undefined, null);
            return (yield pullRequestsResponse.json());
        });
    }
    getTargetBranch(sourceBranch) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let start = 0;
            let pullRequest = null;
            let page;
            do {
                // eslint-disable-next-line no-await-in-loop
                page = yield this.getPullRequestPage(start, 25);
                const found = page.values.find(pr => pr.fromRef.displayId === sourceBranch);
                if (found) {
                    pullRequest = found;
                }
                start = page.nextPageStart;
            } while (!page.isLastPage && !pullRequest);
            if (!pullRequest) {
                return null;
            }
            return pullRequest.toRef.displayId;
        });
    }
    reportTemplate(insightsReport) {
        return {
            details: insightsReport.details,
            title: 'Duplicates report',
            vendor: 'Beautiful Insights',
            logoUrl: 'https://usagetracker.us-east-1.staging.atl-paas.net/tracker/jfp-small.png?e=duplicates-report',
            result: insightsReport.status,
        };
    }
}
exports.default = BitbucketServerReporter;
//# sourceMappingURL=bitbucket-server.js.map