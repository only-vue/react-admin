import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import menuList from '../../routes/menuConfig';
import { storage } from '../../utils/util.js';
const { SubMenu } = Menu;

export default class MenuTree extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			openKeys: ['1'], //初始化选中
			rootSubmenuKeys: [],//一级菜单key值
			menuList:[], //菜单列表
			selectedKeys: ['1'] //每次选中值
		}
	}


	//初始化加载
	componentDidMount() {
		let author = storage.getStorage('user').author;
		menuList.forEach(item => {
			if (author.includes(item.key)) {
				item.hidden = true;
			}
			this.state.rootSubmenuKeys.push(item.id);
		})
		this.setState({menuList});
		this.handleSetSelectedKeys(this.props.location.location.pathname);
	}
	render() {
		return (
			<Menu
				mode="inline"
				theme="dark"
				openKeys={this.state.openKeys}
				defaultSelectedKeys={this.state.openKeys}
				selectedKeys={this.state.selectedKeys}
				onOpenChange={this.onOpenChange}
				onClick={this.onTitleClick}
			>
				{
					this.state.menuList.map(item => {
						return (
							item.hidden && (
								item.isChildren ?
									<SubMenu

										key={item.id}
										title={
											<span>
												<Icon type={item.icon} />
												<span>{item.title}</span>
											</span>
										}
									>
										{
											item.children && item.children.map((subItem, index) => {
												return <Menu.Item key={subItem.id}>
													<Link to={subItem.path}>{subItem.title}</Link>
												</Menu.Item>
											})
										}

									</SubMenu> : <Menu.Item key={item.id}>
										<Link to={item.path}>
											<Icon type={item.icon} /> {!this.props.collapsed && item.title}
										</Link>
									</Menu.Item>
							)
						)
					})
				}


			</Menu>
		);
	}

	//路由回显加载
	handleSetSelectedKeys(pathname) {
		menuList.forEach(item => {
			if (item.children) {
				item.children.forEach(subItem => {
					if (pathname === subItem.path) {
						this.setState({
							openKeys: [subItem.id.slice(0, 1)],
							selectedKeys: [subItem.id]
						})
					} else {
						subItem.children && subItem.children.forEach(threeItem => {
							if (pathname === threeItem.path) {
								this.setState({
									openKeys: [subItem.id.slice(0, 1)],
									selectedKeys: [subItem.id]
								})
							}
						})
					}
				})
			}

		})

	}

	//切换菜单展开与收缩
	onOpenChange = openKeys => {
		const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
		if (this.state.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
			this.setState({ openKeys });
		} else {
			this.setState({
				openKeys: latestOpenKey ? [latestOpenKey] : []
			});
		}
	};
	//切换二级菜单内容
	onTitleClick = item => {
		this.setState({
			selectedKeys: [item.key]
		})
		if (item.key === '1') {
			this.setState({
				openKeys: ['1']
			});
		}
	}
}