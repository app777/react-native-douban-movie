import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Button, FlatList, Alert, TouchableOpacity} from "react-native";

import Detail from "./Detail";

var API_URL = 'https://api.douban.com/v2/movie/top250';

export default class Movies extends Component {
	
	static navigationOptions = {
		title: 'Top250',
		headerStyle:{
			backgroundColor:'#00b51d'
		},
		headerTintColor:'#e6f8e9',
		headerTitleStyle:{
			fontWeight:'bold'
		}
	};
	
	constructor(props) {
		super(props);
		this.state = {
			movieData : [],
			loaded : false
		}
		this.fetchData = this.fetchData.bind(this);
		this.renderMovie = this.renderMovie.bind(this);
	}
	
	componentDidMount() {
		this.fetchData();
	}
	
	fetchData() {
		fetch(API_URL)
		.then(response => response.json())
		.then(responseData => {
			this.setState({
				movieData : this.state.movieData.concat(responseData.subjects),
				loaded : true
			})
		})
	}

	itemClick(item, index) {
		//Alert.alert('点击了'+index+":"+item.title);
		this.props.navigation.push('D',{mid: item.id})
	}
	
	renderMovie( {item, index} ){
		return (
		
			<View style = {styles.container}>
			<TouchableOpacity
				activeOpacity = {0.5}
				onPress = {() => this.itemClick(item, index)}
				>
				<Image source = {{ uri: item.images.medium }}
					style = {styles.thumb} />
			</TouchableOpacity>
					<Text>{index}</Text>
				<Text>{item.title}</Text>
				<Text>{item.year}</Text>
			</View>
		);
	}
	
	render() {
		return (
			<View>
			<FlatList 
				data = {this.state.movieData}
				renderItem = {this.renderMovie}
			/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container:{flex:1,flexDirection:'row'},
	thumb:{width:120,height:120}
});