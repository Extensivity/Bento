// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Exten',
	imageBackground: false,
	openInNewTab: true,
	twelveHourFormat: true,

	// Greetings
	greetingMorning: 'Good morning,',
	greetingAfternoon: 'The sun feels good, doesn\'t it',
	greetingEvening: 'The perfect time to relax, don\'t you think',
	greetingNight: 'There is peaceful darkness outside,',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: 'd05b4d4a62b60a1b04d6ea2982cd5b51', // Write here your API Key
	weatherIcons: 'White', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'F', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '36.119244',
	defaultLongitude: '-115.290151',

	// Autochange
	autoChangeTheme: false,

	// Autochange by OS
	changeThemeByOS: false,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Mail',
			icon: 'mail',
			link: 'https://gmail.com',
		},
		{
			id: '2',
			name: 'Todoist',
			icon: 'check-square',
			link: 'https://todoist.com',
		},
		{
			id: '3',
			name: 'Calendar',
			icon: 'calendar',
			link: 'https://calendar.google.com/calendar/r',
		},
		{
			id: '4',
			name: 'Trello',
			icon: 'trello',
			link: 'https://www.trello.com',
		},
		{
			id: '5',
			name: 'Reddit',
			icon: 'star',
			link: 'https://www.reddit.com',
		},
		{
			id: '6',
			name: 'Arch Linux',
			icon: 'cpu',
			link: 'https://archlinux.org',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Reddit',
			icon: 'music',
			link: 'https://reddit.com',
		},
		{
			id: '2',
			name: 'Twitter',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
		{
			id: '3',
			name: 'Discord',
			icon: 'bot',
			link: 'https://discord.com/app',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'https://amazon.com/',
		},
		{
			id: '5',
			name: 'Hashnode',
			icon: 'pen-tool',
			link: 'https://hashnode.com/',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: 'https://figma.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'youtube',
			id: '1',
			links: [
				{
					name: 'YouTube',
					link: 'https://www.youtube.com',
				},
				{
					name: 'Anime',
					link: 'https://www.crunchyroll.com/',
				},
				{
					name: 'Netflix',
					link: 'https://www.netflix.com/',
				},
				{
					name: 'Hulu',
					link: 'https://www.hulu.com',
				},
			],
		},
		{
			icon: 'briefcase',
			id: '2',
			links: [
				{
					name: 'Portfolio',
                    link: 'https://portfoliowebsite-extensivity.vercel.app'
				},
				{
					name: 'Github',
					link: 'https://github.com/',
				},
				{
					name: 'Linkedin',
					link: 'https://www.linkedin.com',
					link: 'https://www.trello.com',
				},
				{
					name: 'Figma',
					link: 'https://figma.com/',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'binary',
			id: '1',
			links: [
				{
					name: 'Spotify',
					link: 'https://www.spotify.com',
				},
				{
					name: 'Reddit',
					link: 'https://www.reddit.com',
				},
				{
					name: 'Hashnode',
					link: 'https://www.hashnode.com',
				},
				{
					name: 'Pocket',
					link: 'https://www.pocket.com',
				},
			],
		},
		{
			icon: 'github',
			id: '2',
			links: [
				{
					name: 'Front',
					link: 'https://www.reddit.com/r/Frontend/',
				},
				{
					name: 'Rust',
					link: 'https://www.reddit.com/r/rust/',
				},
				{
					name: 'Go',
					link: 'https://www.reddit.com/r/golang/',
				},
				{
					name: 'Repos',
					link: 'https://github.com/extensivity',
				},
			],
		},
	],
};
