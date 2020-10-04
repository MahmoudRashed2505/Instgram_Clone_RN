
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import route from './src/Routes/routes';

AppRegistry.registerComponent(appName, () => route);