"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.REQUEST_UNLINK_CLOUD_ACCOUNT = 'ACCOUNT_UNLINK_CLOUD_REQUEST';
function requestUnlinkCloudAccount(account) {
    return {
        type: exports.REQUEST_UNLINK_CLOUD_ACCOUNT,
        account: account,
    };
}
exports.requestUnlinkCloudAccount = requestUnlinkCloudAccount;
exports.UNLINK_ACCOUNT = 'ACCOUNT_CLOUD_UNLINK';
function unlinkCloudAccount(account) {
    return {
        type: exports.UNLINK_ACCOUNT,
        account: account,
    };
}
exports.unlinkCloudAccount = unlinkCloudAccount;
//# sourceMappingURL=unlinkCloudAccount.js.map