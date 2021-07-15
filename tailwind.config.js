module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			spacing: {
				"50": "50rem",
				"34": "2.125rem",
				"987": "61.6875rem"
			},
			rotate: {
				"30": "-30deg"
			}
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
