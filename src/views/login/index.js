import React from 'react';
import Loading from '../../components/loading';
import { Form, Icon, Input, Button } from 'antd';
import { storage } from '../../utils/util.js';
import './style.scss';

const FormItem = Form.Item;

class LoginForm extends React.Component {
	state = {
		userName: 'zhaohong',
		password: '123456'
	};

	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<div className="login-warp">
				<div className="logo">
					<img src={require('../../assets/images/logo.png')} alt="富勤好贷业务工作台" />
				</div>
				<div className="main">
					<div className="title"> 富勤好贷业务工作台 </div>
					<div className="content">
						<div className="tips"> 登录 </div>
						<Form
							className="forms"
							onSubmit={this.handleSubmit}
							style={{
								maxWidth: '300px'
							}}
						>
							<FormItem>
								{getFieldDecorator('userName', {
									initialValue: this.state.userName,
									rules: [
										{
											required: true,
											message: '请输入用户名!'
										}
									]
								})(
									<Input
										prefix={
											<Icon
												type="user"
												style={{
													fontSize: 13
												}}
											/>
										}
										placeholder="请输入用户名"
									/>
								)}
							</FormItem>
							<FormItem>
								{getFieldDecorator('password', {
									initialValue: this.state.password,
									rules: [
										{
											required: true,
											message: '请输入密码!'
										},
										{
											pattern: new RegExp(/^[A-Za-z0-9\u4e00-\u9fa5]+$/, 'g'),
											max: 11,
											min: 11,
											message: '请输入输入类型为数字、字母或汉字'
										}
									]
								})(
									<Input
										prefix={
											<Icon
												type="lock"
												style={{
													fontSize: 13
												}}
											/>
										}
										type="password"
										placeholder="请输入密码"
									/>
								)}
							</FormItem>
							<Button
								type="primary"
								htmlType="submit"
								className="login-button"
								style={{
									width: '100%'
								}}
							>
								登录
              </Button>
						</Form>
					</div>
				</div>
			</div>
		);
	}
	//提交表单
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFields((err, params) => {
			if (!err) {
				// Loading.show();
				storage.setStorage('user', {
					author: ['menu1', 'menu2']
				}); //存入权限列表-对应menu的key
				this.props.history.push('/app');
			}
		});
	};
}

const Login = Form.create()(LoginForm);
export default Login;
