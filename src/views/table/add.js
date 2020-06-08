import React from 'react';
import From from '../../components/form';
import { checkNull } from '../../utils/rule';
import moment from 'moment';
export default class Add extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			hypertensionTypes: '1',
			family: undefined,
			blood: undefined,
			bloodSugar: ['1'],
			diagnoseData: undefined,
			attackData: undefined,
			fileUp: []

		}
	}
	render() {
		return (
			<div>
				<From
					types="one-rows" //控制展示 one-rows单行 tow-rows双行 three-rows三行
					wrappedComponentRef={(form) => this.formRef = form}
					formData={
						[
							{
								key: 'name',
								title: '患者姓名',
								type: 'input',
								value: this.state.name,
								onChange: this.onChange.bind(this, 'name'),
								placeholder: '请输入患者姓名',
								rules: [
									checkNull('请输入患者姓名')
								]
							},
							{
								key: 'hypertensionTypes',
								title: '高血压类型',
								type: 'radio',
								Options: [
									{
										value: '1',
										label: '原发性'
									},
									{
										value: '2',
										label: '继发性'
									},
									{
										value: '3',
										label: '不详'
									}
								],
								value: this.state.hypertensionTypes,
								onChange: this.onChange.bind(this, 'hypertensionTypes')
							},
							{
								key: 'family',
								title: '家族史',
								type: 'select',
								Options: [
									{
										value: '1',
										label: '高血压'
									},
									{
										value: '2',
										label: '冠心病'
									}
								],
								value: this.state.family,
								onChange: this.onChange.bind(this, 'family'),
								placeholder: '请选择家族史',
								rules: [
									checkNull('请选择家族史')
								]
							},
							{
								key: 'bloodSugar',
								title: '血糖浓度',
								type: 'Checkbox',
								Options: [
									{
										value: '1',
										label: '200ml'
									},
									{
										value: '2',
										label: '300ml'
									},
									{
										value: '3',
										label: '400ml'
									}
								],
								value: this.state.bloodSugar,
								onChange: this.onChange.bind(this, 'bloodSugar'),
								rules: [
									checkNull('请选择血糖浓度', false)
								]
							},
							{
								key: 'blood',
								title: '右侧血压',
								type: 'inputNumber',
								min: 1,
								max: 2000,
								value: this.state.blood,
								onChange: this.onChange.bind(this, 'blood'),
								placeholder: '请输入右侧血压',
								rules: [
									checkNull('请输入右侧血压', false)
								]
							},
							{
								key: 'diagnoseData',
								title: '确诊时间',
								type: 'datePicker',
								value: this.state.diagnoseData,
								onChange: this.onChangeData.bind(this, 'diagnoseData'),
								placeholder: '请选择确诊时间',
								rules: [
									checkNull('请选择确诊时间', false)
								]
							},
							{
								key: 'attackData',
								title: '发病日期',
								type: 'rangePicker',
								value: this.state.attackData,
								onChange: this.onChangeData.bind(this, 'attackData'),
								placeholder: ['发病开始日期', '发病结束日期'],
								rules: [
									checkNull('请选择发病日期', false)
								]
							},
							{
								key: 'fileUp',
								title: '证件信息',
								type: 'upload',
								value: this.state.fileUp,
								onChange: this.onChange.bind(this, 'fileUp'),
								rules: [
									checkNull('请选择证件信息', false)
								]
							}
						]
					}
					formBtn={
						[
							{
								type: 'primary',
								title: '提交',
								onClick: this.submitForm.bind(this),
							},
							{
								type: 'danger',
								title: '返回',
								onClick: this.callbackForm.bind(this),
							}

						]
					}
				/>
			</div>
		)
	}
	//表单提交
	submitForm(e) {
		e.preventDefault();
		this.formRef.props.form.validateFields((err, params) => {
			if (!err) {
				this.props.history.push('/app/table');
			}
		});
	}
	//表单返回
	callbackForm() {
		this.props.history.push('/app/table')
	}

	//获取表单数据
	onChange(key, e) {
		this.setState({
			[key]: e
		})

	}
	//获取日期数据 
	onChangeData(key, date, dateString) {
		this.setState({
			[key]: dateString
		})
	}


}