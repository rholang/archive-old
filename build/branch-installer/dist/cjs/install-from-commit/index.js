"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var fetch = require('node-fetch');

var chalk = require('chalk');

var spawndamnit = require('spawndamnit');

var prettyjson = require('prettyjson');

var pWaitFor = require('p-wait-for');

var fs = require('fs');

var util = require('util');

var readFile = util.promisify(fs.readFile);

var retry = require('async-retry');

var CDN_URL_BASE = 'https://s3-ap-southeast-2.amazonaws.com/atlaskit-artefacts';

function flattenDeep(arr1) {
  return arr1.reduce(function (acc, val) {
    return Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val);
  }, []);
}

function getInstalledAtlaskitDependencies() {
  return _getInstalledAtlaskitDependencies.apply(this, arguments);
} // This function needs to be shared between the cli and the main node entry point
// so that they can print different error messages


function _getInstalledAtlaskitDependencies() {
  _getInstalledAtlaskitDependencies = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee3() {
    var packageJSON, atlaskitDependencies;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.t0 = JSON;
            _context3.next = 4;
            return readFile('./package.json', 'utf8');

          case 4:
            _context3.t1 = _context3.sent.toString();
            packageJSON = _context3.t0.parse.call(_context3.t0, _context3.t1);
            _context3.next = 12;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t2 = _context3["catch"](0);
            console.error(_context3.t2);
            throw new Error(_context3.t2);

          case 12:
            atlaskitDependencies = flattenDeep(['dependencies', 'devDependencies', 'bundledDependencies', 'optionalDependencies', 'peerDependencies'].filter(function (depType) {
              return (0, _typeof2.default)(packageJSON[depType]) === 'object';
            }).map(function (depType) {
              return Object.entries(packageJSON[depType]).filter(function (_ref3) {
                var _ref4 = (0, _slicedToArray2.default)(_ref3, 1),
                    name = _ref4[0];

                return name.startsWith('@atlaskit');
              }).map(function (_ref5) {
                var _ref6 = (0, _slicedToArray2.default)(_ref5, 1),
                    name = _ref6[0];

                return name;
              });
            }));
            return _context3.abrupt("return", atlaskitDependencies.filter(function (item, i) {
              return atlaskitDependencies.indexOf(item) === i;
            }));

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this, [[0, 8]]);
  }));
  return _getInstalledAtlaskitDependencies.apply(this, arguments);
}

function validateOptions(commitHash) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var errors = [];
  var engine = options.engine,
      cmd = options.cmd,
      timeout = options.timeout,
      interval = options.interval;

  if (!commitHash || commitHash.length < 12) {
    errors.push('Commit hash is required and must be at least 12 characters');
  }

  if (!['yarn', 'bolt'].includes(engine)) {
    errors.push('engine must be one of [yarn, bolt]');
  }

  if (!['add', 'upgrade'].includes(cmd)) {
    errors.push('cmd must be one of [add, upgrade]');
  }

  if (timeout < 1) {
    errors.push('timeout must be more than 1ms');
  }

  if (interval < 1) {
    errors.push('interval be more than 1ms');
  }

  return errors;
} // returns a function used for logging or doing nothing (depending on shouldLog)
// i.e const logAlways = createLogger(true);
// const logInDebugMode = createLogger(flags.debug);


var createLogger = function createLogger(shouldLog) {
  if (shouldLog) {
    return function (message) {
      if (typeof message === 'string') {
        console.log(chalk.cyan(message));
      } else {
        console.log(prettyjson.render(message));
      }
    };
  }

  return function () {};
};

function getManifestForCommit(_x) {
  return _getManifestForCommit.apply(this, arguments);
}

function _getManifestForCommit() {
  _getManifestForCommit = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee4(commitHash) {
    var options,
        manifestUrl,
        log,
        interval,
        timeout,
        manifest,
        _args4 = arguments;
    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            options = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : {};
            manifestUrl = "".concat(CDN_URL_BASE, "/").concat(commitHash, "/dists/manifest.json");
            log = options.log;
            interval = options.interval, timeout = options.timeout;
            log("Fetching manifest from ".concat(manifestUrl));
            _context4.next = 7;
            return pWaitFor(function () {
              return urlExists(manifestUrl, options);
            }, {
              interval: interval,
              timeout: timeout
            });

          case 7:
            _context4.next = 9;
            return fetchVerbose(manifestUrl, options);

          case 9:
            manifest = _context4.sent;
            return _context4.abrupt("return", manifest);

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));
  return _getManifestForCommit.apply(this, arguments);
}

var urlExists =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(url) {
    var options,
        verboseLog,
        response,
        _args = arguments;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            options = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
            verboseLog = options.verboseLog;
            verboseLog("Checking if url exists: ".concat(url));
            _context.next = 5;
            return fetch(url, {
              method: 'HEAD'
            });

          case 5:
            response = _context.sent;
            verboseLog("HTTP Code ".concat(response.status));
            return _context.abrupt("return", response.status === 200);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function urlExists(_x2) {
    return _ref.apply(this, arguments);
  };
}();

var fetchVerbose =
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee2(url) {
    var options,
        verboseLog,
        response,
        result,
        _args2 = arguments;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            options = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {};
            verboseLog = options.verboseLog;
            verboseLog("Trying to fetch ".concat(url));
            _context2.next = 5;
            return fetch(url);

          case 5:
            response = _context2.sent;
            verboseLog("HTTP Code ".concat(response.status));
            _context2.next = 9;
            return response.json();

          case 9:
            result = _context2.sent;
            verboseLog(result);
            return _context2.abrupt("return", result);

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function fetchVerbose(_x3) {
    return _ref2.apply(this, arguments);
  };
}();
/**
 * Might look weird to have this extra wrapping function, but its so that when requiring from
 * node we can throw an error that can be caught, and from the cli we can print them and correctly
 * process.exit
 */


function installFromCommit() {
  return _installFromCommit2.apply(this, arguments);
}

function _installFromCommit2() {
  _installFromCommit2 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee5() {
    var fullCommitHash,
        userOptions,
        defaultOptions,
        options,
        commitHash,
        errors,
        _args5 = arguments;
    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            fullCommitHash = _args5.length > 0 && _args5[0] !== undefined ? _args5[0] : '';
            userOptions = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : {};
            defaultOptions = {
              dryRun: false,
              verbose: false,
              engine: 'yarn',
              cmd: 'add',
              packages: 'all',
              timeout: 20000,
              interval: 5000,
              extraArgs: []
            };
            options = (0, _objectSpread2.default)({}, defaultOptions, userOptions);
            commitHash = fullCommitHash.substr(0, 12);
            errors = validateOptions(commitHash, options);

            if (!(errors.length !== 0)) {
              _context5.next = 8;
              break;
            }

            throw new Error(errors.join('\n'));

          case 8:
            return _context5.abrupt("return", _installFromCommit(commitHash, options));

          case 9:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));
  return _installFromCommit2.apply(this, arguments);
}

function _installFromCommit() {
  return _installFromCommit3.apply(this, arguments);
}

function _installFromCommit3() {
  _installFromCommit3 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee7() {
    var commitHash,
        options,
        log,
        verboseLog,
        manifest,
        packages,
        engine,
        cmd,
        cmdArgs,
        retryCount,
        _args7 = arguments;
    return _regenerator.default.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            commitHash = _args7.length > 0 && _args7[0] !== undefined ? _args7[0] : '';
            options = _args7.length > 1 && _args7[1] !== undefined ? _args7[1] : {};
            log = createLogger(true);
            verboseLog = createLogger(options.verbose);
            verboseLog('Running with options:');
            verboseLog((0, _objectSpread2.default)({}, options, {
              commitHash: commitHash
            }));
            _context7.next = 8;
            return getManifestForCommit(commitHash, (0, _objectSpread2.default)({}, options, {
              log: log,
              verboseLog: verboseLog
            }));

          case 8:
            manifest = _context7.sent;

            if (!(options.packages === 'all')) {
              _context7.next = 15;
              break;
            }

            _context7.next = 12;
            return getInstalledAtlaskitDependencies();

          case 12:
            _context7.t0 = _context7.sent;
            _context7.next = 16;
            break;

          case 15:
            _context7.t0 = options.packages.split(',');

          case 16:
            packages = _context7.t0;
            engine = options.engine, cmd = options.cmd;
            cmdArgs = [cmd].concat((0, _toConsumableArray2.default)(options.extraArgs)); // args that we'll pass to the engine ('add'/'upgrade' pkgName@url pkgName@url)

            packages.forEach(function (pkg) {
              if (manifest[pkg]) {
                log("Notice: Installing branch-deploy for: ".concat(pkg));
                var tarUrl = "".concat(CDN_URL_BASE, "/").concat(commitHash, "/dists/").concat(manifest[pkg].tarFile);
                cmdArgs.push("".concat(pkg, "@").concat(tarUrl));
              }
            });

            if (!options.dryRun) {
              _context7.next = 25;
              break;
            }

            log('[Dry run] would have run command:');
            log("$ ".concat(engine, " ").concat(cmdArgs.join(' ')));
            _context7.next = 30;
            break;

          case 25:
            log('Running command:');
            log("$ ".concat(engine, " ").concat(cmdArgs.join(' ')));
            retryCount = 0;
            /*
            On CI we get a weird concurrency issue when installing transitive dependencies from the Atlaskit
            branch deploy. Re-running the upgrade fixes that problem. It's not great but it unblocks Confluence.
            https://github.com/yarnpkg/yarn/issues/2629
             */

            _context7.next = 30;
            return retry(
            /*#__PURE__*/
            function () {
              var _ref7 = (0, _asyncToGenerator2.default)(
              /*#__PURE__*/
              _regenerator.default.mark(function _callee6(bail) {
                return _regenerator.default.wrap(function _callee6$(_context6) {
                  while (1) {
                    switch (_context6.prev = _context6.next) {
                      case 0:
                        _context6.prev = 0;
                        _context6.next = 3;
                        return spawndamnit(engine, cmdArgs, {
                          stdio: 'inherit',
                          shell: process.stdout.isTTY
                        });

                      case 3:
                        _context6.next = 11;
                        break;

                      case 5:
                        _context6.prev = 5;
                        _context6.t0 = _context6["catch"](0);
                        log("".concat(retryCount, " retry at running command failed"));
                        log(_context6.t0.toString());
                        retryCount++;
                        throw _context6.t0;

                      case 11:
                        return _context6.abrupt("return", true);

                      case 12:
                      case "end":
                        return _context6.stop();
                    }
                  }
                }, _callee6, this, [[0, 5]]);
              }));

              return function (_x4) {
                return _ref7.apply(this, arguments);
              };
            }(), {
              retries: 3
            });

          case 30:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, this);
  }));
  return _installFromCommit3.apply(this, arguments);
}

module.exports = {
  installFromCommit: installFromCommit,
  _installFromCommit: _installFromCommit,
  validateOptions: validateOptions
};