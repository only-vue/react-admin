

import React from 'react';
import { Button } from 'antd';
import './style.scss';

export default class Details extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		}

	}
	render() {
		return (
			<div className="formDetail">
				{
					this.props.title && <div className="title">{this.props.title}</div>
				}
				{
					this.props.formData &&
					<div className="list">
						{
							this.props.formData.map((item, index) => {
								return (
								  <div className="item" key={index}>
										 <div className="name">{item.name}</div>
										 <div className="content">{item.key}</div>
									</div>
						   	)
							})
						}

					</div>
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
			</div>
		)
	}
}

