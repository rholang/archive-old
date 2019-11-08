/**
 * This file exists to only expose the node requireable `installFromCommit` function without also
 * exposing `validateOptions` and `_installFromCommit`
 */
var _require = require('./install-from-commit'),
    installFromCommit = _require.installFromCommit;

module.exports = installFromCommit;