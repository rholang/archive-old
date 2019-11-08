"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTeamType = function (userType) { return userType === 'TEAM'; };
exports.isTeamStats = function (stat) {
    return stat && !isNaN(stat.teamMentionDuration);
};
//# sourceMappingURL=utils.js.map