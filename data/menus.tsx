import { menu } from '../types';

export const menus: menu[] = [
	{
		key: 'Brussels Sprouts Soup',
		name: 'Brussels Sprouts Soup',
		ingredients: [
			{
				key: 'butter',
				name: 'butter',
				category: 'dairy',
			},
			{
				key: 'olive oil',
				name: 'olive oil',
				category: 'veggies',
			},
			{
				key: 'sweet onions',
				name: 'sweet onions',
				category: 'veggies',
			},
			{
				key: 'portabella ',
				name: 'portabella',
				category: 'veggies',
			},
			{
				key: 'mushrooms',
				name: 'mushrooms',
				category: 'veggies',
			},
			{
				key: 'celery',
				name: 'celery',
				category: 'veggies',
			},
			{
				key: 'carrot',
				name: 'carrot',
				category: 'veggies',
			},
			{
				key: 'garlic cloves',
				name: 'garlic cloves',
				category: 'veggies',
			},
		],
		date: new Date(),
		time: 'breakfast',
		imageSource: require('../assets/food-image-1.png'),
	},
	{
		key: 'Apple Pie',
		name: 'Apple Pie',
		ingredients: [
			{
				key: 'butter',
				name: 'butter',
				category: 'dairy',
			},
			{
				key: 'apple',
				name: 'apple',
				category: 'fruit',
			},
			{
				key: 'Cinnamon',
				name: 'Cinnamon',
				category: 'veggies',
			},
			{
				key: 'Flour',
				name: 'Flour',
				category: 'cereals',
			},
			{
				key: 'Sugar',
				name: 'Sugar',
				category: 'cereals',
			},
			{
				key: 'Pastry',
				name: 'Pastry',
				category: 'cereals',
			},
		],
		date: new Date(),
		time: 'breakfast',
		imageSource: require('../assets/food-image-2.png'),
	},
	{
		key: 'Gunkan Maki Sushi',
		name: 'Gunkan Maki Sushi',
		ingredients: [
			{
				key: 'sushi rice',
				name: 'sushi rice',
				category: 'cereals',
			},
			{
				key: 'salmon',
				name: 'salmon',
				category: 'seafood',
			},
			{
				key: 'avocado',
				name: 'avocado',
				category: 'veggies',
			},
			{
				key: 'cream cheese',
				name: 'cream cheese',
				category: 'dairy',
			},
			{
				key: 'nori',
				name: 'nori',
				category: 'veggies',
			},
		],
		date: new Date(),
		time: 'breakfast',
		imageSource: require('../assets/food-image-3.png'),
	},
	{
		key: 'Garlic Bread',
		name: 'Garlic Bread',
		ingredients: [
			{
				key: 'butter',
				name: 'butter',
				category: 'dairy',
			},
			{
				key: 'milk',
				name: 'milk',
				category: 'dairy',
			},
			{
				key: 'white sugar',
				name: 'white sugar',
				category: 'cereals',
			},
			{
				key: 'salt',
				name: 'salt',
				category: 'cereals',
			},
			{
				key: 'dried parsely',
				name: 'dried parsely',
				category: 'veggies',
			},
			{
				key: 'garlic powder',
				name: 'garlic powder',
				category: 'cereals',
			},
			{
				key: 'bread flour',
				name: 'bread flour',
				category: 'cereals',
			},
			{
				key: 'active yeast',
				name: 'active yeast',
				category: 'cereals',
			},
		],
		date: new Date(),
		time: 'breakfast',
		imageSource: require('../assets/food-image-5.png'),
	},
];
