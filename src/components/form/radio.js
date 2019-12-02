

import React, { Component } from 'react';
import { Radio } from 'antd';
import './style.scss';

export default class RadioBox extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}
	render() {
		return (
			<div>
				<Radio.Group
					onChange={this.props.onChange && this.props.onChange}
					defaultValue={this.props.initValue}
				>
					{
						this.props.Options.map(el => {
							return (
								<Radio key={el.value} value={el.value}>{el.label}</Radio>
							)
						})
					}
				</Radio.Group>
			</div>
		)
	}
}

