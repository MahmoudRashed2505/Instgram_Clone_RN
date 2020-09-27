/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Profile from './screens/Profile'

AppRegistry.registerComponent(appName, () => Profile);
