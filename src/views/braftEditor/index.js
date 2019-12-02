import React from 'react';
import BraftEditor from '../../components/braftEditor';
export default class braftEditor extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}
	render() {
		return (
			<div>
			  <BraftEditor onChange={this.onChange.bind(this)} />
			</div>
		)
	}

	//得到编辑器参数回调
	onChange(value){
   console.log(value)
	}
	
	
}