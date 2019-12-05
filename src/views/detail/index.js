import React from 'react';
import Detail from '../../components/detail';
export default class Details extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}
	render() {
		return (
			<div>
			  <Detail 
          title="借款人信息"
					formData={
						[
							{
								name:'姓名',
                key:'次仁嘎娃'
							},
							{
								name:'客户身份证号',
                key:'510000000000000000'
							},
							{
								name:'手机号',
                key:'15000000000'
							},
							{
								name:'年纪',
                key:'32'
							},
							{
								name:'邮箱',
                key:'1055626@qq.com'
							},
							{
								name:'出生日期',
                key:'2018-12-12'
							},
							{
								name:'婚姻状况',
                key:'已婚'
							},
							{
								name:'配偶姓名',
                key:'张张张'
							}
						]
					}
					formBtn={
							[
								
								{
									type:'primary',
									title:'返回',
									onClick:this.callbackForm.bind(this),
								}

							]
						}
				/>
			</div>
		)
	}

	//表单返回
  callbackForm(){
    this.props.history.push('/app/table')
	}
	
}