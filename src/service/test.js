import { apiAxios } from "../utils/http.js";

/**
 * 查询车辆黑名单列表
 */
export function getList(data) {
	return apiAxios("/api/78dk/platform/sys/user/login", data);
}