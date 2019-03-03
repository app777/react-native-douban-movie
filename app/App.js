/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {createStackNavigator, createBottomTabNavigator, createAppContainer} from 'react-navigation';

import Tab1 from "./views/Tab1";
import Tab2 from "./views/Tab2";
import About from "./views/About";

const AppTabNavigator = createBottomTabNavigator({
	"正在热映":{
		screen:Tab1
	},
	"Top250":{
		screen:Tab2
	},
	"关于":{
		screen:About
	}
});

const App = createAppContainer(AppTabNavigator);
export default App;
