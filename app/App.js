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

import Tabm from "./views/Tabm";
import About from "./views/About";

const AppTabNavigator = createBottomTabNavigator({
	"电影列表":{
		screen:Tabm
	},
	"关于":{
		screen:About
	}
});

const App = createAppContainer(AppTabNavigator);
export default App;
