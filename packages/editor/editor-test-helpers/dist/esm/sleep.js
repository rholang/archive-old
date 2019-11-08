import { __awaiter, __generator } from "tslib";
export default function sleep(time) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve) { return window.setTimeout(resolve, time); })];
        });
    });
}
//# sourceMappingURL=sleep.js.map