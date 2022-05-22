/**
 * When compiling for web, it will search for index.js on root/src.
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import reportWebVitals from './reportWebVitals';

// RNVI integration for web
import './icons';
import DessertApp from './DessertApp';

AppRegistry.registerComponent(appName, () => DessertApp);
AppRegistry.runApplication(appName, {
  rootTag: document.getElementById('root'),
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
