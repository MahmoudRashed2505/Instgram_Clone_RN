/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import SearchItem from './SearchItem'
import SearchComp from './Search/SearchComp'
AppRegistry.registerComponent(appName, () => SearchComp);
