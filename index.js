/**
 * When compiling for mobile, it will search for index.js on root.
 */

import {AppRegistry} from 'react-native';
import DessertApp from './src/DessertApp';
import {name as appName} from './src/app.json';

AppRegistry.registerComponent(appName, () => DessertApp);
