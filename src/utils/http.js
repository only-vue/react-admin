import axios from 'axios';
import Loading from "../components/loading";
import { storage, modalInfo } from './util.js';
import history from '../components/history/history.js';

axios.defaults.timeout = 50000; //请求超时时间

// 请求拦截----------------------------------------------------------------
axios.interceptors.request.use(
	config => {
		const user = storage.getStorage('user');
		if (user) {
			config.headers = {
				"token": user.token
			}
		}
		// config.headers = {
		//     'Content-Type':'application/x-www-form-urlencoded'
		// }
		return config;
	},
	error => {
		return Promise.reject(error);
	}
);

// 响应拦截----------------------------------------------------------------
axios.interceptors.response.use(function (res) {
	let response = res.data;
	switch (response.code) {
		case '10000':
			break;
		case '10004': //token过期 回登录
			modalInfo('提示', response.msg, () => {
				history.push('/login');
			});
			break;
		default: //默认异常提示
			modalInfo('提示', response.msg);
			break;
	}
	return response.data;

}, function (error) {
	if (error.message.includes('timeout')) {
		modalInfo('提示', '网络请求超时，请稍候再试');
	} else {
		modalInfo('提示', '网络请求失败，请稍候再试');
	}
	return Promise.reject(error)
})



/**
 * 封装请求
 * @param url 
 * @param data
 * @param method 
 * @param loading
 * @returns {Promise}
 */

export function apiAxios(url, params = {}, method = 'post', loading = true) {
	method = method.toUpperCase();//转成大写
	if (loading) {
		Loading.show();
	}
	let config = {
		method: method,
		baseURL: window.base,
		url: url,
		params: method === 'GET' || method === 'DELETE' ? params : null,
		data: method === 'POST' || method === 'PUT' ? params : null
	}

	return new Promise((resolve, reject) => {
		axios(config)
			.then((res) => {
				resolve(res);
			}).catch((response) => {
				reject(response);
			}).finally(err => {
				if (loading) {
					Loading.hide();
				}
			})
	})
}

