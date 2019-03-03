import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Button} from "react-native";
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Top250 from "./Top250";
import Detail from "./Detail";

const styles = StyleSheet.create({
	
});

const AppNavigator = createStackNavigator({
	T:{
		screen:Top250
	},
	D:{
		screen:Detail
	}
});

const Tab2 = createAppContainer(AppNavigator);
export default Tab2;