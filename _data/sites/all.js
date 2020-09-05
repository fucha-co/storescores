module.exports = {
	name: "all", // optional, falls back to object key
	description: "See the latest store scores",
	options: {
		frequency: 60 * 1, // (in minutes), 23 hours
	},
	urls: [
		"https://sensorylab.com.au/",
		"https://ivyandwood.com.au/",
		"https://www.pushas.com/",
		"https://www.culturekings.com.au/",
		"https://shopmrbeast.com/",
		"https://stali.com.au/",
	]
};