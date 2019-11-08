"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExperimentConsumer = exports.ExperimentProvider = void 0;

var _react = require("react");

var initialContext = {
  experiments: {}
};
var Experiment = (0, _react.createContext)(initialContext);
var ExperimentProvider = Experiment.Provider;
exports.ExperimentProvider = ExperimentProvider;
var ExperimentConsumer = Experiment.Consumer;
exports.ExperimentConsumer = ExperimentConsumer;