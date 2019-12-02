import React from 'react';
import Search from "../../components/search";
import Table from '../../components/table';
import { modalConfirm,getDate,keyData } from '../../utils/util.js';
// import * as Request from "../../service/dataMange";
import { Icon } from "antd";


export default class List extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			account: '', //账号
			dataSource: [], //列表数据
			pagination: { //分页控制
				showQuickJumper: true,
				showSizeChanger: true,
				defaultCurrent: 1,
				current: 1,
				pageSize: 10,
				total: 10,
				onChange: this.onChangePage.bind(this),
				onShowSizeChange: this.onShowSizeChange.bind(this)
			}

		}
	}

	componentDidMount() {
		this.getInitData();
	}
	//初始化数据
	getInitData = async () => {
	
	
	}
	render() {
		return (
			<div>
				<div className='searchBody layout'>
					<Search
						searchData={
							[
								{
									key: this.state.account,
									title: '账号',
									type: 'input',
									isTitle: false,
									maxLength:11,
									onChange: this.onChangeSearch.bind(this, 'account'),
									placeholder: '请输入账号'
								}
							]
						}
						searchBtns={
							[
								{
									title: '搜索',
									type: 'primary',
									onClick: this.onSearch
								},
								{
									title: '新增',
									type: 'danger',
									onClick: this.addClick
								}
							]
						}
					/>

					<Table
						columns={
							[
								{
									title: '创建时间',
									dataIndex: 'created',
									render: (text, record) =>
									<div>{getDate(record.created)}</div>
								},
								{
									title: '账号',
									dataIndex: 'userName'
								},
								{
									title: '数据范围说明',
									dataIndex: 'address'
								},
								{
									title: '操作',
									dataIndex: 'opera',
									width: 300,
									render: (text, record) =>
										<div className='opera'>
											<span onClick={() => this.editClick(record)}>
												<Icon type="edit" /> 编辑自定义数据
                      </span>
											<span onClick={() => this.delClick(record)}>
												<Icon type="minus-square-o" /> 删除自定义数据
											</span>
										</div>
								}
							]
						}
						dataSource={this.state.dataSource}
						pagination={this.state.pagination}
					/>
				</div>
			</div>
		)
	}
	//新增
	addClick = async () => {
		this.props.history.push({
			pathname: '/app/tableAdd'
		});
	}

	//编辑
	editClick = async (record) => {
		this.props.history.push({
			pathname: '/app/alarmTrendAdd',
			state:{
				isEdit: true,
				userId: record.userId,
				userName: record.userName
			}
		});
	}

	//删除
	delClick = async (value) => {
		modalConfirm(	`你确认删除${value.userName}账号的自定义报警趋势数据吗？`, () => {
			let params = {
				userId: value.userId
			}
			Request.deleteWarnTrend(params).then(
				response => {
					this.getInitData();
				}
			);


		})
	}

	//获取搜索内容
	onChangeSearch = async (key, e) => {
		this.setState({
			[key]: e.target.value
		})
	}

	//加载搜索回调内容
	onSearch = async () => {
		this.getInitData();
	}

	//选择分页切换page变化
	onChangePage = async (page, pageSize) => {
		let pagination = Object.assign({}, this.state.pagination, {
			current: page,
			pageSize
		});
		this.setState(
			{
				pagination
			},
			() => {
				this.getInitData();
			}
		);
	}
	//选择分页数量 pageSize变化
	onShowSizeChange = async (current, pageSize) => {
		let pagination = Object.assign({}, this.state.pagination, {
			current: 1,
			pageSize: pageSize
		});
		this.setState(
			{
				pagination
			},
			() => {
				this.getInitData();
			}
		);

	}
}