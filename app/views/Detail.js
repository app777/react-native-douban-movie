import React, {Component} from 'react';
import {Alert, View, Text, StyleSheet, Image, Button} from "react-native";

var DETAIL_URL = 'https://api.douban.com/v2/movie/subject/';

export default class Detail extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			mid: 0,
			title: '',
			original_title: '',
			summary: '',
			collect_count: 0,
		}
		this.fetchData = this.fetchData.bind(this);
	}
	
	componentDidMount() {
		//
		const API_URL = DETAIL_URL + this.props.navigation.state.params.mid;
		this.fetchData(API_URL);
	}
	
	fetchData(API_URL) {
		
		fetch(API_URL)
		.then(response => response.json())
		.then(responseData => {
			//Alert.alert(responseData.summary);
			this.setState({
				title: responseData.title,
				original_title: responseData.original_title,
				summary: responseData.summary,
				collect_count: responseData.collect_count
			})
		});
	}
	
	render() {
		return (
			<View>
				<Text>电影id：{this.props.navigation.state.params.mid}</Text>
				<Text>标题：{this.state.title}</Text>
				<Text>原标题：{this.state.original_title}</Text>
				<Text>摘要：{this.state.summary}</Text>
				<Text>收藏数：{this.state.collect_count}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	
	
});