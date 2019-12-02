

import React, { Component } from 'react';
import { Form, Input, Button, Select } from 'antd';
import './style.scss';
const FormItem = Form.Item;
const { Option } = Select;
class Forms extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}

	}
	render() {
		const { getFieldDecorator } = this.props.form;

		return (
			<div>
				<Form>
					{
						this.props.searchData.map((item, index) => {
							return (
								<FormItem
									key={index}
									label={item.isTitle && item.title}
								>
									{
										item.type === 'input' &&
										getFieldDecorator(item.title, {
											initialValue: item.key,
											rules: item.rules ? item.rules : [],
										})(
											<Input
												minLength={item.minLength ? item.minLength : null}
												maxLength={item.maxLength ? item.maxLength : null}
												onChange={item.onChange && item.onChange}
												prefix={item.prefix ? item.prefix : null}
												placeholder={item.placeholder}
											/>
										)

									}
									{
										(item.type === 'select') &&
										getFieldDecorator(item.title, {
											initialValue: item.key && item.key,
											rules: item.rules ? item.rules : [],
										})(
											<Select
												placeholder={item.placeholder}
												style={{ width: item.width ? item.width : 120 }}
												disabled={item.disabled && item.disabled}
												onChange={item.onChange && item.onChange}
												
											>
												{
													item.Options.map(el => {
														return <Option key="el.value" value={el.value}>{el.label}</Option>
													})
												}
											</Select>
										)

									}
								</FormItem>
							)
						})

					}
					<div className="search-btns">
						{
							this.props.searchBtns && this.props.searchBtns.map((item, key) => {
								return (
									<Button
										type={item.type}
										key={key}
										onClick={item.onClick && item.onClick}
									>
										{item.title}
									</Button>
								)
							})
						}

					</div>
				</Form>
			</div >
		)
	}
}

export default Form.create()(Forms);