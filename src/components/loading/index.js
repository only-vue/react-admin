import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Spin } from 'antd';
import './style.scss';

export default class LoadingSpin extends Component {
  static show(data = '加载中...') {
    this.loading = document.createElement('div');
    this.loading.className = 'loading';
    ReactDOM.render(<Spin tip={data} />, this.loading);
    document.getElementById('root').appendChild(this.loading);
    // this.loading = React.createElement('span', {
    // 		className: 'loading'
    // 	}, < Spin tip = {
    // 		data
    // 	}
    // 	/>);
    // 	ReactDOM.render(
    // 		this.loading,
    // 		document.getElementById("root")
    // 	);
  }

  static hide() {
    this.loading && this.loading.remove();
  }
}
