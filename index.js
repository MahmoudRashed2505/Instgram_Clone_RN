import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import routes from './src/Routes/routes';
import Stories from './src/screens/Stories/StoryComp'

AppRegistry.registerComponent(appName, () => routes);
