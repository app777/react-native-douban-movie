import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Button} from "react-native";
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Movies from "./Movies";
import Detail from "./Detail";

const styles = StyleSheet.create({
	
});

const AppNavigator = createStackNavigator({
	M:{
		screen:Movies
	},
	D:{
		screen:Detail
	}
});

const Tabm = createAppContainer(AppNavigator);
export default Tabm;