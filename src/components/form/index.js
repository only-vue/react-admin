

import React, { Component } from 'react';
import { Form, Input, Button, Select, DatePicker, InputNumber } from 'antd';
import './style.scss';
import moment from 'moment';
import CheckBox from './checkbox';
import Radio from './radio';
import UpLoad from '../upload/index';
const FormItem = Form.Item;
const { Option } = Select;
const { RangePicker } = DatePicker;

class Forms extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}

	}
	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<div className="formBody">
				<Form className={this.props.types ? this.props.types : 'single'}>
					{
						this.props.formData.map((item, index) => {
							return (
								<FormItem
									key={index}
									label={item.title}
								>
									{
										item.type === 'input' &&
										getFieldDecorator(item.key, {
											initialValue: item.value,
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
										getFieldDecorator(item.key, {
											initialValue: item.value && item.value,
											rules: item.rules ? item.rules : []
										})(
											<Select
												placeholder={item.placeholder}
												style={{ width: item.width ? item.width : 120 }}
												disabled={item.disabled && item.disabled}
												onChange={item.onChange && item.onChange}

											>
												{
													item.Options.map(el => {
														return (
															<Option key={el.value} value={el.value}>{el.label}</Option>
														)
													})
												}
											</Select>
										)

									}
									{
										(item.type === 'radio') &&
										getFieldDecorator(item.key, {
											initialValue: item.value && item.value,
											rules: item.rules ? item.rules : []
										})(
											<Radio
												initValue={item.value}
												Options={item.Options}
												onChange={item.onChange}
											/>
										)

									}

									{
										(item.type === 'Checkbox') &&
										getFieldDecorator(item.key, {
											initialValue: item.value && item.value,
											rules: item.rules ? item.rules : []
										})(
											<CheckBox
												initValue={item.value}
												Options={item.Options}
												onChange={item.onChange}
											/>

										)

									}

									{
										(item.type === 'inputNumber') &&
										getFieldDecorator(item.key, {
											initialValue: item.value && item.value,
											rules: item.rules ? item.rules : []
										})(
											<InputNumber
												min={item.min && item.min}
												max={item.max && item.max}
												onChange={item.onChange && item.onChange}
												placeholder={item.placeholder}
											/>
										)

									}

									{
										(item.type === 'datePicker') &&
										getFieldDecorator(item.key, {
											initialValue: item.value && item.value,
											rules: item.rules ? item.rules : []
										})(
											<DatePicker
												onChange={item.onChange && item.onChange}
												placeholder={item.placeholder}
											/>
										)

									}

									{
										(item.type === 'rangePicker') &&
										getFieldDecorator(item.key, {
											initialValue: item.value && item.value,
											rules: item.rules ? item.rules : []
										})(
											<RangePicker
												ranges={{
													Today: [moment(), moment()]
												}}
												onChange={item.onChange && item.onChange}
												placeholder={item.placeholder}
											/>
										)

									}

									{
										(item.type === 'upload') &&
										getFieldDecorator(item.key, {
											initialValue: item.value && item.value,
											rules: item.rules ? item.rules : []
										})(
											<UpLoad
												accept={item.accept && item.accept}
												onChange={item.onChange && item.onChange}
												multiple={item.multiple && item.multiple}
											/>

										)

									}
								</FormItem>
							)
						})

					}
					<div className="form-btns">
						{
							this.props.formBtn && this.props.formBtn.map((item, key) => {
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


			</div>
		)
	}
}

export default Form.create()(Forms);