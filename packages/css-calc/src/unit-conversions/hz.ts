export const convert_hz: Map<string, (number: number) => number> = new Map([
	[
		'hz',
		(x: number) => {
			return x;
		},
	],
	[
		'khz',
		(x: number) => {
			return x / 1000;
		},
	],
]);
