import * as React from 'react';
import {
	View,
	Text,
	Pressable,
	Modal,
	TextInput,
	StyleSheet,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Colors from '../constants/Colors';
import Dimensions from '../constants/Dimensions';
import { RootTabScreenProps } from '../types';

import {
	WeekCalendar,
	Calendar,
	CalendarProvider,
	ExpandableCalendar,
} from 'react-native-calendars';
import { Shadow } from 'react-native-shadow-2';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

import LeftArrow from '../assets/left-arrow.svg';
import RightArrow from '../assets/right-arrow.svg';
import Add from '../assets/add.svg';
import Tag from '../components/Tag';
import { useState } from 'react';
import MenuItem from '../components/MenuItem';
import { menus } from '../data/menus';
export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
	const [modalVisible, setModalVisible] = useState(false);
	const [img, setImageSource] = useState('');

	const openPicker = () => {};
	return (
		<>
			<Modal animationType='fade' visible={modalVisible}>
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
					<View
						style={{
							marginVertical: Dimensions.height * 21,
							marginHorizontal: Dimensions.width * 16,
							width: Dimensions.width * 341,
							height: Dimensions.height * 305,
							backgroundColor: 'gray',
							alignItems: 'center',
							alignContent: 'center',
						}}
					>
						<Pressable
							style={({ pressed }) => ({
								opacity: pressed ? 0 : 0,
								width: Dimensions.width * 52,
								height: Dimensions.width * 52,
								borderRadius: Dimensions.width * 52,

								justifyContent: 'center',
								alignItems: 'center',
							})}
							onPress={() => setModalVisible(true)}
						>
							<Add />
						</Pressable>
					</View>
					<Text
						style={{
							color: Colors.Black,
							fontSize: 18,
							marginHorizontal: Dimensions.width * 16,
							marginBottom: Dimensions.height * 12,
						}}
					>
						Menu
					</Text>
					<TextInput
						style={{
							borderRadius: 6,
							marginHorizontal: Dimensions.width * 16,
							paddingHorizontal: Dimensions.width * 16,
							marginBottom: Dimensions.height * 42,
							width: Dimensions.width * 343,
							height: Dimensions.height * 50,
							borderWidth: 1,
							borderColor: '#E1E1E1',
						}}
					/>
					<Text
						style={{
							color: Colors.Black,
							fontSize: 18,
							marginHorizontal: Dimensions.width * 16,
							marginBottom: Dimensions.height * 12,
						}}
					>
						Ingredints
					</Text>
					<TextInput
						style={{
							borderRadius: 6,
							marginHorizontal: Dimensions.width * 16,
							paddingHorizontal: Dimensions.width * 16,
							marginBottom: Dimensions.height * 16,
							width: Dimensions.width * 343,
							height: Dimensions.height * 50,
							borderWidth: 1,
							borderColor: '#E1E1E1',
						}}
					/>
					<TextInput
						style={{
							borderRadius: 6,
							marginHorizontal: Dimensions.width * 16,
							paddingHorizontal: Dimensions.width * 4,
							marginBottom: Dimensions.height * 42,
							width: Dimensions.width * 343,
							height: Dimensions.height * 50,
							borderWidth: 1,
							borderColor: '#E1E1E1',
						}}
					/>
				</View>
			</Modal>
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
						backgroundColor: Colors.NavBar,
						width: Dimensions.width * 375,
						height: Dimensions.height * 72,
						//height: Dimensions.height * 72
					}}
				>
					<CalendarProvider date={'2023-02-11'}>
						<WeekCalendar
							theme={{
								selectedDayBackgroundColor: 'white',
								selectedDayTextColor: 'black',
							}}
							markedDates={{
								'2023-02-06': { selected: true, selectedColor: Colors.Green03 },
								'2023-02-07': { selected: true, selectedColor: Colors.Green01 },
								'2023-02-09': { selected: true, selectedColor: Colors.Green02 },
								'2023-02-10': { selected: true, selectedColor: Colors.Green04 },
								'2023-02-12': { selected: true, selectedColor: Colors.Green03 },
								'2023-02-13': { selected: true, selectedColor: Colors.Green04 },
								'2023-02-14': { selected: true, selectedColor: Colors.Green03 },
								'2023-02-16': { selected: true, selectedColor: Colors.Green02 },
								'2023-02-17': { selected: true, selectedColor: Colors.Green01 },
								//'2023-02-08': {marked: true, dotColor: 'red'},
								//'2023-02-09': {disabled: true, disableTouchEvent: true}
							}}
						/>
					</CalendarProvider>
				</View>
				<View
					style={{
						width: Dimensions.width * 375,
						//height: Dimensions.height * 72,
						paddingHorizontal: Dimensions.width * 16,
						paddingBottom: useSafeAreaInsets().bottom,
					}}
				>
					<View
						style={{
							marginVertical: Dimensions.height * 21,
							width: Dimensions.width * 343,
							height: Dimensions.height * 47,
						}}
					>
						<Text
							style={{
								color: Colors.Green01,
								fontSize: 12,
							}}
						>
							February 3
						</Text>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'space-between',
								alignItems: 'center',
							}}
						>
							<Text
								style={{
									color: Colors.Black,
									fontSize: 24,
									fontWeight: 'bold',
								}}
							>
								Monday's Diet
							</Text>
							<View
								style={{
									flexDirection: 'row',
									width: Dimensions.width * 50,
									justifyContent: 'space-between',
									alignItems: 'center',
								}}
							>
								<Pressable
									style={({ pressed }) => ({
										opacity: pressed ? 0.5 : 1,
									})}
								>
									<LeftArrow />
								</Pressable>
								<Pressable
									style={({ pressed }) => ({
										opacity: pressed ? 0.5 : 1,
									})}
								>
									<RightArrow />
								</Pressable>
							</View>
						</View>
					</View>

					<MenuItem data={menus[3]} />
					<Pressable
						style={({ pressed }) => ({
							opacity: pressed ? 0.5 : 1,
							position: 'absolute',
							bottom: -230,
							right: 20,
							width: Dimensions.width * 52,
							height: Dimensions.width * 52,
							borderRadius: Dimensions.width * 52,
							justifyContent: 'center',
							alignItems: 'center',
						})}
						onPress={() => setModalVisible(true)}
					>
						<Add />
					</Pressable>
				</View>
			</View>
		</>
	);
}
