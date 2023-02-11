import { Dimensions, StatusBar } from 'react-native';

const basicDimensions = {
	width: 375,
	height: 812,
};

const width: any = (
	Dimensions.get('window').width / basicDimensions.width
).toFixed(2);

const height: any = (
	Dimensions.get('window').height / basicDimensions.height
).toFixed(2);

const androidBottomNavigationBarHeight: any = StatusBar.currentHeight
	? Dimensions.get('screen').height -
	  Dimensions.get('window').height -
	  StatusBar.currentHeight
	: 0;

export default {
	width,
	height,
	androidBottomNavigationBarHeight,
};
