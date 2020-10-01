
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import routes from './src/Routes/routes';

AppRegistry.registerComponent(appName, () => routes);