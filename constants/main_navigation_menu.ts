export type MainNavMenu = {
	name: string
	path: string
	visibility: {
		header: boolean
		footer: boolean
	},
	submenu?: any
}

export const mainNavMenus: MainNavMenu[] = [
	{
		name: 'Artikel',
		path: '/',
		visibility: {
			header: true,
			footer: true,
		},
		submenu: [
			{
				name: 'Aksi Cinta Bumi',
				path: '/',
			},
			{
				name: 'BLIBLI BIG START INDONESIA',
				path: '/',
			},
			{
				name: 'BLIBLI FLASH NEWS',
				path: '/',
			},
			{
				name: 'COMMUNITY',
				path: '/',
			},
			{
				name: 'SAHABAT IBU PINTAR',
				path: '/',
			},
			{
				name: 'SAHABAT PERJALANANMU',
				path: '/',
			}
		]
	},
	{
		name: 'Kuis',
		path: '/',
		visibility: {
			header: true,
			footer: true,
		},
		submenu: []
	},
	{
		name: 'Video',
		path: '/',
		visibility: {
			header: true,
			footer: true,
		},
		submenu: []
	},
	{
		name: 'Tantangan',
		path: '/',
		visibility: {
			header: true,
			footer: true,
		},
		submenu: []
	}
]

export const footerNavMenus: MainNavMenu[] = [
	{
		name: 'Kuis',
		path: '/',
		visibility: {
			header: true,
			footer: true,
		},
		submenu: []
	},
	{
		name: 'Video',
		path: '/',
		visibility: {
			header: true,
			footer: true,
		},
		submenu: []
	},
	{
		name: 'Voucher',
		path: '/',
		visibility: {
			header: true,
			footer: true,
		},
		submenu: []
	},
	{
		name: 'Tantangan',
		path: '/',
		visibility: {
			header: true,
			footer: true,
		},
		submenu: []
	}
]