import { Pressable, Text, View } from 'react-native';
import Dimensions from '../constants/Dimensions';
import Colors from '../constants/Colors';
import { veganType } from '../types';
import Fruit from '../assets/include-fruit.svg';
import Veggies from '../assets/include-veggies.svg';
import IncludeCereals from '../assets/include-cereals.svg';
import IncludeDairy from '../assets/include-dairy.svg';
import IncludeEggs from '../assets/include-eggs.svg';
import IncludeSeafood from '../assets/include-seafood.svg';
import IncludeMeat from '../assets/include-meat.svg';
import NoCereals from '../assets/no-cereals.svg';
import NoDairy from '../assets/no-dairy.svg';
import NoEggs from '../assets/no-eggs.svg';
import NoSeafood from '../assets/no-seafood.svg';
import NoMeat from '../assets/no-meat.svg';

export default function VeganTypeItem(props: {
	data: veganType;
	veganTypeTemp: veganType;
	setVeganType: React.Dispatch<React.SetStateAction<veganType>>;
	setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) {
	return (
		<Pressable
			style={{
				width: Dimensions.width * 375,
				height: Dimensions.height * 86,
				backgroundColor:
					props.veganTypeTemp.name === props.data.name
						? Colors.Green04
						: 'white',
				borderColor:
					props.veganTypeTemp.name === props.data.name
						? Colors.Green03
						: '#CCCCCC',
				borderWidth: 0.5,
				paddingHorizontal: Dimensions.width * 31,
				paddingVertical: Dimensions.height * 18,
				justifyContent: 'space-between',
			}}
			onPress={() => {
				props.setVeganType(props.data);
				props.setModalVisible(false);
			}}
		>
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
				}}
			>
				<Text
					style={{
						color: Colors.Black,
						fontSize: 16,
					}}
				>
					{props.data.name}
				</Text>
				{props.veganTypeTemp.name === props.data.name ? (
					<Text
						style={{
							color: Colors.Green01,
							fontSize: 16,
						}}
					>
						My
					</Text>
				) : undefined}
			</View>
			<View
				style={{
					width: Dimensions.width * 150,
					flexDirection: 'row',
					justifyContent: 'space-between',
				}}
			>
				<Fruit />
				<Veggies />
				{props.data.cereals ? <IncludeCereals /> : <NoCereals />}
				{props.data.dairy ? <IncludeDairy /> : <NoDairy />}
				{props.data.eggs ? <IncludeEggs /> : <NoEggs />}
				{props.data.seafood ? <IncludeSeafood /> : <NoSeafood />}
				{props.data.meat ? <IncludeMeat /> : <NoMeat />}
			</View>
		</Pressable>
	);
}
