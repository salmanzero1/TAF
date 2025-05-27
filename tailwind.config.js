/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/views/**/*.{js,pug}"],
	theme: {
		extend: {
			rotate: {
				'y-180': 'rotateY(180deg)',
			}
		},
		container: {
			center: true,
		},
	},
	safelist: [
		'w-[28px]', '!w-[28px]', '!rounded-[8px]', '!mx-[2px]'
	],
	plugins: [],
};
