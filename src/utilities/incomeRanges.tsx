export const ranges = [
	{ label: 'Under $50k', value: '<50' },
	{ label: '$50k to $100k', value: '50-100' },
	{ label: '$100k to $250k', value: '100-250' },
	{ label: 'Over $250k', value: '>250' },
]

export const suggestions = {
	'<50': [500, 1500, 2500],
	'50-100': [2000, 3500, 4500],
	'100-250': [4000, 6000, 10000],
	'>250': [9000, 15000, 18000],
}
