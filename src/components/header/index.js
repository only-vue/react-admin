import React from 'react';
import history from '../history/history.js';
import { Layout, Menu, Icon } from 'antd';
import { storage } from '../../utils/util.js';
const { Header } = Layout;

export default class HeaderCustom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        userName: 'zhaohong'
			}
    };
	}
	
  //退出登录
  logout = () => {
    storage.removeStorage('user');
    history.push('/login');
  };

  render() {
    return (
      <Header>
				<div className="logo">
           &nbsp;
				</div>
        <div className="content">
						<Icon
							className="trigger"
							type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
							onClick={this.props.toggle}
						/>
						<Menu mode="horizontal" style={{ lineHeight: '64px', float: 'right' }}>
							<Menu.Item>
								<Icon type="user" style={{ fontSize: 16 }} />
								{this.state.user.userName}
							</Menu.Item>
							<Menu.Item key="schedule">
								<span onClick={this.logout}>退出</span>
							</Menu.Item>
						</Menu>
				</div>
      </Header>
    );
  }
}
