import * as React from 'react';
import { StatusBar } from 'react-native';
import { RecoilRoot } from 'recoil';
import Navigation from './navigation';

export default function App() {
	return (
		<RecoilRoot>
			<Navigation />
			<StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
		</RecoilRoot>
	);
}
