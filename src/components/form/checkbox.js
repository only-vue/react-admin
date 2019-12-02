

import React, { Component } from 'react';
import { Checkbox } from 'antd';
import './style.scss';

export default class CheckBox extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}
	render() {
		return (
			<div>
				 <Checkbox.Group 
				   options={this.props.Options} 
				   defaultValue={this.props.initValue} 
				   onChange={this.props.onChange} 
				/>
			</div>
		)
	}
}

