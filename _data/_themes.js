module.exports = {
	name: "themes", // optional, falls back to object key
	description: "See the latest store scores",
	options: {
		frequency: 60 * 1, // (in minutes), 23 hours
	},
	urls: [
		"https://debut-theme-default.myshopify.com/",
		"https://debut-theme-lightroom.myshopify.com/",
	]
};