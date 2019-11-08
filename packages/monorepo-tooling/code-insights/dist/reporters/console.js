"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const chalk_1 = tslib_1.__importDefault(require("chalk"));
const insights_report_1 = require("../reports/insights-report");
class ConsoleReporter {
    constructor() {
        this.name = 'Console reporter';
    }
    publishInsightsReport(insightsReport) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (insightsReport.annotations.length > 0) {
                console.log(`Current branch introduces the following extra duplicates:`);
                insightsReport.annotations.forEach(({ message, path, line, severity }) => {
                    const color = severity === insights_report_1.Severity.HIGH ? chalk_1.default.red : chalk_1.default.yellow;
                    console.log(color(`${chalk_1.default.bold(`${path}:${line}`)}:  ${message}`));
                });
            }
        });
    }
}
exports.default = ConsoleReporter;
//# sourceMappingURL=console.js.map