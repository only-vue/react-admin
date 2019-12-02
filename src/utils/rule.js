import moment from 'moment';

/**
 * 验证 大于等于0的整数
 */
export const checkRoundNumber = (rule, value, callback) => {
	let reg = /^[1-9]\d*$/; ///^\d+(?=\.{0,1}\d+$|$)/
	if(value==='0'||value===0){
		callback();
	}
	if (reg.test(value)) {
		callback();
	} else {
		callback('请输入大于等于0的整数');
	}
};

/**
 * 校验数据为空
 * @param {*} msg 
 */
export const checkNull = (msg,whitespace=true) => {
	if(whitespace){
    return {
			required: true,
			message: msg,
			whitespace: true
		}
	}else{
		return {
			required: true,
			message: msg
		}
	}
	

}


/**
 * 时间校验
 * 当前日期后不可选择 ||current > moment(Date.now()).add(-1, 'd')
 */
export const disabledDate = (current) => {
	return current > moment(Date.now()).add(-1, 'd');
};

/**
 * 验证 0-100之间的整数或者1位小数
 */
export const checkRoundValidator = (rule, value, callback) => {
	let reg = /^(100(\.[0])|100|[1-9]?\d(\.\d)?)$/;
	if (reg.test(value)) {
		callback();
	} else {
		callback('请输入0-100之间的整数或者1位小数');
	}
};