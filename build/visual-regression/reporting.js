// @flow
const get = require('lodash.get');
const sendLogs = require('@atlaskit/analytics-reporting');
/**
 * Test that fail, cause other blocks in the same file to cascade fail
 * So as a result we only pull out the first error as the cascade results aren't useful
 * To determine flaky tests.
 */
const extractResultInformationIntoProperties = results => {
  return results.testResults
    .filter(
      test =>
        test.numFailingTests > 0 ||
        (test.failureMessage && results.numFailedTestSuites > 0),
    )
    .map(test => ({
      failingTests: test.numFailingTests,
      testFilePath: test.testFilePath.replace(process.cwd(), ''), // Relative path to test
      failureMessage:
        get(test, 'testResults[0].failureMessages[0]') || test.failureMessage,
      duration: get(test, 'testResults[0].duration', 0),
      testName: get(test, 'testResults[0].fullName'),
      buildNumber: process.env.BITBUCKET_BUILD_NUMBER,
      branch: process.env.BITBUCKET_BRANCH,
    }));
};

const extractInconsistentTest = results => {
  return results.testResults
    .filter(test => test.numPassingTests > 0)
    .map(test => ({
      inconsistenTests: test.numPassingTests,
      testFilePath: test.testFilePath.replace(process.cwd(), ''),
      duration: get(test, 'testResults[0].duration', 0),
      testName: get(test, 'testResults[0].fullName'),
      buildNumber: process.env.BITBUCKET_BUILD_NUMBER,
      branch: process.env.BITBUCKET_BRANCH,
    }));
};

const buildEventPayload = (properties, eventName) => {
  return {
    name: eventName,
    properties,
    server: process.env.CI ? 'master' : 'test',
    product: 'atlaskit',
    user: process.env.CI ? '-' : process.env.USER, // On CI we send as an anonymous user
    serverTime: Date.now(),
  };
};

module.exports = {
  reportInconsistency(results /*: any */) {
    const properties = extractInconsistentTest(results);
    if (!properties.length) {
      return;
    }
    return sendLogs(
      JSON.stringify({
        events: properties.map(property =>
          buildEventPayload(property, 'atlaskit.qa.vr_test.inconsistency'),
        ),
      }),
    ).then(res => {
      console.log(
        `Sent ${properties.length} inconsistent visual-regression tests event${
          properties.length > 1 ? 's' : ''
        }`,
      );
    });
  },
  reportFailure(results /*: any */, eventName /*: string */) {
    const properties = extractResultInformationIntoProperties(results);
    if (!properties.length) {
      return;
    }
    return sendLogs(
      JSON.stringify({
        events: properties.map(property =>
          buildEventPayload(property, eventName),
        ),
      }),
    ).then(() => {
      console.log(
        `Sent ${properties.length} failure visual-regression tests event${
          properties.length > 1 ? 's' : ''
        }`,
      );
    });
  },
  reportLongRunningTests(results /*: any */, threshold /*: number */) {
    return sendLogs(
      JSON.stringify({
        events: results.map(result => {
          return {
            name: 'atlaskit.qa.vr_test.testtimes',
            server: process.env.CI ? 'master' : 'test',
            product: 'atlaskit',
            properties: {
              timeTaken: result.timeTaken,
              testFilePath: result.testFilePath,
              threshold,
            },
            user: process.env.CI ? '-' : process.env.USER, // On CI we send as an anonymous user
            serverTime: Date.now(),
          };
        }),
      }),
    ).then(res => {
      console.log(
        `Sent ${results.length} visual regression long running tests event${
          results.length > 1 ? 's' : ''
        }`,
      );
    });
  },
};
