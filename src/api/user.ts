import myAxios from "../request";


/**
 * 用户注册
 * @param params 
 * @returns 
 */
export const userRegister = async (params: any) => {
    return await myAxios.request({
        url: '/api/user/register',
        method: 'POST',
        data: params,
    });
}

/**
 * 用户登录
 * @param params 
 * @returns 
 */
export const userLogin = async (params: any) => {
    return await myAxios.request({
        url: '/api/user/login',
        method: 'POST',
        data: params,
    });
}

/**
 * 用户注销
 * @param params 
 * @returns 
 */
export const userLogout = async (params: any) => {
    return await myAxios.request({
        url: '/api/user/logout',
        method: 'POST',
        data: params,
    });
}

/**
 * 获取当前用户
 * @param params 
 * @returns 
 */
export const getCurrentUser = async () => {
    return await myAxios.request({
        url: '/api/user/get',
        method: 'GET',
    });
}

/**
 * 搜索用户
 * @param username 
 * @returns 
 */
export const searchUsers = async (phone: string) => {
    return await myAxios.request({
        url: '/api/user/search',
        method: 'GET',
        params: { phone }
    });
}

/**
 * 删除用户
 * @param id 
 * @returns 
 */
export const deleteUser = async (id: string) => {
    return await myAxios.request({
        url: '/api/user/delete',
        method: 'POST',
        data: id,
        headers: {
            "Content-Type": 'application/json'
        }
    });
}