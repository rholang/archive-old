import React from 'react';
import { render } from 'react-dom';
import cssResetStyles from '@atlaskit/css-reset';
import 'regenerator-runtime/runtime';
import insertStyleSheetInHead from './utils/insertStyleSheetInHead';
import App from './containers/App';

insertStyleSheetInHead(cssResetStyles);
//testsss
render(<App />, document.getElementById('app'));
console.log('test');
