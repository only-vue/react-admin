import React from 'react';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import { getRouteList } from '../../utils/util';

class BreadcrumbCustom extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			routerList: getRouteList()
		};
	}
	static propTypes = {
		location: PropTypes.object.isRequired
	};
  //处理当前路径获取到一套完整的导航数组
	getBreadList(pathname) {
		let pathSnippets = pathname.split('/').filter(i => i);
		let list = [];
		pathSnippets.forEach((el, index) => {
			let url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
			let subItem = this.state.routerList.find(i => i.path === url);
			if (subItem) {
				let tempItem = subItem['id'].split('-');
				let item = this.state.routerList.find(i => i.id === subItem.id.slice(0, 1));
				if (tempItem.length === 3) {
					let id = tempItem[0] + '-' + tempItem[1];
					if (item.children.length > 0) {
						item.children.forEach(el => {
							if (el.id === id) {
								list.push({
									path: el.path,
									title: el.title,
									click: true
								}, {
									path: subItem.path,
									title: subItem.title
								})
							}
						})
					}
				}
				else {
					list.push({
						path: subItem.path,
						title: subItem.title
					})
				}
				list.unshift(item);
			}
		});
		return list;
	}

	render() {
		const { location } = this.props;
		return (
			<span>
				<Breadcrumb style={{ margin: '16px 0 0' }}>
					{this.getBreadList(location.pathname).map((el, index) =>
						<Breadcrumb.Item key={index}>
							{
								el.click ? <Link to={el.path}>{el.title}</Link> : <span>{el.title}</span>
							}
						</Breadcrumb.Item>
					)}
				</Breadcrumb>
			</span>
		);
	}
}

export default withRouter(BreadcrumbCustom);
