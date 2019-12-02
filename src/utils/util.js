import moment from 'moment';
import menuList from '../routes/menuConfig';
import { Modal } from 'antd';

/**
 * @menuList 菜单树
 * 获取路由列表
 */
export const getRouteList = () => {
	let list = [];
	let _loop = data => {
		data.forEach(el => {
			list.push(el);
			el.children && _loop(el.children);
		});
	};
	_loop(menuList);
	return list;
};

/**
 * setStorage 存储
 * getStorage 取到
 * removeStorage 移除
 */
export const storage = {
	setStorage: (name, val) => {
		try {
			const obj = JSON.stringify(val);
			sessionStorage.setItem(name, obj);
		} catch (e) {
			sessionStorage.setItem(name, val);
		}
		
	},

	getStorage: (val) => {
		let str = sessionStorage.getItem(val);
		if (str) {
			try {
				const obj = JSON.parse(str);
				return obj;
			} catch (e) {
				return str;
			}
		} else {
			return null;
		}
	},
	removeStorage: (val) => {
		sessionStorage.removeItem(val)
	}
}

/**
 * 去除0
 */
export const clearZero = (value) => {
	if (value < 10 && value.indexOf('0') > -1) {
		return value.substring(1, value.length);
	}
	return value;
}


/**
 * 返回上一级
 */
export const goBack = (value, that) => {
	that.props.history.go(value)
}

/**
 * 获取当前时间戳
 * 
 */
export function Timestamp() {
	let timestamp = (new Date()).getTime();
	return timestamp;
}

/**
 *时间戳格式化时间
 */
export const getDate = (value) => {
	return moment(value).format('YYYY-MM-DD HH:mm:ss');
}

/**
 *时间转化时间戳
 */
export const timestamp = (value) => {
	return moment(value, 'YYYY-MM-DD').valueOf();
}

/**
 *数组加入key，解决浏览器告警
 */
export const keyData = (data) => {
	data.forEach((item, index) => {
		item.id = index;
	})
	return data;
}


/**
 * 模态框提示
 *
 */
export const modalInfo = (title, value, callback) => {
	Modal.info({
		title: title ? title : '提示',
		content: value,
		okText: '确定',
		centered: true,
		onOk() {
			if (callback) {
				callback()
			}

		},
	});
}

/**
 * 模态框提示
 *
 */
export const modalConfirm = (value, callback) => {
	Modal.confirm({
		content: value,
		onOk() {
			if (callback) {
				callback()
			}
		}
	});
}

/**
 * js 求和
 * 防止精度计算带来的长小数问题
 * @param args 任意长度 number类型参数
 * @returns {number} 和
 */
export const accAdd = (...args) => {
	let r = [], m;
	args.forEach(arg => {
		try {
			r.push(arg.toString().split(".")[1].length)
		} catch (e) {
			r.push(0)
		}
	});
	//转化为整数的最小倍数
	m = Math.pow(10, Math.max(...r));
	//求和
	return args.map(value => value * m)
		.reduce((pre, cur) => { return pre + cur }) / m;
};

export const accAHe = (...args) => {
	let r = [], m;
	args.forEach(arg => {
		try {
			r.push(arg.toString().split(".")[1].length)
		} catch (e) {
			r.push(0)
		}
	});
	//转化为整数的最小倍数
	m = Math.pow(10, Math.max(...r));
	//求和
	return args.map(value => value * m)
		.reduce((pre, cur) => { return pre * cur }) / (Math.pow(m, args.length));
};
