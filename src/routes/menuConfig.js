
const menuList = [
	{

		id: '1',
		key: 'menu1',
		icon: 'exception',
		title: '菜单一',
		path: 'table',
		routerPath: '/app/table',
		isChildren: true,
		children: [
			{
				id: '1-1',
				title: '列表',
				path: '/app/table',
				component: 'Table',
				children: [
					{
						id: '1-1-1',
						title: '新增',
						path: '/app/tableAdd',
						component: 'TableAdd',
					}
				]
			},
			{
				id: '1-2',
				title: '详情页',
				path: '/app/detail',
				component: 'Detail'
			},
			{
				id: '1-3',
				title: '文本编辑器',
				path: '/app/braftEditor',
				component: 'BraftEditor'
			}
		]
	},
	{

		id: '2',
		key: 'menu2',
		icon: 'exception',
		title: '菜单二',
		path: 'demo3',
		routerPath: '/app/demo3',
		isChildren: true,
		children: [
			{
				id: '2-1',
				title: '菜单2-1',
				path: '/app/demo3',
				component: 'Demo3'
			},
			{
				id: '2-2',
				title: '菜单2-2',
				path: '/app/demo4',
				component: 'Demo4'
			}
		]
	}

]

export default menuList;