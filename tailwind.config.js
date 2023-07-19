module.exports = {
	content: ["./src/index.html", "./src/components/*.{js, jsx}"],
	theme: {
		screens: {
			// tablet: "640px",
			// laptop: "1024px",
			// desktop: "1280px",
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
		},
		colors: {
			transparent: "transparent",
			current: "currentColor",
			blue: {
				DEFAULT: "#4452FE",
				900: "#112D57",
			},
			black: {
				DEFAULT: "#000000",
				900: "#181818",
			},
			white: "#ffffff",
			teal: "#02E4C0",
			grey: "#5C5C5C",
		},
		fontFamily: {
			graphik: "Graphik",
			roboto: "Roboto",
		},
		container: {
			center: "true",
		},
	},
	variants: {
		extend: {},
	},
	plugins: ["prettier-plugin-tailwindcss"],
};
