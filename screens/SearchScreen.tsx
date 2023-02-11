import * as React from 'react';
import { View, Text, Pressable, Modal } from 'react-native';
import { RootTabScreenProps } from '../types';
import Dimensions from '../constants/Dimensions';
import Colors from '../constants/Colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import LeftArrow from '../assets/left-arrow.svg';
import RightArrow from '../assets/right-arrow.svg';
import { useState } from 'react';
import { veganTypes } from '../data/veganTypes';
import VeganTypeItem from '../components/VeganTypeItem';
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
	return (
		<>
			<Modal animationType='fade' transparent={true} visible={modalVisible}>
				<View
					style={{
						backgroundColor: 'white',
						width: Dimensions.width * 375,
						height: Dimensions.height * 812,

						paddingTop: useSafeAreaInsets().top,
						paddingBottom: useSafeAreaInsets().bottom,
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
				<View
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
				</View>
			</View>
		</>
	);
}
