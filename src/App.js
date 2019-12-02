import React from 'react';
import { LocaleProvider, Layout } from 'antd';
import 'antd/dist/antd.css';
import MenuTree from "./components/menu/menu.js";
import BreadcrumbCustom from './components/breadcrumbCustom';
import Header from './components/header';
import Main from './routes/routes';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import './assets/css/public.scss';
const { Sider, Content } = Layout;

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			collapsed: false,
		};
	}


	toggle = () => {
		this.setState({
			collapsed: !this.state.collapsed,
		});
	};

	componentDidMount() {
		moment.locale('zh-cn');
	}

	render() {
		return (
			<LocaleProvider locale={zhCN}>
				<Layout>
					<Layout className="at-header">
						<Header toggle={this.toggle} collapsed={this.state.collapsed} />
					</Layout>
					<Layout className="at-layout">
						{
							!this.state.collapsed && <Sider trigger={null} collapsible collapsed={this.state.collapsed} className="at-menu">
								<MenuTree collapsed={this.state.collapsed} location={this.props} />
							</Sider>
						}
						<Content className="at-main">
							<BreadcrumbCustom />
							<Main />
						</Content>
					</Layout>
				</Layout>
			</LocaleProvider>
		);
	}
}

