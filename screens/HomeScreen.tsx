import * as React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Colors from '../constants/Colors';
import Dimensions from '../constants/Dimensions';
import { RootTabScreenProps } from '../types';

import LeftArrow from '../assets/left-arrow.svg';
import RightArrow from '../assets/right-arrow.svg';
export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
	return (
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
		</View>
	);
}
