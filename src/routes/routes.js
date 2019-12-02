import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import AllComponents from './AllComponents';
import { getRouteList } from '../utils/util';
import history from '../components/history/history.js';
import { Layout } from 'antd';
export default class newRouters extends React.Component {
	state = {
		routers: []
	}
	componentDidMount() {
		this.setState({
			routers: getRouteList()
		});

	}
	render() {
		return (
			<Layout className="ant-main">
				<Router history={history}>
					<Switch>
						{
							this.state.routers.map((item, key) => {
								return (
									<Route exact path={item.path} key={key} component={AllComponents[item.component]} />
								)
							})
						}
					</Switch>
				</Router>
			</Layout>
		);
	}
}
