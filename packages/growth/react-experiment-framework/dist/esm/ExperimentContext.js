import { createContext } from 'react';
var initialContext = {
  experiments: {}
};
var Experiment = createContext(initialContext);
export var ExperimentProvider = Experiment.Provider;
export var ExperimentConsumer = Experiment.Consumer;