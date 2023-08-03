module.exports = {
	content: ["./**/*.{html,js}"],
	theme: {
		screens: {
			sm: "375px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		extend: {
			colors: {
				Orange: "hsl(26, 100%, 55%)",
				Palorange: "hsl(25, 100%, 94%)",
				Verydarkblue: "hsl(220, 13%, 13%)",
				Darkgrayishblue: "hsl(219, 9%, 45%)",
				Grayishblue: "hsl(220, 14%, 75%)",
				Lightgrayishblue: "hsl(223, 64%, 98%)",
				White: "hsl(0, 0%, 100%)",
				Black: "hsl(0, 0%, 0%)",
			},
		},
	},
	plugins: [],
};
