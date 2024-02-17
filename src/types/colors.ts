export type Colors = keyof typeof PalletColors;

export const PalletColors = {
	'black-100': 'color-black-100',
	'black-200': 'color-black-200',
	'black-300': 'color-black-300',
	'blue-100': 'color-blue-100',
	'blue-200': 'color-blue-200',
	'blue-300': 'color-blue-300',
	'blue-400': 'color-blue-400',
	'blue-500': 'color-blue-500',
	'blue-600': 'color-blue-600',
	'gray-100': 'color-gray-100',
	'gray-200': 'color-gray-200',
	'gray-300': 'color-gray-300',
	'gray-400': 'color-gray-400',
	'green-100': 'color-green-100',
	'green-200': 'color-green-200',
	'green-300': 'color-green-300',
	'green-400': 'color-green-400',
	'green-500': 'color-green-500',
	'green-600': 'color-green-600',
	'pink-100': 'color-pink-100',
	'pink-200': 'color-pink-200',
	'pink-300': 'color-pink-300',
	'pink-400': 'color-pink-400',
	'pink-500': 'color-pink-500',
	'pink-600': 'color-pink-600',
	'purple-100': 'color-purple-100',
	'purple-200': 'color-purple-200',
	'purple-300': 'color-purple-300',
	'purple-400': 'color-purple-400',
	'purple-500': 'color-purple-500',
	'purple-600': 'color-purple-600',
	'red-100': 'color-red-100',
	'red-200': 'color-red-200',
	'red-300': 'color-red-300',
	'red-400': 'color-red-400',
	'red-500': 'color-red-500',
	'red-600': 'color-red-600',
	'yellow-100': 'color-yellow-100',
	'yellow-200': 'color-yellow-200',
	'yellow-300': 'color-yellow-300',
	'yellow-400': 'color-yellow-400',
	'yellow-500': 'color-yellow-500',
	'yellow-600': 'color-yellow-600',
	'outline-black': 'color-black',
	'outline-blue': 'color-blue',
	'outline-gray': 'color-gray',
	'outline-green': 'color-green',
	'outline-pink': 'color-pink',
	'outline-purple': 'color-purple',
	'outline-red': 'color-red',
	'outline-white': 'color-white',
	'outline-yellow': 'color-yellow',
} as const;

export type BasicColors =
	| 'blue'
	| 'red'
	| 'yellow'
	| 'green'
	| 'gray'
	| 'white'
	| 'purple'
	| 'pink';