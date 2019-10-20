import React from 'react';
import { render } from 'react-dom';
import cssResetStyles from '@atlaskit/css-reset';
import 'regenerator-runtime/runtime';
import insertStyleSheetInHead from './utils/insertStyleSheetInHead';
import App from './containers/App';
import Test from './sitemap-generator';

Test();

insertStyleSheetInHead(cssResetStyles);

render(<App />, document.getElementById('app'));
