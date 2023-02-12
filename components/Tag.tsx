import { View, Text } from 'react-native';
import Colors from '../constants/Colors';
import Dimensions from '../constants/Dimensions';

export default function Tag(props: { name: string }) {
	return (
		<View
			style={{
				backgroundColor: Colors.Green04,
				paddingHorizontal: Dimensions.width * 5,
				height: Dimensions.height * 25,
				justifyContent: 'center',
				alignItems: 'center',
				borderRadius: 2,
				marginRight: Dimensions.width * 15,
			}}
		>
			<Text
				style={{
					color: Colors.Green01,
				}}
			>
				{props.name}
			</Text>
		</View>
	);
}
