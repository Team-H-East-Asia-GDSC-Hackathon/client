import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootStackParamList, RootTabParamList } from './types';

import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';

export default function Navigation() {
	return (
		<NavigationContainer>
			<RootNavigator />
		</NavigationContainer>
	);
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='Root'
				component={BottomTabNavigator}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
	return (
		<BottomTab.Navigator
			initialRouteName='Home'
			screenOptions={{ headerShown: false }}
		>
			<BottomTab.Screen name='Home' component={HomeScreen} />
			<BottomTab.Screen name='Search' component={SearchScreen} />
		</BottomTab.Navigator>
	);
}
