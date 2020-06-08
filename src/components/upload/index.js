

import React, { Component } from 'react';
import { Upload, Button, Icon } from 'antd';
import './style.scss';
import Viewer from 'react-viewer';
import { modalInfo } from '../../utils/util.js';

export default class UpLoad extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {}, //上传额外参数
			fileList: [], //图片列表
			visible: false, //控制预览组件显隐
			activeIndex: 0, //当前预览图片索引
			size: this.props.size ? this.props.size : 2, //限制大小
			action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76' //上传地址
		}
	}

	render() {
		return (
			<div>
				<Upload
					action={this.props.action ? this.props.action : this.state.action}
					accept={this.props.accept && this.props.accept}
					beforeUpload={this.beforeUpload.bind(this)}
					data={this.state.data}
					listType={'picture'}
					// showUploadList={false}
					onPreview={this.handlePreview.bind(this)}
					multiple={this.props.multiple ? this.props.multiple : true}
					onChange={this.onChange.bind(this)}
				>
					<Button>
						<Icon type="upload" /> 上传图片
					</Button>
				</Upload>

				<Viewer
					visible={this.state.visible}
					onClose={this.handleClose.bind(this)}
					activeIndex={this.state.activeIndex}
					images={this.state.fileList}
				/>
			</div>
		)
	}
	//上传之前
	beforeUpload(file, fileList) {
		const isType = file.type === 'image/jpeg' || file.type === 'image/png';
		const isLt2M = file.size / 1024 / 1024 < this.state.size;
		if (!isType) {
			modalInfo('提示', '请上传图片格式！');
		}
		if (!isLt2M) {
			modalInfo('提示', `请上传文件小于${this.state.size}M`);
		}
		return isType && isLt2M;
	}
	//文件完成时
	onChange(file) {
		if (file.file.status === 'uploading') {
			return;
		}
		if (file.file.status === 'done') {
			file.fileList.forEach(item => {
				item.src = item.thumbUrl
			})
			this.setState({
				fileList: [...file.fileList]
			}, () => {
				this.props.onChange(this.state.fileList);
			});
		}

	}

	//点击弹出图片预览
	handlePreview = file => {
		let key = 0;
		this.state.fileList.forEach((item, index) => {
			if (item.name === file.name) {
				key = index;
			}
		})
		this.setState({
			visible: true,
			activeIndex: key
		});
	}

	//关闭图片预览
	handleClose() {
		this.setState({
			visible: false
		});
	}
}

