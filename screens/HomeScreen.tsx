import * as React from 'react';
import {
	View,
	Text,
	Pressable,
	Modal,
	TextInput,
	StyleSheet,
	Image,
	ScrollView,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Colors from '../constants/Colors';
import Dimensions from '../constants/Dimensions';
import { ingredient, RootTabScreenProps } from '../types';
import Remove from '../assets/remove.svg';
import AddIngredient from '../assets/add-ingredient.svg';
import Done from '../assets/done.svg';
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
import ToggleSwitch from 'toggle-switch-react-native';
export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
	const [modalVisible, setModalVisible] = useState(false);
	const [img, setImageSource] = useState('');
	const [menuName, setMenuName] = useState('');
	const [toggleOn, setToggleOn] = useState(false);
	const openPicker = () => {};
	const [ingredients, setIngredients] = useState<ingredient[]>([
		{
			key: 'Egg',
			name: 'Egg',
			category: 'eggs',
		},
		{
			key: 'Toast',
			name: 'Toast',
			category: 'cereals',
		},
		{
			key: 'Rucola',
			name: 'Rucola',
			category: 'veggies',
		},
	]);
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
					<ScrollView>
						<Image
							style={{
								marginVertical: Dimensions.height * 21,
								marginHorizontal: Dimensions.width * 16,
								width: Dimensions.width * 341,
								height: Dimensions.height * 305,
							}}
							source={require('../assets/food-image-4.png')}
						/>

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
							placeholder={'Enter the name of the menu'}
							value={menuName}
							onChangeText={(text) => setMenuName(text)}
						/>
						<Text
							style={{
								color: Colors.Black,
								fontSize: 18,
								marginHorizontal: Dimensions.width * 16,
								marginBottom: Dimensions.height * 12,
							}}
						>
							Ingredients
						</Text>
						{ingredients.map((ingredient) => (
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
								value={ingredient.name}
								editable={false}
							/>
						))}
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
							placeholder={'Add more ingredients'}
						/>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'space-between',
								alignItems: 'center',
								paddingHorizontal: Dimensions.width * 16,
							}}
						>
							<Text
								style={{
									color: Colors.Black,
									fontSize: 18,

									marginBottom: Dimensions.height * 12,
								}}
							>
								Food Recpie
							</Text>
							<ToggleSwitch
								isOn={toggleOn}
								onToggle={(isOn) => setToggleOn(isOn)}
								onColor={Colors.Green01}
							/>
						</View>
						{toggleOn ? (
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
								placeholder={'Enter your recipe'}
								multiline={true}
							/>
						) : undefined}
					</ScrollView>
					<Pressable
						style={{
							alignSelf: 'center',
							width: Dimensions.width * 343,
							height: Dimensions.height * 50,
							backgroundColor: menuName !== '' ? Colors.Green01 : '#BCBCBC',
							justifyContent: 'center',
							alignItems: 'center',
							borderRadius: 6,
						}}
					>
						<Text
							style={{
								color: 'white',
								fontSize: 16,
							}}
						>
							Done
						</Text>
					</Pressable>
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
