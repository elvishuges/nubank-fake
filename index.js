/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';

import { gestureHandlerRootHOC } from 'react-native-gesture-handler'

AppRegistry.registerComponent(appName, () => gestureHandlerRootHOC(App));
