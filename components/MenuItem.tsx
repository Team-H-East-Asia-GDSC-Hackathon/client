import { View, Text, Image, ScrollView } from 'react-native';
import Colors from '../constants/Colors';
import Dimensions from '../constants/Dimensions';
import { menu } from '../types';
import Tag from './Tag';

export default function MenuItem(props: { data: menu }) {
	return (
		<>
			<Image
				style={{
					width: Dimensions.width * 343,
					height: Dimensions.height * 158,
					borderTopLeftRadius: 15,
					borderTopRightRadius: 15,
					marginTop: Dimensions.height * 20,
				}}
				source={props.data.imageSource}
			/>
			<ScrollView
				style={{
					width: Dimensions.width * 343,
					height: Dimensions.height * 96,
					borderBottomLeftRadius: 15,
					borderBottomRightRadius: 15,
					backgroundColor: 'white',
					borderColor: '#A9DEC8',
					borderWidth: 1,
					paddingVertical: Dimensions.height * 18,
					paddingHorizontal: Dimensions.width * 20,
				}}
				horizontal={true}
				showsHorizontalScrollIndicator={false}
			>
				<View
					style={{
						flexDirection: 'column',
					}}
				>
					<Text
						style={{
							color: Colors.Black,
							fontSize: 18,
						}}
					>
						{props.data.name}
					</Text>
					<View
						style={{
							width: Dimensions.width * 303,
							height: Dimensions.height * 25,
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'space-between',
							marginTop: Dimensions.height * 15,
							marginBottom: Dimensions.height * 20,
						}}
					>
						{props.data.ingredients.map((ingredient) => (
							<Tag name={ingredient.name} />
						))}
					</View>
				</View>
			</ScrollView>
		</>
	);
}
