import * as React from 'react';
import {
	View,
	Text,
	Pressable,
	Modal,
	FlatList,
	ScrollView,
} from 'react-native';
import { menu, RootTabScreenProps, veganType } from '../types';
import Dimensions from '../constants/Dimensions';
import Colors from '../constants/Colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import LeftArrow from '../assets/left-arrow.svg';
import RightArrow from '../assets/right-arrow.svg';
import { useState } from 'react';
import { veganTypes } from '../data/veganTypes';
import VeganTypeItem from '../components/VeganTypeItem';
import Tag from '../components/Tag';
import MenuItem from '../components/MenuItem';
import { menus } from '../data/menus';
export default function SearchScreen({
	navigation,
}: RootTabScreenProps<'Search'>) {
	const [veganType, setVeganType] = useState({
		key: 'Raw Food Vegan',
		name: 'Raw Food Vegan',
		fruit: true,
		veggies: true,
		cereals: false,
		dairy: false,
		eggs: false,
		seafood: false,
		meat: false,
	});
	const [modalVisible, setModalVisible] = useState(false);
	// function filterMenusByVeganType(
	// 	menus: menu[],
	// 	selectedVeganType: veganType,
	// ): Array<menu> {
	// 	let excludedIngredients: string[] = [];
	// 	for (let i = 0; i < 9; i++) {
	// 		excludedIngredients.push(
	// 			Object.keys(selectedVeganType).find(
	// 				(key) => selectedVeganType[key] === false,
	// 			),
	// 		);
	// 	}
	// 	console.log(excludedIngredients);
	// 	return menus.filter((menu) =>
	// 		excludedIngredients.forEach((ingredient) => menu[ingredient] === true),
	// 	);
	// }
	return (
		<>
			<Modal animationType='fade' visible={modalVisible}>
				<View
					style={{
						backgroundColor: 'white',
						width: Dimensions.width * 375,
						height: Dimensions.height * 812,
						paddingTop: useSafeAreaInsets().top,
						paddingBottom: useSafeAreaInsets().bottom + Dimensions.height * 49,
					}}
				>
					<View
						style={{
							width: Dimensions.width * 375,
							height: Dimensions.height * 52,
							paddingLeft: Dimensions.width * 9,
							justifyContent: 'center',
						}}
					>
						<Pressable
							style={({ pressed }) => ({
								opacity: pressed ? 0.5 : 1,
							})}
							onPress={() => setModalVisible(false)}
						>
							<LeftArrow />
						</Pressable>
					</View>
					{veganTypes.map((type) => (
						<VeganTypeItem
							veganTypeTemp={veganType}
							data={type}
							setVeganType={setVeganType}
							setModalVisible={setModalVisible}
						/>
					))}
				</View>
			</Modal>
			<View
				style={{
					backgroundColor: 'white',
					width: Dimensions.width * 375,
					height: Dimensions.height * 812,
					paddingHorizontal: Dimensions.width * 16,
					paddingTop: useSafeAreaInsets().top,
					paddingBottom: useSafeAreaInsets().bottom,
				}}
			>
				<View
					style={{
						width: Dimensions.width * 375,
						height: Dimensions.height * 104,
						justifyContent: 'center',
					}}
				>
					<Pressable
						style={({ pressed }) => ({
							opacity: pressed ? 0.5 : 1,
							width: Dimensions.width * 343,
							height: Dimensions.height * 59,
							borderColor: '#C5C4C4',
							borderWidth: 1,
							flexDirection: 'row',
							justifyContent: 'space-between',
							alignItems: 'center',
							paddingHorizontal: Dimensions.width * 15,
							borderRadius: 6,
						})}
						onPress={() => setModalVisible(true)}
					>
						<Text
							style={{
								color: Colors.Black,
								fontSize: 16,
							}}
						>
							{veganType.name}
						</Text>
						<RightArrow />
					</Pressable>
				</View>
				<View
					style={{
						width: Dimensions.width * 375,
						height: Dimensions.height * 8,
						backgroundColor: '#F8F4F4',
					}}
				/>
				<ScrollView
					style={{
						width: Dimensions.width * 375,
						backgroundColor: 'white',
						paddingTop: Dimensions.height * 19,
					}}
				>
					<Text
						style={{
							color: Colors.Black,
							fontSize: 24,
							fontWeight: 'bold',
						}}
					>
						Vegan Recipies
					</Text>
					<FlatList
						renderItem={(item) => <MenuItem data={item.item} />}
						data={menus}
						contentContainerStyle={{
							paddingBottom: useSafeAreaInsets().bottom + 49,
						}}
					/>
				</ScrollView>
			</View>
		</>
	);
}
