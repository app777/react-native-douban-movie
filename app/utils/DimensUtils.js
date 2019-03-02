/**
屏幕尺寸类
*/

import {Dimensions} from 'react-native';

export default class DimensUtils {
	
	static getScreenWidth() {
		return Dimensions.get('window').width;
	}
	
	static getScreenHeight() {
		return Dimensions.get('window').height;
	}
}