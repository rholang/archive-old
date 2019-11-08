"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var ora_1 = tslib_1.__importDefault(require("ora"));
var console_1 = require("./utils/console");
var chalk_1 = tslib_1.__importDefault(require("chalk"));
function indent(text, level) {
    if (level === void 0) { level = 1; }
    return "" + ''.padStart(level * 2, ' ') + text;
}
exports.indent = indent;
var TaskWrapper = /** @class */ (function () {
    function TaskWrapper(sharedCtx, params, task) {
        this.isAborted = false;
        this.params = params;
        this.sharedCtx = sharedCtx;
        this.task = task;
        this._title =
            typeof task.title === 'string'
                ? task.title
                : task.title(this.sharedCtx, params);
        this.spinner = ora_1.default(this._title);
    }
    TaskWrapper.prototype.skip = function () {
        this.spinner.info(chalk_1.default.dim("[skip] " + this.title));
    };
    TaskWrapper.prototype.abort = function () {
        this.isAborted = true;
    };
    TaskWrapper.prototype.progress = function (text) {
        this.spinner.text = this.title + " " + chalk_1.default.dim('[' + text + ']');
    };
    TaskWrapper.prototype.format = function (text, formatter) {
        var _this = this;
        if (formatter === void 0) { formatter = function (item) { return chalk_1.default.dim("\u2192 " + item); }; }
        if (Array.isArray(text)) {
            return text.map(function (item) {
                if (Array.isArray(item)) {
                    return _this.format(item, formatter);
                }
                else {
                    return formatter(item);
                }
            });
        }
        else {
            return [formatter(text)];
        }
    };
    TaskWrapper.prototype.print = function (text, level) {
        var _this = this;
        if (level === void 0) { level = 1; }
        var shouldRestartSpinner = false;
        if (this.spinner.isSpinning) {
            shouldRestartSpinner = true;
            this.spinner.stop();
        }
        if (Array.isArray(text)) {
            text.forEach(function (item) {
                if (Array.isArray(item)) {
                    _this.print(item, level + 1);
                }
                else {
                    /* eslint-disable no-console */
                    console.log(indent(item, level));
                }
            });
        }
        else {
            /* eslint-disable no-console */
            console.log(indent(text, level));
        }
        if (shouldRestartSpinner) {
            this.spinner.start();
        }
    };
    TaskWrapper.prototype.printFormatted = function (text, level) {
        if (level === void 0) { level = 1; }
        this.print(this.format(text), level);
    };
    TaskWrapper.prototype.prompt = function (text) {
        var _this = this;
        this.spinner.stop();
        return console_1.prompt(text).then(function (result) {
            _this.spinner.start();
            return result;
        });
    };
    Object.defineProperty(TaskWrapper.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (newTitle) {
            this.spinner.text = newTitle;
            this._title = newTitle;
        },
        enumerable: true,
        configurable: true
    });
    TaskWrapper.prototype.run = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, _b, taskResult, e_1;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this.task.skip;
                        if (!_a) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.task.skip(this.sharedCtx, this.params, this)];
                    case 1:
                        _a = (_c.sent());
                        _c.label = 2;
                    case 2:
                        if (_a) {
                            this.skip();
                            return [2 /*return*/];
                        }
                        _b = this.task.abort;
                        if (!_b) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.task.abort(this.sharedCtx, this.params, this)];
                    case 3:
                        _b = (_c.sent());
                        _c.label = 4;
                    case 4:
                        if (_b) {
                            this.abort();
                            this.spinner.text = chalk_1.default.yellow("[exit] " + this.title);
                            this.spinner.warn();
                            return [2 /*return*/];
                        }
                        this.spinner.start();
                        _c.label = 5;
                    case 5:
                        _c.trys.push([5, 7, , 8]);
                        return [4 /*yield*/, this.task.task(this.sharedCtx, this.params, this)];
                    case 6:
                        taskResult = _c.sent();
                        if (this.isAborted) {
                            this.spinner.text = chalk_1.default.yellow("[exit] " + this.title);
                            this.spinner.warn();
                        }
                        else {
                            this.spinner.text = this.title;
                            this.spinner.succeed();
                        }
                        if (taskResult) {
                            this.print(taskResult);
                        }
                        return [3 /*break*/, 8];
                    case 7:
                        e_1 = _c.sent();
                        this.spinner.fail(chalk_1.default.red("[error] " + e_1));
                        /* eslint-disable no-console */
                        console.log(e_1.stack);
                        throw e_1;
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    return TaskWrapper;
}());
exports.TaskWrapper = TaskWrapper;
function createCommand(tasks) {
    return function run(params) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var sharedCtx, startTime, tasks_1, tasks_1_1, task, wrappedTask, error_1, e_2_1, timing, rounded;
            var e_2, _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        sharedCtx = {};
                        startTime = Date.now();
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 8, 9, 10]);
                        tasks_1 = tslib_1.__values(tasks), tasks_1_1 = tasks_1.next();
                        _b.label = 2;
                    case 2:
                        if (!!tasks_1_1.done) return [3 /*break*/, 7];
                        task = tasks_1_1.value;
                        _b.label = 3;
                    case 3:
                        _b.trys.push([3, 5, , 6]);
                        wrappedTask = new TaskWrapper(sharedCtx, params, task);
                        return [4 /*yield*/, wrappedTask.run()];
                    case 4:
                        _b.sent();
                        if (wrappedTask.isAborted) {
                            process.exit(0);
                        }
                        return [3 /*break*/, 6];
                    case 5:
                        error_1 = _b.sent();
                        process.exit(1);
                        return [3 /*break*/, 6];
                    case 6:
                        tasks_1_1 = tasks_1.next();
                        return [3 /*break*/, 2];
                    case 7: return [3 /*break*/, 10];
                    case 8:
                        e_2_1 = _b.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 10];
                    case 9:
                        try {
                            if (tasks_1_1 && !tasks_1_1.done && (_a = tasks_1.return)) _a.call(tasks_1);
                        }
                        finally { if (e_2) throw e_2.error; }
                        return [7 /*endfinally*/];
                    case 10:
                        timing = (Date.now() - startTime) / 1000;
                        rounded = Math.round(timing * 100) / 100;
                        /* eslint-disable no-console */
                        console.log("\uD83C\uDFC1 Done in " + rounded + "s.");
                        process.exit(0);
                        return [2 /*return*/];
                }
            });
        });
    };
}
exports.createCommand = createCommand;
//# sourceMappingURL=runner.js.map