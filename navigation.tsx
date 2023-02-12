import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootStackParamList, RootTabParamList } from './types';

import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import HomeTabBarIconFocused from './assets/home-tab-icon-2.svg';
import HomeTabBarIconUnfocused from './assets/home-tab-icon.svg';
import SearchTabBarIconFocused from './assets/search-tab-icon.svg';
import SearchTabBarIconUnfocused from './assets/search-tab-icon-2.svg';

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
			screenOptions={{ headerShown: false, tabBarShowLabel: false }}
		>
			<BottomTab.Screen
				name='Home'
				component={HomeScreen}
				options={{
					tabBarIcon: ({ focused }) =>
						focused ? <HomeTabBarIconFocused /> : <HomeTabBarIconUnfocused />,
				}}
			/>
			<BottomTab.Screen
				name='Search'
				component={SearchScreen}
				options={{
					tabBarIcon: ({ focused }) =>
						focused ? (
							<SearchTabBarIconFocused />
						) : (
							<SearchTabBarIconUnfocused />
						),
				}}
			/>
		</BottomTab.Navigator>
	);
}
