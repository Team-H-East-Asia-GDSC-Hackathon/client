import { View, Text } from 'react-native';
import Colors from '../constants/Colors';
import Dimensions from '../constants/Dimensions';
import Tag from './Tag';

export default function MenuItem() {
	return (
		<>
			<View
				style={{
					width: Dimensions.width * 343,
					height: Dimensions.height * 158,
					borderTopLeftRadius: 15,
					borderTopRightRadius: 15,
					backgroundColor: 'gray',
					marginTop: Dimensions.height * 20,
				}}
			></View>
			<View
				style={{
					width: Dimensions.width * 343,
					height: Dimensions.height * 96,
					borderBottomLeftRadius: 15,
					borderBottomRightRadius: 15,
					backgroundColor: 'pink',
					paddingVertical: Dimensions.height * 18,
					paddingHorizontal: Dimensions.width * 20,
				}}
			>
				<Text
					style={{
						color: Colors.Black,
						fontSize: 18,
					}}
				>
					Egg Salad
				</Text>
				<View
					style={{
						width: Dimensions.width * 303,
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'space-between',
						marginTop: Dimensions.height * 15,
						marginBottom: Dimensions.height * 20,
					}}
				>
					<Tag name='Egg' />
					<Tag name='Egg' />
					<Tag name='Egg' />
					<Tag name='Egg' />
					<Tag name='Egg' />
					<Tag name='Egg' />
				</View>
			</View>
		</>
	);
}
