import {
	CompositeScreenProps,
	NavigatorScreenParams,
} from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { ImageSourcePropType } from 'react-native';

declare global {
	namespace ReactNavigation {
		interface RootParamList extends RootStackParamList {}
	}
}

export type RootStackParamList = {
	Root: NavigatorScreenParams<RootTabParamList> | undefined;
};

export type RootTabParamList = {
	Search: undefined;
	Home: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
	NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
	CompositeScreenProps<
		BottomTabScreenProps<RootTabParamList, Screen>,
		NativeStackScreenProps<RootStackParamList>
	>;

export type veganType = {
	key: string;
	name: string;
	fruit: boolean;
	veggies: boolean;
	cereals: boolean;
	dairy: boolean;
	eggs: boolean;
	seafood: boolean;
	meat: boolean;
};

export type menu = {
	key: string;
	name: string;
	ingredients: Array<ingredient>;
	date: Date;
	time: 'breakfast' | 'launch' | 'dinner';
	imageSource: ImageSourcePropType;
};

export type ingredient = {
	key: string;
	name: string;
	category:
		| 'fruit'
		| 'veggies'
		| 'cereals'
		| 'dairy'
		| 'eggs'
		| 'seafood'
		| 'meat';
};
